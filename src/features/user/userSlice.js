import { createSlice, createAsyncThunk as aysncThunk } from "@reduxjs/toolkit";

export const fetchUsers = aysncThunk("user/fetchUsers", () => {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((res) => {
    return res.json();
  });
});
const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    data: [],
    error: "",
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;
