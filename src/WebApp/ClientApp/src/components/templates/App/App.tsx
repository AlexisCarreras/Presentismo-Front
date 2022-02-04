import { ThemeProvider } from '@material-ui/styles';
import theme             from '../../../theme/themeConfig';
// import { PruebasAtomos } from './atoms/PruebasAtomos';
//import { Home } from './templates/Home/Home';
import { Login } from '../Login/Login';

function App() {

  return (
    <ThemeProvider theme= { theme }>
      {/* <PruebasAtomos /> */}
     { /*<Home />   */}
     <Login/>
    </ThemeProvider>
  ); 
}

export default App;
