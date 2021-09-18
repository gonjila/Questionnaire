import { Link } from 'react-router-dom';
import styled from 'styled-components';

function FirstPage() {
    const imgAnimations = useSpring({
        from: { width: '4212px', height: '4212px' },
        to: { width: '100px', height: '100px' },
        config: { duration: 500 },
    });
    const linkAnimation = useSpring({
        delay: 1000,
        from: { y: -100, opacity: 0 },
        to: { y: 0, opacity: 1 },
        config: { duration: 1000 },
    });

    return (
        <Container>
            <animated.img
                style={{ ...imgAnimations }}
                src='images/logo.svg'
                alt='ვარსკვლავისკენ მფრინავი კოსმონავტი'
            />
            <animated.div style={{ ...linkAnimation }}>
                <Link to='/second-page'>
                    კითხვარის
                    <br /> დაწყება
                </Link>
            </animated.div>
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
    div {
        text-align: center;
        a {
            color: #232323;
            font-size: 30px;
            line-height: 36px;
            font-style: normal;
            font-weight: 700;
            text-decoration: none;
            cursor: pointer;

            &:hover {
                filter: drop-shadow(0.156vw 0.156vw 0px rgba(0, 0, 0, 0.5));
            }
        }
    }
`;
