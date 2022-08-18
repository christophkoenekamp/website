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
	' $$$$$$\  $$\                 $$\             $$\                         $$\             $$\   $$\                                        $$\                                        \n' +
	'$$  __$$\ $$ |                \__|            $$ |                        $$ |            $$ | $$  |                                       $$ |                                       \n' +
	'$$ /  \__|$$$$$$$\   $$$$$$\  $$\  $$$$$$$\ $$$$$$\    $$$$$$\   $$$$$$\  $$$$$$$\        $$ |$$  / $$$$$$\   $$$$$$\  $$$$$$$\   $$$$$$\  $$ |  $$\ $$$$$$\  $$$$$$\$$$$\   $$$$$$\  \n' +
	'$$ |      $$  __$$\ $$  __$$\ $$ |$$  _____|\_$$  _|  $$  __$$\ $$  __$$\ $$  __$$\       $$$$$  / $$  __$$\ $$  __$$\ $$  __$$\ $$  __$$\ $$ | $$  |\____$$\ $$  _$$  _$$\ $$  __$$\ \n' +
	'$$ |      $$ |  $$ |$$ |  \__|$$ |\$$$$$$\    $$ |    $$ /  $$ |$$ /  $$ |$$ |  $$ |      $$  $$<  $$ /  $$ |$$$$$$$$ |$$ |  $$ |$$$$$$$$ |$$$$$$  / $$$$$$$ |$$ / $$ / $$ |$$ /  $$ |\n' +
	'$$ |  $$\ $$ |  $$ |$$ |      $$ | \____$$\   $$ |$$\ $$ |  $$ |$$ |  $$ |$$ |  $$ |      $$ |\$$\ $$ |  $$ |$$   ____|$$ |  $$ |$$   ____|$$  _$$< $$  __$$ |$$ | $$ | $$ |$$ |  $$ |\n' +
	'\$$$$$$  |$$ |  $$ |$$ |      $$ |$$$$$$$  |  \$$$$  |\$$$$$$  |$$$$$$$  |$$ |  $$ |      $$ | \$$\\$$$$$$  |\$$$$$$$\ $$ |  $$ |\$$$$$$$\ $$ | \$$\\$$$$$$$ |$$ | $$ | $$ |$$$$$$$  |\n' +
	' \______/ \__|  \__|\__|      \__|\_______/    \____/  \______/ $$  ____/ \__|  \__|      \__|  \__|\______/  \_______|\__|  \__| \_______|\__|  \__|\_______|\__| \__| \__|$$  ____/ \n' +
	'                                                                $$ |                                                                                                        $$ |      \n' +
	'                                                                $$ |                                                                                                        $$ |      \n' +
	'                                                                \__|                                                                                                        \__|      ' +
	getYear();

const prompt = 'visitor@christophkoenekamp.com:~$';

function App() {
	return <Terminal welcomeMessage={welcomeMessage} banner={bannerCondensed} terminalPrompt={prompt} />;
}

export default App;
