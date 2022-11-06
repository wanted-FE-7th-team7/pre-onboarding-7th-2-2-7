import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Layout from './components/Layout';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
