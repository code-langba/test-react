import axios from 'axios';
import React, { useState } from 'react';

const CreateExercise = () => {
	const [exercise, setExercise] = useState({
		username: '',
		description: '',
		duration: '',
		date: ''
	});
	const handleChange = (e) => {
		let name = e.target.name;
		let value = e.target.value;
		setExercise({
			...exercise,
			[name]: value
		});
	};
	const onSubmit = (e) => {
		e.preventDefault();
		axios
			.post('http://localhost:5000/exercises/add', exercise)
			.then((res) => console.log(res.data))
			.catch((err) => console.log(err));
		setExercise({ username: '', description: '', duration: '', date: '' });
	};

	return (
		<form onSubmit={onSubmit}>
			<input type='text' name='username' onChange={handleChange} />
			<input type='text' name='description' onChange={handleChange} />
			<input type='text' name='duration' onChange={handleChange} />
			<input type='date' name='date' onChange={handleChange} />
			<button type='submit' onClick={onSubmit}>
				ADD
			</button>
			{JSON.stringify(exercise)}
		</form>
	);
};

export default CreateExercise;
