import { faker } from '@faker-js/faker';
import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
const baseUrl = 'http://localhost:3005/'
export const addUser = createAsyncThunk('users/add', async () => {
    const response = await axios.post(`${baseUrl}users`,{
        name: faker.person.fullName()
    })
    return response.data;
})