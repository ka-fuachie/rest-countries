import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ApiProvider from './api/ApiContext';
import ThemeProvider from './theme/ThemeContext';
import MainLayout from './routes/MainLayout';
import Home from './routes/Home';
import Country from './routes/Country';

function App() {
  return (
    <BrowserRouter>
      <ApiProvider>
        <ThemeProvider>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="/:country" element={<Country />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </ApiProvider>
    </BrowserRouter>
  );
}

export default App;
