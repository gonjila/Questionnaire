import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import styled from 'styled-components';

function ThirdForm() {
    const history = useHistory();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [question1Yes, setQuestion1Yes] = useState(false);
    const [question1No, setQuestion1No] = useState(false);
    const [question1Now, setQuestion1Now] = useState(false);
    const [question2Yes, setQuestion2Yes] = useState(false);
    const [question2No, setQuestion2No] = useState(false);

    const onSubmit = data => {
        console.log(data);

        history.push('/forth-page');
    };

    const onQuestion1Yes = () => {
        setQuestion1Yes(true);
        setQuestion1No(false);
        setQuestion1Now(false);
    };
    const onQuestion1No = () => {
        setQuestion1Yes(false);
        setQuestion1No(true);
        setQuestion1Now(false);
    };
    const onQuestion1Now = () => {
        setQuestion1Yes(false);
        setQuestion1No(false);
        setQuestion1Now(true);
    };

    const onQuestion2Yes = () => {
        setQuestion2Yes(true);
        setQuestion2No(false);
    };
    const onQuestion2No = () => {
        setQuestion2Yes(false);
        setQuestion2No(true);
    };

    const onPrevBtnClick = () => {
        history.push('/second-page');
    };

    return (
        <Container onSubmit={handleSubmit(onSubmit)} className='questionsWrapper'>
            <p>გაქვს გადატანილი Covid-19?*</p>

            <label className='label'>
                <input
                    id='p2r1'
                    type='radio'
                    className='label__input'
                    value='კი'
                    checked={question1Yes}
                    onClick={onQuestion1Yes}
                    {...register('question1', { required: 'გთხოვთ, აირჩიე ერთ-ერთი' })}
                />
                კი
            </label>

            <label className='label'>
                <input
                    id='p2r2'
                    type='radio'
                    className='label__input'
                    value='არა'
                    checked={question1No}
                    onClick={onQuestion1No}
                    {...register('question1', { required: 'გთხოვთ, აირჩიე ერთ-ერთი' })}
                />
                არა
            </label>

            <label className='label'>
                <input
                    id='p2r3'
                    type='radio'
                    className='label__input'
                    value='ახლა მაქვს'
                    checked={question1Now}
                    onClick={onQuestion1Now}
                    {...register('question1', { required: 'გთხოვთ, აირჩიე ერთ-ერთი' })}
                />
                ახლა მაქვს
            </label>
            {/* validation */}
            <div className='inputError'>{errors.question1 && <span>{errors.question1.message}</span>}</div>

            {question1Yes && (
                <>
                    <p>ანტისხეულების ტესტი გაქვს გაკეთებული?*</p>
                    <label className='label'>
                        <input
                            id='p2r4'
                            type='radio'
                            className='label__input'
                            value='კი'
                            checked={question2Yes}
                            onClick={onQuestion2Yes}
                            {...register('question2', { required: 'გთხოვთ, აირჩიე ერთ-ერთი' })}
                        />
                        კი
                    </label>

                    <label className='label'>
                        <input
                            id='p2r5'
                            type='radio'
                            className='label__input'
                            value='არა'
                            checked={question2No}
                            onClick={onQuestion2No}
                            {...register('question2', { required: 'გთხოვთ, აირჩიე ერთ-ერთი' })}
                        />
                        არა
                    </label>
                    {/* validation */}
                    <div className='inputError'>{errors.question2 && <span>{errors.question2.message}</span>}</div>

                    {question2Yes && (
                        <>
                            <p className='lastPs'>
                                თუ გახსოვს, გთხოვთ, მიუთითე ტესტის მიახლოებითი
                                <br /> რიცხვი და ანტისხეულების რაოდენობა*
                            </p>
                            <input
                                id='page3input1'
                                type='number'
                                className='page3Inputs'
                                placeholder='რიცხვი'
                                {...register('testNumber', { required: true })}
                            />
                            <input
                                id='page3input1'
                                type='number'
                                className='page3Inputs'
                                placeholder='ანტისხეულების რაოდენობა'
                                {...register('antibodiesQuantity', { required: true })}
                            />
                            {/* validations */}
                            <div className='inputError'>
                                {errors.testNumber && <span>გთხოვთ, ჩაწერე ტესტის მიახლოებითი რიცხვი</span>}
                            </div>
                            <div className='inputError'>
                                {errors.antibodiesQuantity && <span>გთხოვთ, ჩაწერო ანტისხეულების რაოდენობა</span>}
                            </div>
                        </>
                    )}

                    {question2No && (
                        <>
                            <p className='lastPs'>
                                მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი)
                                <br /> როდის გქონდა Covid-19*
                            </p>

                            <input
                                id='page3input1'
                                type='date'
                                className='page3Inputs'
                                {...register('date', { required: 'გთხოვთ, ჩაწერო როდის გქონდა Covid-19' })}
                            />
                            {/* validation */}
                            <div className='inputError'>{errors.date && <span>{errors.date.message}</span>}</div>
                        </>
                    )}
                </>
            )}

            <button type='button' className='prevPage' onClick={onPrevBtnClick}>
                <AiOutlineLeft style={{ width: '100%', height: '100%' }} />
            </button>
            <button type='submit' className='nextPage'>
                <AiOutlineRight style={{ width: '100%', height: '100%' }} />
            </button>
        </Container>
    );
}

export default ThirdForm;

const Container = styled.form`
    width: 100%;

    display: flex;
    flex-direction: column;

    p {
        font-family: Helvetica Neue LT GEO;
        font-size: 22px;
        font-style: normal;
        font-weight: 700;
        line-height: 27px;
        text-align: left;

        width: 575px;
        height: 40px;
        margin: 46px 0 8px;

        &:nth-of-type(1) {
            margin-top: 0;
        }
    }
    .lastPs {
        width: 596px;
        height: 56px;
        margin-bottom: 29px;
    }

    label {
        font-family: Helvetica Neue LT GEO;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        text-align: left;
        width: 50%;
        margin-bottom: 18px;

        display: inline-flex;
        align-items: center;
    }

    input {
        margin-left: 23px;
    }

    input[type='radio'] {
        accent-color: #232323;
        -webkit-accent-color: #232323;
        width: 23px;
        height: 23px;
        margin: 0 22px;
        cursor: pointer;
    }

    .page3Inputs {
        height: 50px;
        width: 513px;
        border: 0.8px solid #232323;
        padding: 10px 20px;

        font-family: Helvetica Neue LT GEO;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 22px;
        color: #232323;
    }
    #page3input1 {
        margin-bottom: 25px;
    }

    .inputError {
        font-family: Helvetica Neue LT GEO;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 19px;
        color: #f15524;
    }

    button {
        width: 25px;
        height: 35px;
        border: 0;
        background-color: transparent;
        position: absolute;
        cursor: pointer;
        z-index: 5;

        &.prevPage {
            left: 887px;
            top: 955px;
            right: 1019px;
            bottom: 104px;
        }
        &.nextPage {
            left: 1018px;
            top: 955px;
            right: 888px;
            bottom: 104px;
        }
    }
`;
