import { useForm } from 'react-hook-form';
import styled from 'styled-components';

function ForthForm() {
    const { register, handleSubmit } = useForm();

    return (
        <Container>
            <p>უკვე აცრილი ხარ?*</p>
            <input type='radio' />
        </Container>
    );
}

export default ForthForm;

const Container = styled.form``;
