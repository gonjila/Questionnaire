import styled from 'styled-components';

import Head from '../Head';
import ThirdForm from './ThirdForm';

function ThirdPage() {
    return (
        <Container>
            <Head pageNumber={2} />
            <ThirdForm />

            <div id='page3WallPaper'>
                <img src='images/cold-boy.svg' alt='' />
            </div>
            <div id='page3WallPaperDecoration' />
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
