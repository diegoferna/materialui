import { Navigate, Route, Routes } from "react-router-dom"

export const AppRoutes = () =>  {
    return(
        <Routes>
            <Route path="/pagina-incial" element={<p>Página Inicial</p>}/>
            <Route path="*" element={<Navigate to="/pagina-incial"></Navigate>}/>
        </Routes>
    )
}