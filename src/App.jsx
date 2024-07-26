import { Register } from "./components/Pages/Register/Register"
import { LoginEmpleados } from "./components/Pages/Login/Loginempleados"
import { LoginAdmin } from "./components/Pages/Login/Loginadmin"
import { Route, Switch } from "wouter"
import { AppContextProvider } from "./contexts/app.context"
import { Home } from "./components/Pages/Home/Home"
import { CreateUsers } from "./components/Pages/create/CreateUsers/CreateUsers"
import { Asistence } from "./components/Pages/Asistence/Asistence"
import { Registerlist } from "./components/Pages/Registerlist/Registerlist"





function App() {
  return (
    <AppContextProvider>
      <div className="min-h-screen max-w-[1920px] mx-auto w-full flex flex-col ">
        <Switch>
          <Route path="/loginadmin">
            <LoginAdmin />
          </Route>
          <Route path="/loginempleados">
            <LoginEmpleados />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/registeredlist">
            <Registerlist />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/asitencia">
            <Asistence />
          </Route>
          <Route path="/createusers">
            <CreateUsers />
          </Route>
          <Route>
            <div>404: No such page</div>
          </Route>
        </Switch>
      </div>
    </AppContextProvider>
  )
}

export default App
