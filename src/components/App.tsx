import { useState } from "react";
import Button from "../components/button";
import Alert from "./Recipe";

function App(children: string) {
  const [alertVisible, setAlertVisible] = useState(false)
  
  return (
    <div> 
      {alertVisible && <Alert onClose={() => setAlertVisible(false)}>My alert</Alert>}
      <Button color="primary" onClick={() => setAlertVisible(true)}>Button</Button>
    </div>
  );
}