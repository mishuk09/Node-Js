import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {
    const { id } = useParams();
    const [users, setUsers] = useState([])
    useEffect(() => {
        const url = ``
        fetch()
    }, [])
    return (
        <div>
            <h1>Update User......{id}</h1>

        </div>
    );
};

export default Update;