import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from '../../axios';
import { API_USERS } from '../../api';
import { TEXT_STRING } from '../../constants';

interface UserState {
    dataSource: any[];
    loading: boolean;
}

const initialState: UserState = {
    dataSource: [],
    loading: false,
};

export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(API_USERS);
            
            const data = response.data
            // console.log('[fetchUser-success]', data);
            return data;
        } catch (error: any) {
            console.log('[fetchUser-error]', error)
            return rejectWithValue(error.response?.data || TEXT_STRING.ERROR_MSG);
        }
    });

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setLoading(state) {
            state.loading = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchUser.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.dataSource = action.payload;
            })
            .addCase(fetchUser.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
            });
    },
});

export const { setLoading } = userSlice.actions;
export default userSlice.reducer;
