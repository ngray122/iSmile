
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom/cjs/react-router-dom.min';
import SignIn from './components/SignIn';
import Landing from './components/Landing';
import {createTheme} from '@mui/material/styles';
import { ThemeProvider} from '@mui/material/styles';





function App() {

  const siteTheme = createTheme({
    palette: {
        mode: 'light',
          primary: {
            light:' #fff1ff',
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
  return (
    <ThemeProvider theme={siteTheme}>
    <div className="App">
      <BrowserRouter>
        <Route exact path ='/'>
          <Landing></Landing>
        </Route>
        <Route exact path='/login'>
          <SignIn/>
        </Route>

      </BrowserRouter>

    </div>
    </ThemeProvider>
  );
}

export default App;
