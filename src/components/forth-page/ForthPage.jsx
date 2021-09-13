import styled from 'styled-components';
import Head from '../Head';
import ForthForm from './ForthForm';

function ForthPage() {
    return (
        <Container>
            <Head pageNumber={3} />
            <ForthForm />
        </Container>
    );
}

export default ForthPage;

const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 200px;
`;
