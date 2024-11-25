
//import { BasicFunctions } from './typescript/BasicFunctions'
//import { BasicTypes } from './typescript/BasicTypes'
//import { ObjectLiterals } from './typescript/ObjectLiterals'

/* import { Counter } from "./components/Counter"
import LoginPage from "./components/LoginPage" */
/* import UserPage from "./components/UserPage" */
import { FormsPage } from "./components/FormsPage"
import { AuthProvider } from "./context/AuthContext"

function App() {

  return (

    <AuthProvider>
      <div className="flex flex-col justify-center items-center h-svh">
        <h1 className="text-4xl mb'5">React + ts</h1>
        {/*  <BasicTypes /> */}
        {/* <ObjectLiterals /> */}
        {/*     <BasicFunctions /> */}
        {/* <Counter /> */}

        {/*     <LoginPage /> */}
        {/*   <UserPage /> */}
        <FormsPage />>
      </div>

    </AuthProvider>

  )
}

export default App
