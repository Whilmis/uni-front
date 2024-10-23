import { useState } from 'react';
import { calendarApi } from '../api';





export const useMaterias = () => {

    const [materiasState, setMateriasState]= useState([])


   

    const gerMaterias = async() => {
       
        try {

            const { data } = await calendarApi.get('/materias');
            const {materias} = data;
            setMateriasState(materias)
            
        } catch (error) {
           console.error(error)
  
      
        }
    }


    const paginacionMaterias = async (desde ) =>{
        try{
            const{data} = await calendarApi.get(`/materias?desde=${desde}&limite=5`);
            const {materias} = data;
            setMateriasState(materias)

        }catch(error){
            console.error(error)

        }
    }

    
    return {
        //* Propiedades
        materiasState, 


        //* Métodos
  
        gerMaterias,
        paginacionMaterias
      
    }

}