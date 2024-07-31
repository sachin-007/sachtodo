// import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { createTask, updateTask, Task } from '../store/slices/taskSlice';

// interface TaskModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   task: Task | null;
//   initialStatus: string;
// }

// const TaskModal: React.FC<TaskModalProps> = ({ isOpen, onClose, task, initialStatus }) => {
//   const dispatch = useDispatch();
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [status, setStatus] = useState(initialStatus);
//   const [priority, setPriority] = useState('');
//   const [deadline, setDeadline] = useState('');

//   useEffect(() => {
//     if (task) {
//       setTitle(task.title);
//       setDescription(task.description);
//       setStatus(task.status);
//       setPriority(task.priority);
//       setDeadline(task.deadline);
//     } else {
//       setTitle('');
//       setDescription('');
//       setStatus(initialStatus);
//       setPriority('');
//       setDeadline('');
//     }
//   }, [task, initialStatus]);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const taskData = { title, description, status, priority, deadline };
//     if (task) {
//       dispatch(updateTask({ id: task._id, taskData }));
//     } else {
//       dispatch(createTask(taskData));
//     }
//     onClose();
//   };

//   return (
//     <div className={`task-modal ${isOpen ? 'open' : ''}`}>
//       <div className="task-modal-content">
//         <h2>{task ? 'Edit Task' : 'Create New Task'}</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//           />
//           <textarea
//             placeholder="Description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />
//           <select value={status} onChange={(e) => setStatus(e.target.value)}>
//             <option value="To-do">To-do</option>
//             <option value="In progress">In progress</option>
//             <option value="Under review">Under review</option>
//             <option value="Finished">Finished</option>
//           </select>
//           <select value={priority} onChange={(e) => setPriority(e.target.value)}>
//             <option value="">Select Priority</option>
//             <option value="Low">Low</option>
//             <option value="Medium">Medium</option>
//             <option value="Urgent">Urgent</option>
//           </select>
//           <input
//             type="date"
//             value={deadline}
//             onChange={(e) => setDeadline(e.target.value)}
//           />
//           <div className="task-modal-buttons">
//             <button type="submit">{task ? 'Update' : 'Create'}</button>
//             <button type="button" onClick={onClose}>Cancel</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default TaskModal;

// import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { createTask, updateTask, Task } from '../store/slices/taskSlice';

// interface TaskModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   task: Task | null;
//   initialStatus: string;
// }

// const TaskModal: React.FC<TaskModalProps> = ({ isOpen, onClose, task, initialStatus }) => {
//   const dispatch = useDispatch();
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [status, setStatus] = useState(initialStatus);
//   const [priority, setPriority] = useState('');
//   const [deadline, setDeadline] = useState('');

//   useEffect(() => {
//     if (task) {
//       setTitle(task.title);
//       setDescription(task.description);
//       setStatus(task.status);
//       setPriority(task.priority);
//       setDeadline(task.deadline.split('T')[0]);
//     } else {
//       setTitle('');
//       setDescription('');
//       setStatus(initialStatus);
//       setPriority('');
//       setDeadline('');
//     }
//   }, [task, initialStatus]);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const taskData = { title, description, status, priority, deadline };
//     if (task) {
//       dispatch(updateTask({ id: task._id, taskData }));
//     } else {
//       dispatch(createTask(taskData));
//     }
//     onClose();
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end">
//       <div className="w-full max-w-md bg-white h-full overflow-y-auto p-6 transform transition-transform duration-300 ease-in-out translate-x-0">
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-2xl font-bold">{task ? 'Edit Task' : 'Create New Task'}</h2>
//           <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//         </div>
//         <form onSubmit={handleSubmit}>
//           <input 
//             type="text" 
//             placeholder="Title" 
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="w-full mb-4 p-2 border rounded-md"
//             required
//           />
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">Status</label>
//             <select 
//               value={status} 
//               onChange={(e) => setStatus(e.target.value)}
//               className="w-full p-2 border rounded-md"
//             >
//               <option value="To-do">To-do</option>
//               <option value="In progress">In progress</option>
//               <option value="Under review">Under review</option>
//               <option value="Finished">Finished</option>
//             </select>
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">Priority</label>
//             <select 
//               value={priority} 
//               onChange={(e) => setPriority(e.target.value)}
//               className="w-full p-2 border rounded-md"
//             >
//               <option value="">Select Priority</option>
//               <option value="Low">Low</option>
//               <option value="Medium">Medium</option>
//               <option value="Urgent">Urgent</option>
//             </select>
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">Deadline</label>
//             <input 
//               type="date" 
//               value={deadline}
//               onChange={(e) => setDeadline(e.target.value)}
//               className="w-full p-2 border rounded-md"
//             />
//           </div>
//           <textarea 
//             placeholder="Description" 
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             className="w-full mb-4 p-2 border rounded-md h-32"
//           ></textarea>
//           <button 
//             type="submit" 
//             className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
//           >
//             {task ? 'Update Task' : 'Create Task'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// // export default TaskModal;


