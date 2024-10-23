import React, { useState, useEffect } from 'react';
import { useMateriasP } from '../../hooks/useMateriasP';
import{useUserStore} from'../../hooks'

import './solicitudesM.css';





const SolicitudesEComponent = () => {
  const [requestedSubjects, setRequestedSubjects] = useState([]);




const {materiasA, startaddMateriaP} = useMateriasP()
const{startUpdateUserActiveE} = useUserStore()





  const addSubject = (subject) => {
    if(requestedSubjects.find(element => element._id == subject._id))
    {
      return
    }
    setRequestedSubjects([...requestedSubjects, subject]);
  };

  const enviar = async () => {
    await requestedSubjects?.map(async (element) =>{
   await startaddMateriaP(element)
   
   })

   await startUpdateUserActiveE(requestedSubjects)
  };
  const removeSubject = (subjectId) => {
    setRequestedSubjects(requestedSubjects.filter(subject => subject._id !== subjectId));
  };

  return (
    <div className="subject-request-container">
      <h1>Solicitud de Asignaturas</h1>
      <div className="tables-container">
        <div className="table-wrapper">
          <h2>Materias Disponibles</h2>
          <table >
            <thead>
              <tr>
                <th>Código</th>
                <th>Nombre</th>
                <th>Clave</th>
              </tr>
            </thead>
            <tbody>
              {materiasA.map(subject => (
                <tr key={subject._id}>
                  <td>{subject.clave}</td>
                  <td>{subject.nombre}</td>
                  <td>
                    <button onClick={() => addSubject(subject)}>Agregar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="table-wrapper">
          <h2>Selección </h2>
          <table >
            <thead>
              <tr>
                <th>Clave</th>
                <th>Nombre</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {requestedSubjects.map(subject => (
                <tr key={subject._id}>
                  <td>{subject.clave}</td>
                  <td>{subject.nombre}</td>
                  <td>
                    <button onClick={() => removeSubject(subject._id)}>Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {requestedSubjects.length > 0 &&   <button onClick={() => enviar()}>Enviar</button>}
        </div>
      </div>
     
    </div>
  );
};

export default SolicitudesEComponent;

