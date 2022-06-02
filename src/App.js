import { ThemeProvider } from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import React from "react";
import { Cardlist } from "./components/CardList";
import GlobalStyles from "./components/styles/Global";



const theme = {
  colors: {
    header: '#666666',
    body: '#333333',
    footer: '#4183C4'
  },
  mobile: '768px'
}

function App() {

  return (
    <ThemeProvider theme = {theme}>
    <>
    <GlobalStyles />
    <Header/>
    <Cardlist/>
    <Footer/>
    </>
    </ThemeProvider>
  );
}

export default App;
