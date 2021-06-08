import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import AppRouter from './routes/AppRouter';
import theme from './theme';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
