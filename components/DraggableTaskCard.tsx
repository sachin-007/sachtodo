import React, { useRef } from 'react';
import { useDrag, useDrop, DropTargetMonitor } from 'react-dnd';
import { XYCoord } from 'dnd-core';
import { Task } from '../store/slices/taskSlice';

interface DraggableTaskCardProps {
  task: Task;
  index: number;
  moveTask: (dragIndex: number, hoverIndex: number) => void;
  openTaskModal: (task: Task) => void;
}

interface DragItem {
  index: number;
  id: string;
  type: string;
}

const DraggableTaskCard: React.FC<DraggableTaskCardProps> = ({ task, index, moveTask, openTaskModal }) => {
  const ref = useRef<HTMLDivElement>(null);

  const [{ handlerId }, drop] = useDrop<DragItem, void, { handlerId: string | symbol | null }>({
    accept: 'TASK',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: DragItem, monitor: DropTargetMonitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveTask(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: 'TASK',
    item: (): DragItem => ({ id: task._id, index, type: 'TASK' }),
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.4 : 1;
  drag(drop(ref));

  return (
    <div
      ref={ref}
      className="bg-white p-4 rounded-lg shadow-md mb-2 cursor-pointer"
      onClick={() => openTaskModal(task)}
      style={{ opacity }}
      data-handler-id={handlerId}
    >
      <h4 className="font-semibold">{task.title}</h4>
      <p className="text-sm text-gray-600">{task.description}</p>
      <div className="task-card-footer">
        {task.priority && (
          <span className={`priority ${task.priority.toLowerCase()}`}>
            {task.priority}
          </span>
        )}
        {task.deadline && (
          <span className="deadline">
            {new Date(task.deadline).toLocaleDateString()}
          </span>
        )}
      </div>
    </div>
  );
};

export default DraggableTaskCard;