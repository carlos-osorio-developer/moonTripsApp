import Mission from '../mission';

const Missions = () => (
  <div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <Mission name="Falcon 1" description="The Falcon 1 is a two-stage rocket designed and manufactured by SpaceX." status />
      </tbody>
    </table>
  </div>
);

export default Missions;
