// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from '../../api/axios';
// import jwt_decode from 'jwt-decode'

// interface User {
//   _id: string;
//   name: string;
//   email: string;
// }

// interface AuthState {
//   user: User | null;
//   isAuthenticated: boolean;
//   loading: boolean;
//   error: string | null;
// }


// export const checkAuth = createAsyncThunk('auth/checkAuth', async (_, { rejectWithValue }) => {
//   const token = localStorage.getItem('token');
//   if (!token) {
//     return rejectWithValue('No token found');
//   }
//   try {
//     const decoded = jwt_decode(token);
//     // Check if token is expired
//     if (decoded.exp < Date.now() / 1000) {
//       localStorage.removeItem('token');
//       return rejectWithValue('Token expired');
//     }
//     // You might want to validate the token with your backend here
//     return decoded;
//   } catch (error) {
//     localStorage.removeItem('token');
//     return rejectWithValue('Invalid token');
//   }
// });




// export const signUp = createAsyncThunk(
//   'auth/signUp',
//   async (userData: { name: string; email: string; password: string }) => {
//     const response = await axios.post('/auth/signup', userData);
//     localStorage.setItem('token', response.data.token);
//     return response.data;
//   }
// );

// export const login = createAsyncThunk(
//   'auth/login',
//   async (credentials: { email: string; password: string }) => {
//     const response = await axios.post('/auth/login', credentials);
//     localStorage.setItem('token', response.data.token);
//     return response.data;
//   }
// );

