import React,{ useState, useEffect }from 'react'
import axios from 'axios'

import Header from './Components/Header/Header'
import Card from  './Components/Cards/Card'

function App() {

  const [data, setData] = useState([]);

  const headerGet = { 
    headers: {
      "Content-Type": "application/json",
       'Origin': 'brasil.hom.transform.click'
    }
  };

  useEffect( () => {
    async function getApi (){
      const response = await axios.get('https://api.hom.transform.click/search/opportunities?filter_materials=true&filter_subscribes=true', headerGet);

      setData(response.data.response.opportunities_data);
    }

    getApi();
 }, [])

  return (
    <div className="container">
        <Header/>
        <div className="container-card">

       {
          data.map(data => (
            <Card
            key={data._id}
            level={data.level}
            subscribe_title={(data.hasOwnProperty('subscribe_data')) ? data.subscribe_data.title : data.material_data.title}
            action_title={data.action_data.title}
            subscribe_available={(data.hasOwnProperty('subscribe_data')) ? data.subscribe_data.position.available : data.material_data.position.available }
            subscribe_data={(data.hasOwnProperty('subscribe_data')) ? data.subscribe_data : data.material_data}
            />  
          )) 
          }
       
        </div>
    </div>
    
  );
}

export default App;

