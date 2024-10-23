import logo from './img/logoSV2.png'
import { Link } from "react-router-dom";
import './navbar.css'



export const NavbarH = () => {



  return (



  <header>
    <navbar className='nav' >
     <div className='container_img'>  <img  src={logo} alt="logo de la institucion"  /></div>
      <div className='login_bt'> <Link to={'/auth/login'}>Login</Link></div>
    </navbar>
    <div className='hero'>
     <div className='container_cta'>
      <h1 className='title'>¡<span className='span'> Descubre Tu Futuro </span>en el Instituto Técnico Superior <span className='span'> (ITES)</span> SAN VALERO!</h1>
      <p>En el Instituto Técnico Superior (ITES) SAN VALERO, estamos comprometidos con la excelencia académica y el desarrollo integral de nuestros estudiantes. Únete a una comunidad vibrante y diversa donde tu éxito es nuestra prioridad.</p>
      <div className='cta'> <Link to={'/auth/login'}>Aplica Ahora</Link></div>
     </div>
    </div>
</header>
  )
}