import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './Routes/Routes'
import Navbar from './components/Navbar'
import { AuthProvider } from './auth/AuthProvider'

function App() {
  

  return (
    <>
      {/* <Homepage />
      <Dashboard /> */}
      <BrowserRouter>
        <AuthProvider>
          <Navbar />
          <AppRoutes />
        </AuthProvider>
      </BrowserRouter>
      {/* <AddTaskForm /> */}

    </>
  )
}

export default App
