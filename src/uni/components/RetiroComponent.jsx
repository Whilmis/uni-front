import React, { useState, useEffect } from 'react';
import {useUserStore,useForm} from '../../hooks'


const enrolledSubjects = [
  { id: 1, name: 'Historia', code: 'HIS101' },
  { id: 2, name: 'Literatura', code: 'LIT102' },
  { id: 3, name: 'Biología', code: 'BIO103' },
  { id: 4, name: 'Matemáticas Avanzadas', code: 'MAT104' }
];

const RetiroComponent = () => {

  const  { userActive, startDeleteMateiras } = useUserStore()
  const[materiasR,setMateriasR] = useState([]);
  const[retiro,setRetiro] = useState(false);
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [withdrawAll, setWithdrawAll] = useState(false);

  useEffect(()=>{
    setMateriasR(userActive?.materias.filter(element => element?.tipo == "TOMANDOSE"))
   
  
  },[ userActive])



  const handleSelectSubject = (subject) => {
    setSelectedSubjects(prevState => [...prevState, subject]);
  };

  const handleDeselectSubject = (subject) => {
    setSelectedSubjects(prevState => prevState.filter(s => s._id !== subject._id));
  };

  const handleWithdrawAll = () => {
    setWithdrawAll(true);
    setSelectedSubjects(enrolledSubjects); // Selecciona todas las asignaturas si se retira todo el cuatrimestre
  };

  const retirar = (materias) => {
    startDeleteMateiras(materias)
    setRetiro(true)
  };




  return (
  
    !retiro ?
    <div>
      <h1>Retiro de Asignaturas</h1>
      <div>
        <button onClick={()=> retirar(materiasR)}>Retirar Todo el Cuatrimestre</button>
      </div> 
      <h2>O seleccionar asignaturas para retirar</h2>
      <ul>
        {materiasR.map(subject => (
          <li key={subject._id}>
            {subject.nombre}
            {selectedSubjects.some(s => s._id === subject._id) ? (
              <button onClick={() => handleDeselectSubject(subject)}>Cancelar Retiro</button>
            ) : (
              <button onClick={() => handleSelectSubject(subject)}>Retirar</button>
            )}
          </li>
        ))}
      </ul>
      {selectedSubjects.length > 0 && (
        <button onClick={()=>retirar(selectedSubjects)}>Confirmar Retiro</button>
      )}
    </div>
  
  :

<div>

<h1>Retiro ya realizado</h1>
<h2>Mas informacion contactar con administracion de ITES San Valero</h2>
</div>



  );
};

export default RetiroComponent;