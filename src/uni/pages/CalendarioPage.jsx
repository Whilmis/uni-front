import { Calendar } from '../components/Calendar'
import { NavbarE } from '../components/NavbarE'
import {useUserStore } from '../../hooks'
import PaymentForm from '../components/PaymentForm';






export const CalendarioPage = () => {
 const {userActive} = useUserStore ();



   return (
    userActive.pago ?
    <>
    <h1>Pago Pendiente </h1>


  
  
    <PaymentForm />
    
    </>
    :


    <>


    <NavbarE active={'calendario'}/>
  
    <Calendar />
    
    </>

  )
}