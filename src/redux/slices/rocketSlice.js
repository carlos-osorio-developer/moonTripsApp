import axios from 'axios';

const JOIN_ROCKET = 'moonTripsApp/rockets/JOIN_ROCKET';
const GET_ROCKETS = 'moonTripsApp/rockets/GET_ROCKETS';
const GET_ROCKETS_SUCESS = 'moonTripsApp/rockets/GET_ROCKETS_SUCESS';
const GET_ROCKETS_FAILURE = 'moonTripsApp/rockets/GET_ROCKETS_FAILURE';

const initialState = [];

const API_URL = 'https://api.spacexdata.com/v3/rockets';

const getRockets = () => async (dispatch) => {
  dispatch({ type: GET_ROCKETS });
  const request = await axios.get(API_URL);
  const data = request.data.map((rocket) => ({
    id: rocket.id,
    name: rocket.rocket_name,
    image: rocket.flickr_images[0],
    description: rocket.description,
  }));
  dispatch({ type: GET_ROCKETS_SUCESS, payload: data });
};

const joinRocket = (payload) => ({
  type: JOIN_ROCKET,
  payload,
});

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return { ...state, loading: true };
    case GET_ROCKETS_SUCESS:
      return { ...state, loading: false, rockets: action.payload };
    case GET_ROCKETS_FAILURE:
      return { ...state, loading: false, error: action.payload };
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
  getRockets,
};
