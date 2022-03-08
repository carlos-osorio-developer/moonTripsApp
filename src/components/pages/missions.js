import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Mission from '../mission';
import { fetchMissions } from '../../redux/slices/missionSlice';
import style from './missions.module.scss';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.entities) || [];

  useEffect(() => {
    dispatch(fetchMissions());
  }, []);

  return (
    <div>
      <table className={style.mainContainer}>
        <thead>
          <tr className={style.headers}>
            <th>Name</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <Mission
              key={mission.mission_id}
              name={mission.mission_name}
              description={mission.description}
              status={mission.reserved}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
