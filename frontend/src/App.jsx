import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Dashboard } from './pages/Dashboard'
import { NavBar } from './components/Navbar'
import { AuthWrapper } from './components/AuthWrapper'

function App() {
 
  return (
    <>
      <NavBar />
        <Routes>
          <Route path='/signup' element={localStorage.getItem('token')== null ?<Signup /> : <Dashboard />}/>
          <Route path='/signin' element={localStorage.getItem('token')== null ?<Signin /> : <Dashboard />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='*' element={<AuthWrapper />}></Route>
        </Routes>
    </>
  )
}

export default App
