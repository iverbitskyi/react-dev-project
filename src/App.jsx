import { RouterProvider } from 'react-router-dom';
import { router } from '@/router';
import '@/styles/App.scss';

function App() {
	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
