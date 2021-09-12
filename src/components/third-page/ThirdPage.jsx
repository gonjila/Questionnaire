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
        border-radius: 0px;

        img {
            width: 100%;
            height: 100%;
        }
    }
`;
