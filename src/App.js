import styled from 'styled-components'

function App() {
  return (
    <Wrapper>
      <header>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.elementColors.backgroundColor}
`

export default App;
