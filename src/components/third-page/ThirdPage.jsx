import styled from 'styled-components';

import Head from '../Head';

function ThirdPage() {
    return (
        <Container>
            <Head pageNumber={2} />
        </Container>
    );
}

export default ThirdPage;

const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 200px;
`;
