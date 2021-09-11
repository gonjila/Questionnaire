import styled from "styled-components";
import StartPage from "./components/StartPage";

function App() {
    return (
        <Container>
            <StartPage />
        </Container>
    );
}

export default App;

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #eaeaea;
`;
