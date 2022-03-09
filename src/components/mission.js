import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleMission } from '../redux/slices/missionSlice';
import style from './mission.module.scss';

export default function Rocket(props) {
  const { name, description } = props;

  const [status, setStatus] = useState(false);

  const dispatch = useDispatch();
  const handleClick = () => {
    setStatus(!status);
    dispatch(toggleMission(name));
  };

  return (
    <tr>
      <td className={style.name}>{name}</td>
      <td className={style.description}>{description}</td>
      <td className={style.statusBadge}>
        { status ? <p className={style.joined}>Active</p> : <p>Inactive</p> }
      </td>
      <td className={style.statusBtn}>
        <button type="button" onClick={handleClick}>Join mission</button>
      </td>
    </tr>
  );
}

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
