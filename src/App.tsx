import React from 'react';
import './App.css';
import Terminal from './components/Terminal';

const getYear = () => {
	return new Date().getFullYear();
};

const welcomeMessage = `Welcome to my interactive web terminal.

Type 'help' to view a list of available commands.
`;

const bannerCondensed =
	' $$$$$$  $$                 $$             $$                         $$       \n' +
	'$$  __$$ $$ |                __|            $$ |                        $$ |      \n' +
	'$$ /  __|$$$$$$$   $$$$$$  $$  $$$$$$$ $$$$$$    $$$$$$   $$$$$$  $$$$$$$  \n' +
	'$$ |      $$  __$$ $$  __$$ $$ |$$  _____|_$$  _|  $$  __$$ $$  __$$ $$  __$$ \n' +
	'$$ |      $$ |  $$ |$$ |  __|$$ |$$$$$$    $$ |    $$ /  $$ |$$ /  $$ |$$ |  $$ |\n' +
	'$$ |  $$ $$ |  $$ |$$ |      $$ | ____$$   $$ |$$ $$ |  $$ |$$ |  $$ |$$ |  $$ |\n' +
	'$$$$$$  |$$ |  $$ |$$ |      $$ |$$$$$$$  |  $$$$  |$$$$$$  |$$$$$$$  |$$ |  $$ |\n' +
	' ______/ __|  __|__|      __|_______/    ____/  ______/ $$  ____/ __|  __|\n' +
	'                                                                $$ |                \n' +
	'                                                                $$ |                \n' +
	'                                                                __|          ' +
	getYear();

const prompt = 'visitor@christophkoenekamp.com:~$';

function App() {
	return (
		<Terminal
			welcomeMessage={welcomeMessage}
			banner={bannerCondensed}
			terminalPrompt={prompt}
		/>
	);
}

export default App;
