import React, { useState } from 'react';
import cart from './img/credit-card-transparent-background.png'
import {useUserStore} from '../../hooks'
import './PaymentForm.css';

const PaymentForm = () => {

    const {startUserPago} = useUserStore()
  const [formData, setFormData] = useState({
    cardNumber: '',
    name: '',
    cvv: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para procesar el pago
    console.log(formData);
    startUserPago()
    alert('Pago Realizado!');
  };

  return (
    <div className="payment-form-container">
        
      <form onSubmit={handleSubmit} className="payment-form">
        <h6>Para poder acceder a las calificaciones y realizar cualquier otro proceso en la página, es necesario completar el pago. Una vez efectuado el pago, se habilitarán todas las funcionalidades correspondientes. Por favor, ingresa los datos de tu tarjeta en el formulario de pago para continuar</h6>
        <img 
          src={cart}
          alt="Tarjeta" 
          className="card-image"
        />
        <div className="form-group">
          <label htmlFor="cardNumber">Número de Tarjeta</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleInputChange}
            required
            placeholder="1234 5678 9101 1121"
            maxLength="19"
          />
        </div>

        <div className="form-group">
          <label htmlFor="name">Nombre del Titular</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            placeholder="Nombre Apellido"
          />
        </div>

        <div className="form-group">
          <label htmlFor="cvv">Código CVV</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={formData.cvv}
            onChange={handleInputChange}
            required
            placeholder="123"
            maxLength="3"
          />
        </div>

        <button type="submit" className="submit-button">Pagar</button>
      </form>
    </div>
  );
};

export default PaymentForm;
