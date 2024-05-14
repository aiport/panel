import React, { useRef } from 'react';
import { Terminal } from 'xterm'; // Assuming you're using xterm.js directly

function MyTerminal() {
    const xtermRef = useRef(null);

    React.useEffect(() => {
        const term = new Terminal({ cols: 80, rows: 24 }); // Set terminal dimensions
        term.open(xtermRef.current);

        // Optional: Write initial content to the terminal
        term.write('Welcome to my custom React terminal!\n');

        return () => {
            term.destroy(); // Clean up the terminal instance on unmount
        };
    }, []);

    return (
        <div>
            <div ref={xtermRef} style={{ width: '800px', height: '400px' }} />
        </div>
    );
}

export default MyTerminal;