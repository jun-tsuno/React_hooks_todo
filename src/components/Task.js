import React, { useState } from "react";
import useTodo from "../hooks/useTodo";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";
import "../components/css/Task.css";

function Task({ task, id }) {
	const { deleteTask, doneTask } = useTodo();
	const [checked, setChecked] = useState(false);

	// Material UI
	const Item = styled(Paper)(({ theme }) => ({
		backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
		...theme.typography.body2,
		padding: theme.spacing(1),
		textAlign: "center",
		color: theme.palette.text.secondary,
		height: "30px",
		fontSize: "1.2em",
	}));

	return (
		<div className="container">
			<div className="textField">
				<Box sx={{ width: "100%", paddingTop: "8px" }}>
					<Stack spacing={2}>
						<Item sx={task.isDone && { backgroundColor: "#C4DFAA" }}>
							{task.task}
						</Item>
					</Stack>
				</Box>
			</div>
			<div className="icons">
				<Checkbox
					checked={task.isDone}
					onClick={() => {
						doneTask(id);
						setChecked(!checked);
					}}
					inputProps={{ "aria-label": "controlled" }}
				/>
				<Button
					variant="outlined"
					startIcon={<DeleteIcon />}
					onClick={() => deleteTask(id)}
				>
					Delete
				</Button>
			</div>
		</div>
	);
}

export default Task;
