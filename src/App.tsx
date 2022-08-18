/* eslint-disable */
import React from 'react';
import './App.css';
import Terminal from './components/Terminal';

const getYear = () => {
	return new Date().getFullYear();
};

const welcomeMessage = `Welcome to my interactive web terminal.
Type ${<span className="terminal-glow">'help'</span>} to view a list of available commands.
`;

const bannerCondensed =
	'  $$$$$$   $$                  $$              $$                        $$              $$    $$                                          $$                                        \n' +
	' $$    $$  $$                                  $$                        $$              $$   $$                                           $$                                        \n' +
	' $$        $$$$$$$    $$$$$$   $$   $$$$$$$  $$$$$$   $$$$$$   $$$$$$$$  $$$$$$$         $$  $$     $$$$$$    $$$$$$   $$$$$$$$   $$$$$$   $$    $$   $$$$$$$  $$$$$$$$$$$$  $$$$$$$$\n' +
	' $$        $$    $$  $$    $$  $$  $$          $$    $$    $$  $$    $$  $$    $$        $$$$$     $$    $$  $$    $$  $$    $$  $$    $$  $$   $$         $$  $$   $$   $$  $$    $$\n' +
	' $$        $$    $$  $$        $$   $$$$$$     $$    $$    $$  $$    $$  $$    $$        $$  $$    $$    $$  $$$$$$$$  $$    $$  $$$$$$$$  $$$$$$     $$$$$$$  $$   $$   $$  $$    $$\n' +
	' $$    $$  $$    $$  $$        $$        $$    $$    $$    $$  $$    $$  $$    $$        $$   $$   $$    $$  $$        $$    $$  $$        $$   $$    $    $$  $$   $$   $$  $$    $$\n' +
	'  $$$$$$   $$    $$  $$        $$  $$$$$$$     $$     $$$$$$   $$$$$$$$  $$    $$        $$    $$   $$$$$$    $$$$$$$  $$    $$   $$$$$$$  $$    $$   $$$$$$$  $$   $$   $$  $$$$$$$$\n' +
	'                                                               $$                                                                                                            $$ \n' +
	'                                                               $$                                                                                                            $$ \n' +
	'                                                               $$                                                                                                            $$ \n' +
	getYear();

const prompt = 'visitor@christophkoenekamp.com:~$';

function App() {
	return <Terminal welcomeMessage={welcomeMessage} banner={bannerCondensed} terminalPrompt={prompt} />;
}

export default App;
