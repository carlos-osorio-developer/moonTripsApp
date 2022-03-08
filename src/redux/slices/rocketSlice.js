const JOIN_ROCKET = 'moonTripsApp/rockets/JOIN_ROCKET';

const initialState = [];

const joinRocket = (payload) => ({
  type: JOIN_ROCKET,
  payload,
});

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case JOIN_ROCKET:
      return [...state, {
        ...action.payload,
        status: !action.payload.status,
      }];
    default:
      return state;
  }
};

export {
  rocketReducer as default,
  joinRocket,
};
