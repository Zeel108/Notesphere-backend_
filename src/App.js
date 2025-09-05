import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddNote from "./components/AddNote";
import Navbar from "./components/Navbar";
import NoteDetails from "./components/NoteDetails";
import NotesList from './components/NotesList';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div>
        <Routes>
          <Route path="/" element={<NotesList />} />
          <Route path="/add" element={<AddNote />} />
          <Route path="/notes/edit/:id" element={<AddNote />} />
          <Route path="/notes/:id" element={<NoteDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
