import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinRocket } from '../redux/slices/rocketSlice';

export default function Rocket(props) {
  const { name, description } = props;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(joinRocket({ props }));
  };

  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <button type="button" onClick={handleClick}>Reserve</button>
    </div>
  );
}

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
