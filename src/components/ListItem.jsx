import PropTypes from "prop-types";

export default function ListItem(props) {
  return (
    <li>
      <a target="_blank" rel="noreferrer" href={props.url}>
        <img src={props.imageUrl} alt={props.alt} />
      </a>
    </li>
  );
}

ListItem.propTypes = {
  url: PropTypes.string,
  imageUrl: PropTypes.string,
  alt: PropTypes.string,
};
