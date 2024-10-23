import React, { useState, useEffect } from 'react';
import {useMaterias,  useMateriasP} from '../../hooks'
import PopupComponent from './PopupComponent';

const initialTeacherRequests = [
  { id: 1, teacherName: 'Juan Pérez', subject: 'Matemáticas', status: 'Pendiente' },
  { id: 2, teacherName: 'María Gómez', subject: 'Física', status: 'Pendiente' },
  { id: 3, teacherName: 'Ana Ramírez', subject: 'Química', status: 'Rechazado' }
];

const initialStudentRequests = [
  { id: 1, studentName: 'Carlos López', subject: 'Historia', status: 'Pendiente', paymentStatus: 'Pendiente' },
  { id: 2, studentName: 'Laura Torres', subject: 'Literatura', status: 'Pendiente', paymentStatus: 'Pendiente' },
  { id: 3, studentName: 'José Rodríguez', subject: 'Biología', status: 'Pendiente', paymentStatus: 'Completado' }
];

const SolicitudAComponent = () => {
const {materiasState, gerMaterias, paginacionMaterias} = useMaterias();
const { startgetMateriasP, materiasPE, materiasPM,startUpdateMateriaP, startAprobarMateriaP, starRechazarMateriaP } = useMateriasP()
const [desde, setDesde] = useState(0);
const [handlePopup,setHandlePopup] = useState(false)
const [materia,setMateria] = useState(false)

  useEffect(()=>{
    gerMaterias()
    startgetMateriasP()

  },[])

  useEffect(()=>{
    paginacionMaterias(desde)

  },[desde])


  


  const [studentRequests, setStudentRequests] = useState(initialStudentRequests);

  const approveTeacherRequest = (id) => {
    setTeacherRequests(teacherRequests.map(request => 
      request.id === id ? { ...request, status: 'Aprobado' } : request
    ));
  };

  const approveStudentRequest = (id) => {
    setStudentRequests(studentRequests.map(request =>
      request.id === id && request.paymentStatus === 'Completado' 
      ? { ...request, status: 'Aprobado' } 
      : request
    ));
  };

  const markPaymentAsCompleted = (id) => {
    setStudentRequests(studentRequests.map(request =>
      request.id === id ? { ...request, paymentStatus: 'Completado' } : request
    ));
  };

  const handelMateriaP = async (materiaP ) => {
   await startUpdateMateriaP(materiaP )
    paginacionMaterias(desde)
  }


  const siguientep = () =>{
    setDesde(desde + 5)

  }

  const materiaPorConfirmar = (materiaps) =>{
    setMateria(materiaps)
    setHandlePopup(true)
  }

  const anteriorP = () =>{
    if(desde >= 0){
      setDesde(desde - 5)
  
    }

  }

  return (
    <div>
        <h1>Solicitudes de Materias</h1>

<h2>Materias disponibles para solicitar</h2>
<table>
  <thead>
    <tr>

      <th>Materia Solicitada</th>
      <th>Clave</th>
      <th>Estado</th>
      <th>Acciones</th>
    </tr>
  </thead>
  <tbody>
    {materiasState?.map(request => (
      <tr key={request._id}>

        <td>{request?.nombre}</td>
        <td>{request?.clave}</td>
        <td>{request?.tipo == "NO_TOMADA"? 'Cerrada' : 'Abierta' }</td>
        <td>
          {request.tipo === "NO_TOMADA"? (
            <>
            <button onClick={() =>handelMateriaP(request)}>Abrir</button>
            </>
          ):
          (
            <>

            <button onClick={() => handelMateriaP(request)}>Cancelar</button>
            </>
          )}
        </td>
      </tr>
    ))}
      <tr>  <td></td>
              <td></td>
              <td></td>
              <td>  <>
                  <button onClick={() => anteriorP()}><p>{'<-'}</p></button>
                  <button onClick={() => siguientep()}><p>{'->'}</p></button>
                  </></td></tr>
  </tbody>
</table>
 

      <h2>Solicitudes de Maestros</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre del Maestro</th>
            <th>Materia Solicitada</th>
            <th>Clave</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {materiasPM.map(request => (
         <tr key={request._id}>
         <td>{request?.usuario.nombre}</td>
         <td>{request.nombre}</td>
         <td>{request.clave}</td>
         <td>{request.tipo}</td>
 
         <td>
       
           {request.tipo === 'ABIERTA' || request.tipo === 'RECHAZADA' || request.tipo === 'PENDIENTE'?  (
               <>
                
               <button onClick={() => startAprobarMateriaP(request)}>Aprobar</button>
               
               </>
           ):
           (<>
           <button onClick={() => starRechazarMateriaP(request)}>Rechazar</button>
           </>)}

           {request.tipo === 'APROVADA' &&  (
           <>
           <button onClick={() => materiaPorConfirmar(request)}>Confirmar</button>
           
           </>
       )
       
       }
         </td>
       </tr>
          ))}
        
        </tbody>
      </table>

      <h2>Solicitudes de Estudiantes</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre del Estudiante</th>
            <th>Materia Solicitada</th>
            <th>Clave</th>
            <th>Estado</th>

            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {materiasPE?.map(request => (
            <tr key={request._id}>
              <td>{request?.usuario.nombre}</td>
              <td>{request.nombre}</td>
              <td>{request.clave}</td>
              <td>{request.tipo}</td>
      
              <td>
       
       {request.tipo === 'RECHAZADA' || request.tipo === 'PENDIENTE'?  (
           <>
           <button onClick={() => startAprobarMateriaP(request)}>Aprobar</button>
           
           </>
       ):
       (<>
       <button onClick={() => starRechazarMateriaP(request)}>Rechazar</button>
       </>)
       
       
       }
     
     </td>
            </tr>
          ))}
        </tbody>
      </table>

      {
        handlePopup && <PopupComponent materia={materia} setHandlePopup={setHandlePopup} materias={materiasPE}/>
      }
    </div>
  );
};

export default SolicitudAComponent;