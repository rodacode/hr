import Home from './pages/Home'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'
import './App.css';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <Home />
      </div>
    </ChakraProvider>

  );
}

export default App;
