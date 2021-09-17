import styled from 'styled-components';

function EndPage() {
    return (
        <Container>
            <p>მადლობა</p>
            <div id='bigStar'>
                <img src='images/bigStar.svg' alt='white big star' />
            </div>
            <div id='smallStar'>
                <img src='images/smallStar.svg' alt='white small star' />
            </div>
        </Container>
    );
}

export default EndPage;

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
