import Dashboard from './pages/Dashboard'
import CreatePost from './components/CreatePost';
import {Routes,Route,Navigate,useLocation} from "react-router-dom"
import ProtectedRoute from './utils/ProtectedRoute';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MainLayout from './Layouts/MainLayout';
import { Toaster } from 'sonner';

const App = ()=>{
  return(
    <>
      <Toaster  position="top-center" richColors />
      <Routes>
        <Route path='/' element={<Navigate to="/dashboard"/>}/>
        <Route path='/post' element={<Navigate to="/createPost"/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route element={<MainLayout/>}>
          <Route
        path='/dashboard'
        element={
        <ProtectedRoute>
            <Dashboard/>
        </ProtectedRoute>
        }
        />
        <Route
        path='/createPost'
        element={
          <ProtectedRoute>
            <CreatePost/>
          </ProtectedRoute>
        }/>
        </Route>
      </Routes>
      
    </>
  )
}
export default App;