import React from 'react'

import data from './data'
import Header from './Components/Header/Header'
import Card from  './Components/Cards/Card'



function App() {
 
  
  return (
    <div className="container">
        <Header/>


        <div className="container-card">

       {data.map(card => (
         <Card
          kind_job={card.kind_job}
          title={card.title}
          title_icon={card.title_icon}
          project={card.project}
          hourly_load={card.hourly_load}
          how_long={card.how_long}
          contributtion={card.contributtion}
          locale={card.locale}
       
          /> 
          ))}
      
        </div>
    </div>
  );
}

export default App;
