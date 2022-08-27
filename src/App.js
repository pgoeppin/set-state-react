import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Login from './components/Input'
import React from "react"

function App() {
  const [name, setName] = React.useState('');
  const [pass, setPass] = React.useState('');
  const [error, setError] = React.useState(false);
  return (
    <>
    <Login
    name={name}
    pass={pass}
    setPass={setPass}
    setName={setName}
    error = {error}
    setError = {setError} />
    </>
  );
}

export default App;
