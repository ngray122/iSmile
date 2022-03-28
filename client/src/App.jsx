import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import SignIn from "./components/SignIn";
import Landing from "./components/Landing";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import RegisteredNavBar from "./components/RegisteredNavBar";
import { Box } from "@mui/material";
import Profile from "./components/Profile";
import Grid from "@mui/material/Grid";
import EditPost from "./components/formComponents/EditPost";
import CreatePost from "./components/formComponents/CreatePost";

function App() {
  const siteTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        light: " #fff1ff",
        main: "#e1bee7",
        dark: "#af8eb5",
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
      <Box className="App" sx={{ bgcolor: "primary.light", minHeight: "100%" }}>
        <BrowserRouter>
          {/* Landing Page */}
          <Route exact path="/">
            <NavBar />
            <Landing />
          </Route>

          {/* Login and Register */}
          <Route exact path="/signin">
            <NavBar />
            <SignIn />
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
