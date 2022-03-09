import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleMission } from '../redux/slices/missionSlice';
import style from './mission.module.scss';

export default function Rocket(props) {
  const { name, description, status } = props;

  const [reserved, setReserved] = useState(status);

  const dispatch = useDispatch();
  const handleClick = () => {
    setReserved(!reserved);
    dispatch(toggleMission(name));
  };

  const btnStyle = reserved ? style.join : null;

  return (
    <tr>
      <td className={style.name}>{name}</td>
      <td className={style.description}>{description}</td>
      <td className={style.statusBadge}>
        { reserved ? <p className={style.joined}>Active</p> : <p>Inactive</p> }
      </td>
      <td className={style.statusBtn}>
        <button type="button" onClick={handleClick} className={btnStyle}>
          { reserved ? 'Leave' : 'Join' }
        </button>
      </td>
    </tr>
  );
}

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};
