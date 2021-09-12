import { useForm } from 'react-hook-form';
import { AiOutlineRight } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

function SecondInputs() {
    const history = useHistory();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = data => {
        console.log(data);

        history.push('/third-page');
    };

    return (
        <Container onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor='name'>სახელი*</label>
            <input
                type='text'
                className='name'
                placeholder='ლაშა'
                {...register('name', {
                    required: { value: true, message: 'This field is required' },
                    minLength: { value: 3, message: 'სახელის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან' },
                    maxLength: { value: 255, message: 'სახელის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან' },
                    pattern: {
                        value: /[ა-ჰa-zA-Z]+|[^0-9]+/,
                        message: 'სახელის ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს',
                    },
                })}
            />
            <p className='inputError'>{errors.name && <span>{errors.name.message}</span>}</p>

            <label htmlFor='lastName'>გვარი*</label>
            <input
                type='text'
                className='lastName'
                placeholder='გონჯილაშვილი'
                {...register('lastName', {
                    required: { value: true, message: 'This field is required' },
                    minLength: { value: 3, message: 'გვარის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან' },
                    maxLength: { value: 255, message: 'გვარის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან' },
                    pattern: {
                        //! თუ რიცხთან ასოცაა მაშინ არაფერს შვრება მაგრამ თუ არაა აგდებს errors
                        value: /[^0-9]+/,
                        message: 'გვარის ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს',
                    },
                })}
            />
            <div className='inputError'>{errors.lastName && <span>{errors.lastName.message}</span>}</div>

            <label htmlFor='email'>მეილი*</label>
            <input
                type='text'
                className='email'
                placeholder='lgonjila@redberry.ge'
                {...register('email', {
                    required: { value: true, message: 'This field is required' },
                    pattern: {
                        value: /@redberry.ge$/,
                        message: 'გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)',
                    },
                })}
            />
            <div className='inputError'>{errors.email && <span>{errors.email.message}</span>}</div>

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

    .inputError {
        font-family: Helvetica Neue LT GEO;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 19px;
        color: #f15524;
        transform: translateY(-53px);
    }

    button {
        width: 25px;
        height: 35px;
        border: 0;
        position: absolute;
        left: calc(50% - 14px / 2 + 79px);
        bottom: 104.37px;
        background-color: transparent;
    }
`;
