'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const [userInput, setUserInput] = useState('');
  const [terminalOutput, setTerminalOutput] = useState([]);
  const [minimized, setMinimized] = useState(false);
  const [maximized, setMaximized] = useState(false);
  const router = useRouter();

  const BLACKLISTED_KEY_CODES = [38, 40, 37, 39, 18, 20, 17, 16, 9, 27, 144];
  const COMMANDS = {
    help: 'The page you want to visit does not exist, or it may have been deleted, or the wrong address was entered. To see the commands, enter the word <span class="text-[#fa615c]">commands</span>',
    exit: '',
    report: '<span class="text-green-500">This page report has been successfully sent to support.</span>',
    commands: 'List of commands: <span class="text-[#fa615c]"> help</span> , <span class="text-[#fa615c]"> report</span> ,<span class="text-[#fa615c]"> exit</span>',
    cls: '',
    dashboard: '',
    question: ''
  };

  const executeCommand = (input) => {
    if (!input) return;
    
    console.log(`Received command: ${input}`); // Debugging line

    let output;
    
    if (!COMMANDS.hasOwnProperty(input)) {
      output = `<p>The command entered is not correct</p>`;
    } else if (input === 'cls') {
      setTerminalOutput([]);
      return;
    } else if (input === 'close' || input === 'exit') {
      console.log('Navigating to home'); // Debugging line
      router.push('/');
      return;
    } else if (input === 'report') {
      setTerminalOutput((prev) => [
        ...prev,
        `<p>${COMMANDS[input]}</p>`,
      ]);
      return;
    } else if (input === 'dashboard') {
      console.log('Navigating to dashboard'); // Debugging line
      router.push('/dashboard');
      return;
    } else if (input === 'question') {
      router.push('/question');
      return;
    } else {
      output = COMMANDS[input];
    }

    setTerminalOutput((prev) => [
      ...prev,
      `<p class="out_code">${output}</p>`,
    ]);
  };

  const handleKey = (event) => {
    if (BLACKLISTED_KEY_CODES.includes(event.keyCode)) return;
    event.preventDefault(); // Prevent default key handling behavior

    const currentKey = event.key;
    if (currentKey === 'Enter') {
      console.log(`User input on Enter: ${userInput}`); // Debugging line
      executeCommand(userInput.trim());
      setUserInput('');
    } else if (currentKey === 'Backspace') {
      setUserInput((prev) => prev.slice(0, -1));
    } else {
      setUserInput((prev) => prev + currentKey);
    }
  };

  const handleButtonClick = (action) => {
    if (action === 'min') {
      setMinimized(true);
      setMaximized(false);
    } else if (action === 'max') {
      setMaximized(true);
      setMinimized(false);
    } else if (action === 're') {
      setMinimized(false);
      setMaximized(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => {
      window.removeEventListener('keydown', handleKey);
    };
  }, [userInput]);

  return (
    <div
      className={`flex justify-center items-center h-screen bg-[#171f37] text-white ${
        maximized ? 'max' : minimized ? 'min' : ''
      }`}
      id="body"
    >
      <main
        id="main"
        className={`${
          maximized ? 'w-full h-full' : 'w-4/5 h-3/5'
        } transition-all duration-300`}
      >
        <header className="Menubar w-full bg-[#313335] flex justify-between items-center rounded-t-xl p-1.5 select-none font-medium">
          <div>
            <p>Terminal</p>
          </div>
          <div>
            <p className="title_404 font-extrabold">404</p>
          </div>
          <div className="Menu_BTN flex justify-center items-center">
            <button
              id="min"
              onClick={() => handleButtonClick('min')}
              className="bg-[#3fc950] w-5 h-5 rounded-full mx-1"
            />
            <button
              id="max"
              onClick={() => handleButtonClick('max')}
              className="bg-[#ffbd48] w-5 h-5 rounded-full mx-1"
            />
            <button
              id="close"
              onClick={() => router.push('/dashboard')}
              className="bg-[#fa615c] w-5 h-5 rounded-full mx-1"
            />
          </div>
        </header>
        <div
          id="Terminal"
          className="Terminal_body bg-[#2B2B2B] w-full h-full rounded-b-xl p-5 font-mono overflow-y-auto"
        >
          <p>Oops! page not found</p>
          <br />
          <p>
            Enter <span className="text-[#fa615c]">help</span> for help
          </p>
          <br />
          <div className="Terminal_code">
            <div className="Terminal_line flex items-center">
              <div
                id="code"
                className="code"
                dangerouslySetInnerHTML={{
                  __html: terminalOutput.join(''),
                }}
              />
              <span className="arrow text-[#ffc720] ml-2 font-bold text-xl">
                →
              </span>
              <span
                id="userInput"
                className="user-input border-b-2 border-[#ffc720] animate-blink"
              >
                {userInput}
              </span>
              <input
                type="text"
                id="Keyboard"
                className="keyboard opacity-0 absolute"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
              />
            </div>
          </div>
        </div>
      </main>
      <div
        id="min_app"
        className={`min_app ${
          minimized ? 'visible' : 'invisible'
        } absolute w-12 h-12 left-0 bottom-0 bg-[#3C3F41] rounded-full m-4 flex justify-center items-center`}
      >
        <button onClick={() => handleButtonClick('re')}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="40"
            height="40"
          >
            <path fill="#CFD8DC" d="M41,6H7C6.4,6,6,6.4,6,7v35h36V7C42,6.4,41.6,6,41,6z" />
            <path fill="#263238" d="M8 13H40V40H8z" />
            <path fill="#90A4AE" d="M13.5 8A1.5 1.5 0 1 0 13.5 11 1.5 1.5 0 1 0 13.5 8zM9.5 8A1.5 1.5 0 1 0 9.5 11 1.5 1.5 0 1 0 9.5 8z" />
            <g>
              <path fill="#18FFFF" d="M18.5 26.5l-3.5-2V22l6 3.4v2.1L15 31v-2.5L18.5 26.5zM23 29H33V31H23z" />
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
}
