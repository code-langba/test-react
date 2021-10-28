import axios from 'axios';
import React, { useState } from 'react';

const CreateUser = () => {
	const [user, setUser] = useState({
		username: ''
	});
	const handleChange = (e) => {
		let name = e.target.value;
		setUser({
			...user,
			username: name
		});
	};
	const onSubmit = (e) => {
		e.preventDefault();
		axios
			.post('http://localhost:5000/users/add', user)
			.then((res) => console.log(res.data))
			.catch((err) => console.log(err));
		setUser({ username: '' });
	};

	return (
		<form onSubmit={onSubmit}>
			<input type='text' name='username' onChange={handleChange} />
			{user.username}
		</form>
	);
};

export default CreateUser;
