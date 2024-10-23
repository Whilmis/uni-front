import { useAuthStore } from "../../hooks/useAuthStore"
import { useNavigate } from "react-router-dom";

import logo from './img/logoSV2.png'
import { Link } from "react-router-dom";
import './navbar.css'


export const NavbarE = ({active = 0}) => {

  const { startLogout } = useAuthStore();
  let navigate = useNavigate();
  const logout = () =>{
    startLogout()
    navigate("/")

  }

  return (
    <navbar className='nav' >
    <div className='container_img'>  <img  src={logo} alt="logo de la institucion"  /></div>
    <div className="links_container" >
    
     <div className="clase_link" > 
        <Link to={'/'} className={  active == 'calendario'&& 'active__link'}>Calendario</Link>
        <Link to={'/estudiante/Calificaciones'} className={  active == 'calificaciones'&& 'active__link'}>Consulta de Calificaciones</Link>
        <Link to={'/solicitud/asignatura'} className={  active == 'asignatura'&& 'active__link'}>Solicitud de asignatura</Link>
        <Link to={'/retirar'} className={  active == 'retirar'&& 'active__link'}>Retirar</Link>
        <div 
         className='login_bt'
          onClick={ logout }
        >
            <i className="fas fa-sign-out-alt"></i>
            &nbsp;
            <span>Salir</span>
        </div>
        
        
        </div>
   

      </div>
    </navbar>
     
  )
}