import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import Landing from "./components/login-reg-components/Landing";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import RegisteredNavBar from "./components/RegisteredNavBar";
import Login from "./components/login-reg-components/Login";
import Registration from "./components/login-reg-components/Registration";
import Profile from "./components/Profile";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import EditPost from "./components/formComponents/EditPost";
import CreatePost from "./components/formComponents/CreatePost";

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

          {/* Login */}
          <Route exact path="/login">
            <Login />
          </Route>

          {/* Register */}
          <Route exact path="/register">
            <Registration />
          </Route>

          {/* Dashboard */}
          <Route exact path="/dashboard">
            <RegisteredNavBar />
            <Dashboard />
          </Route>

          {/* Create a New Post */}
          <Route exact path="/posts/create">
            <RegisteredNavBar />
            <Grid container spacing={3} m={1} p={1}>
              <Grid item xs={12} sm={6} md={4}>
                <Profile />
              </Grid>
              <Grid item xs={12} sm={6} md={8}>
                <CreatePost />
              </Grid>
            </Grid>
          </Route>

          <Route exact path="/posts/edit/:id">
            <RegisteredNavBar />
            <Grid container spacing={3} m={1} p={1}>
              <Grid item xs={12} sm={6} md={4}>
                <Profile></Profile>
              </Grid>
              <Grid item xs={12} sm={6} md={8}>
                <EditPost></EditPost>
              </Grid>
            </Grid>
          </Route>
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
}

export default App;
