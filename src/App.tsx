/* eslint-disable */
import React from 'react';
import './App.css';
import Terminal from './components/Terminal';

const glow = (text: string) => {
	return <span className="terminal-glow">{text}</span>;
};

const getYear = () => {
	return new Date().getFullYear();
};

const welcomeMessage = `Type ${glow('help')} to view a list of available commands.
`;

const bannerCondensed =
	""+
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
	"ChristophKoenekamp (CK) Not A Corporation. All rights reserved. @"+ getYear();

const prompt = 'visitor@christophkoenekamp.com:~$';

function App() {
	return <Terminal welcomeMessage={welcomeMessage} banner={bannerCondensed} terminalPrompt={prompt} />;
}

export default App;
