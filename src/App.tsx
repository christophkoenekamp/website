/* eslint-disable */
import React from 'react';
import './App.css';
import Terminal from './components/Terminal';

const getYear = () => {
	return new Date().getFullYear();
};

const welcomeMessage = `Type 'help' to view a list of available commands.
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
	"Not A Corporation. All rights reserved. @"+ getYear();

const prompt = 'visitor@christophkoenekamp.com:~$';

function App() {
	return <Terminal welcomeMessage={welcomeMessage} banner={bannerCondensed} terminalPrompt={prompt} />;
}

export default App;
