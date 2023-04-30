import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WhatsHot } from './components/WhatsHot';
import { NewReleases } from './components/NewReleases';
import { HeaderHome } from './components/HeaderHome';
import { FooterHome } from './components/FooterHome';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <HeaderHome/>
    <Routes>
      <Route index element={<WhatsHot />} />
        <Route path="new" element={<NewReleases />} />
        <Route path="hot" element={<WhatsHot />} />
    </Routes>
  </BrowserRouter>
  <FooterHome/>
    </div>
  );
}

export default App;
