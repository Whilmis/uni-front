import { useState, useEffect } from "react"
import { useMateriasP  } from "../../hooks"
import './popup.css'

 const PopupComponent = ({materia, setHandlePopup, materias}) =>{
   const[materiasC,setMateriasC] = useState([])
 const {startMateriaConfirmada }= useMateriasP() 

   useEffect(()=>{
    const estudiantesF = materias?.filter((element)=>
        element.clave == materia.clave & element.tipo == 'APROVADA'

      )

      const estudiantes = estudiantesF?.map((element) =>  element.usuario)

    setMateriasC({...materia, estudiantes:estudiantes, nota: {} })
   },[])
   
    return(<div className="popup">
        <button className="poup_button" onClick={() => setHandlePopup(false)}> x </button>
        <h3>Confirmar Materia</h3>
        <h4>Materia</h4>
        <h5><p>{materiasC?.nombre}</p></h5>
        <h4>Maestro</h4>
        <h5><p>{materiasC?.usuario?.nombre}</p></h5>
        <h4>Estudiantes Aprobados</h4>
        {materiasC?.estudiantes?.length > 0? (
            <>
            <table>
  <thead>
    <tr>
      <th>Nombres de Estudiantes</th>
 
    </tr>
  </thead>
  <tbody>
    {materiasC?.estudiantes?.map(request => (
      <tr key={request?._id}>
        <td>{request?.nombre}</td>
     


      </tr>
    ))}
  </tbody>
</table>

<button className="button_cta" onClick={() => startMateriaConfirmada(materiasC)}>Confirmar</button>
            </>
          ):
          (
            <>

            <p>No tiene Solicitudes de estudiantes </p>
            </>
          )}


    </div>)
}

export default PopupComponent;