import { Register } from "./components/Pages/Register/Register"
import { LoginEmpleados } from "./components/Pages/Login/Loginempleados"
import { LoginAdmin } from "./components/Pages/Login/Loginadmin"
import { Route, Switch } from "wouter"
import { AppContextProvider } from "./contexts/app.context"
import { Home } from "./components/Pages/Home/Home"



function App() {
  return (
    <AppContextProvider>
      <div className="min-h-screen w-full flex flex-col ">
        <Switch>
          <Route path="/loginadmin">
            <LoginAdmin />
          </Route>
          <Route path="/loginempleados">
            <LoginEmpleados />
          </Route>
          <Route path="/home">
            <Home />
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
