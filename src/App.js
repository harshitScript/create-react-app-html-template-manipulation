import styled from "styled-components/macro";
import { Test } from "./Test";

function App() {
  return (
    <>
      <Outer>
        <h1>{process.env.REACT_APP_BROKER_NAME}</h1>
        <p>Checkout the index.html file to see how html injection works.</p>
      </Outer>
      <Test />
    </>
  );
}

export default App;

const Outer = styled.div`
  padding: 1rem;
  margin: 1rem;
  box-sizing: border-box;
  animation: theme 10s ease-out infinite;
  @keyframes theme {
    0% {
      border: 3px solid ${process.env.REACT_APP_TERNARY_COLOR};
    }
    25% {
      border: 3px solid ${process.env.REACT_APP_PRIMARY_COLOR};
    }
    50% {
      border: 3px solid ${process.env.REACT_APP_SECONDARY_COLOR};
    }
    75% {
      border: 3px solid ${process.env.REACT_APP_TERNARY_COLOR};
    }
    100% {
      border: 3px solid ${process.env.REACT_APP_PRIMARY_COLOR};
    }
  }
`;
