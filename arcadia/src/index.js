import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login.jsx";
import ErrorPage from "./pages/errorPage.jsx";
import Overview from "./pages/overview.jsx";


import './assets/css/index.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/error" element={<ErrorPage />}></Route>
        <Route path="/overview" element={<Overview />}></Route>


      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);