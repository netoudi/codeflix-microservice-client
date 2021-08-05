import { BrowserRouter } from 'react-router-dom';

import { CssBaseline, MuiThemeProvider } from '@material-ui/core';

import DialogSearchProvider from 'components/DialogSearch/DialogSearchProvider';
import Navbar from 'components/Navbar';

import AppRouter from 'routes/AppRouter';

import theme from './theme';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <DialogSearchProvider>
          <Navbar />
          <AppRouter />
        </DialogSearchProvider>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
