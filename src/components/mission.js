import PropTypes from 'prop-types';

export default function Rocket(props) {
  const { name, description, status } = props;
  return (
    <tr>
      <td>{name}</td>
      <td>{description}</td>
      <td>{status}</td>
      <td><button type="button">Join mission</button></td>
    </tr>
  );
}

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};
