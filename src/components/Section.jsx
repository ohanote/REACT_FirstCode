import PropTypes from "prop-types";

export default function Section(props) {
  return (
    <section>
      <div>
        <h2>{props.title}</h2>
        <p>{props.subtitle}</p>
        <ul className={props.className}>{props.children}</ul>
      </div>
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.string,
};
