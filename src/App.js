import { BrowserRouter as Router, Route } from 'react-router-dom';
import CreateExercise from './components/CreateExercise';
import CreateUser from './components/CreateUser';
import EditExercise from './components/EditExercise';
import ExerciseList from './components/ExerciseList';
import Navbar from './components/Navbar';

function App() {
	return (
		<Router>
			<Navbar />
			<Route path='/' exact component={ExerciseList} />
			<Route path='/edit/:id' component={EditExercise} />
			<Route path='/create' component={CreateExercise} />
			<Route path='/user' component={CreateUser} />
		</Router>
	);
}

export default App;
