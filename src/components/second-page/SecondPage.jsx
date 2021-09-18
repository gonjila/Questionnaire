import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

import Head from '../Head';
import SecondInputs from './SecondForm';

function SecondPage() {
    const decorationAnimation = useSpring({
        from: { x: '-120px', y: '110px', width: '100px', height: '100px', background: '#FE3B1F' },
        to: { x: '0px', y: '0px', width: '622px', height: '75px', background: '#d6d16e' },
        config: { duration: 300 },
    });

    return (
        <Container>
            <Head pageNumber={1} />
            <div>
                <SecondInputs />
                <hr id='secondPageHr' />
                <p id='secondPage'>
                    *-ით მონიშნული ველების შევსება <br /> სავალდებულოა
                </p>
            </div>
            <div id='page2WallPaper'>
                <img src='images/scaning.svg' alt='' />
            </div>
            <animated.div id='page2WallPaperDecoration' style={{ ...decorationAnimation }} />
        </Container>
    );
}

export default SecondPage;

const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 200px;

    display: flex;
    flex-direction: column;

    #secondPageHr {
        width: 237px;
        height: 0px;
        border: 0.8px solid #000000;
        margin: 111px 0 20px;
    }

    #secondPage {
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;
        color: #626262;
    }

    #page2WallPaper {
        position: absolute;
        width: 904px;
        height: 831px;
        right: 165px;
        top: 94px;
        z-index: 1;

        img {
            width: 100%;
            height: 100%;
        }
    }

    #page2WallPaperDecoration {
        width: 622px;
        height: 75px;
        background: #d6d16e;
        position: absolute;
        right: 320px;
        top: 304px;
        bottom: 681px;
        left: 978px;
        z-index: 0;
    }
`;
