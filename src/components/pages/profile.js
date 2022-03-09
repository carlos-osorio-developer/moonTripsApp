import { useSelector } from 'react-redux';
import style from './profile.module.scss';

const Profile = () => {
  const missions = useSelector((state) => state.missions.entities);
  const rockets = useSelector((state) => state.rockets.rockets);

  const activeMissions = missions.filter((mission) => mission.reserved);
  const activeRockets = rockets.filter((rocket) => rocket.status);

  return (
    <div className={style.mainContainer}>
      <section className={style.missionsContainer}>
        <ul>
          {activeMissions.map((mission) => (
            <li key={mission.mission_id}>
              {mission.mission_name}
            </li>
          ))}
        </ul>
      </section>
      <section className={style.rocketsContainer}>
        <ul>
          {activeRockets.map((rocket) => (
            <li key={rocket.id}>
              {rocket.name}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Profile;
