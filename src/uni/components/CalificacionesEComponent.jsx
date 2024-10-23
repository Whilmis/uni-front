import { useEffect, useState } from 'react';
import {useUserStore} from '../../hooks'
import './calificacionesEComponent.css'

const CalificacionesEComponent = () => {
  const  { userActive} = useUserStore()
const[materiasT,setMateriasT] = useState([]);

useEffect(()=>{
  setMateriasT(userActive?.materias.filter(element => element?.tipo == "TOMANDOSE"))


},[ userActive])
 




  return (
    <div>
      <h1>Consulta de Calificaciones</h1>
      <table>
        <thead>
          <tr>
            <th>Asignatura</th>
            <th>Primer Parcial (15%)</th>
            <th>Segundo Parcial (15%)</th>
            <th>Tercer Parcial (30%)</th>
            <th>Participación y Asistencia (40%)</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {materiasT?.map((grade, index) => {
            const total = Number(grade.nota[0])  + Number(grade.nota[1]) + Number(grade.nota[2]) + Number(grade.nota[3]);
            return (
              <tr key={index}>
                <td>{grade.nombre}</td>
                <td>{grade.nota[0]}</td>
                <td>{grade.nota[1]}</td>
                <td>{grade.nota[2]}</td>
                <td>{grade.nota[3]}</td>
                <td>{total}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CalificacionesEComponent;