import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage/HomePage";
import AppShell from "./AppShell/AppShell";
import Services from "./pages/Services/Services";
import Projects from "./pages/Projects/Projects";
import AboutUs from "./pages/AboutUs/AboutUs";
import Blog from "./pages/Blog/Blog";

function App() {
  return (
    <>
      <Routes>
        <Route element={<AppShell />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/blog" element={<Blog/>}/>

        </Route>
      </Routes>
    </>
  );
}

export default App;
