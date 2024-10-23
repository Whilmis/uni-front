import React, { useState, useEffect } from 'react';
import { useUserStore} from '../../hooks'



const AdminUserComponent = () => {
 const {startgetUsers, users, startUpdateUser, startDeleteUser} = useUserStore();

 useEffect(() => {
  startgetUsers() ;
}, [])
 



  const [editingUser, setEditingUser] = useState(null);

  const startEditing = (user) => {
   
    setEditingUser({ ...user,password: "" });
  };

  const cancelEditing = () => {
    setEditingUser(null);
  };

  const updateUser = () => {
    startUpdateUser(editingUser);
    setEditingUser(null);
  };

  const deleteUser =(e) =>{
const {uid} = e ;
console.log(uid)
startDeleteUser(uid);

   
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditingUser({
      ...editingUser,
      [name]: value
    });
  };

  return (
    <div>
      <h1>Administración de Usuarios</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo Electrónico</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.uid}>
              <td>{user.nombre}</td>
              <td>{user.correo}</td>
              <td>{user.rol}</td>
              <td>
                <button onClick={() => startEditing(user)}>Editar</button>
                <button onClick={() => deleteUser(user)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingUser && (
        <div className="edit-form">
          <h2>Editar Usuario</h2>
          <label>
            Nombre:
            <input
              type="text"
              name="nombre"
              value={editingUser.nombre}
              onChange={handleChange}
            />
          </label>
          <label>
            Correo Electrónico:
            <input
              type="email"
              name="correo"
              value={editingUser.correo}
              onChange={handleChange}
            />
          </label>
          <label>
            Contraseña:
            <input
              type="password"
              name="password"
              value={editingUser.password}
              onChange={handleChange}
            />
          </label>
          <label>
            Rol:
            <select
              name="rol"
              value={editingUser.rol}
              onChange={handleChange}
            >
              <option value="STUDENT_ROLE">Estudiante</option>
              <option value="TEACHER_ROLE">Maestro</option>
              <option value="ADMIN_ROLE">Administrador</option>
            </select>
          </label>
          <div className="buttons">
            <button onClick={updateUser}>Guardar</button>
            <button onClick={cancelEditing}>Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminUserComponent;