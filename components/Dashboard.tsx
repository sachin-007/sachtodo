import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { RootState, AppDispatch } from '../store';
import { fetchTasks, updateTask, updateTasksOrder, Task } from '../store/slices/taskSlice';
import Column from './Column';
import TaskModal from './TaskModal';
import LogoutButton from './LogoutButton';
import '@fortawesome/fontawesome-free/css/all.min.css';


// FeatureCard Component
interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center mb-4">
      <div className="text-indigo-600 text-3xl mr-4">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);


const columns = ['To-do', 'In progress', 'Under review', 'Finished'];

const getGreeting = (): string => {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 18) return 'Good afternoon';
  return 'Good evening';
};

const Dashboard: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const user = useSelector((state: RootState) => state.auth.user);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [selectedStatus, setSelectedStatus] = useState('');

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const updateTaskStatus = useCallback((taskId: string, newStatus: string) => {
    dispatch(updateTask({ id: taskId, taskData: { status: newStatus } }));
  }, [dispatch]);

  const openNewTaskModal = useCallback((status: string) => {
    setSelectedStatus(status);
    setSelectedTask(null);
    setIsTaskModalOpen(true);
  }, []);

  const openTaskModal = useCallback((task: Task) => {
    setSelectedTask(task);
    setIsTaskModalOpen(true);
  }, []);

  const moveTask = useCallback((dragIndex: number, hoverIndex: number) => {
    const draggedTask = tasks[dragIndex];
    const newTasks = [...tasks];
    newTasks.splice(dragIndex, 1);
    newTasks.splice(hoverIndex, 0, draggedTask);
    dispatch(updateTasksOrder(newTasks));
  }, [tasks, dispatch]);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-md flex flex-col h-full">
          <div className="p-4">
            <div className="flex items-center mb-6">
              <img  src="/images/avatar.jpg" alt="User Avatar" className="w-20 h-20 rounded-full mr-3" />
              <div>
                <h2 className="font-semibold">{user?.name}</h2>
                <LogoutButton />
              </div>
            </div>
            <nav>
              <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded">Home</a>
              <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded">Boards</a>
              <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded">Settings</a>
              <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded">Teams</a>
              <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded">Analytics</a>
            </nav>
            <button 
              className="w-full mt-6 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
              onClick={() => openNewTaskModal('To-do')}
            >
              Create new task
            </button>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 p-8 overflow-auto">
          <h1 className="text-3xl font-bold mb-8">{getGreeting()}, {user?.name}!</h1>
          
          {/* Feature cards */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <FeatureCard 
              title="Introducing tags" 
              description="Easily categorize and find your notes by adding tags. Keep your workspace clutter-free and efficient."
              icon={<i className="fas fa-tag text-gray-500 text-2xl"></i>}
            />
            <FeatureCard 
              title="Share Notes Instantly" 
              description="Effortlessly share your notes with others via email or link. Enhance collaboration with quick sharing options."
              icon={<i className="fas fa-share-alt text-gray-500 text-2xl"></i>}
            />
            <FeatureCard 
              title="Access Anywhere" 
              description="Sync your notes across all devices. Stay productive whether you're on your phone, tablet, or computer."
              icon={<i className="fas fa-cloud text-gray-500 text-2xl"></i>}
            />
          </div>

          {/* Toolbar */}
          <div className="flex justify-between items-center mb-6">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search" 
                className="pl-10 pr-4 py-2 border rounded-md"
              />
              <i className="fas fa-search absolute left-3 text-gray-400" style={{ top: '35%' }}></i>
            </div>
            <div className="flex space-x-4">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800">
                <i className="fas fa-calendar-alt text-xl"></i>
                <span>Calendar view</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800">
                <i className="fas fa-robot text-xl"></i>
                <span>Automation</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800">
                <i className="fas fa-filter text-xl"></i>
                <span>Filter</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800">
                <i className="fas fa-share-alt text-xl"></i>
                <span>Share</span>
              </button>
              <button 
                className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
                onClick={() => openNewTaskModal('To-do')}
              >
                Create new +
              </button>
            </div>
          </div>

          {/* Kanban board */}
          <div className="flex space-x-4">
            {columns.map((column) => (
              <Column
                key={column}
                status={column}
                tasks={tasks.filter((task) => task.status === column)}
                updateTaskStatus={updateTaskStatus}
                openNewTaskModal={openNewTaskModal}
                openTaskModal={openTaskModal}
                moveTask={moveTask}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Task Modal */}
      {isTaskModalOpen && (
        <TaskModal
          isOpen={isTaskModalOpen}
          onClose={() => setIsTaskModalOpen(false)}
          task={selectedTask}
          initialStatus={selectedStatus}
        />
      )}
    </DndProvider>
  );
};

export default Dashboard;
