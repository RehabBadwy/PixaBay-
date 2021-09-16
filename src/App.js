import './App.css';
import Navbar from './Component/Navbar/Navbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Search from './Component/Search/Search'


function App() {
  return (
    <MuiThemeProvider>
      <div>
      <Navbar />
      <Search />
    </div>
    </MuiThemeProvider>
    
  );
}

export default App;
