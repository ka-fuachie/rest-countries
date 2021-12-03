import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import MainLayout from './routes/MainLayout';
import Home from './routes/Home';
import Country from './routes/Country';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/:country" element={<Country />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
