import React from "react";
import useTodo from "../hooks/useTodo";
import Task from "./Task";

function TaskList() {
	const { tasks } = useTodo();

	const eachTask = tasks.map((task, index) => {
		return <Task task={task} key={index} id={index} />;
	});
	return <div>{eachTask}</div>;
}

export default TaskList;
