import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        playMovies: null,
        trailerVideo: null
    },
    reducers: {
        addNowPlayingMovies : (state, action) => {
            state.playMovies = action.payload;
        },
        addVideoTrailer: (state, action) => {
            state.trailerVideo = action.payload;
        }
    }
});

export const {addNowPlayingMovies, addVideoTrailer} = moviesSlice.actions;
export default moviesSlice.reducer;