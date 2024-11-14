import './App.css'
import { useAuthContext } from './context/AuthProvider'
import Router from './routes/Routes'

function App() {
const {authUser,setAuthUser}=useAuthContext()
console.log(authUser,'attt')
  return (
    <>
      <Router/>
    </>
  )
}

export default App
