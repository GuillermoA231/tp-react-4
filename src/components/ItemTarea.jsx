import { ListGroup, Button } from "react-bootstrap";

const ItemTarea = ({ tarea, onDelete }) => {
  const handleDelete = () => {
    onDelete(tarea);
  };

  return (
    <ListGroup.Item>
      {tarea}
      <Button variant="danger" className="ml-2" onClick={handleDelete}>
        Borrar
      </Button>
    </ListGroup.Item>
  );
};

export default ItemTarea;
