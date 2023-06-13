
import Edad from "./components/edad/Edad";
import Form from "./components/form/Form";
import { GlobalStyles } from "./styles/globalstyles";

const App = () => {

	return (
		<>
		<GlobalStyles/>
		<div className="container">
			<Form/>
			<Edad/>
		</div>
		</>
	)
};

export default App;
