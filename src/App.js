import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'react-quill/dist/quill.snow.css';
import Layout from "./Layout";
import Main from "./Main";
import MainView from "./MainView";



function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainView />}></Route>
          <Route path="/notes" element={<MainView />}></Route>
          <Route path="/notes/:id" element={<MainView />}></Route>
          <Route path="/notes/:id/:edit" element={<Main />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
       
  </> 

  );
}

export default App;
