import { ThemeProvider } from "@mui/system"
import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./routes"
import { LighTheme } from "./shared/themes"

function App() {

  return (
    <ThemeProvider theme={LighTheme}>
      <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>

    </ThemeProvider>
    
  )
}

export default App
