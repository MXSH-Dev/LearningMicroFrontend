import { useState, useEffect } from 'react'
import './App.css'
import Button from "remoteApp/Button"

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const loadStyles = () => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'http://localhost:5002/assets/style-BWO-R7v2.css'; // Adjust the URL to your remote app's style
      document.head.appendChild(link);
    };

    loadStyles();
  }, []);

  return (
    <div className="App">
      <h1>Host React Application</h1>
      <Button />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Host React: count is {count}
        </button>
      </div>
    </div>
  )
}

export default App
