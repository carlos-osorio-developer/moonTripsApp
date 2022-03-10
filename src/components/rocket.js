import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { joinRocket } from '../redux/slices/rocketSlice';
import style from './rocket.module.scss';

export default function Rocket(props) {
  const {
    name,
    description,
    image,
    status,
  } = props;
  const dispatch = useDispatch();

  const [reserved, setReserved] = useState(status);

  const handleReserve = () => {
    setReserved(!reserved);
    dispatch(joinRocket(name));
  };

  const btnStyle = reserved ? style.reserved : style.notReserved;

  return (
    <div className={style.container}>
      <img src={image} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>
          {reserved ? <span>Reserved</span> : null}
          {description}
        </p>
        <button type="button" onClick={handleReserve} className={btnStyle}>
          {reserved ? 'Unreserve' : 'Reserve'}
        </button>
      </div>
    </div>
  );
}

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};
