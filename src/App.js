import { Route, Routes } from "react-router";
import Header from "./components/header/Header";
import MainPage from "./components/main-page/MainPage";

function App() {
  return (
    <>

      <Header />


      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
