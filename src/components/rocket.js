import PropTypes from 'prop-types';

export default function Rocket(props) {
  const { name, description, status } = props;
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <button type="button">{status}</button>
    </div>
  );
}

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};
