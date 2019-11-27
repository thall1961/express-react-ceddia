import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [passwords, setPasswords] = useState([]);
  useEffect(() => {
    getPasswords();
  }, []);

  function getPasswords() {
    fetch('/api/passwords')
      .then(result => result.json())
      .then(newPasswords => setPasswords(newPasswords));
  }
  return (
    <div className="App">
      {passwords.length ? (
        <div>
          <h1>5 Passwords</h1>
          <ul className="passwords">
            {passwords.map((p, index) => (
              <li key={index}>{p}</li>
            ))}
          </ul>
          <button className="more" onClick={getPasswords}>
            Get More
          </button>
        </div>
      ) : (
        <div>
          <h1>No passwords :(</h1>
          <button className="more" onClick={getPasswords}>
            Try Again?
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
