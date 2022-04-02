import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import Landing from "./components/login-reg-components/Landing";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import Dashboard from "./components/Dashboard";
import { Box } from "@mui/material";
import CreatePost from "./components/formComponents/CreatePost";
import EditPost from "./components/formComponents/EditPost";
import Login from "./components/login-reg-components/Login";
import Registration from "./components/login-reg-components/Registration";

function App() {
  const siteTheme = createTheme({
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
  });

  return (
    <ThemeProvider theme={siteTheme}>
      <Box className="App" sx={{ bgcolor: "primary.light" }}>
        <BrowserRouter>
          {/* Landing Page */}
          <Route exact path="/">
            <Landing />
          </Route>

          {/* Login and Register */}
          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/register">
            <Registration />
          </Route>

          {/* Dashboard */}
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>

          {/* Create a New Post */}
          <Route exact path="/posts/create">
            <CreatePost />
          </Route>

          <Route exact path="/posts/edit/:id">
            <EditPost></EditPost>
          </Route>
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
}

export default App;
