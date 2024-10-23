import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { LoginPage } from '../auth';
import{UniPage}  from '../uni/pages/UniPage'

import { useAuthStore } from '../hooks';
import { AdministrarPage } from '../uni/pages/AdministrarPage';
import { InformacionesPage } from '../uni/pages/InformacionesPage';
import { SolicitudesE } from '../uni/pages/SolicitudesE';
import { SolicitudesM } from '../uni/pages/SolicitudesM';
import { AdministrarPagoPage } from '../uni/pages/AdministrarPagoPage';
import {CalendarioPage} from '../uni/pages/CalendarioPage'
import {CalificacionesE} from '../uni/pages/CalificacionesE'
import {RetiroEPage} from '../uni/pages/RetiroEPage'
import {SolicitudesAEPage} from '../uni/pages/SolicitudesAEPage'
import { VerCalificacionPage } from '../uni/pages/VerCalificacionPage';
import { SelecionAsignaturaPage } from '../uni/pages/SelecionAsignaturaPage';
import { PagoPage } from '../uni/pages/PagoPage';
import { RetiroCicloPage } from '../uni/pages/RetiroCicloPage';
import { RetiroAsignaturaPage } from '../uni/pages/RetiroAsignaturaPage';
import { CalendarioMPage } from '../uni/pages/CalendarioMPage';
import { AsignaturasMPage } from '../uni/pages/AsignaturasMPage';
import { PublicarCalificacionesPage } from '../uni/pages/PublicarCalificacionesPage';
import { HomePage } from '../uni/pages/HomePege';



export const AppRouter = () => {

    const { status,checkAuthToken,  user } = useAuthStore();
    // const authStatus = 'not-authenticated'; // 'authenticated'; // 'not-authenticated';
     
    

    useEffect(() => {
        checkAuthToken();
    }, [])

 let rol = user.rol
  
        
 
    


    if ( status === 'checking' ) {
        return (
            <h3>Cargando...</h3>
        )
    }

    
    return (
        <Routes>
            {
                ( status === 'not-authenticated')  
                    ? (
                        <>
                            <Route path="/" element={ <HomePage /> } />
                            <Route path="/auth/login" element={ <LoginPage /> } />
                        
                        </>
                    )
                    :   ( rol === 'TEACHER_ROLE')  
                    ? (
                        <>



                            <Route path="/" element={ <CalendarioMPage /> } />
                              <Route path="/solicitud/asignatura/maestro" element={ <SolicitudesM /> } />
                              <Route path="/asignatura/maestro" element={ <AsignaturasMPage /> } />
                              <Route path="/publicar/calificaciones" element={ <PublicarCalificacionesPage /> } />
                              <Route path="/auth/login" element={ <Navigate to="/" /> } />
                        </>
                    )
                    : ( rol === 'STUDENT_ROLE')  
                    ? (
                        <>
                            <Route path="/" element={ <CalendarioPage /> } /> 
                            <Route path="/estudiante/Calificaciones" element={ <CalificacionesE /> } /> 
                            <Route path="/retirar" element={ <RetiroEPage /> } /> 
                            <Route path="/solicitud/asignatura" element={ <SolicitudesAEPage /> } /> 
                            <Route path="/estudiante/pagos" element={ <PagoPage /> } /> 
                            <Route path="/ver/calificacion" element={ <VerCalificacionPage /> } /> 
                            <Route path="/seleccion/asignatura" element={ <SelecionAsignaturaPage /> } /> 
                            <Route path="/retiro/ciclo" element={ <RetiroCicloPage /> } /> 
                            <Route path="/retiro/materia" element={ <RetiroAsignaturaPage /> } /> 
                            <Route path="/auth/login" element={ <Navigate to="/" /> } />
                        </>
                    )
                    : (
                        <>

                           <Route path="/" element={ <UniPage /> } /> 
                            <Route path="/administrar" element={ <AdministrarPage /> } /> 
                            <Route path="/informaciones" element={ <InformacionesPage /> } /> 
                            <Route path="/solicitudes/estudiantes" element={<SolicitudesE/>} />
                            <Route path="/solicitudes/maestros" element={<SolicitudesM/>} />
                            <Route path="/administrar/pagos" element={<AdministrarPagoPage/>} />
                            <Route path="/auth/login" element={ <Navigate to="/" /> } />

                        </>
                    )
            }

        </Routes>
    )
}
