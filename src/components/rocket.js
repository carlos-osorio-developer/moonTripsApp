import PropTypes from 'prop-types';

export default function Rocket(props) {
  const { name, description, button } = props;
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <button type="button">{button}</button>
    </div>
  );
}

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
};
