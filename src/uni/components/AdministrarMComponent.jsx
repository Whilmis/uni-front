import React, { useState, useEffect } from 'react';
import {useUserStore,useForm} from '../../hooks'
import './administrarM.css';






  
  const AdministrarMComponent = () => {

    const  { userActive, startUpdateNota } = useUserStore()
    const[materiasT,setMateriasT] = useState([]);
    const [selectedSubject, setSelectedSubject] = useState(null);
    const [selectedStudent, setSelectedStudent] = useState(null);

  

    useEffect(()=>{
  setMateriasT(userActive?.materias.filter(element => element?.tipo == "TOMANDOSE"))


},[ userActive])



  
    const handleSubjectSelect = (subject) => {
      setSelectedSubject(subject)

    };
  

  
    const handleGradeChange = (e, part) => {
      const { value } = e.target;
      let notar
       if(part == 0){
        notar =   [ value, selectedStudent.nota[1], selectedStudent.nota[2], selectedStudent.nota[3]] ;
       }else if(part == 1){
        notar =   [ selectedStudent.nota[0], value, selectedStudent.nota[2], selectedStudent.nota[3]] ;
       }else if(part == 2){
        notar =  [ selectedStudent.nota[0], selectedStudent.nota[1],value , selectedStudent.nota[3]]
        
       }else if(part == 3){
        notar =  [ selectedStudent.nota[0], selectedStudent.nota[1],selectedStudent.nota[2] , value]
       }
     
      setSelectedStudent(prevStudent => ({
        ...prevStudent,
        nota: notar
      }));
    };


  
   
  
    return (
      <div className="dashboard-container">
        <h1>Panel del Maestro</h1>
        <div className="tables-container">
          <div className="table-wrapper">
            <h2>Materias Impartidas</h2>
            <table >
              <thead>
                <tr>
                  <th>Clave</th>
                  <th>Nombre</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>
                {materiasT.map(subject => (
                  <tr key={subject._id}>
                    <td>{subject.clave}</td>
                    <td>{subject.nombre}</td>
                    <td>
                      <button onClick={() => handleSubjectSelect(subject)}>Ver Estudiantes</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {selectedSubject && (
            <div className="table-wrapper">
              <h2>Estudiantes de {selectedSubject.nombre}</h2>
              <table>
                <thead>
                  <tr>
                    <th>Materia</th>
                    <th>Estudiante</th>
                    <th>Parcial 1</th>
                    <th>Parcial 2</th>
                    <th>Parcial 3</th>
                    <th>Participación</th>
                    <th>Total</th>
                    <th>Acción</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedSubject.estudiantes.map(student => (
                    <tr key={student.uid }>
                      <td>{selectedSubject.nombre}</td>
                      <td>{student.nombre}</td>
                      <td>{student.nota[0]}</td>
                      <td>{student.nota[1]}</td>
                      <td>{student.nota[2]}</td>
                      <td>{student.nota[3]}</td>
                      <td>{Number(student.nota[0])  + Number(student.nota[1]) + Number(student.nota[2]) + Number(student.nota[3])}</td>
                      <td>
                        <button onClick={() => setSelectedStudent(student) }>Actualizar Nota</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {selectedStudent && (
            <div className="update-grade-form">
              <h2>Actualizar Nota de {selectedStudent.nombre}</h2>
              <label>
                Parcial 1 (15 puntos):
                <input type="number" max="15" value={selectedStudent.nota[0]} onChange={ (e) => handleGradeChange(e, 0)} />
              </label>
              <label>
                Parcial 2 (15 puntos):
                <input type="number" max="15" value={selectedStudent.nota[1]} onChange={(e) => handleGradeChange(e, 1)} />
              </label>
              <label>
                Parcial 3 (30 puntos):
                <input type="number" max="30" value={selectedStudent.nota[2]} onChange={(e) => handleGradeChange(e, 2)} />
              </label>
              <label>
                Participación y Asistencia (40 puntos):
                <input type="number" max="40" value={selectedStudent.nota[3]} onChange={(e) => handleGradeChange(e, 3)} />
              </label>

              <button onClick={ ()=>startUpdateNota(selectedSubject, selectedStudent)}>Guardar</button>
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default AdministrarMComponent;