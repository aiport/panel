import React, { useRef, useEffect, useState } from 'react';
import { Terminal } from '@xterm/xterm'; // Assuming you're using @xterm/xterm
import '../../node_modules/xterm/css/xterm.css';
import '../assets/css/terminal.css';
import { useParams } from 'react-router-dom';
import { faWifi, faClock, faMicrochip, faHardDrive, faMemory } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function MyTerminal() {
  const terminalRef = useRef(null);
  const [term, setTerm] = useState(null); // State to store terminal instance
  const { id } = useParams();
  var baseTheme = {
    foreground: '#c5c9d1',
    background: '#141414',
    selection: '#5DA5D533',
    black: '#1E1E1D',
    brightBlack: '#262625',
    red: '#E54B4B',
    green: '#9ECE58',
    yellow: '#FAED70',
    blue: '#396FE2',
    magenta: '#BB80B3',
    cyan: '#2DDAFD',
    white: '#d0d0d0',
    brightRed: '#FF5370',
    brightGreen: '#C3E88D',
    brightYellow: '#FFCB6B',
    brightBlue: '#82AAFF',
    brightMagenta: '#C792EA',
    brightCyan: '#89DDFF',
    brightWhite: '#ffffff',
};
  useEffect(() => {
    const newTerm = new Terminal({
      disableStdin: true,
      allowProposedApi: true,
      lineHeight: 1.35,
      fontFamily: 'Menlo, monospace',
      theme: baseTheme,
      allowTransparency: true,
      fontSize: 15,
    });
    setTerm(newTerm); // Set terminal instance in state
    const terminalDiv = terminalRef.current;
    if (terminalDiv) {
      newTerm.open(terminalDiv);
      newTerm.writeln(' \x1B[34m [panel] \x1B[0m Searching For Server with id: ' + id);
    } else {
      console.error('Failed to find terminal element');
    }
    return () => newTerm.dispose();
    // eslint-disable-next-line
  }, []);

  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  }; // Write welcome message
  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && term) {
        if(inputText.trim().length<=0) return; // Check if term exists
      term.writeln(inputText); // Write user input with newline
      setInputText(''); // Clear input field after writing
    }
  };


  return (
    <>
      <div style={{ display: 'flex' }}>
        <div className="terminalBox">
          <div ref={terminalRef} id="terminal"></div>
          <input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            placeholder="Enter A Command..."
            className="terminalTextbox"
          />
        </div>
        <div className="panel">
          <div className="buttons">
            <button id="start" className="green button">
              Start
            </button>
            <button id="stop" className="red button">
              Stop
            </button>
            <button id="restart" className="blue button">
              Restart
            </button>
          </div>
          <div className="node panelList">
            <FontAwesomeIcon icon={faWifi} className='icon'/>
            <div className="txt">node3.example.com:25565</div>
          </div>
          <div className="node panelList">
            <FontAwesomeIcon icon={faClock} className='icon'/>
            <div className="txt">Offline</div>
          </div>
          <div className="node panelList">
            <FontAwesomeIcon icon={faMicrochip} className='icon'/>
            <div className="txt">Offline</div>
          </div>
          <div className="node panelList">
            <FontAwesomeIcon icon={faHardDrive} className='icon'/>
            <div className="txt">0 Bytes /1 Gib</div>
          </div>
          <div className="node panelList">
            <FontAwesomeIcon icon={faMemory} className='icon'/>
            <div className="txt">0 Bytes /1 Gib</div>
          </div>
        </div>
      </div>
    </>
  );
}
