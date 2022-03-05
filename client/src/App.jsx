
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom/cjs/react-router-dom.min';
import SignIn from './components/SignIn';
import Landing from './components/Landing';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import NavBar from './components/NavBar'
import Dashboard from './components/Dashboard';
import RegisteredNavBar from './components/RegisteredNavBar';
import { Container } from '@mui/material';
import { Box } from '@mui/material';
import CreatePost from './components/CreatePost';






function App() {

  const siteTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        light: ' #fff1ff',
        main: '#e1bee7',
        dark: '#af8eb5',
        contrastText: '#ffffff'
      },
      secondary: {
        light: '#ffc4ff',
        main: '#ce93d8',
        dark: '#9c64a6',
        contrastText: '#000000'
      },
    },

  })

         {/* 
          ????????????????  Navbar will be visible on all routes, but different nav buttons depending on page user is currently on.  Not just registered/not-resgistered
        
        ??????  Do API calls need to be on every component for the dashboard?    Yes becuase of the indivdual routes of each component*/}



  return (
    <ThemeProvider theme={siteTheme}>
      <Box className="App"
        sx={{ bgcolor: 'primary.light' }}>
        <BrowserRouter>

          {/* Landing Page */}
          <Route exact path='/'>
            <NavBar/>
            <Landing/>
          </Route>

          {/* Login and Register */}
          <Route exact path='/signin'>
            <NavBar/>
            <SignIn />
          </Route>


          {/* Dashboard */}
          <Route exact path='/dashboard'>
            <RegisteredNavBar />
            <Dashboard />
          </Route>

          {/* Create a New Post */}
          <Route exact path='/posts/create'>
            <RegisteredNavBar />
            <CreatePost />
          </Route>

        </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
}

export default App;
