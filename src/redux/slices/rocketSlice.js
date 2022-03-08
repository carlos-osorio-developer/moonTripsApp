const JOIN_ROCKET = 'JOIN_ROCKET';

const initialState = [];

const joinRocket = (payload) => ({
  type: JOIN_ROCKET,
  payload,
});

const bookReducer = (state = initialState, action) => {
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
  bookReducer as default,
  joinRocket,
};
