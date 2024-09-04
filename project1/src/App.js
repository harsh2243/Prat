import logo from './logo.svg';
import './App.css';
import Item from './components/Item';
import Itemdate from './components/Itemdate';
import Card from './components/Card'




function App() {

  //const itemtwoName="Surfexcel"

  const response=[
    {
      itemName:"Nirma",
      itemDate:"20",
      itemMonth:"June",
      itemyear:"2005"
    },
    {
      itemName:"Nirma2",
      itemDate:"10",
      itemMonth:"June",
      itemyear:"2003"
    },
    {
      itemName:"Nirma3",
      itemDate:"30",
      itemMonth:"June",
      itemyear:"2013"
    },
  ]
  return (
    
    <div>
      
      <Card>
      <Item name={response[0].itemName} >
      harshvardhan yadav ranchi
     </Item>
     <Itemdate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemyear}></Itemdate>

     <Item name={response[1].itemName}  ></Item>
     <Itemdate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemyear}></Itemdate>

     <Item name={response[2].itemName}  ></Item>
     <Itemdate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemyear}></Itemdate>
    <div className="App">
     <h1>Harshvardhan Yadav</h1>
      <h2>Sviet</h2>
   

   </div>
    

      </Card>
      
     
      </div>
  );
}

export default App;
