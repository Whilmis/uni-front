import {NavbarE} from '../'
import { Link } from "react-router-dom";
import CalificacionesEComponent from '../components/CalificacionesEComponent';





export const CalificacionesE = () => {
 


  return (
    <>
    <NavbarE active={'calificaciones'}/>
    
     <CalificacionesEComponent  />
     <Link to={'/estudiante/pagos'}>Estudiante Pagos</Link>



    
    </>
  )
}