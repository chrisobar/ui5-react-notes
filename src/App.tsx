import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "@ui5/webcomponents-react";

// icons
import "@ui5/webcomponents-icons/dist/add-document";
import "@ui5/webcomponents-icons/dist/write-new-document";
import { NotesData } from "./components/notesModel";
import { NotesCard } from "./components/notes";

function App() {
  return (
    <div className="appContainer">
      <div className="notesMenu">
        <Button design="Default" icon="write-new-document">
          Edit Note
        </Button>
        <Button design="Emphasized" icon="add-document">
          Add Note
        </Button>
      </div>
      <center>
        {" "}
        <div className="notesContainer">
          {" "}
          {NotesData.map((notes) => (
            <NotesCard
              key={notes.id}
              title={notes.title}
              content={notes.content}
              dateModified={notes.dateModified}
            />
          ))}
        </div>
      </center>
    </div>
  );
}

export default App;
