import { useAuthStore } from "../../hooks/useAuthStore"
import { useNavigate } from "react-router-dom";

import logo from './img/logoSV2.png'
import { Link } from "react-router-dom";
import './navbar.css'


export const Navbar = ({active }) => {
  
 active == 'solicitudes'&& console.log(' prueba hola')

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
        <Link to={'/'} className={ active == 'solicitudes'&& 'active__link'}>Solicitudes</Link>
        <Link to={'/administrar' } className={active == 'administrar'&& "active__link"}>Administrar</Link>
        <Link to={'/informaciones'} className={active == 'informaciones'&& "active__link"}>Informaciones</Link>
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
