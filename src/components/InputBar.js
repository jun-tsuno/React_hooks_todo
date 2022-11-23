import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import "./css/InputBar.css";
import useTodo from "../hooks/useTodo";

function InputBar() {
	const { term, setTerm, handleSubmit } = useTodo();

	return (
		<Box
			component="form"
			sx={{
				"& .MuiTextField-root": { m: 1, width: "60ch" },
			}}
			noValidate
			autoComplete="off"
			onSubmit={handleSubmit}
		>
			<div className="container">
				<div>
					<TextField
						required
						id="outlined-required"
						label="Add To-Do"
						onChange={(event) => setTerm(event.target.value)}
						value={term}
					/>
				</div>
				<div className="btn">
					<Button variant="contained" type="submit">
						Add
					</Button>
				</div>
			</div>
		</Box>
	);
}

export default InputBar;
