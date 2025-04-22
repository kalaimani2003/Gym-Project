import './App.css'
import { Inp } from './common/input-box/Inp'
import { LoginPage } from './components/Login page/LoginPage'
import { RouterCom } from './components/Router/RouterCom'
import { LoginFirstpage } from './screens/loginpage/loginFirstpage'
import { BrowserRouter } from 'react-router-dom'


function App() {

  return (
    <>
      <BrowserRouter>
        <RouterCom />
      </BrowserRouter>
      {/* <Inp inp_icon={<EmailIcon/>} inp_type={"number"} inp_plac="Enter Your Number" /> */}
    </>
  )
}

export default App
