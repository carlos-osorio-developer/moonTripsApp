import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleMission } from '../redux/slices/missionSlice';
import style from './mission.module.scss';

export default function Rocket(props) {
  const { name, description, status } = props;

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleMission({ props }));
  };

  return (
    <tr>
      <td className={style.name}>{name}</td>
      <td className={style.description}>{description}</td>
      <td className={style.statusBadge}>{status}</td>
      <td className={style.statusBtn}><button type="button" onClick={handleClick}>Join mission</button></td>
    </tr>
  );
}

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};
