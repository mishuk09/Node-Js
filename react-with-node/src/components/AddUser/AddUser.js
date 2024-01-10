

const AddUser = () => {

    const handleAddUser = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const user = { name, email };


        //send data to the server

        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
                alert("User added Successfully...")
                event.target.reset();

            })


    }

    return (
        <div>

            <h1>Add Users to MONGODB</h1>
            <form onSubmit={handleAddUser} >
                <input type="text" name='name' placeholder='Name' />
                <input type="email" name='email' placeholder='Email' />
                <input type="submit" name='' value="add User" />
            </form>

        </div>
    );
};

export default AddUser;