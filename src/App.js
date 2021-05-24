import React from 'react'
import Header from './Components/Header/Header'

import Doacao from './Components/Cards/Doacao/Doacao'
import Voluntariado from './Components/Cards/Voluntariado/Voluntariado';
import Arrecadacao from './Components/Cards/Arrecadacao/Arrecadacao';

function App() {
 
  
  return (
    <div className="container">
        <Header/>


        <div className="container-card">
          <Voluntariado/>
          <Doacao/>
          <Arrecadacao />

          <Voluntariado/>
          <Doacao/>
          <Arrecadacao />

          <Voluntariado/>
          <Doacao/>
          <Arrecadacao />
        </div>
    </div>
  );
}

export default App;
