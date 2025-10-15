// Default Imports 

import { Box } from '@mui/material';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


// Components (Custom Imports )

import Header from './components/header/Header'
import Home from './components/home/Home';
import DataProvider from './context/DataProvider';





function App() {
  return (
    <DataProvider>

      <Header />   {/* Fixed at one position */}
      
      <Box style={{marginTop:54}}>
       <Home/>
      </Box>
      <ToastContainer position="top-center" autoClose={2000} />
    </DataProvider>
    
  );
}

export default App;