// import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { createTask, updateTask, Task } from '../store/slices/taskSlice';

// interface TaskModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   task: Task | null;
//   status: string;
// }

// const TaskModal: React.FC<TaskModalProps> = ({ isOpen, onClose, task, status }) => {
//   const dispatch = useDispatch();
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [priority, setPriority] = useState('');
//   const [deadline, setDeadline] = useState('');

//   useEffect(() => {
//     if (task) {
//       setTitle(task.title);
//       setDescription(task.description);
//       setPriority(task.priority);
//       setDeadline(task.deadline.split('T')[0]);
//     } else {
//       setTitle('');
//       setDescription('');
//       setPriority('');
//       setDeadline('');
//     }
//   }, [task]);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const taskData = { title, description, status, priority, deadline };
//     if (task) {
//       dispatch(updateTask({ id: task._id, taskData }));
//     } else {
//       dispatch(createTask(taskData));
//     }
//     onClose();
//   };

//   return (
//     <div
//       className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
//         isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
//       }`}
//       onClick={onClose}
//     >
//       <div
//         className={`fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
//           isOpen ? 'translate-x-0' : 'translate-x-full'
//         }`}
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="p-6 h-full overflow-y-auto">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-2xl font-bold">{task ? 'Edit Task' : 'Create New Task'}</h2>
//             <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
//           </div>
//           <form onSubmit={handleSubmit}>
//             <input 
//               type="text" 
//               placeholder="Title" 
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="w-full mb-4 p-2 border rounded-md"
//               required
//             />
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">Status</label>
//               <select 
//                 value={status} 
//                 onChange={(e) => setStatus(e.target.value)}
//                 className="w-full p-2 border rounded-md"
//               >
//                 <option value="To-do">To-do</option>
//                 <option value="In progress">In progress</option>
//                 <option value="Under review">Under review</option>
//                 <option value="Finished">Finished</option>
//               </select>
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">Priority</label>
//               <select 
//                 value={priority} 
//                 onChange={(e) => setPriority(e.target.value)}
//                 className="w-full p-2 border rounded-md"
//               >
//                 <option value="">Select Priority</option>
//                 <option value="Low">Low</option>
//                 <option value="Medium">Medium</option>
//                 <option value="Urgent">Urgent</option>
//               </select>
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">Deadline</label>
//               <input 
//                 type="date" 
//                 value={deadline}
//                 onChange={(e) => setDeadline(e.target.value)}
//                 className="w-full p-2 border rounded-md"
//               />
//             </div>
//             <textarea 
//               placeholder="Description" 
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               className="w-full mb-4 p-2 border rounded-md h-32"
//             ></textarea>
//             <button 
//               type="submit" 
//               className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
//             >
//               {task ? 'Update Task' : 'Create Task'}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TaskModal;

// import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { createTask, updateTask, Task } from '../store/slices/taskSlice';

// interface TaskModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   task: Task | null;
//   initialStatus: string;
// }

