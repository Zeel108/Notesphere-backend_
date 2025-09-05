import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";   // ✅ correct import
import NotesService from "../services/NotesService";

const NotesList  = () => {

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        NotesService.getAll()
            .then((response) => {
                console.log('printing response', response.data);
                setNotes(response.data);
            })
            .catch((error) => {
                console.log('something went wrong', error);
            });
    }, []);

    return ( 
        <div className="main-content">
            <h1>List of notes</h1>
            <div className="notes-list mt-4">
            {
                notes.length > 0 ? notes.map(note => (
                    <div key={note.noteId} className="notes-preview mt-3">
                        <Link to={`/notes/${note.noteId}`}>
                            <h5 className="primary-color text-capitalize">{note.title}</h5>
                            <div className="text-italic">
                                {moment(note.updatedAt).fromNow()}  {/* ✅ replaced wrong Moment */}
                            </div>
                        </Link>
                    </div>
                )) : <div>No Notes available</div>
             }
            </div>
        </div>
     );
}
 
export default NotesList;
