import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

import Head from '../Head';
import ThirdForm from './ThirdForm';

function ThirdPage() {
    const decorationAnimation = useSpring({
        from: {
            x: '50px',
            y: '-70px',
            width: '622px',
            height: '75px',
            borderRadius: '0%',
            background: '#d6d16e',
        },
        to: { x: '0px', y: '0px', width: '229px', height: '229px', borderRadius: '50%', background: '#dd3939' },
        config: { duration: 300 },
    });

    return (
        <Container>
            <Head pageNumber={2} />
            <ThirdForm />

            <div id='page3WallPaper'>
                <img src='images/cold-boy.svg' alt='' />
            </div>
            <animated.div id='page3WallPaperDecoration' style={{ ...decorationAnimation }} />
        </Container>
    );
}

export default ThirdPage;

const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 200px;

    #page3WallPaper {
        height: 892px;
        width: 949px;
        position: absolute;
        left: 795px;
        top: 121px;
        z-index: 1;

        img {
            width: 100%;
            height: 100%;
        }
    }

    #page3WallPaperDecoration {
        width: 229px;
        height: 229px;
        border-radius: 50%;
        background: #dd3939;
        position: absolute;
        top: 361px;
        left: 876px;
        z-index: 0;
    }
`;
