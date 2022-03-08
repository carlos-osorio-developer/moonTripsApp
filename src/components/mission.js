import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission } from '../redux/slices/missionSlice';

export default function Rocket(props) {
  const { name, description, status } = props;

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(joinMission({ props }));
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{description}</td>
      <td>{status}</td>
      <td><button type="button" onClick={handleClick}>Join mission</button></td>
    </tr>
  );
}

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};
