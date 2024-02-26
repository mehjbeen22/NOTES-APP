import { useState } from "react";
import "./index.css";

const todoList = [{ id: 0, notes: "Hey! write your notes here " }];

function App() {
  const [array, setArray] = useState(todoList);
  const [inputValue, setInputValue] = useState("");

  const removeElement = (id) => {
    console.log("removed");
    const filteredArray = array.filter((value) => value.id !== id);
    setArray(filteredArray);
  };

  const HandleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const AddnotesInArray = () => {
    if (inputValue.trim() !== "") {
      const newId = array.length + 1;
      const newItem = { id: newId, notes: inputValue };
      setArray([...array, newItem]);
      setInputValue("");
    }
  };

  return (
    <div className="body">
      <h1 style={{ marginBlock: "2rem" }}>WRITE YOUR NOTES HERE! </h1>

      <div className="todoBox">
        <nav className="nav">
          <input
            type="text"
            placeholder="write your notes here !"
            className="addNotesText"
            value={inputValue}
            onChange={HandleInputChange}
          />

          <button className="AddnotesBTN" onClick={AddnotesInArray}>
            Add Notes
          </button>
        </nav>

        <div className="NotesLists">
          {array.map(({ id, notes }) => {
            return (
              <div className="notesBox" key={id}>
                <div className="head">
                  <h3>Notes ✏️</h3>
                  <button
                    className="removeBtn"
                    onClick={() => removeElement(id)}
                  >
                    Remove
                  </button>
                </div>
                <p>{notes}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
