import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import {useState} from "react";

const FormularioTarea = () => {
const [tarea,setTarea] = useState("");
const [tareas,setTareas] = useState([]);

const handleSubmit = (e) => {
  e.preventDefault();
  setTareas([...tareas,tarea]);/*ALTERNATIVA DE PUSH = State tareas spread "...": Creame un nuevo array, toma cada uno de los elementos iterables y copialos en un arreglo unidireccional, uno a uno */
  setTarea("");
}
const handleChange = (e) => {
  setTarea(e.target.value);
  console.log(tareas)
};
  return (
    <>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3 d-flex" controlId="tarea">
        <Form.Control type="text" placeholder="ingrese una tarea" value={tarea} onChange={handleChange}/>
        <Button variant="primary" type="submit">Agregar</Button>
      </Form.Group>
    </Form>
    <ListaTareas tareas={tareas}></ListaTareas>
    </>
  );
};

export default FormularioTarea;
