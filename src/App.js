import "./styles/App.scss"
import Editor from "./components/Editor.jsx"

//TODO option to change color palette (use the 'colors' prop on CirclePicker)
//TODO drag drawing
//TODO eraser

function App() {
  return <>
    <div className="App">
      <Editor />
    </div>
  </>
}

export default App;