// const TaskModal: React.FC<TaskModalProps> = ({ isOpen, onClose, task, initialStatus }) => {
//   const dispatch = useDispatch();
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [status, setStatus] = useState(initialStatus);
//   const [priority, setPriority] = useState('');
//   const [deadline, setDeadline] = useState('');

//   useEffect(() => {
//     if (task) {
//       setTitle(task.title);
//       setDescription(task.description);
//       setStatus(task.status);
//       setPriority(task.priority);
//       setDeadline(task.deadline.split('T')[0]);
//     } else {
//       setTitle('');
//       setDescription('');
//       setStatus(status);
//       setPriority('');
//       setDeadline('');
//     }
//   }, [task]);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const taskData = { title, description, status, priority, deadline };
//     if (task) {
//       dispatch(updateTask({ id: task._id, taskData }));
//     } else {
//       dispatch(createTask(taskData));
//     }
//     onClose();
//   };

//   return (
//     <div
//       className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
//         isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
//       }`}
//       onClick={onClose}
//     >
//       <div
//         className={`fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
//           isOpen ? 'translate-x-0' : 'translate-x-full'
//         }`}
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="p-6 h-full overflow-y-auto">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-2xl font-bold">{task ? 'Edit Task' : 'Create New Task'}</h2>
//             <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
//           </div>
//           <form onSubmit={handleSubmit}>
//             <input 
//               type="text" 
//               placeholder="Title" 
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="w-full mb-4 p-2 border rounded-md"
//               required
//             />
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">Status</label>
//               <select 
//                 value={status} 
//                 onChange={(e) => setStatus(e.target.value)}
//                 className="w-full p-2 border rounded-md"
//               >
//                 <option value="To-do">To-do</option>
//                 <option value="In progress">In progress</option>
//                 <option value="Under review">Under review</option>
//                 <option value="Finished">Finished</option>
//               </select>
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">Priority</label>
//               <select 
//                 value={priority} 
//                 onChange={(e) => setPriority(e.target.value)}
//                 className="w-full p-2 border rounded-md"
//               >
//                 <option value="">Select Priority</option>
//                 <option value="Low">Low</option>
//                 <option value="Medium">Medium</option>
//                 <option value="Urgent">Urgent</option>
//               </select>
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">Deadline</label>
//               <input 
//                 type="date" 
//                 value={deadline}
//                 onChange={(e) => setDeadline(e.target.value)}
//                 className="w-full p-2 border rounded-md"
//               />
//             </div>
//             <textarea 
//               placeholder="Description" 
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               className="w-full mb-4 p-2 border rounded-md h-32"
//             ></textarea>
//             <button 
//               type="submit" 
//               className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
//             >
//               {task ? 'Update Task' : 'Create Task'}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TaskModal;


// import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { createTask, updateTask, Task } from '../store/slices/taskSlice';
// import { AppDispatch } from '../store'; // Import AppDispatch type

// interface TaskModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   task: Task | null;
//   initialStatus: string;
// }

// const TaskModal: React.FC<TaskModalProps> = ({ isOpen, onClose, task, initialStatus }) => {
//   const dispatch = useDispatch<AppDispatch>(); // Type the dispatch function
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [status, setStatus] = useState(initialStatus);
//   const [priority, setPriority] = useState('');
//   const [deadline, setDeadline] = useState('');

//   useEffect(() => {
//     if (task) {
//       setTitle(task.title);
//       setStatus(task.status);
//       setDescription(task.description);
//       setPriority(task.priority);
//       setDeadline(task.deadline.split('T')[0]);
//     } else {
//       setTitle('');
//       setDescription('');
//       setStatus(initialStatus); // Ensure this is correct
//       setPriority('');
//       setDeadline('');
//     }
//   }, [task]);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const taskData = { title, description, status, priority, deadline };
//     if (task) {
//       dispatch(updateTask({ id: task._id, taskData }));
//     } else {
//       dispatch(createTask(taskData));
//     }
//     onClose();
//   };

