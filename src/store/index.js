import {configureStore} from '@reduxjs/toolkit';
import { userReducer } from './slices/usersSlices';
import { albumsApi, useFetchAlbumsQuery, useAddAlbumMutation, useRemoveAlbumMutation } from './apis/albumsApi';
import { setupListeners } from '@reduxjs/toolkit/query';
import { photosApi, useAddPhotoMutation,useFetchPhotosQuery,useRemovePhotoMutation } from './apis/photosApi';


export const store = configureStore({
    reducer:{
        users: userReducer,
        [albumsApi.reducerPath]:albumsApi.reducer,
        [photosApi.reducerPath]:photosApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(albumsApi.middleware)
                                     .concat(photosApi.middleware);
    }
})

setupListeners(store.dispatch);

export * from './thunks/fetchUsers';
export * from './thunks/addUser';
export * from './thunks/deleteUser';

export {
    useFetchAlbumsQuery,
    useAddAlbumMutation,
    useRemoveAlbumMutation,
    useFetchPhotosQuery,
    useAddPhotoMutation,
    useRemovePhotoMutation
};