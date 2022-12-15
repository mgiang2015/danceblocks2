import { createSlice } from '@reduxjs/toolkit'
import StorageApi from '../model/storageApi'

export const projectSlice = createSlice({
  name: 'project',
  initialState: StorageApi.getProject(),
  reducers: {
    // TODO: Implement reducers after view retrieve data from store
  }
})

export const {  } = projectSlice.actions

export default projectSlice.reducer