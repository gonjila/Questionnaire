import styled from 'styled-components';
import Head from '../Head';

function ForthPage() {
    return (
        <Container>
            <Head pageNumber={3} />
        </Container>
    );
}

export default ForthPage;

const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 200px;
`;
