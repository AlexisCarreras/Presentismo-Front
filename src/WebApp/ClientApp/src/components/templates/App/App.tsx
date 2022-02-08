import { ThemeProvider } from '@material-ui/styles';
import theme             from '../../../theme/themeConfig';
// import { PruebasAtomos } from './atoms/PruebasAtomos';
import { Home } from '../Home/Home';
//import { Login } from '../Login/Login';
//import {HomeAdministrativo} from '../Home/HomeAdministrativo';
//import {HomeLider} from '../Home/HomeLider';


function App() {

  return (
    <ThemeProvider theme= { theme }>
     {/* <PruebasAtomos /> */}
     { <Home />}   
    {/* { <HomeLider />}    */}
     {/* {<Login/> } */}
     {/* { <HomeAdministrativo />  */ }
   
    </ThemeProvider>
  ); 
}

export default App;
