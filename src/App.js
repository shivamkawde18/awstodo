import logo from "./logo.svg";
import "./App.css";
import "./Style.css";
import Form from "./Form";
//Amplify.configure(awsconfig);
function App() {
  return (
    <div className="App" style={{ background: "whitesmoke", height: "98vh" }}>
      <h3>TODO</h3>
      <Form></Form>
    </div>
  );
}

export default App;
