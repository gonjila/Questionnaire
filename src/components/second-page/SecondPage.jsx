import styled from 'styled-components';

import Head from '../Head';
import SecondInputs from './SecondInputs';

function SecondPage() {
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

        img {
            width: 100%;
            height: 100%;
        }
    }
`;
