import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Service } from './pages/Service';
import './sass/app.scss';

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service/:id" element={<Service />} />
      </Routes>
    </div>
  );
}

export default App;
