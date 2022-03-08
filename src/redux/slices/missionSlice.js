const JOIN_MISSION = 'moonTripsApp/missions/JOIN_MISSION';

const initialState = [];

const joinMission = (payload) => ({
  type: JOIN_MISSION,
  payload,
});

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case JOIN_MISSION:
      return [...state, {
        ...action.payload,
        status: !action.payload.status,
      }];
    default:
      return state;
  }
};

export {
  missionReducer as default,
  joinMission,
};
