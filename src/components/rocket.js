import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinRocket } from '../redux/slices/rocketSlice';
import style from './rocket.module.scss';

export default function Rocket(props) {
  const { name, description } = props;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(joinRocket({ props }));
  };

  return (
    <div className={style.container}>
      <h2>{name}</h2>
      <p>{description}</p>
      <button type="button" onClick={handleClick} className={style.notReserved}>Reserve</button>
    </div>
  );
}

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
