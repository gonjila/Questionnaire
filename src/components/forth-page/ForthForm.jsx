import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import styled from 'styled-components';

function ForthForm() {
    const history = useHistory();
    const { register, handleSubmit } = useForm();

    const [question1Yes, setQuestion1Yes] = useState(false);
    const [question1No, setQuestion1No] = useState(false);

    const [question2Registered, setQuestion2Registered] = useState(false);
    const [question2Completed, setQuestion2Completed] = useState(false);
    const [question2Unregistered, setQuestion2Unregistered] = useState(false);

    const [question3Weitting, setQuestion3Weitting] = useState(false);
    const [question3Not, setQuestion3Not] = useState(false);
    const [question3Going, setQuestion3Going] = useState(false);

    const onSubmit = () => {};

    const onQuestion1Yes = () => {
        setQuestion1Yes(true);
        setQuestion1No(false);
    };
    const onQuestion1No = () => {
        setQuestion1Yes(false);
        setQuestion1No(true);
    };

    const onQuestion2Registered = () => {
        setQuestion2Registered(true);
        setQuestion2Completed(false);
        setQuestion2Unregistered(false);
    };
    const onQuestion2Completed = () => {
        setQuestion2Registered(false);
        setQuestion2Completed(true);
        setQuestion2Unregistered(false);
    };
    const onQuestion2Unregistered = () => {
        setQuestion2Registered(false);
        setQuestion2Completed(false);
        setQuestion2Unregistered(true);
    };

    const onQuestion3Weitting = () => {
        setQuestion3Weitting(true);
        setQuestion3Not(false);
        setQuestion3Going(false);
    };
    const onQuestion3Not = () => {
        setQuestion3Weitting(false);
        setQuestion3Not(true);
        setQuestion3Going(false);
    };
    const onQuestion3Going = () => {
        setQuestion3Weitting(false);
        setQuestion3Not(false);
        setQuestion3Going(true);
    };

    const onPrevBtnClick = () => {
        history.push('/third-page');
    };

    return (
        <Container onSubmit={handleSubmit(onSubmit)}>
            <p>უკვე აცრილი ხარ?*</p>

            <label htmlFor='question1'>
                <input
                    type='radio'
                    value='კი'
                    checked={question1Yes}
                    onClick={onQuestion1Yes}
                    {...register('question1', { required: true })}
                />
                კი
            </label>

            <label htmlFor='question1'>
                <input
                    type='radio'
                    value='არა'
                    checked={question1No}
                    onClick={onQuestion1No}
                    {...register('question1', { required: true })}
                />
                არა
            </label>

            {question1Yes && (
                <>
                    <p>აირჩიე რა ეტაპზე ხარ*</p>

                    <label htmlFor='question2'>
                        <input
                            type='radio'
                            value='პირველი დოზა და დარეგისტრირებული ვარ მეორეზე'
                            checked={question2Registered}
                            onClick={onQuestion2Registered}
                            {...register('question2', { required: true })}
                        />
                        პირველი დოზა და დარეგისტრირებული ვარ მეორეზე
                    </label>

                    <label htmlFor='question2'>
                        <input
                            type='radio'
                            value='სრულად აცრილი ვარ'
                            checked={question2Completed}
                            onClick={onQuestion2Completed}
                            {...register('question2', { required: true })}
                        />
                        სრულად აცრილი ვარ
                    </label>

                    <label htmlFor='question2'>
                        <input
                            type='radio'
                            value='პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე'
                            checked={question2Unregistered}
                            onClick={onQuestion2Unregistered}
                            {...register('question2', { required: true })}
                        />
                        პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე
                    </label>
                    {question2Unregistered && (
                        <>
                            <p className='registrationLink'>
                                რომ არ გადადო,
                                <br /> ბარემ ახლავე დარეგისტრირდი
                                <br /> <a href='https://booking.moh.gov.ge/'>https://booking.moh.gov.ge/</a>
                            </p>
                        </>
                    )}
                </>
            )}
            {question1No && (
                <>
                    <p>რას ელოდები?*</p>

                    <label htmlFor='question3'>
                        <input
                            type='radio'
                            value='დარეგისტრირებული ვარ და ველოდები რიცხვს'
                            checked={question3Weitting}
                            onClick={onQuestion3Weitting}
                            {...register('question3', { required: true })}
                        />
                        დარეგისტრირებული ვარ და ველოდები რიცხვს
                    </label>

                    <label htmlFor='question3'>
                        <input
                            type='radio'
                            value='არ ვგეგმავ'
                            checked={question3Not}
                            onClick={onQuestion3Not}
                            {...register('question3', { required: true })}
                        />
                        არ ვგეგმავ
                    </label>

                    <label htmlFor='question3'>
                        <input
                            type='radio'
                            value='გადატანილი მაქვს და ვგეგმავ აცრას'
                            checked={question3Going}
                            onClick={onQuestion3Going}
                            {...register('question3', { required: true })}
                        />
                        გადატანილი მაქვს და ვგეგმავ აცრას
                    </label>

                    {question3Not && (
                        <>
                            <p className='registrationLink'>
                                👉 <a href='https://booking.moh.gov.ge/'>https://booking.moh.gov.ge/</a>
                            </p>
                        </>
                    )}
                    {question3Going && (
                        <>
                            <p className='registrationLink'>
                                ახალი პროტოკოლით კოვიდის გადატანიდან 1
                                <br /> თვის შემდეგ შეგიძლიათ ვაქცინის გაკეთება.
                                <br />
                                <br /> 👉 რეგისტრაციის ბმული
                                <br /> <a href='https://booking.moh.gov.ge/'>https://booking.moh.gov.ge/</a>
                            </p>
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

export default ForthForm;

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

    label {
        font-family: Helvetica Neue LT GEO;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        text-align: left;
        width: 50%;
        margin-bottom: 18px;
        cursor: pointer;

        display: inline-flex;
        align-items: center;
    }

    input[type='radio'] {
        accent-color: #232323;
        -webkit-accent-color: #232323;
        width: 23px;
        height: 23px;
        margin: 0 22px;
    }

    .registrationLink {
        margin: 21px 0 0 62px;
        font-family: Helvetica Neue LT GEO;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;

        a {
            text-decoration: none;
            color: #1289ae;
        }
    }

    button {
        width: 25px;
        height: 35px;
        border: 0;
        background-color: transparent;
        position: absolute;
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
