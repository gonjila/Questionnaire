import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import styled from 'styled-components';

import { addForthpageInfo } from '../../redux/actions/information-actions';

function ForthForm() {
    const history = useHistory();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const dispatch = useDispatch();

    const [question1Yes, setQuestion1Yes] = useState(false);
    const [question1No, setQuestion1No] = useState(false);

    const [question2Registered, setQuestion2Registered] = useState(false);
    const [question2Completed, setQuestion2Completed] = useState(false);
    const [question2Unregistered, setQuestion2Unregistered] = useState(false);

    const [question3Weitting, setQuestion3Weitting] = useState(false);
    const [question3Not, setQuestion3Not] = useState(false);
    const [question3Going, setQuestion3Going] = useState(false);

    const onSubmit = data => {
        dispatch(addForthpageInfo(data));
        history.push('/fifth-page');
    };

    const selection = event => {
        if (event.target.id === 'p4q1r1') {
            setQuestion1Yes(true);
            setQuestion1No(false);
        } else if (event.target.id === 'p4q1r2') {
            setQuestion1Yes(false);
            setQuestion1No(true);
        } else if (event.target.id === 'p4q2r1') {
            setQuestion2Registered(true);
            setQuestion2Completed(false);
            setQuestion2Unregistered(false);
        } else if (event.target.id === 'p4q2r2') {
            setQuestion2Registered(false);
            setQuestion2Completed(true);
            setQuestion2Unregistered(false);
        } else if (event.target.id === 'p4q2r3') {
            setQuestion2Registered(false);
            setQuestion2Completed(false);
            setQuestion2Unregistered(true);
        } else if (event.target.id === 'p4q3r1') {
            setQuestion3Weitting(true);
            setQuestion3Not(false);
            setQuestion3Going(false);
        } else if (event.target.id === 'p4q3r2') {
            setQuestion3Weitting(false);
            setQuestion3Not(true);
            setQuestion3Going(false);
        } else if (event.target.id === 'p4q3r3') {
            setQuestion3Weitting(false);
            setQuestion3Not(false);
            setQuestion3Going(true);
        }
    };

    const valid = () => {
        if (
            (question1Yes && (question2Registered || question2Completed || question2Unregistered)) ||
            (question1No && (question3Weitting || question3Not || question3Going))
        ) {
            return true;
        }
        return false;
    };

    const onPrevBtnClick = () => {
        history.push('/third-page');
    };

    return (
        <Container onSubmit={handleSubmit(onSubmit)}>
            <p>უკვე აცრილი ხარ?*</p>

            <label>
                <input
                    id='p4q1r1'
                    type='radio'
                    value='კი'
                    checked={question1Yes}
                    onClick={selection}
                    {...register('უკვე_აცრილი_ხარ', { required: 'გთხოვთ, აირჩიე ერთ-ერთი' })}
                />
                კი
            </label>

            <label>
                <input
                    id='p4q1r2'
                    type='radio'
                    value='არა'
                    checked={question1No}
                    onClick={selection}
                    {...register('უკვე_აცრილი_ხარ', { required: 'გთხოვთ, აირჩიე ერთ-ერთი' })}
                />
                არა
            </label>
            {/* validation */}
            <div className='inputError'>
                {errors.უკვე_აცრილი_ხარ && <span>{errors.უკვე_აცრილი_ხარ.message}</span>}
            </div>

            {question1Yes && (
                <>
                    <p>აირჩიე რა ეტაპზე ხარ*</p>

                    <label>
                        <input
                            id='p4q2r1'
                            type='radio'
                            value='პირველი დოზა და დარეგისტრირებული ვარ მეორეზე'
                            checked={question2Registered}
                            onClick={selection}
                            {...register('აირჩიე_რა_ეტაპზე_ხარ', { required: 'გთხოვთ, აირჩიე ერთ-ერთი' })}
                        />
                        პირველი დოზა და დარეგისტრირებული ვარ მეორეზე
                    </label>

                    <label>
                        <input
                            id='p4q2r2'
                            type='radio'
                            value='სრულად აცრილი ვარ'
                            checked={question2Completed}
                            onClick={selection}
                            {...register('აირჩიე_რა_ეტაპზე_ხარ', { required: 'გთხოვთ, აირჩიე ერთ-ერთი' })}
                        />
                        სრულად აცრილი ვარ
                    </label>

                    <label>
                        <input
                            id='p4q2r3'
                            type='radio'
                            value='პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე'
                            checked={question2Unregistered}
                            onClick={selection}
                            {...register('აირჩიე_რა_ეტაპზე_ხარ', { required: 'გთხოვთ, აირჩიე ერთ-ერთი' })}
                        />
                        პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე
                    </label>
                    {/* validation */}
                    <div className='inputError'>
                        {errors.აირჩიე_რა_ეტაპზე_ხარ && <span>{errors.აირჩიე_რა_ეტაპზე_ხარ.message}</span>}
                    </div>

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

                    <label>
                        <input
                            id='p4q3r1'
                            type='radio'
                            value='დარეგისტრირებული ვარ და ველოდები რიცხვს'
                            checked={question3Weitting}
                            onClick={selection}
                            {...register('რას_ელოდები', { required: 'გთხოვთ, აირჩიე ერთ-ერთი' })}
                        />
                        დარეგისტრირებული ვარ და ველოდები რიცხვს
                    </label>

                    <label>
                        <input
                            id='p4q3r2'
                            type='radio'
                            value='არ ვგეგმავ'
                            checked={question3Not}
                            onClick={selection}
                            {...register('რას_ელოდები', { required: 'გთხოვთ, აირჩიე ერთ-ერთი' })}
                        />
                        არ ვგეგმავ
                    </label>

                    <label>
                        <input
                            id='p4q3r3'
                            type='radio'
                            value='გადატანილი მაქვს და ვგეგმავ აცრას'
                            checked={question3Going}
                            onClick={selection}
                            {...register('რას_ელოდები', { required: 'გთხოვთ, აირჩიე ერთ-ერთი' })}
                        />
                        გადატანილი მაქვს და ვგეგმავ აცრას
                    </label>
                    {/* validation */}
                    <div className='inputError'>
                        {errors.რას_ელოდები && <span>{errors.რას_ელოდები.message}</span>}
                    </div>

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
            <button type='submit' className='nextPage' style={valid() ? { opacity: '1' } : { opacity: '0.5' }}>
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

        display: inline-flex;
        align-items: center;
    }

    input[type='radio'] {
        accent-color: #232323;
        -webkit-accent-color: #232323;
        width: 23px;
        height: 23px;
        margin: 0 22px;
        cursor: pointer;
    }

    .inputError {
        font-family: Helvetica Neue LT GEO;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 19px;
        color: #f15524;
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
