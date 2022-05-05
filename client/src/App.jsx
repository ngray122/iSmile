import {
  Switch,
  BrowserRouter,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import CreatePostWrapper from "./components/CreatePostWrapper";
import Landing from "./components/login-reg-components/Landing";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import Dashboard from "./components/Dashboard";

import Login from "./components/login-reg-components/Login";
import Registration from "./components/login-reg-components/Registration";
import Box from "@mui/material/Box";
import { AuthContextProvider, AuthContext } from "./components/AuthContext";
import { Redirect } from "react-router-dom";
import EditPostWrapper from "./components/EditPostWrapper";

function App() {
  const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        light: "#6C5B7B ",
        main: "#black",
        dark: "#FF8080",
        contrastText: "#ffffff",
      },
      secondary: {
        light: "#ffc4ff",
        main: "#ce93d8",
        dark: "#9c64a6",
        contrastText: "#000000",
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 850,
        lg: 1200,
        xl: 1536,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <div className="App" sx={{ bgcolor: "primary.light" }}>
          <BrowserRouter>
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Registration} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Redirect to="/" />
            <Route exact path="/posts/create" component={CreatePostWrapper} />
            <Route exact path="/posts/edit/:id" component={EditPostWrapper} />
          </BrowserRouter>
        </div>
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
