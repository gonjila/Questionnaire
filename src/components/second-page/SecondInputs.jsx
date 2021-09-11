import { useForm } from 'react-hook-form';
import { AiOutlineRight } from 'react-icons/ai';
import styled from 'styled-components';

function SecondInputs() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <Container onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor='name'>სახელი*</label>
            <input
                type='text'
                className='name'
                placeholder='ლაშა'
                {...register('name', { required: true, minLength: 3, maxLength: 255, pattern: /([a-z,A-Z])\w+/g })}
            />

            <label htmlFor='lastName'>გვარი*</label>
            <input
                type='text'
                className='lastName'
                placeholder='გონჯილაშვილი'
                {...register('lastName', { required: true, minLength: 3, maxLength: 255 })}
            />

            <label htmlFor='email'>მეილი*</label>
            <input
                type='text'
                className='email'
                placeholder='lgonjila@redberry.ge'
                {...register('email', { required: true, minLength: 3, maxLength: 255 })}
            />
            <button className='nextPage'>
                <AiOutlineRight style={{ width: '100%', height: '100%' }} />
            </button>
        </Container>
    );
}

export default SecondInputs;

const Container = styled.form`
    width: 100%;

    display: flex;
    flex-direction: column;

    label {
        height: 40px;
        font-family: Helvetica Neue LT GEO;
        font-size: 22px;
        font-style: normal;
        font-weight: 700;
        line-height: 27px;
        letter-spacing: 0em;
        text-align: left;
    }

    input {
        width: 513px;
        height: 50px;
        font-family: Helvetica Neue LT GEO;
        font-size: 18px;
        line-height: 22px;
        font-weight: 400;
        font-style: normal;
        padding: 10px 20px;
        border: 0.8px solid #232323;
        margin-bottom: 56px;
        background: transparent;
    }

    button {
        width: 25px;
        height: 35px;
        border: 0;
        position: absolute;
        left: calc(50% - 14px / 2 + 79px);
        bottom: 104.37px;
    }
`;
