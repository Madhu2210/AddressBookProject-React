import './App.css';
import Form from './components/AddressForm/Address-form';
import {BrowserRouter, Route,Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/home" element={ <Home/>} />
      <Route path="/form" element={<Form />}>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
