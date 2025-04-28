import './App.css'
import { RouterCom } from './Router/RouterCom'
import { BrowserRouter } from 'react-router-dom'


function App() {

  return (
    <>
      <BrowserRouter>
        <RouterCom />
      </BrowserRouter>
    </>
  )
}

export default App
