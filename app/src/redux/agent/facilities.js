import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    facilities: []
  }
  
  export const facilitiesSlice = createSlice({
    name: 'facilities',
    initialState,
    reducers: {
      
      setFacilitiesTo: (state, action) => {
        state.facilities = action.payload
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { setFacilitiesTo } = facilitiesSlice.actions
  
  export default facilitiesSlice.reducer

  
  