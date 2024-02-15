import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Dashboard } from './pages/Dashboard'
import { NavBar } from './components/Navbar'
import { useState } from 'react'
import { AuthWrapper } from './components/AuthWrapper'
import { PageNotFound } from './pages/PageNotFound'

function App() {
  const [userAuth, setUserAuth] = useState({
    loggedIn: false,
    username: ''
  })
  console.log(userAuth)
  return (
    <>
      <NavBar userAuth={userAuth} />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AuthWrapper loggedIn={userAuth.loggedIn} />}></Route>
          <Route path='/signup' element={<Signup setUserAuth={setUserAuth}/>}/>
          <Route path='/signin' element={<Signin setUserAuth={setUserAuth} />}/>
          <Route path='/dashboard' element={<Dashboard loggedIn={userAuth.loggedIn} />}/>
          <Route path='*' element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
