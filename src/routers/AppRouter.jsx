import { Route, Routes } from "react-router"
import { AppAuthRouter } from "../pages/auth/routers"

export const AppRouter = () => {
  return (
    <Routes>
        <Route>
            <Route path="/*" element={<AppAuthRouter/>}/>
        </Route>
    </Routes>
  )
}