import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState } from "react";

const initialData = {
  todo: [{ id: "1", content: "Design UI" }],
  inProgress: [{ id: "2", content: "API Integration" }],
  done: [{ id: "3", content: "Project Setup" }],
};

export default function KanbanBoard() {
  const [columns, setColumns] = useState(initialData);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceCol = columns[source.droppableId];
    const destCol = columns[destination.droppableId];
    const [movedItem] = sourceCol.splice(source.index, 1);
    destCol.splice(destination.index, 0, movedItem);

    setColumns({ ...columns });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex gap-4 p-4">
        {Object.entries(columns).map(([colId, tasks]) => (
          <Droppable key={colId} droppableId={colId}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="bg-gray-200 rounded p-4 w-1/3"
              >
                <h3 className="text-lg font-bold mb-2">{colId.toUpperCase()}</h3>
                {tasks.map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided) => (
                      <div
                        className="bg-white p-2 rounded shadow mb-2"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {task.content}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
}
