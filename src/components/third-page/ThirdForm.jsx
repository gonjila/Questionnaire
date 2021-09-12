import { useForm } from 'react-hook-form';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import styled from 'styled-components';

function ThirdForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = data => {
        console.log(data);
    };

    const onPrevBynClick = () => {};

    return (
        <Container onSubmit={handleSubmit(onSubmit)} className='questionsWrapper'>
            <p>გაქვს გადატანილი Covid-19?*</p>
            <label className='label'>
                {/* The real radio */}
                <input type='radio' className='label__input' {...register('question1')} />
                {/* The fake circle */}
                <div className='label__circle'>
                    {/* The inner circle */}
                    <div className='label__radio label__radio--selected'></div>
                </div>
                {/* The text */}
                კი
            </label>
            <label className='label'>
                {/* The real radio */}
                <input type='radio' className='label__input' {...register('question1')} />
                {/* The fake circle */}
                <div className='label__circle'>
                    {/* The inner circle */}
                    <div className='label__radio label__radio--selected'></div>
                </div>
                {/* The text */}
                არა
            </label>
            <label className='label'>
                {/* The real radio */}
                <input type='radio' className='label__input' {...register('question1')} />
                {/* The fake circle */}
                <div className='label__circle'>
                    {/* The inner circle */}
                    <div className='label__radio label__radio--selected'></div>
                </div>
                {/* The text */}
                ახლა მაქვს
            </label>
            <p>ანტისხეულების ტესტი გაქვს გაკეთებული?*</p>
            <label className='label'>
                {/* The real radio */}
                <input type='radio' className='label__input' {...register('question2')} />
                {/* The fake circle */}
                <div className='label__circle'>
                    {/* The inner circle */}
                    <div className='label__radio label__radio--selected'></div>
                </div>
                {/* The text */}
                კი
            </label>
            <label className='label'>
                {/* The real radio */}
                <input type='radio' className='label__input' {...register('question2')} />
                {/* The fake circle */}
                <div className='label__circle'>
                    {/* The inner circle */}
                    <div className='label__radio label__radio--selected'></div>
                </div>
                {/* The text */}
                არა
            </label>
            <p>
                მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი)
                <br /> როდის გქონდა Covid-19*
            </p>
            <input type='date' name='' id='page3Date' />

            <button className='prevPage' onClick={onPrevBynClick}>
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
            margin: 42px 0 8px;
        }

        &:last-of-type {
            width: 596px;
            height: 56px;
            margin-bottom: 29px;
        }
    }

    .label {
        font-family: Helvetica Neue LT GEO;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        text-align: left;
        margin-bottom: 18px;
        cursor: pointer;

        display: inline-flex;
        align-items: center;
    }

    .label__input {
        /* Hide it */
        display: none;
        width: 23px;
        height: 23px;
    }

    .label__circle {
        /* Rounded border */
        border: 1px solid #232323;
        border-radius: 50%;

        /* Spacing */
        margin-right: 8px;
        height: 23px;
        width: 23px;
        padding: 2px;
    }

    .label__radio {
        /* Rounded border */
        border-radius: 50%;
        height: 17px;
        width: 17px;

        /* For not selected radio */
        background-color: transparent;
    }

    .label__radio--selected {
        /* For selected radio */
        background-color: #232323;
    }

    #page3Date {
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

    button {
        width: 25px;
        height: 35px;
        border: 0;
        background-color: transparent;
        position: absolute;

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
