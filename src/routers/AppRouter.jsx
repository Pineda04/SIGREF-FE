import { Route, Routes } from "react-router"
import { Login } from "../pages/auth"

export const AppRouter = () => {
  return (
    <Routes>
        <Route>
            <Route path="/" element={<Login/>}/>
        </Route>
    </Routes>
  )
}