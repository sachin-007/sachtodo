import React, { useRef } from 'react';
import { useDrop } from 'react-dnd';
import { Task } from '../store/slices/taskSlice';
import DraggableTaskCard from './DraggableTaskCard';

interface ColumnProps {
  status: string;
  tasks: Task[];
  updateTaskStatus: (taskId: string, newStatus: string) => void;
  openNewTaskModal: (status: string) => void;
  openTaskModal: (task: Task) => void;
  moveTask: (dragIndex: number, hoverIndex: number) => void;
}

const Column: React.FC<ColumnProps> = ({
  status,
  tasks,
  updateTaskStatus,
  openNewTaskModal,
  openTaskModal,
  moveTask
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [, drop] = useDrop({
    accept: 'TASK',
    drop: (item: { id: string }) => {
      updateTaskStatus(item.id, status);
    },
  });

  drop(ref);

  return (
    <div ref={ref} className="bg-gray-100 p-4 rounded-lg w-64">
      <h3 className="font-bold mb-4">{status}</h3>
      {tasks.map((task, index) => (
        <DraggableTaskCard
          key={task._id}
          task={task}
          index={index}
          moveTask={moveTask}
          openTaskModal={openTaskModal}
        />
      ))}
      <button
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        onClick={() => openNewTaskModal(status)}
      >
        Add new +
      </button>
    </div>
  );
};

export default Column;