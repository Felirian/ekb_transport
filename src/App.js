import Media from "./pages/Media";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import Logo from "./pages/Logo";
import Style from "./pages/Style";
import Header from "./components/Header";
import {GlobalStyle} from "./shared/styles";
import Footer from "./components/Footer";
import PageUp from "./components/PageUp";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <PageUp/>
      <Header/>
      <Routes>
        <Route path={'/*'} element={<Main/>}/>
        <Route path={'/logo'} element={<Logo/>}/>
        <Route path={'/style'} element={<Style/>}/>
        <Route path={'/media'} element={<Media/>}/>

        <Route path="*" element={<Navigate to={'/'} replace/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}


export default App;
