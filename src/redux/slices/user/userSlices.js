import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signIn, signInGoogle, logOut, signUp } from "../../../utils/firebase/Firebase";
import { showError } from "../../../utils/Toasts";

const ERROR_CODES = {
  WRONG_PASSWORD: 'auth/wrong-password',
  NOT_FOUND_USER: 'auth/user-not-found',
  EMAIL_IN_USE: 'auth/email-already-in-use',
  WEAK_PASSWORD: 'auth/weak-password',
};

export const login = createAsyncThunk("auth/login", async (data) => {
  try {

    const { email, password } = data;

    const { user } = await signIn(email.toLowerCase().trim(), password);

    const access_token = user.accessToken
    const user_data = user
    
    localStorage.setItem("token-wp", access_token)
    localStorage.setItem("userData", JSON.stringify(user_data))
    
    return { access_token, user_data }
  } catch (error) {
    const { code } = error
    switch (code) {
      case ERROR_CODES.WRONG_PASSWORD:
        return showError('Incorrect password');
      case ERROR_CODES.NOT_FOUND_USER:
        return showError('User was not found');
      default:
        return showError('Oops! Something went wrong. Please try again later.');
    }
  }
})

export const loginWithGoogle = createAsyncThunk("auth/loginWithGoogle", async () => {
  try {

    const { user } = await signInGoogle();

    const access_token = user.accessToken
    const user_data = user
    
    localStorage.setItem("token-wp", access_token)
    localStorage.setItem("userData", JSON.stringify(user_data))
    
    return { access_token, user_data }
  } catch (error) {
    return error
  }
})

export const register = createAsyncThunk("auth/register", async (data) => {
  try {
  
    const { email, password, username } = data;

    const { user } = await signUp(email, password, username)

    const access_token = user.access_token
    const user_data = user

    localStorage.setItem("token-wp", access_token)
    localStorage.setItem("userData", JSON.stringify(user_data))

    return { access_token, user_data }
  } catch (error) {
    const { code } = error
    switch (code) {
      case ERROR_CODES.WEAK_PASSWORD:
        return showError('weak password');
      case ERROR_CODES.EMAIL_IN_USE:
        return showError("You can't use this email.")
      default:
        return showError('Oops! Something went wrong. Please try again later.');
    }
  }
})

export const logout = createAsyncThunk("auth/logout", async () => {
  try {

    await logOut();

    localStorage.clear()

    // window.location.reload()

    return true
  } catch (error) {
    return error
  }
})

// Slices
const userSlices = createSlice({
  name: "user",
  initialState: {
    token: null,
    user: null
  },
  reducers: {
    'SET_USER': (state, action) => {
      return { ...state, user: action.payload };
    }
  },
  extraReducers: {
    // LOGIN
    // LOADING
    [login.pending]: (state, action) => {
      state.status = "loading"
    },
    // POSTS
    [login.fulfilled]: (state, action) => {
      state.token = action.payload.access_token
      state.user = action.payload.user_data
      state.status = "success"
    },
    // ERROR
    [login.rejected]: (state, action) => {
      state.status = "failed"
      state.error = action.payload
    },
    
    // LOGIN WITH GOOGLE
    // LOADING
    [loginWithGoogle.pending]: (state, action) => {
      state.status = "loading"
    },
    // POSTS
    [loginWithGoogle.fulfilled]: (state, action) => {
      state.token = action.payload.access_token
      state.user = action.payload.user_data
      state.status = "success"
    },
    // ERROR
    [loginWithGoogle.rejected]: (state, action) => {
      state.status = "failed"
      state.error = action.payload
    },

    // REGISTER
    // LOADING
    [register.pending]: (state, action) => {
      state.status = "loading"
    },
    // POSTS
    [register.fulfilled]: (state, action) => {
      state.token = action.payload.access_token
      state.user = action.payload.user_data
      state.status = "success"
    },
    // ERROR
    [register.rejected]: (state, action) => {
      state.status = "failed"
      state.error = action.payload
    },

    // LOGOUT
    // LOADING
    [logout.pending]: (state, action) => {
      state.status = "loading"
    },
    // POSTS
    [logout.fulfilled]: (state, action) => {
      state.token = null
      state.user = null
      state.status = "success"
    },
    // ERROR
    [logout.rejected]: (state, action) => {
      state.status = "failed"
      state.error = action.payload
    },
  }
});

export const { SET_USER } = userSlices.actions;

export default userSlices.reducer;