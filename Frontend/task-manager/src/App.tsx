import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './Routes/Routes'
import Navbar from './components/Navbar'

function App() {
  

  return (
    <>
      {/* <Homepage />
      <Dashboard /> */}
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
      {/* <AddTaskForm /> */}

    </>
  )
}

export default App
