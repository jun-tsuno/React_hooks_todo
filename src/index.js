import { createRoot } from "react-dom/client";
import App from "./components/App";
import { TodoProvider } from "./context/Todo";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
	<TodoProvider>
		<App />
	</TodoProvider>
);
