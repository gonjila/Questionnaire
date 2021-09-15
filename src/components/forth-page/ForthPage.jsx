import styled from 'styled-components';
import Head from '../Head';
import ForthForm from './ForthForm';

function ForthPage() {
    return (
        <Container>
            <Head pageNumber={3} />
            <ForthForm />
            <div id='page4WallPaper'>
                <img src='images/doctor.svg' alt='doctor with Needle' />
            </div>
            <div id='page4WallPaperDecoration'>
                <img src='images/goldenStar.svg' alt='doctor with Needle' />
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
