import styled from 'styled-components';

import Head from '../Head';
import FifthForm from './FifthForm';

function FifthPage() {
    return (
        <Container>
            <Head pageNumber={4} />
            <FifthForm />
            <div id='page5WallPaper'>
                <img src='images/biker.svg' alt='boy on bicycle' />
            </div>
        </Container>
    );
}

export default FifthPage;

const Container = styled.div`
    width: 100%;
    height: 2000px;
    padding: 0 200px;
    background: #eaeaea;

    #page5WallPaper {
        width: 703px;
        height: 703px;
        position: absolute;
        right: 262px;
        top: 215px;
    }
`;
