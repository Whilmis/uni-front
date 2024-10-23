import {Navbar} from '../'
import { ResgisterPage } from '../../auth/pages/RegisterPage'
import AdminUserComponent from '../components/AdminUserComponet'





export const AdministrarPage = () => {
 

  return (
    <>
    <Navbar active={'administrar'} />

    <AdminUserComponent />
    <ResgisterPage />
    


    
    </>
  )
}
