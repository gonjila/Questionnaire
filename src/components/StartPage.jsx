import styled from 'styled-components';

function StartPage() {
    return (
        <Container>
            <img src='images/logo.svg' alt='ვარსკვლავისკენ მფრინავი კოსმონავტი' />
            <button
                onClick={() => {
                    console.log('clicked');
                }}
            >
                კითხვარის დაწყება
            </button>
        </Container>
    );
}

export default StartPage;

const Container = styled.div`
    width: 100%;
    height: 100%;

    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        margin-bottom: 100px;
    }
    button {
        width: 170px;
        font-weight: 700;
        font-size: 30px;
        line-height: 36px;
        border: 0;
        background-color: transparent;

        &:hover {
            filter: drop-shadow(3px 3px 0px rgba(0, 0, 0, 0.5));
            /* text-shadow: 1px 1px 0px #ffffff, 3px 3px 0px rgba(0, 0, 0, 0.5); */
        }
    }
`;
