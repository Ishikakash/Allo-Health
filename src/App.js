
import './App.css';
//import List from './components/List';
import Series from './components/Series';
import Series1 from './components/Series1';
import Series2 from './components/Series2';
import Pizza from './components/Pizza';
import Burger from './components/Burger';
import Cakes from './components/Cakes';
import Drinks from './components/Drinks';
import Cookies from './components/Cookies';
import Buttons from './components/Buttons';
import Lists from './components/Lists';
import Breakfast from './components/Breakfast';
import Lunch from './components/Lunch';


function App() {
  return (
    <div>
      <Lists/>
      <Series/>
      <Series1/>
      <Series2/>
      <h1><b><center>Breakfast</center></b></h1>
      <Breakfast/>
      <h1><b><center>Lunch</center></b></h1>
      <Lunch/>
      <h1><b><center>Pizza</center></b></h1>
      <Pizza/>
      <h1><b><center>Burgers</center></b></h1>
      <Burger/>
      <h1><b><center>Cakes</center></b></h1>
      <Cakes/>
      <h1><b><center>Drinks</center></b></h1>
      <Drinks/>
      <h1><b><center>Cookies</center></b></h1>
      <Cookies/>
      <br/>
      <Buttons/>
    </div>
  );
}

export default App;
