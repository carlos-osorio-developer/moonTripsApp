import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rocket from '../rocket';
import { getRockets } from '../../redux/slices/rocketSlice';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets) || [];

  useEffect(() => {
    if (!rockets.length) {
      dispatch(getRockets());
    }
  }, []);

  return (
    <div>
      <h1>Rockets</h1>
      {rockets.map((rocket) => (
        <Rocket
          key={rocket.id}
          name={rocket.name}
          image={rocket.image}
          description={rocket.description}
          status={rocket.status}
        />
      ))}
    </div>
  );
};

export default Rockets;
