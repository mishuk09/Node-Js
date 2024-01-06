import React, { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => {
        console.log('Response from server:', res); // Log the response
        return res.json();
      })
      .then(data => setUser(data))
      .catch(error => console.error('Error fetching data:', error)); // Catch any fetch errors
  }, []);


  return (
    <div className="App">
      <h1>Number of Users: {user.length}</h1>
    </div>
  );
}

export default App;
