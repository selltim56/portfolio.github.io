import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Index from "./pages/Index.jsx";
import Page_404 from "./pages/Page_404.jsx";
import Header from "./components/Header.jsx";
import Projets from "./pages/Projets.jsx";
import Competences from "./pages/Competences.jsx";
import Footer from "./components/Footer.jsx";
import About from "./pages/About.jsx";
import All_Projets from "./pages/All_projects.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Projet from "./pages/Projet.jsx";

function App() {
    return (
        <main className={"bg-[#ede7de]"}>
            <Router>
                <ScrollToTop />
                <Header />
                <Routes className={"z-20"}>
                    <Route path={"/"} element={<Index />} />
                    <Route path={"/about"} element={<About />} />
                    <Route path={"/skills"} element={<Competences />} />
                    <Route path={"/projects"} element={<Projets />} />
                    <Route path={"/all-projects"} element={<All_Projets />} />
                    <Route path="/project/:projectSlug" element={<Projet />} />
                    <Route path={"/*"} element={<Page_404 />} />
                </Routes>
                <Footer />
            </Router>
        </main>
    );
}

export default App;
