

import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './Routes/Routes'

function App() {
  

  return (
    <>
      {/* <Homepage />
      <Dashboard /> */}
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      {/* <AddTaskForm /> */}

    </>
  )
}

export default App
