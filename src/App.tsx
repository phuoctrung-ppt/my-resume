import { Outlet, Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import { SideBar } from './components/SideBar/SideBar';
import { Content } from './layout/Content/Content';
import { Wrapper } from './layout/Wrapper/Wrapper';
import { About } from './pages/about/About';
import { Blog } from './pages/blog/Blog';
import { Contact } from './pages/contact/Contact';
import { Project } from './pages/project/Project';
import { Resume } from './pages/resume/Resume';

function App() {
  return (
    <div className="bg-image max-h-screen flex flex-col justify-center items-center p-7">
      <NavBar />
      <Routes>
        <Route
          element={
            <Wrapper>
              <SideBar />
              <Content>
                <Outlet />
              </Content>
            </Wrapper>
          }
        >
          <Route path="/" element={<About />} />
          <Route index path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/project" element={<Project />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