// const initialState: AuthState = {
//   user: null,
//   isAuthenticated: false,
//   loading: false,
//   error: null,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     logout: (state) => {
//       state.user = null;
//       state.isAuthenticated = false;
//       localStorage.removeItem('token');
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(signUp.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(signUp.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = {
//           _id: action.payload._id,
//           name: action.payload.name,
//           email: action.payload.email,
//         };
//         state.isAuthenticated = true;
//       })
//       .addCase(signUp.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message || 'Sign up failed';
//       })
//       .addCase(login.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(login.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = {
//           _id: action.payload._id,
//           name: action.payload.name,
//           email: action.payload.email,
//         };
//         state.isAuthenticated = true;
//       })
//       .addCase(login.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message || 'Login failed';
//       }) .addCase(checkAuth.fulfilled, (state, action) => {
//         state.isAuthenticated = true;
//         state.user = action.payload;
//       })
//       .addCase(checkAuth.rejected, (state) => {
//         state.isAuthenticated = false;
//         state.user = null;
//       });
//   },
// });

// export const { logout } = authSlice.actions;

// export default authSlice.reducer;




// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from '../../api/axios';
// import jwt_decode from 'jwt-decode';

// interface User {
//   _id: string;
//   name: string;
//   email: string;
// }

// interface AuthState {
//   user: User | null;
//   isAuthenticated: boolean;
//   loading: boolean;
//   error: string | null;
// }

// export const signUp = createAsyncThunk(
//   'auth/signUp',
//   async (userData: { name: string; email: string; password: string }) => {
//     const response = await axios.post('/auth/signup', userData);
//     localStorage.setItem('token', response.data.token);
//     return response.data;
//   }
// );

// export const login = createAsyncThunk(
//   'auth/login',
//   async (credentials: { email: string; password: string }) => {
//     const response = await axios.post('/auth/login', credentials);
//     localStorage.setItem('token', response.data.token);
//     return response.data;
//   }
// );

// export const checkAuth = createAsyncThunk('auth/checkAuth', async (_, { rejectWithValue }) => {
//   const token = localStorage.getItem('token');
//   if (!token) {
//     return rejectWithValue('No token found');
//   }
//   try {
//     const decoded = jwt_decode(token);
//     if (decoded.exp < Date.now() / 1000) {
//       localStorage.removeItem('token');
//       return rejectWithValue('Token expired');
//     }
//     return decoded;
//   } catch (error) {
//     localStorage.removeItem('token');
//     return rejectWithValue('Invalid token');
//   }
// });

// const initialState: AuthState = {
//   user: null,
//   isAuthenticated: false,
//   loading: false,
//   error: null,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     logout: (state) => {
//       state.user = null;
//       state.isAuthenticated = false;
//       localStorage.removeItem('token');
//     },
//     setUser: (state, action) => {
//       state.user = action.payload;
//       state.isAuthenticated = true;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(signUp.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(signUp.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload;
//         state.isAuthenticated = true;
//       })
//       .addCase(signUp.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message || 'Sign up failed';
//       })
//       .addCase(login.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(login.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload;
//         state.isAuthenticated = true;
//       })
//       .addCase(login.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message || 'Login failed';
//       })
//       .addCase(checkAuth.fulfilled, (state, action) => {
//         state.isAuthenticated = true;
//         state.user = action.payload;
//       })
//       .addCase(checkAuth.rejected, (state) => {
//         state.isAuthenticated = false;
//         state.user = null;
//       });
//   },
// });

// export const { logout,setUser  } = authSlice.actions;

// export default authSlice.reducer;



// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from '../../api/axios';
// import jwt_decode from 'jwt-decode';

// interface User {
//   _id: string;
//   name: string;
//   email: string;
// }

// interface AuthState {
//   user: User | null;
//   isAuthenticated: boolean;
//   loading: boolean;
//   error: string | null;
// }

// export const signUp = createAsyncThunk(
//   'auth/signUp',
//   async (userData: { name: string; email: string; password: string }) => {
//     const response = await axios.post('/auth/signup', userData);
//     localStorage.setItem('token', response.data.token);
//     return response.data;
//   }
// );

// export const login = createAsyncThunk(
//   'auth/login',
//   async (credentials: { email: string; password: string }) => {
//     const response = await axios.post('/auth/login', credentials);
//     localStorage.setItem('token', response.data.token);
//     return response.data;
//   }
// );


// export const checkAuth = createAsyncThunk('auth/checkAuth', async (_, { rejectWithValue }) => {
//   const token = localStorage.getItem('token');
//   if (!token) {
//     return rejectWithValue('No token found');
//   }
//   try {
//     const decoded: User = jwt_decode(token);
//     if (decoded.exp < Date.now() / 1000) {
//       localStorage.removeItem('token');
//       return rejectWithValue('Token expired');
//     }
//     return decoded;
//   } catch (error) {
//     localStorage.removeItem('token');
//     return rejectWithValue('Invalid token');
//   }
// });

// const initialState: AuthState = {
//   user: null,
//   isAuthenticated: false,
//   loading: false,
//   error: null,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     logout: (state) => {
//       state.user = null;
//       state.isAuthenticated = false;
//       localStorage.removeItem('token');
//     },
//     setUser: (state, action) => {
//       state.user = action.payload;
//       state.isAuthenticated = true;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(signUp.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(signUp.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload;
//         state.isAuthenticated = true;
//       })
//       .addCase(signUp.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message || 'Sign up failed';
//       })
//       .addCase(login.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(login.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload;
//         state.isAuthenticated = true;
//       })
//       .addCase(login.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message || 'Login failed';
//       })
//       .addCase(checkAuth.fulfilled, (state, action) => {
//         state.isAuthenticated = true;
//         state.user = action.payload;
//       })
//       .addCase(checkAuth.rejected, (state) => {
//         state.isAuthenticated = false;
//         state.user = null;
//       });
//   },
// });

// export const { logout, setUser } = authSlice.actions;

// export default authSlice.reducer;




import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../api/axios';
import jwt_decode from 'jwt-decode';

interface User {
  _id: string;
  name: string;
  email: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (userData: { name: string; email: string; password: string }) => {
    const response = await axios.post('/auth/signup', userData);
    localStorage.setItem('token', response.data.token);
    return response.data;
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials: { email: string; password: string }) => {
    const response = await axios.post('/auth/login', credentials);
    localStorage.setItem('token', response.data.token);
    return response.data;
  }
);

export const checkAuth = createAsyncThunk('auth/checkAuth', async (_, { rejectWithValue }) => {
  const token = localStorage.getItem('token');
  if (!token) {
    return rejectWithValue('No token found');
  }
  try {
    const decoded: any = jwt_decode(token);
    if (decoded.exp < Date.now() / 1000) {
      localStorage.removeItem('token');
      return rejectWithValue('Token expired');
    }
    // Fetch user data using the token
    const response = await axios.get('/auth/me');
    return response.data;
  } catch (error) {
    localStorage.removeItem('token');
    return rejectWithValue('Invalid token');
  }
});

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Sign up failed';
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Login failed';
      })
      .addCase(checkAuth.pending, (state) => {
        state.loading = true;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.isAuthenticated = false;
        state.user = null;
        state.loading = false;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;