//https://reactrouter.com/en/v6.3.0/getting-started/overview
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Details from './pages/details';
import About from './pages/about';

function App() {

  return (
    <Router>
      {/* <Header/> */}
      <Routes>
        <Route index element={<Home />} />
        <Route path="/details/:id" element={<Details />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </Router>
  );
}

export default App;
