import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
const baseUrl = 'http://localhost:3005/'
export const deleteUser = createAsyncThunk('users/delete', async (id) => {
    await axios.delete(`${baseUrl}users/${id}`)
   return id;
});