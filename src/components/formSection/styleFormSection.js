import styled from 'styled-components';
import PhoneInput from 'react-phone-number-input';

import { primaryColor } from '../../utils/colors';

export const FormSectionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 64px 0px;

  background-color: ${primaryColor[900]};
`;

export const FormSectionSizeControll = styled.div`
  max-width: 1200px;

  display: flex;
  column-gap: 4rem;
`;

export const BringMuuras = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 50%;

  color: #fff;

  h1 {
    font-size: 2.5rem;
  }

  img {
    width: 100%;
    border-radius: 24px;
  }
`;

export const FormContainer = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;

  row-gap: 1rem;

  color: #fff;

  input,
  textarea {
    width: 100%;
    padding: 1rem;
    border-radius: 8px;
    border: none;
    font-family: sans-serif;
  }
  button {
    background-color: #fff;
    padding: 1rem 2rem;
    border: none;
    border-radius: 8px;
  }
`;

export const FormRowTwoInputs = styled.div`
  display: flex;
  column-gap: 1rem;
  width: 100%;
  input {
    width: 50%;
  }
`;

export const StyledPhoneInput = styled(PhoneInput)`
  width: 50%;
  height: 48px;

  .PhoneInputInput {
    border: none;
    outline: none;
    width: 50%;
  }

  .PhoneInputCountry {
    margin-right: 12px;
  }
`;
