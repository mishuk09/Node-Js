import React, { useEffect, useState } from 'react';

const Home = () => {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data));

    }, []);


    const handleDelete = id => {
        const warning = window.confirm("You want to Delete it?")
        if (warning) {
            console.log("Delete items:", id);
            const url = `http://localhost:5000/user/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
        }

    }
    return (
        <div>
            <h1>Total user:{users.length}</h1>
            <ul>
                {
                    users.map(user => <li
                        key={user._id}>{user.name}
                        <button onClick={() => handleDelete(users._id)}>X</button>
                    </li>)
                }
            </ul>

        </div>
    );
};

export default Home;