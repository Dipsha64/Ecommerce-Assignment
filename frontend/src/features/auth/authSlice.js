import { createAsyncThunk, createSlice, createAction } from "@reduxjs/toolkit";
import { loginUserAPI,signOut } from "../auth/autheAPI";

const initialState = {
    userDetails: {},
    error : null,
    success : false,
}

export const loginUserAsync = createAsyncThunk('user/loginUserAPI',async(userData)=>{
    const response = await loginUserAPI(userData);
    console.log("response..SLIC",response);
    return response.data;
})

export const signOutAsync = createAction('user/signOut',async(userid)=>{
    const response = await signOut(userid);
    return response.data;
})

export const authSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {

    },
    extraReducers : (builder) =>{
        builder
            .addCase(loginUserAsync.pending,(state)=>{
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUserAsync.fulfilled,(state,action)=>{
                console.log("action.paylod..",action.payload.data);
                state.userDetails = action.payload.data;
                state.loading = false;
                state.error = false;
                state.success = true;
            })
            .addCase(signOutAsync,(state)=>{
                Object.assign(state,initialState);
            })
    }
})

export const isAuthenticated = (state) => state.auth.userDetails;
export default authSlice.reducer;