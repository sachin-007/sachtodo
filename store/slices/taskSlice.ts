// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from '../../api/axios';

// export interface Task {
//   _id: string;
//   title: string;
//   description?: string;
//   status: string;
//   priority?: string;
//   deadline?: string;
// }

// interface TaskState {
//   tasks: Task[];
//   loading: boolean;
//   error: string | null;
// }

// export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
//   const response = await axios.get('/tasks');
//   return response.data;
// });

// export const createTask = createAsyncThunk(
//   'tasks/createTask',
//   async (taskData: Omit<Task, '_id'>) => {
//     const response = await axios.post('/tasks', taskData);
//     return response.data;
//   }
// );

// export const updateTask = createAsyncThunk(
//   'tasks/updateTask',
//   async ({ id, taskData }: { id: string; taskData: Partial<Task> }) => {
//     const response = await axios.put(`/tasks/${id}`, taskData);
//     return response.data;
//   }
// );

// export const deleteTask = createAsyncThunk('tasks/deleteTask', async (id: string) => {
//   await axios.delete(`/tasks/${id}`);
//   return id;
// });

// const initialState: TaskState = {
//   tasks: [],
//   loading: false,
//   error: null,
// };

// const taskSlice = createSlice({
//   name: 'tasks',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchTasks.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchTasks.fulfilled, (state, action) => {
//         state.loading = false;
//         state.tasks = action.payload;
//       })
//       .addCase(fetchTasks.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message || 'Failed to fetch tasks';
//       })
//       .addCase(createTask.fulfilled, (state, action) => {
//         state.tasks.push(action.payload);
//       })
//       .addCase(updateTask.fulfilled, (state, action) => {
//         const index = state.tasks.findIndex((task) => task._id === action.payload._id);
//         if (index !== -1) {
//           state.tasks[index] = action.payload;
//         }
//       })
//       .addCase(deleteTask.fulfilled, (state, action) => {
//         state.tasks = state.tasks.filter((task) => task._id !== action.payload);
//       });
//   },
// });

// export default taskSlice.reducer;




// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from '../../api/axios';




// export interface Task {
//   _id: string;
//   title: string;
//   description?: string;
//   status: string;
//   priority?: string;
//   deadline?: string;
// }

// interface TaskState {
//   tasks: Task[];
//   loading: boolean;
//   error: string | null;
// }

// export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
//   const response = await axios.get('/tasks');
//   return response.data;
// });

// export const createTask = createAsyncThunk(
//   'tasks/createTask',
//   async (taskData: Omit<Task, '_id'>) => {
//     const response = await axios.post('/tasks', taskData);
//     return response.data;
//   }
// );

// export const updateTask = createAsyncThunk(
//   'tasks/updateTask',
//   async ({ id, taskData }: { id: string; taskData: Partial<Task> }) => {
//     const response = await axios.put(`/tasks/${id}`, taskData);
//     return response.data;
//   }
// );

// export const deleteTask = createAsyncThunk('tasks/deleteTask', async (id: string) => {
//   await axios.delete(`/tasks/${id}`);
//   return id;
// });

// const initialState: TaskState = {
//   tasks: [],
//   loading: false,
//   error: null,
// };

// const taskSlice = createSlice({
//   name: 'tasks',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchTasks.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchTasks.fulfilled, (state, action) => {
//         state.loading = false;
//         state.tasks = action.payload;
//       })
//       .addCase(fetchTasks.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message || 'Failed to fetch tasks';
//       })
//       .addCase(createTask.fulfilled, (state, action) => {
//         state.tasks.push(action.payload);
//       })
//       .addCase(updateTask.fulfilled, (state, action) => {
//         const index = state.tasks.findIndex((task) => task._id === action.payload._id);
//         if (index !== -1) {
//           state.tasks[index] = action.payload;
//         }
//       })
//       .addCase(deleteTask.fulfilled, (state, action) => {
//         state.tasks = state.tasks.filter((task) => task._id !== action.payload);
//       })
//       .addCase(deleteTask.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload as string;
//       });
//   },
// });

// export default taskSlice.reducer;


import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from '../../api/axios';

export interface Task {
  _id: string;
  title: string;
  description?: string;
  status: string;
  priority?: string;
  deadline?: string;
}

interface TaskState {
  tasks: Task[];
  loading: boolean;
  error: string | null;
}

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await axios.get('/tasks');
  return response.data;
});

export const createTask = createAsyncThunk(
  'tasks/createTask',
  async (taskData: Omit<Task, '_id'>) => {
    const response = await axios.post('/tasks', taskData);
    return response.data;
  }
);

export const updateTask = createAsyncThunk(
  'tasks/updateTask',
  async ({ id, taskData }: { id: string; taskData: Partial<Task> }) => {
    const response = await axios.put(`/tasks/${id}`, taskData);
    return response.data;
  }
);

export const deleteTask = createAsyncThunk('tasks/deleteTask', async (id: string) => {
  await axios.delete(`/tasks/${id}`);
  return id;
});

const initialState: TaskState = {
  tasks: [],
  loading: false,
  error: null,
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    updateTasksOrder: (state, action: PayloadAction<Task[]>) => {
      state.tasks = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch tasks';
      })
      .addCase(createTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        const index = state.tasks.findIndex((task) => task._id === action.payload._id);
        if (index !== -1) {
          state.tasks[index] = action.payload;
        }
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter((task) => task._id !== action.payload);
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { updateTasksOrder } = taskSlice.actions;

export default taskSlice.reducer;