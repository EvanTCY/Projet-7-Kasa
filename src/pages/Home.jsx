import banner from "../img/banners/homeBanner.png";
import "../styles/_Home.scss";
import { apartments } from "../datas/apartments";

import Card from "../components/Card";

function Home() {
    return (
        <main>
            <div className="banner" role="banner">
                <img
                    className="banner__img"
                    src={banner}
                    alt="bannière-accueil"
                />
            </div>

            <section>
                {apartments.map((apartment) => (
                    <Card
                        key={apartment.id}
                        id={apartment.id}
                        alt={apartment.alt}
                        cover={apartment.cover}
                        title={apartment.title}
                    />
                ))}
            </section>
        </main>
    );
}

export default Home;
