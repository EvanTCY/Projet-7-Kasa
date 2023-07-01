// scss
import "../styles/_Section.scss";

function Section({ children, className }) {
    return (
        <section className={`globalSection ${className}`}>{children}</section>
    );
}

export default Section;
