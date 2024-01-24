import './App.css';

import { useState } from 'react';
import styled from 'styled-components';

import viteLogo from '/vite.svg';

import reactLogo from './assets/react.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <TestDivStyled isColorized={count > 5} className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </TestDivStyled>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

interface IColorizedDiv {
  isColorized?: boolean;
}

const TestDivStyled = styled.div<IColorizedDiv>`
  border-radius: 2px;
  border: 1px solid black;
  background-color: ${(props) => (props.isColorized ? 'rgba(0, 80, 0, 0.3)' : 'none')};
`;

export default App;
