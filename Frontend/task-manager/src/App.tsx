import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './Routes/Routes'
import Navbar from './components/Navbar'
import { AuthProvider } from './context/AuthContext'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Navbar />
          <AppRoutes />
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
