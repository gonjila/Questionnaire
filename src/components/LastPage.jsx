import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

function LastPage() {
    const textAnimation = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 700 },
    });
    const bigStarAnimation = useSpring({
        delay: 700,
        from: { x: '50px', y: '100px', opacity: 0 },
        to: { x: '0px', y: '0px', opacity: 1 },
        config: { duration: 300 },
    });
    const smallStarrAnimation = useSpring({
        delay: 700,
        from: { x: '-130px', y: '-60px', opacity: 0 },
        to: { x: '0px', y: '0px', opacity: 1 },
        config: { duration: 300 },
    });

    return (
        <Container>
            <animated.p style={{ ...textAnimation }}>მადლობა</animated.p>
            <div id='bigStar'>
                <animated.img src='images/bigStar.svg' alt='white big star' style={{ ...bigStarAnimation }} />
            </div>
            <div id='smallStar'>
                <animated.img
                    src='images/smallStar.svg'
                    alt='white small star'
                    style={{ ...smallStarrAnimation }}
                />
            </div>
        </Container>
    );
}

export default LastPage;

const Container = styled.div`
    height: 100%;
    width: 100%;
    background: #232323;

    display: grid;
    place-content: center;

    p {
        font-family: TBC Contractica CAPS;
        color: #ffffff;
        font-size: 64px;
        font-style: normal;
        font-weight: 700;
        line-height: 77px;
        letter-spacing: 0.24em;
        text-align: left;
    }

    #bigStar {
        height: 52.290000915527344px;
        width: 52.290000915527344px;
        position: absolute;
        top: 424.5px;
        left: 786px;
    }
    #smallStar {
        height: 32.993690490722656px;
        width: 33px;
        position: absolute;
        top: 586.5px;
        left: 1137px;
    }
`;
