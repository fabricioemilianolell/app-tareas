import { Formulario } from "./Formulario";
import "../estilos/listaDeTareas.css"
import { useState } from "react";
import { Tarea } from "./Tarea";


export const ListaDeTareas = () => {

  const [tareas, setTareas] = useState([]);

  const agregarTarea = (valorTarea) => {
    if(valorTarea.texto !== "") {
      //(!(valorTarea.texto === ""))
      //tarea.texto.trim()
      valorTarea.texto = valorTarea.texto.trim();
      const tareasActualizadas = [valorTarea, ...tareas];
      setTareas(tareasActualizadas);
    };
  };

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter(el => el.id !== id)
      setTareas(tareasActualizadas)
  };

  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map(el => {
        if(el.id === id) {
          el.completada = !el.completada
        }
        return el
    });
    setTareas(tareasActualizadas);
  };


  return (
    <>
      <Formulario onSubmit={agregarTarea} />
      <div className="tareas-lista-contenedor">
      {
          tareas.map(element => {
            return <Tarea
              key={element.id}
              id={element.id}
              texto={element.texto}
              completada={element.completada}
              completarTarea={completarTarea}
              eliminarTarea={eliminarTarea}
            />
          })
        }

      </div>
    </>
  )
};
