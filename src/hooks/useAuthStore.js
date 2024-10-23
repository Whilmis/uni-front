import { useDispatch, useSelector } from 'react-redux';
import { calendarApi } from '../api';
import { clearErrorMessage, onChecking, onLogin, onLogout } from '../store';
import{useUserStore} from './index'


export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector( state => state.auth );
    const dispatch = useDispatch();
    const{startUserActive} =  useUserStore()

    const startLogin = async({ email, password }) => {
       
        try {
            const {data } = await calendarApi.post('/auth/login',{correo: email, password });
            const {usuario, token} = data 
            localStorage.setItem('token', token );
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch( onLogin({ nombre: usuario.nombre, rol: usuario.rol ,uid: usuario.uid }) );


            if(usuario.rol == 'TEACHER_ROLE'){
                const { data } = await calendarApi.get(`/maestros/user/${usuario.uid}`);

                startUserActive( data )


            }else if(usuario.rol == "STUDENT_ROLE"){
                const { data } = await calendarApi.get(`/estudiantes/user/${usuario.uid}`);

                startUserActive( data )
            }


    
            

           
    
            
        } catch (error) {
            dispatch( onLogout('Credenciales incorrectas') );
            setTimeout(() => {
                dispatch( clearErrorMessage() );
            }, 10);
        }
    }

    const startRegister = async({ correo, password, nombre, rol, carrera }) => {
        dispatch( onChecking() );
        try {
         
            const { data } = await calendarApi.post('/usuarios',{ correo, password, nombre, rol });
           
            const {usuario} = data 

            dispatch( onLogin({ nombre: usuario.name, uid: usuario.uid }) );

            if(rol == "STUDENT_ROLE") {
                const { dataE } = await calendarApi.post('/estudiantes',{   nombre,  carrera,user_id:usuario.uid })
                console.log(dataE )
            } else if(rol == "TEACHER_ROLE"){
                const { dataE } = await calendarApi.post('/maestros',{   nombre,  carrera, user_id:usuario.uid  })
                console.log(dataE )
            } 

            

          
            
        } catch (error) {
            dispatch( onLogout( error.response.data?.msg || '--' ) );
            console.log('catch')
            setTimeout(() => {
                dispatch( clearErrorMessage() );
            }, 10);
        }
    }


    const checkAuthToken = async() => {
        const token = localStorage.getItem('token');
        if ( !token ) return dispatch( onLogout() );

        try {
            const { data } = await calendarApi.get('auth/renew');
            localStorage.setItem('token', data.token );
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch( onLogin({ name: data.name, uid: data.uid }) );
       
        } catch (error) {
            localStorage.clear();
            dispatch( onLogout() );
        }
    }

    const startLogout = () => {
        localStorage.clear();
       
        dispatch( onLogout() );
       
    }



    return {
        //* Propiedades
        errorMessage,
        status, 
        user, 

        //* Métodos
        checkAuthToken,
        startLogin,
        startLogout,
        startRegister,
    }

}