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

  const handleAddUser = event => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const user = { name, email };

    // send data to server 
    // fetch post 

    fetch('http://localhost:5000/user', {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })




  }




  return (
    <div className="App">

      <form onSubmit={handleAddUser}>
        <input type="text" name='name' placeholder='Name' />
        <input type="email" name='email' placeholder='Email' />
        <input type="submit" name='' value="add User" />
      </form>
      <h1>Number of Users: {user.length}</h1>
    </div>
  );
}

export default App;
