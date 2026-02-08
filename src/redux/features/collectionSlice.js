import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: JSON.parse(localStorage.getItem('collection')) || [],
}

const collectionSlice = createSlice({
  name: 'collection',
  initialState,
  reducers: {
    addToCollection: (state, action) => {
      const exists = state.items.find(item => item.id === action.payload.id)
      if (!exists) {
        state.items.push(action.payload)
        localStorage.setItem('collection', JSON.stringify(state.items))
      }
    },

    removeFromCollection: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload)
      localStorage.setItem('collection', JSON.stringify(state.items))
    },

    clearCollection: (state) => {
      state.items = []
      localStorage.removeItem('collection')
    },
  },
})

export const { addToCollection, removeFromCollection, clearCollection } = collectionSlice.actions
export default collectionSlice.reducer
