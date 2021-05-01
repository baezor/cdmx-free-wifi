import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Dashboard from './components/Dashboard';

const darkTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#14b600',
    },
    type: 'light',
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <Dashboard />
      </ThemeProvider>
    </div>
  );
}

export default App;
