import MyForm from './from';
import Home from './Home';
import Display from './display';
import {Routes , Route} from 'react-router-dom';
import Updation from './update';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<MyForm />} />
      <Route path="/edit/:id" element={<Updation />} />
      <Route path="/details" element={<Display/>} />
    </Routes>
    </>
  );
}

export default App;
