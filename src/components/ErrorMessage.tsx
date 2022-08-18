import React from 'react';

const glow = (text: string) => {
	return <span className="terminal-glow">{text}</span>;
};

type ErrorMessageProps = {
	command: string;
};
const ErrorMessage = (props: ErrorMessageProps) => {
	return (
		<div className="terminal-error-group">
			<span className="terminal-error">{`command not found: ${props.command}.`}</span>
			<span>{`Type ${glow('help')} to view a list of available commands`}</span>
		</div>
	);
};

export default ErrorMessage;
