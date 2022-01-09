import { useState } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import AsholMenu from "./components/Menu/AsholMenu";

function App() {
  const [compo, setcompo] = useState('')
  return (    
    <>
    <AsholMenu setcompo={setcompo}/>
    <Dashboard compo={compo}/>
    </>
  );
}

export default App;
