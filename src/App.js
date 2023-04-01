import { Navigate, Route, Routes } from "react-router";
import Header from "./components/header/Header";
import MainPage from "./components/main-page/MainPage";
import StoryPage from "./components/story-page/StoryPage";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/story/:id' element={<StoryPage />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </>
  );
}

export default App;
