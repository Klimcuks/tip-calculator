import { useState } from 'react';
import './App.css';
import Bill from './components/Bill';
import Question from './components/Question';
import RatingTwo from './components/RatingTwo';
import RatingOne from './components/RatingOne';

import Total from './components/Total';

function App() {
  const [ total, setTotal] = useState(false)
  const [ tipOne, setTipOne ] = useState(0)
  const [ tipTwo, setTipTwo ] = useState(0)

  const totalTip = () => {
    return tipOne + tipTwo
  }

  return (
    <div className="App">
      <Question text={"how much was the bill?"}/>
      <Bill setTotal={setTotal}/>
      <Question text={"how did you like the service"}/>
      <RatingOne total={total} setTipOne={setTipOne}/>
      <Question text={"how did your friend like the service?"}/>
      <RatingTwo total={total} setTipTwo={setTipTwo}/>
      { total && <Total total={total} tipOne={tipOne} tipTwo={tipTwo} totalTip={totalTip()}/>}
    </div>
  );
}

export default App;
