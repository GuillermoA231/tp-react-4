import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({ tareas, setTareas }) => {
  const handleDelete = (tarea) => {
    const updatedTareas = tareas.filter((item) => item !== tarea);
    setTareas(updatedTareas);
  };

  return (
    <ListGroup>
      {tareas.map((tarea, index) => (
        <ItemTarea key={index} tarea={tarea} onDelete={handleDelete} />
      ))}
    </ListGroup>
  );
};

export default ListaTareas;
