import Dashboard from './pages/Dashboard'
import CreatePost from './components/CreatePost';
import {Routes,Route,Navigate} from "react-router-dom"
import ProtectedRoute from './utils/ProtectedRoute';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Footer from '../src/components/Footer';
const App = ()=>{
  return(
    <>
      <Routes>
        <Route path='/' element={<Navigate to="/dashboard"/>}/>
        <Route path='/post' element={<Navigate to="/createPost"/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
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
      </Routes>
    </>
  )
}
export default App;