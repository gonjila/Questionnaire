import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import Head from '../Head';
import ForthForm from './ForthForm';

function ForthPage() {
    const decorationAnimation = useSpring({
        from: {
            x: '-120px',
            y: '180px',
            width: '229px',
            height: '229px',
            'border-radius': '50%',
            // background: '#dd3939',
        },
        to: {
            x: '0px',
            y: '0px',
            width: '288px',
            height: '312px',
            'border-radius': '0%',
            // background: 'transparent',
        },
        config: { duration: 300 },
    });
    return (
        <Container>
            <Head pageNumber={3} />
            <ForthForm />
            <div id='page4WallPaper'>
                <img src='images/doctor.svg' alt='doctor with Needle' />
            </div>
            <div id='page4WallPaperDecoration'>
                <animated.img
                    src='images/goldenStar.svg'
                    alt='doctor with Needle'
                    style={{ ...decorationAnimation }}
                />
            </div>
        </Container>
    );
}

export default ForthPage;

const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 200px;

    #page4WallPaper {
        height: 759px;
        width: 783px;
        position: absolute;
        left: 940px;
        top: 198px;
        z-index: 1;
    }

    #page4WallPaperDecoration {
        height: 312px;
        width: 288px;
        position: absolute;
        left: 971px;
        top: 180.5px;
        right: 661px;
        top: 180.5px;
        z-index: 0;
    }
`;
