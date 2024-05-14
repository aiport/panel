import React, { useRef, useEffect} from 'react';
import { Terminal } from '@xterm/xterm'; // Assuming you're using @xterm/xterm
import '../../node_modules/xterm/css/xterm.css';
import '../assets/css/terminal.css';


export default function MyTerminal() {
    const terminalRef = useRef(null);
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
        const term = new Terminal({
            disableStdin: true,
          allowProposedApi: true,
          lineHeight: 1.35,
          rows: 19,
          cols: 200,
          fontFamily: 'Menlo, monospace',
          theme: baseTheme,
          allowTransparency: true,
          fontSize: 15,
          
        }); // Create the terminal instance inside useEffect
        const terminalDiv = terminalRef.current;
        if (terminalDiv) {
            term.open(terminalDiv);
        } else {
            console.error('Failed to find terminal element');
        }
term.writeln(' \x1B[33m [daemon] \x1B[0m Starting the server... \x1B[0m');
term.writeln(' \x1B[34m [panel] \x1B[0m Connected to node');
term.writeln('\x1b[41m Failed to start the server since this is a test call \x1B[0m')
term.writeln(' \x1B[33m [daemon] \x1B[0m Stoping the server... \x1B[0m');
term.writeln(' \x1B[34m [panel] \x1B[0m Disconnected to node');

        return () => {
            term.dispose();
        };
        // eslint-disable-next-line
    }, []);

    return (
        <>
        <div style={{display:'flex'}}>
            <div className="terminalBox">
            <div ref={terminalRef}  id="terminal"></div>
            <input type="text" placeholder='Enter A Command...' className='terminalTextbox' />
            </div>
           <div className="panel">
           <div className="buttons">
                <button id='start'  className='green button'>Start</button>
                <button id='stop' className='red button'>Stop</button>
                <button id='restart' className='blue button'>Restart</button>
            </div>
              </div>
        </div>
        </>
    );
}
