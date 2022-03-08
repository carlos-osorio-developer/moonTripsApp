import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMissions = createAsyncThunk('missions/FETCH_MISSIONS', async () => {
  const response = await axios.get('https://api.spacexdata.com/v3/missions');
  const newArr = response.data.map((mission) => ({
    mission_name: mission.mission_name,
    mission_id: mission.mission_id,
    reserved: false,
    description: mission.description,
  }));
  return newArr;
});

export const missionsSlice = createSlice({
  name: 'missions',
  initialState: { entities: [], loading: 'idle' },
  reducers: {
    toggleMission: (state, action) => {
      const item = (
        state.entities.find((mission) => mission.mission_id === action.payload));
      item.reserved = !item.reserved;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => {
        const newState = { ...state, loading: 'pending' };
        return newState;
      })
      .addCase(fetchMissions.fulfilled, (state, action) => {
        const newState = { ...state, entities: [...action.payload], loading: 'idle' };
        return newState;
      });
  },
});

export const { toggleMission } = missionsSlice.actions;
export default missionsSlice.reducer;
