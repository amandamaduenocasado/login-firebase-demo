import { createUserWithEmailAndPassword } from 'firebase/auth';
import Menu from '../../components/menu/Menu';
import { auth } from '../../config/firebase.config';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/Auth.context';
import { Navigate, useNavigate } from 'react-router-dom';

const Register = () => {
	const { user, loading } = useContext(AuthContext);
	const navigate = useNavigate();
	if (loading) return <h2>Loading...</h2>;
	if (user) return <Navigate to='/' replace />;
	return (
		<>
			<Menu />
			<h1>Register</h1>
			<form onSubmit={event => registerUser(event, navigate)}>
				<div>
					<label htmlFor='email'>Email</label>
					<input type='text' name='email' id='email' />
				</div>

				<div>
					<label htmlFor='password'>Password</label>
					<input type='text' name='password' id='password' />
				</div>
				<input type='submit' value='Register User' />
			</form>
		</>
	);
};

const registerUser = async (event, navigate) => {
	event.preventDefault();
	const email = event.target.email.value;
	const password = event.target.password.value;

	try {
		await createUserWithEmailAndPassword(auth, email, password);
		navigate('/');
	} catch (error) {
		console.error('Error al iniciar sesión:', error.code, error.message);
	}
};

export default Register;