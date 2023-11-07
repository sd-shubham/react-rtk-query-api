import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'http://localhost:3005/'
export const fetchUsers = createAsyncThunk('users/fetch', async () => {
    const response = await axios.get(`${baseUrl}users`);
    await pause(1000);
    return response.data
});

const pause = (duration) => {
    return new Promise ((resolve)=> {
        setTimeout(resolve,duration)
    })
}


