import { useEffect } from 'react';
import Swal from 'sweetalert2';
import { useAuthStore, useForm } from '../../hooks';
import './LoginPage.css';


const registerFormFields = {
    registerName:      '',
    registerEmail:     '',
    registerPassword:  '',
    registerPassword2: '',
    registerRole: 'STUDENT_ROLE',
    carreSelect: 'SISTEMAS'
}


export const ResgisterPage = () => {
    const {  errorMessage, startRegister } = useAuthStore();
    const { registerEmail, registerName, registerPassword, registerPassword2, onInputChange:onRegisterInputChange, registerRole, carreSelect } = useForm( registerFormFields );
      

    const registerSubmit = ( event ) => {
        event.preventDefault();
        if ( registerPassword !== registerPassword2 ) {
            Swal.fire('Error en registro', 'Contraseñas no son iguales', 'error');
            return;
        }
        
        startRegister({ nombre: registerName, correo: registerEmail, password: registerPassword, rol: registerRole, carrera: [carreSelect]});
    }

    useEffect(() => {
        if ( errorMessage !== undefined ) {
          Swal.fire('Error en la autenticación', errorMessage, 'error');
        }    
      }, [errorMessage])
      


    

    return(
        <div className="row">
              
        <div className="col-md-6 login-form-2">
        <h3>Registro</h3>
        <form onSubmit={ registerSubmit }>
            <div className="form-group mb-2">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre"
                    name="registerName"
                    value={ registerName }
                    onChange={ onRegisterInputChange }
                />
            </div>
            <div className="form-group mb-2">
                <input
                    type="email"
                    className="form-control"
                    placeholder="Correo"
                    name="registerEmail"
                    value={ registerEmail }
                    onChange={ onRegisterInputChange }
                />
            </div>
            <div className="form-group mb-2">
                <input
                    type="password"
                    className="form-control"
                    placeholder="Contraseña" 
                    name="registerPassword"
                    value={ registerPassword }
                    onChange={ onRegisterInputChange }
                />
            </div>

            <div className="form-group mb-2">
                <input
                    type="password"
                    className="form-control"
                    placeholder="Repita la contraseña" 
                    name="registerPassword2"
                    value={ registerPassword2 }
                    onChange={ onRegisterInputChange }
                />
            </div>
            <div className="select-role">
            <label>
Tipo de usuario:
<select
className='login-form-1'
value={registerRole}
name="registerRole"
onChange={onRegisterInputChange}
>
<option value="ADMIN_ROLE">Admin</option>
<option value="STUDENT_ROLE">Estudiante</option>
<option value="TEACHER_ROLE">Maestro</option>
</select>
</label>
</div>
{
    registerRole !== "ADMIN_ROLE" ? 
    (<div className="select-role">
        <label>
Carrera:
<select
className='login-form-1'
value={carreSelect}
name="carreSelect"
onChange={onRegisterInputChange}
>
<option value="CONTABILIDAD">CONTABILIDAD</option>
<option value="SISTEMAS">SISTEMAS</option>
<option value="ENFERMERIA">ENFERMERIA</option>
<option value="MANTENIMIENTO INDUSTRIAL">MANTENIMIENTO INDUSTRIAL</option>
<option value="REFIGERACION INDUSTRIAL">REFIGERACION INDUSTRIAL</option>
<option value="GASTRONOMIA">GASTRONOMIA</option>
</select>
</label>
</div>):  ""
}

            <div className="d-grid gap-2">
                <input 
                    type="submit" 
                    className="btnSubmit" 
                    value="Crear cuenta" />
            </div>
        </form>
    </div>
    </div>
    )
}