//   return (
//     <div
//       className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
//         isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
//       }`}
//       onClick={onClose}
//     >
//       <div
//         className={`fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
//           isOpen ? 'translate-x-0' : 'translate-x-full'
//         }`}
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="p-6 h-full overflow-y-auto">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-2xl font-bold">{task ? 'Edit Task' : 'Create New Task'}</h2>
//             <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
//           </div>
//           <form onSubmit={handleSubmit}>
//             <input 
//               type="text" 
//               placeholder="Title" 
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="w-full mb-4 p-2 border rounded-md"
//               required
//             />
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">Status</label>
//               <select 
//                 value={status} 
//                 onChange={(e) => setStatus(e.target.value)}
//                 className="w-full p-2 border rounded-md"
//               >
//                 <option value="To-do">To-do</option>
//                 <option value="In progress">In progress</option>
//                 <option value="Under review">Under review</option>
//                 <option value="Finished">Finished</option>
//               </select>
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">Priority</label>
//               <select 
//                 value={priority} 
//                 onChange={(e) => setPriority(e.target.value)}
//                 className="w-full p-2 border rounded-md"
//               >
//                 <option value="">Select Priority</option>
//                 <option value="Low">Low</option>
//                 <option value="Medium">Medium</option>
//                 <option value="Urgent">Urgent</option>
//               </select>
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">Deadline</label>
//               <input 
//                 type="date" 
//                 value={deadline}
//                 onChange={(e) => setDeadline(e.target.value)}
//                 className="w-full p-2 border rounded-md"
//               />
//             </div>
//             <textarea 
//               placeholder="Description" 
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               className="w-full mb-4 p-2 border rounded-md h-32"
//             ></textarea>
//             <button 
//               type="submit" 
//               className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
//             >
//               {task ? 'Update Task' : 'Create Task'}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TaskModal;



import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createTask, updateTask, Task } from '../store/slices/taskSlice';
import { AppDispatch } from '../store'; // Import AppDispatch type

interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  task: Task | null;
  initialStatus: string;
}

const TaskModal: React.FC<TaskModalProps> = ({ isOpen, onClose, task, initialStatus }) => {
  const dispatch = useDispatch<AppDispatch>(); // Type the dispatch function
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState(initialStatus);
  const [priority, setPriority] = useState('');
  const [deadline, setDeadline] = useState('');

  useEffect(() => {
    if (task) {
      // Provide default values if task properties are undefined
      setTitle(task.title || '');
      setDescription(task.description || '');
      setStatus(task.status || initialStatus);
      setPriority(task.priority || '');
      setDeadline(task.deadline ? task.deadline.split('T')[0] : '');
    } else {
      setTitle('');
      setDescription('');
      setStatus(initialStatus); // Ensure this is correct
      setPriority('');
      setDeadline('');
    }
  }, [task, initialStatus]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const taskData = { title, description, status, priority, deadline };
    if (task) {
      dispatch(updateTask({ id: task._id, taskData }));
    } else {
      dispatch(createTask(taskData));
    }
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={onClose}
    >
      <div
        className={`fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 h-full overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">{task ? 'Edit Task' : 'Create New Task'}</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Title" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full mb-4 p-2 border rounded-md"
              required
            />
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Status</label>
              <select 
                value={status} 
                onChange={(e) => setStatus(e.target.value)}
                className="w-full p-2 border rounded-md"
              >
                <option value="To-do">To-do</option>
                <option value="In progress">In progress</option>
                <option value="Under review">Under review</option>
                <option value="Finished">Finished</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Priority</label>
              <select 
                value={priority} 
                onChange={(e) => setPriority(e.target.value)}
                className="w-full p-2 border rounded-md"
              >
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="Urgent">Urgent</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Deadline</label>
              <input 
                type="date" 
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <textarea 
              placeholder="Description" 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full mb-4 p-2 border rounded-md h-32"
            ></textarea>
            <button 
              type="submit" 
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
            >
              {task ? 'Update Task' : 'Create Task'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;