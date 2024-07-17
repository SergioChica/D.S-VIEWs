import { Register } from "./components/Pages/Register/Register"
import { LoginEmpleados } from "./components/Pages/Login/Loginempleados"
import { LoginAdmin } from "./components/Pages/Login/Loginadmin"
import React, { useEffect, useState } from "react"
import { Route, Switch } from "wouter"
import { AppContextProvider } from "./contexts/app.context"

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
          <Route path="/register">
            <Register />
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
