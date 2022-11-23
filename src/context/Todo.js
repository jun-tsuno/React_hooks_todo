import { createContext, useState } from "react";

const TodoContext = createContext();

function TodoProvider({ children }) {
	const [term, setTerm] = useState("");
	const [tasks, setTask] = useState([]);

	const handleSubmit = (event) => {
		event.preventDefault();
		if (term === "") return;
		setTerm(event.target.value);
		addTask(term);
		setTerm("");
	};

	const addTask = (term) => {
		setTask([...tasks, { task: term, isDone: false }]);
	};

	const deleteTask = (id) => {
		const newTaskArr = [...tasks];
		newTaskArr.splice(id, 1);
		setTask([...newTaskArr]);
	};

	const doneTask = (id) => {
		const newTaskArr = [...tasks];
		const isDoneTask = newTaskArr[id];
		isDoneTask.isDone = !isDoneTask.isDone;
	};

	return (
		<TodoContext.Provider
			value={{
				term,
				tasks,
				setTerm,
				handleSubmit,
				addTask,
				deleteTask,
				doneTask,
			}}
		>
			{children}
		</TodoContext.Provider>
	);
}

export { TodoProvider };
export default TodoContext;
