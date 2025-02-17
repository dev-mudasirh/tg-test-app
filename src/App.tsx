
import './App.css'
import TelegramLoginButton, { TelegramUser } from 'telegram-login-button'
import TelegramLogin from './telegram-login'

function App() {

  return (
    <>
    {/* <TelegramLoginButton
    botName="testindevbot"
    dataOnauth={(user: TelegramUser) => console.log(user)}
    dataAuthUrl='https://kolpad.xyz'
  /> */}

  <TelegramLogin />
     
    </>
  )
}

export default App
