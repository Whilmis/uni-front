import {NavbarE} from '../components/NavbarE'
import { Link } from "react-router-dom";
import SolicitudesEComponent from '../components/SolicitudesEComponent';







export const SolicitudesAEPage = () => {
 


  return (
    <>
    <NavbarE  active={'asignatura'}/>
   
    < SolicitudesEComponent />
    <Link to={'/estudiante/pagos'}>Estudiante Pagos</Link>

    
    </>
  )
}