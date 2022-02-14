import { ThemeProvider } from '@material-ui/styles';
import theme             from '../theme/themeConfig';
// import { PruebasAtomos } from './atoms/PruebasAtomos';
import { Home } from './templates/Home/Home';

function App() {

  return (
    <ThemeProvider theme= { theme } >
      {/* <PruebasAtomos /> */}
      <Home />
    </ThemeProvider>
  ); 
}

export default App;
