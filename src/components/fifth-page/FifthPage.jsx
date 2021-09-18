import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

import Head from '../Head';
import FifthForm from './FifthForm';

function FifthPage() {
    const decorationAnimation = useSpring({
        from: { x: '-100px', y: '-150px', width: '288px', height: '312px' },
        to: { x: '0px', y: '0px', width: '194.7px', height: '172px' },
        config: { duration: 300 },
    });

    return (
        <Container>
            <Head pageNumber={4} />
            <FifthForm />
            <div id='page5WallPaper'>
                <img src='images/biker.svg' alt='boy on bicycle' />
            </div>
            <div id='page5WallPaperDecoration'>
                <animated.img src='images/heart.svg' alt='boy on bicycle' style={{ ...decorationAnimation }} />
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
