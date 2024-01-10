import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
                .then(response => {
                    if (response.ok) {
                        console.log("Item deleted successfully");
                        // Optionally, you can perform any additional actions here after successful deletion
                    } else {
                        console.error("Failed to delete item");
                        // Handle other cases like response status codes outside the 2xx range
                    }
                })
                .catch(error => {
                    console.error("Error deleting item:", error);
                    // Handle network errors or other fetch-related issues
                });
        }
    };

    return (
        <div>
            <h1>Total user:{users.length}</h1>
            <ul>
                {
                    users.map(user => (
                        <li key={user._id}>
                            {user.name}
                            <Link to={`/update/${user._id}`}><button>Update</button></Link>
                            <button onClick={() => handleDelete(user._id)}>X</button>
                        </li>
                    ))

                }
            </ul>

        </div>
    );
};

export default Home;