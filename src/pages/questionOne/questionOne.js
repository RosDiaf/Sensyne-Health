import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import './styles.css';

function QuestionOne() {
	const [count, setCount] = useState(0);

	return (
		<div className="btnContainer">
			<Button
				variant="contained" 
				onClick={() => setCount(count + 1)}
				id="countBtn">
				You clicked {count} times
			</Button>
		</div>
	);
}

export default QuestionOne