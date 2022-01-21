import { button, input } from "@aws-amplify/ui";
import "./Style.css";
import { useState } from "react";
function Form() {
  const [name, setName] = useState();
  const [content, setContent] = useState();
  const [check, setCheck] = useState(false);
  const checkFLag = () => {
    if (check) {
      setCheck(false);
    } else {
      setCheck(true);
    }
  };
  return (
    <div>
      <div className="mainDiv">
        <input
          type="checkbox"
          className="check"
          onChange={() => {
            checkFLag();
          }}
        />
        <input
          className="name"
          placeholder="Enter your name"
          onKeyUp={(e) => {
            setName(e.currentTarget.value);
          }}
        ></input>
        <input
          className="content"
          placeholder="what is your task ? "
          onKeyUp={(e) => {
            setContent(e.currentTarget.value);
          }}
        />
        <button className="addTask">Add task</button>
      </div>
    </div>
  );
}
export default Form;
