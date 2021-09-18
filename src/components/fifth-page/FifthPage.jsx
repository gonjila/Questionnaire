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
            <div id='page5WallPaperDecoration'>
                <img src='images/heart.svg' alt='boy on bicycle' />
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
        z-index: 1;
    }

    #page5WallPaperDecoration {
        height: 172px;
        width: 194.69903564453125px;
        position: absolute;
        left: 1055.580078125px;
        top: 281.5px;
        z-index: 0;
    }
`;
