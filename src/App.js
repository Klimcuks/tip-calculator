import './App.css';
import Bill from './components/Bill';
import Question from './components/Question';
import Rating from './components/Rating';
import Total from './components/Total';

function App() {
  return (
    <div className="App">
      <Question text={"how much was the bill?"}/>
      <Bill/>
      <Question text={"how did you like the service"}/>
      <Rating/>
      <Question text={"how did your friend like the service?"}/>
      <Rating/>
      <Total/>
    </div>
  );
}

export default App;
