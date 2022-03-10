import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import HistoricalData from '../../models/HistoricalData'

// Define a type for the slice state
interface HistoricalDataState {
  value: HistoricalData[]
}

// Define the initial state using that type
const initialState: HistoricalDataState = {
  value: []
}

export const historicalDataSlice = createSlice({
  name: 'historicalData',
  initialState,
  reducers: {
    updateHistoricalData: (state, action: PayloadAction<HistoricalData[]>) => {
        state.value = action.payload
    }
  }
})

export const { updateHistoricalData } = historicalDataSlice.actions

export default historicalDataSlice.reducer