import styled from 'styled-components';

function Head({ pageNumber }) {
    return (
        <Container id='head'>
            <div>
                <div>
                    <img src='images/text-logo.svg' alt='' />
                </div>
                <p>{pageNumber}/4</p>
            </div>
            <hr id='headHorizontal' />
        </Container>
    );
}

export default Head;

const Container = styled.div`
    width: 100%;
    /* height: 95px; */
    margin: 89px 0 42px;

    div {
        margin-bottom: 23px;
        display: flex;
        justify-content: space-between;

        div {
            height: 24.00648307800293px;
            width: 142.69686889648438px;

            img {
                width: 100%;
                transform: translateY(50%);
            }
        }

        p {
            font-family: Anonymous Pro;
            font-style: normal;
            font-weight: bold;
            font-size: 40px;
            line-height: 40px;
            text-align: right;
        }
    }

    #headHorizontal {
        border: 1.8px solid #232323;
    }
`;
