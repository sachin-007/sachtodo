// import React from 'react'
// import { Task } from '../store/slices/taskSlice'

// interface TaskCardProps {
//   task: Task
// }

// // const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
// //   return (
// //     <div className="task-card">
// //       <h3>{task.title}</h3>
// //       {task.description && <p>{task.description}</p>}
// //       {task.priority && <span className={`priority ${task.priority.toLowerCase()}`}>{task.priority}</span>}
// //       {task.deadline && <span className="deadline">{new Date(task.deadline).toLocaleDateString()}</span>}
// //     </div>
// //   )
// // }


// const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
//   return (
//     <div className="task-card">
//       <h3>{task.title}</h3>
//       {task.description && <p>{task.description}</p>}
//       {task.priority && <span className={`priority ${task.priority.toLowerCase()}`}>{task.priority}</span>}
//       {task.deadline && <span className="deadline">{new Date(task.deadline).toLocaleDateString()}</span>}
//     </div>
//   )
// }

// export default TaskCard


// import React from 'react';
// import { Task } from '../store/slices/taskSlice';

// interface TaskCardProps {
//   task: Task;
// }

// const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
//   return (
//     <div className="task-card">
//       <h3>{task.title}</h3>
//       {task.description && <p>{task.description}</p>}
//       {task.priority && <span className={`priority ${task.priority.toLowerCase()}`}>{task.priority}</span>}
//       {task.deadline && <span className="deadline">{new Date(task.deadline).toLocaleDateString()}</span>}
//     </div>
//   );
// };

// export default TaskCard;

// import React from 'react';
// import { Task } from '../store/slices/taskSlice';

// interface TaskCardProps {
//   task: Task;
//   onClick: () => void;
// }

// const TaskCard: React.FC<TaskCardProps> = ({ task, onClick }) => {
//   return (
//     <div className="task-card" onClick={onClick}>
//       <h3>{task.title}</h3>
//       {task.description && <p>{task.description}</p>}
//       <div className="task-card-footer">
//         {task.priority && (
//           <span className={`priority ${task.priority.toLowerCase()}`}>
//             {task.priority}
//           </span>
//         )}
//         {task.deadline && (
//           <span className="deadline">
//             {new Date(task.deadline).toLocaleDateString()}
//           </span>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TaskCard;



// import React from 'react';
// import { Task } from '../store/slices/taskSlice';

// interface TaskCardProps {
//   task: Task;
//   onClick: () => void;
// }

// const TaskCard: React.FC<TaskCardProps> = ({ task, onClick }) => {
//   const getPriorityClass = (priority: string) => {
//     switch (priority.toLowerCase()) {
//       case 'urgent':
//         return 'bg-red-100 text-red-800';
//       case 'medium':
//         return 'bg-yellow-100 text-yellow-800';
//       case 'low':
//         return 'bg-green-100 text-green-800';
//       default:
//         return 'bg-gray-100 text-gray-800';
//     }
//   };

//   return (
//     <div className="bg-white p-4 rounded-lg shadow-md mb-4 cursor-pointer" onClick={onClick}>
//       <h4 className="font-semibold mb-2">{task.title}</h4>
//       <p className="text-sm text-gray-600 mb-2">{task.description}</p>
//       <div className="flex justify-between items-center">
//         <span className={`text-xs font-semibold px-2 py-1 rounded ${getPriorityClass(task.priority)}`}>
//           {task.priority}
//         </span>
//         <span className="text-xs text-gray-500">{new Date(task.deadline).toLocaleDateString()}</span>
//       </div>
//     </div>
//   );
// };

// export default TaskCard;


import React from 'react';
import { Task } from '../store/slices/taskSlice';

interface TaskCardProps {
  task: Task;
  onClick: () => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onClick }) => {
  // Function to determine the priority class
  const getPriorityClass = (priority: string) => {
    switch (priority.toLowerCase()) {
      case 'urgent':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div 
      className="bg-white p-4 rounded-lg shadow-md mb-4 cursor-pointer transition-transform transform hover:scale-105" 
      onClick={onClick}
    >
      <h4 className="font-semibold text-lg mb-2">{task.title}</h4>
      {task.description && <p className="text-sm text-gray-600 mb-2">{task.description}</p>}
       
      
    </div>
  );
};

export default TaskCard;
