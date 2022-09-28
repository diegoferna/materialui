import { Button } from "@mui/material"
import { Navigate, Route, Routes } from "react-router-dom"

export const AppRoutes = () =>  {
    return(
        <Routes>
            <Route path="/pagina-incial" element={<Button variant="contained" color="primary">Página Inicial</Button>}/>
            <Route path="*" element={<Navigate to="/pagina-incial"></Navigate>}/>
        </Routes>
    )
}