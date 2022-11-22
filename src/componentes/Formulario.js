import { useState } from "react";
import "../estilos/formulario.css"
import { v4 as uuidv4 } from 'uuid';

export const Formulario = ({ onSubmit }) => {

  
  const [input, setInput] = useState("");

  
  const manejarCambio = (e) => {
    setInput(e.currentTarget.value);
    };

  const manejarEnvio = (e) => {
    e.preventDefault()
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    };

    onSubmit(tareaNueva);
  };

  return (
    <form className='tarea-formulario'
      onSubmit={manejarEnvio}
    >
        <input 
            className='tarea-input'
            type="text"
            placeholder='Escribe una tarea'
            name='texto'
            onChange={manejarCambio}
        />
        <button className='tarea-boton'>
            Agregar Tarea
        </button>
    </form>
  )
};
