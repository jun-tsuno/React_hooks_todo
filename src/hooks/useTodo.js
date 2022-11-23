import { useContext } from "react";
import TodoContext from "../context/Todo";

function useTodo() {
	return useContext(TodoContext);
}

export default useTodo;
