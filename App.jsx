import { Routes,Route } from 'react-router-dom';
import Navbar from '../src/pages/navbar'
import Home from '../src/pages/home'
import { AuthContextProvider } from './context/AuthContext';
import Login from './Login';
import Signup from './Signup';
import Account from '../src/pages/Account'
import ProtectedRoute from './pages/protectedRoute';
function App() {
  return (
    <div className="bg-black h-full ">
    <AuthContextProvider>
        <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/account' element={<ProtectedRoute><Account /></ProtectedRoute>} />
      </Routes>
    </AuthContextProvider>
     
    </div>
  );
}

export default App;

