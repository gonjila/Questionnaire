import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { AiOutlineRight } from 'react-icons/ai';
import styled from 'styled-components';

import { addSecondpageInfo } from '../../redux/actions/information-actions';

function SecondInputs() {
    const history = useHistory();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const dispatch = useDispatch();

    const [nameState, setNameState] = useState(null);
    const [lastNameState, setLastNameState] = useState(null);
    const [EmailState, setEmailState] = useState(null);

    const onSubmit = data => {
        // console.log(data);
        dispatch(addSecondpageInfo(data));
        history.push('/third-page');
    };

    const regex = new RegExp('^[ა-ჰ a-z A-z]+.{2,}$');
    const emailRegex = new RegExp('@redberry.ge$');
    const typing = event => {
        if (event.target.name === 'name' && regex.test(event.target.value)) {
            setNameState(true);
        } else if (event.target.name === 'lastName' && regex.test(event.target.value)) {
            setLastNameState(true);
        } else if (event.target.name === 'email' && emailRegex.test(event.target.value)) {
            setEmailState(true);
        } else {
            setNameState(false);
            setLastNameState(false);
            setEmailState(false);
        }
    };

    const valid = () => {
        if (nameState && lastNameState && EmailState) {
            return true;
        }
        return false;
    };

    return (
        <Container onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor='name'>სახელი*</label>
            <input
                type='text'
                className='name'
                placeholder='იოსებ'
                onKeyDown={typing}
                {...register('name', {
                    required: { value: true, message: 'გთხოვთ, შეავსე ველი' },
                    minLength: { value: 3, message: 'სახელის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან' },
                    maxLength: { value: 255, message: 'სახელის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან' },
                    pattern: {
                        value: /^[ა-ჰ a-z A-z]+$/,
                        message: 'სახელის ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს',
                    },
                })}
            />
            <p className='inputError'>{errors.name && <span>{errors.name.message}</span>}</p>

            <label htmlFor='lastName'>გვარი*</label>
            <input
                type='text'
                className='lastName'
                placeholder='ჯუღაშვილი'
                onKeyDown={typing}
                {...register('lastName', {
                    required: { value: true, message: 'გთხოვთ, შეავსე ველი' },
                    minLength: { value: 3, message: 'გვარის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან' },
                    maxLength: { value: 255, message: 'გვარის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან' },
                    pattern: {
                        value: /^[ა-ჰ a-z A-z]+$/,
                        message: 'გვარის ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს',
                    },
                })}
            />
            <div className='inputError'>{errors.lastName && <span>{errors.lastName.message}</span>}</div>

            <label htmlFor='email'>მეილი*</label>
            <input
                type='text'
                className='email'
                placeholder='fbi@redberry.ge'
                onKeyUp={typing}
                {...register('email', {
                    required: { value: true, message: 'გთხოვთ, შეავსე ველი' },
                    pattern: {
                        value: /@redberry.ge$/,
                        message: 'გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)',
                    },
                })}
            />
            <div className='inputError'>{errors.email && <span>{errors.email.message}</span>}</div>

            <button className='nextPage' style={valid() ? { opacity: 1 } : { opacity: 0.5 }}>
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
        cursor: pointer;
    }
`;
