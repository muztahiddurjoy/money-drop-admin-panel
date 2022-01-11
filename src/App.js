import { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import AsholMenu from "./components/Menu/AsholMenu";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import AuthCompo from './components/Auth/AuthCompo'

function App() {
  const [compo, setcompo] = useState('')
  const [auth, setauth] = useState(false)
  useEffect(() => {
    onAuthStateChanged(getAuth(), (user)=>{
      if(user){
        if (user.uid === 'zna8oVMhu3UPcIy1tYn9HC0r9Hr1') {
          setauth(true)
        }
      }
      else{
        setauth(false)
      }
    })
  },[])
  return (    
    <>
    {auth ? <>
    <AsholMenu setcompo={setcompo}/>
    <Dashboard compo={compo}/>
    </> : <AuthCompo setauth={setauth}/>}
    </>
  );
}

export default App;
