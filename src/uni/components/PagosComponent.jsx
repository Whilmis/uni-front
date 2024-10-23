import React from 'react';
import { useNavigate } from 'react-router-dom';

const PagosComponent = () => {
  const navigate = useNavigate();

  const handleProceed = () => {
    navigate('/current-grades');
  };

  return (
    <div>
      <h1>Pago Pendiente o Inscripción</h1>
      <p>Para proceder, por favor complete el pago o la inscripción.</p>
      <button onClick={handleProceed}>Proceder al Pago/Inscripción</button>
    </div>
  );
};

export default PagosComponent;