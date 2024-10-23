import React from 'react';
import aulas from './img/iconmonstr-school-5-48.png'
import tecnologos from './img/iconmonstr-school-14-48.png'
import estudiantes from './img/iconmonstr-school-25-48.png'
import egresados from './img/iconmonstr-school-21-48.png'
import maestro from './img/icons8-profesor-64.png'
import pagos from './img/paid_16dp_FFFFFF_FILL0_wght400_GRAD0_opsz20.png'
import pagos2 from './img/icons8-pago-50 (2).png'
import materias from './img/local_library_16dp_FFFFFF_FILL0_wght400_GRAD0_opsz20.png'
import './informaciones.css'

const InformacionesA = () => {
  // Datos simulados para mostrar en las tarjetas


  return (
    <div className="admin-dashboard">
      <h1>Panel Administrativo</h1>
      
      
      <div className='panel__container'>
          <div className='panel__item'>
            <img src={tecnologos} alt="" />
            <h4>6</h4>
            <p>Tecnologos</p>
          </div>
          <div className='panel__item'>
            <img src={aulas} alt="item tecnologos" />
            <h4>47</h4>
            <p>Aulas</p>
          </div>
          <div className='panel__item'>
            <img src={estudiantes} alt="item tecnologos" />
            <h4>390</h4>
            <p>Estudiantes</p>
          </div>

          <div className='panel__item'>
            <img src={egresados} alt="item tecnologos" />
            <h4>4700</h4>
            <p>Egresados</p>
          </div>
      
          <div className='panel__item'>
            <img src={maestro} alt="item tecnologos" />
            <h4>$300</h4>
            <p>Mestros</p>
          </div>
          <div className='panel__item'>
            <img src={pagos} alt="item tecnologos" />
            <h4>$75,000</h4>
            <p>Total de Pagos Recibidos</p>
          </div>

          <div className='panel__item'>
            <img src={pagos2} alt="item tecnologos" />
            <h4>$75,000</h4>
            <p>Total de Pagos pendientes </p>
          </div>

          <div className='panel__item'>
            <img src={materias} alt="item tecnologos" />
            <h4>35</h4>
            <p>Materias </p>
          </div>
         </div>
    </div>
  );
};

export default InformacionesA;