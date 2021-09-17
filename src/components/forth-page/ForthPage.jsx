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
    }
`;
