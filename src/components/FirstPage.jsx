import { Link } from 'react-router-dom';
import styled from 'styled-components';

function FirstPage() {
    return (
        <Container>
            <img src='images/logo.svg' alt='ვარსკვლავისკენ მფრინავი კოსმონავტი' />
            <Link exact to='/second-page'>
                კითხვარის
                <br /> დაწყება
            </Link>
        </Container>
    );
}

export default FirstPage;

const Container = styled.div`
    width: 100%;
    height: 100%;

    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        width: 100px;
        height: 100px;
        margin-bottom: 100px;
    }
    a {
        color: #232323;
        font-size: 30px;
        line-height: 36px;
        font-style: normal;
        font-weight: 700;
        text-align: center;
        text-decoration: none;
        cursor: pointer;

        &:hover {
            filter: drop-shadow(0.156vw 0.156vw 0px rgba(0, 0, 0, 0.5));
        }
    }
`;
