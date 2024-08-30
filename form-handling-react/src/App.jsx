import { useState } from 'react';
import FormikForm from './components/FormikForm'; 
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <h1>User Registration</h1>
      {
      <FormikForm />
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> 
        </p>
      </div>
      <p className="read-the-docs">
      </p> */}
    </>
  );
}

export default App;
