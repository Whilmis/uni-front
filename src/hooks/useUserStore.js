import { useDispatch, useSelector } from 'react-redux';
import { getUserActive, getUsers, deleteUser, userPago} from '../store';
import { calendarApi } from '../api';





export const useUserStore = () => {

    const {   users , userActive } = useSelector( state => state.user );
    const dispatch = useDispatch();

    const startUserActive = async(user) => {
       
        try {

            dispatch( getUserActive(user) );
            
        } catch (error) {
           console.error(error)
  
      
        }
    }


    const startUserPago= async() => {
       
        try {

            const {materias, _id, nombre, user_id} = userActive

            const { dataE } = await calendarApi.put(`/estudiantes/${_id}`,{ nombre, user_id,
                pago:false, materias  })
           

            dispatch( userPago() );
            
        } catch (error) {
           console.error(error)
  
      
        }
    }

    const startgetUsers = async() => {
      
        try {
         
            const { data } = await calendarApi.get('/usuarios');

            
            dispatch( getUsers(data.usuarios) );   
     
        } catch (error) {
            console.error(error)
        }
    }


    const startaddUser = async({ email, password }) => {
       

        try {
            const { data } = await calendarApi.post('/usuarios',{correo: email, password });
            dispatch( getUsers(data) );   
       
        } catch (error) {
            console.error(error)
        }
    }

    const startUpdateUser = async({uid ,nombre, email, password, rol }) => {
        try {

            if(rol )
            await calendarApi.put(`/usuarios/${ uid }`,{nombre, email, password , rol });
            const { data } = await calendarApi.get('/usuarios');

            
            dispatch( getUsers(data.usuarios) );   
        } catch (error) {
            console.error(error)
        }
       
    }

    const startUpdateUserActiveM = async(arrayMateriasp) => {

        try {
            const {materias, _id, nombre, user_id} = userActive
            const materiasUserP = materias.map((element) => 
                arrayMateriasp.find(materia => materia.clave == element.clave) ? {...element,tipo: 'POR_TOMAR'} :  element
           
        )
        
        const { dataE } = await calendarApi.put(`/maestros/${_id}`,{ nombre, user_id, materias: materiasUserP  })
        console.log(dataE)

            
         
        } catch (error) {
            console.error(error)
        }
       
    }

    const startUpdateUserActiveE = async(arrayMateriasp) => {

        try {
            const {materias, _id, nombre, user_id} = userActive
            const materiasUserP = materias.map((element) => 
                arrayMateriasp.find(materia => materia.clave == element.clave) ? {...element,tipo: 'POR_TOMAR'} :  element
           
        )
        
        const { dataE } = await calendarApi.put(`/estudiantes/${_id}`,{ nombre, user_id,
            seleccion:true, materias: materiasUserP  })
       

            
         
        } catch (error) {
            console.error(error)
        }
       
    }


    const startUpdateNota = async(materiaM,estudiante) => {

        try {
           const estudiantesA = materiaM?.estudiantes?.map((element) => element.nombre == estudiante.nombre?   estudiante : element   )
            const materiaMA = {...materiaM, estudiantes: estudiantesA}
            
            const {materias, _id, nombre, user_id} = userActive
            const materiasNotaA = materias.map((element) => 
                materiaMA.clave == element.clave ? {...materiaMA} :  element
           
        )
       await calendarApi.put(`/maestros/${_id}`,{ nombre, user_id, materias: materiasNotaA  })


      const {data} = await calendarApi.get(`/estudiantes/user/${estudiante.uid}`)
      const materiasNotaAE = data?.materias?.map(element => materiaM.clave == element.clave?  {...materiaMA, nota: estudiante.nota }  : element)
      console.log(materiasNotaAE)


      await calendarApi.put(`/estudiantes/${data._id}`,{ nombre: data.nombre, user_id: data.user_id , materias: materiasNotaAE  })
     
       

       
      

            
         
        } catch (error) {
            console.error(error)
        }
       
    }



    const startDeleteMateiras = async(materiasd) => {
   
        try {

            const {materias, _id, nombre, user_id} = userActive
            const materiasUserP = materias.map((element) => 
                materiasd.find(materia => materia.clave == element.clave) ? {...element,tipo: 'NO_TOMADA', nota: [0,0,0,0]} :  element
           
        )
        
        const { dataE } = await calendarApi.put(`/estudiantes/${_id}`,{ nombre, user_id,
             materias: materiasUserP  })
        } catch (error) {
            console.error(error)
        }
    }

    const startDeleteUser = async(id) => {
   
        try {
            await calendarApi.delete(`/usuarios/${ id }` );
            dispatch( deleteUser(id) );
        } catch (error) {
            console.error(error)
        }
    }



    return {
        //* Propiedades
        users, 
        userActive, 

        //* Métodos
        startUserPago,
        startUserActive,
        startgetUsers,
        startaddUser,
        startDeleteMateiras,
        startUpdateUser,
        startDeleteUser,
        startUpdateNota,
        startUpdateUserActiveM,
        startUpdateUserActiveE
    }

}