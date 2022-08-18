import { logEvent } from 'firebase/analytics';
import React, { useEffect, useState } from 'react';
import { analytics } from '../firebase';
import Banner from './BannerMessage';
import ErrorMessage from './ErrorMessage';
import InputArea from './InputArea';
import TerminalOutput from './TerminalOutput';
import WelcomeMessage from './WelcomeMessage';


const downloadFile = (uri: string, downloadName: string) => {
	const link = document.createElement('a');
	link.download = downloadName;
	link.href = uri;
	link.click();
	link.remove();
};

type TerminalProps = {
	terminalPrompt?: string;
	banner?: string;
	welcomeMessage?: string;
};
const Terminal = (props: TerminalProps) => {
	const { terminalPrompt = '>', banner, welcomeMessage } = props;
	const [output, setOutput] = useState<(string | JSX.Element)[]>([]);
	const [history, setHistory] = useState<string[]>([]);
	const [historyIndex, setHistoryIndex] = useState(3);
	const inputRef = React.useRef<HTMLInputElement>(null);
	const scrollRef = React.useRef<HTMLDivElement | null>(null);

	const scrollLastCommandTop = () => {
		scrollRef.current?.scrollIntoView();
	};

	useEffect(scrollLastCommandTop, [output]);

	const echoCommands = ['help', 'whoami', 'projects', 'socials', 'contact', 'awards', 'github'] as const;
	type EchoCommand = typeof echoCommands[number];
	const utilityCommands = ['clear', 'cv'] as const;
	type UtilityCommand = typeof utilityCommands[number];
	const allCommands = [...echoCommands, ...utilityCommands] as const;
	type Command = typeof allCommands[number];

	function isEchoCommand(arg: string): arg is EchoCommand {
		return (echoCommands as ReadonlyArray<string>).includes(arg);
	}

	function isUtilityCommand(arg: string): arg is UtilityCommand {
		return (utilityCommands as ReadonlyArray<string>).includes(arg);
	}

	function isValidCommand(arg: string): arg is Command {
		return isEchoCommand(arg) || isUtilityCommand(arg);
	}

	const commands: { [key in EchoCommand]: JSX.Element } = {
		help: (
			<div>
				<p>
					Just type any of the commands below to get some more info. You can even type a few letters and press [tab] or '.' to autocomplete.
				</p>
				<dl>
					<dt>whoami</dt>
					<dt>projects</dt>
					<dt>awards</dt>
					<dt>github</dt>
					<dt>cv</dt>
					<dt>socials</dt>
					<dt>contact</dt>
					<dt>clear</dt>
				</dl>
			</div>
		),
		whoami: (
			<div>
				<p>
					Who are you?
				</p>
			</div>
		),
		projects: (
			<>
				<dl>
					<dt>Nerve Global -{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.nerveglobal.com"
              >
                nerveglobal.com
              </a></dt>
					<dd>
						<text>
						A blockchain infrastructure that facilitates p2p transactions and crowdfunding.
						</text>
					</dd>
				</dl>
				<dl>
					<dt>**********</dt>
					<dd>
						<text>
						Cross-Chain DEX with more than $5 million in TVL.
						</text>
					</dd>
				</dl>
			</>
		),
		socials: (
			<>
				<dl>
				<dt>Twitter -{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/koenekampc"
              >
                /koenekampc
              </a></dt>
				</dl>
				<dl>
					<dt>Instagram -{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/christophkoenekamp"
              >
                /christophkoenekamp
              </a></dt>
				</dl>
				<dl>
					<dt>Facebook -{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/christoph.konekamp.1"
              >
                /christoph.koenekamp.1
              </a></dt>
				</dl>
				<dl>
					<dt>LinkedIn -{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/christophkoenekamp"
              >
                /christophkoenekamp
              </a></dt>
				</dl>
				<dl>
					<dt>Discord -{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.discordapp.com/users/christophkoenekamp#8941"
              >
                /christophkoenekamp#8941
              </a></dt>
				</dl>
			</>
		),
		contact: (
			<>
				<dl>
					<dt>Do not email me</dt>
						<a href="mailto:christoph.koenekamp@icloud.com">christoph.koenekamp@icloud.com</a>
				</dl>
			</>
		),
		awards: (
			<>
				<dl>
					<dt>The Graph - $7.5K Grant</dt>
					<dd>Associated with Nerve Global</dd>

					<dt>Blockland Solutions Conference - $4K Grant</dt>
					<dd>Associated with Nerve Global</dd>
				</dl>
			</>
		),
		github: (
			<>
				<ul>
					<li>
						<a target="_blank" rel="noopener noreferrer" href="https://github.com/christophkoenekamp">
							GitHub
						</a>{' '}
						- Unfortunately, I could only make a small subset of my projects public.
					</li>
				</ul>
			</>
		)
	};

	const processCommand = (input: string) => {
		logEvent(analytics, 'command_received', { command: input });

		// Store a record of this command with a ref to allow us to scroll it into view.
		// Note: We use a ref callback here because setting the ref directly, then clearing output seems to set the ref to null.
		const commandRecord = (
			<div ref={(el) => (scrollRef.current = el)} className="terminal-command-record">
				<span className="terminal-prompt">{terminalPrompt}</span> <span>{input}</span>
			</div>
		);

		// Add command to to history if the command is not empty
		if (input.trim()) {
			setHistory([...history, input]);
			setHistoryIndex(history.length + 1);
		}

		// Now process command, ignoring case
		const inputCommand = input.toLowerCase();
		if (!isValidCommand(inputCommand)) {
			setOutput([
				...output,
				commandRecord,
				<div className="terminal-command-output">
					<ErrorMessage command={inputCommand} />
				</div>,
			]);
		} else if (isEchoCommand(inputCommand)) {
			setOutput([...output, commandRecord, <div className="terminal-command-output">{commands[inputCommand]}</div>]);
		} else if (isUtilityCommand(inputCommand)) {
			switch (inputCommand) {
				case 'clear': {
					setOutput([]);
					break;
				}
				case 'cv': {
					setOutput([...output, commandRecord]);
					downloadFile('CV.pdf', 'Christoph Könekamp - Curriculum Vitae.pdf');
					break;
				}
			}
		}
	};

	const getHistory = (direction: 'up' | 'down') => {
		let updatedIndex;
		if (direction === 'up') {
			updatedIndex = historyIndex === 0 ? 0 : historyIndex - 1;
		} else {
			updatedIndex = historyIndex === history.length ? history.length : historyIndex + 1;
		}
		setHistoryIndex(updatedIndex);
		return updatedIndex === history.length ? '' : history[updatedIndex];
	};

	const getAutocomplete = (input: string) => {
		const matchingCommands = allCommands.filter((c) => c.startsWith(input));
		if (matchingCommands.length === 1) {
			return matchingCommands[0];
		} else {
			const commandRecord = (
				<div ref={(el) => (scrollRef.current = el)} className="terminal-command-record">
					<span className="terminal-prompt">{terminalPrompt}</span> <span>{input}</span>
				</div>
			);
			setOutput([...output, commandRecord, matchingCommands.join('    ')]);
			return input;
		}
	};

	const focusOnInput = (event: React.KeyboardEvent<HTMLDivElement>) => {
		if (event.key === 'Tab') {
			// Prevent tab from moving focus
			event.preventDefault();
		}
		inputRef.current?.focus();
	};

	return (
		<div className="terminal-container" tabIndex={-1} onKeyDown={focusOnInput}>
			<div className="terminal-content">
				{banner && <Banner banner={banner} inputRef={inputRef} />}
				{welcomeMessage && <WelcomeMessage message={welcomeMessage} inputRef={inputRef} />}
				<TerminalOutput outputs={output} />
				<InputArea
					setOutput={setOutput}
					processCommand={processCommand}
					getHistory={getHistory}
					getAutocomplete={getAutocomplete}
					inputRef={inputRef}
					terminalPrompt={terminalPrompt}
				/>
			</div>
		</div>
	);
};

export default Terminal;
