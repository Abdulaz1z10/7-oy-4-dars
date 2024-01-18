import React  from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Blog from './component/Blog';
import Works from './component/Works';
import Contact from './component/Contact';
import WorksMini from './component/WorksMini';
import Auth from './component/Auth';
import Admin from './component/Admin';
import SuperAdmin from './component/SuperAdmin';
import DeleteModal from './component/DeleteModal';
import ModalApp from './component/ModalApp';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/works" element={<Works />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/works_mini" element={<WorksMini />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="admin" element={<Admin />} />
      <Route path="super_admin" element={<SuperAdmin />} />
      <Route path="delete_modal" element={<DeleteModal />} />
      <Route path="modalapp" element={<ModalApp />} />
    </Routes>
  );
}
