import styled, { keyframes } from 'styled-components';

import { primaryColor } from '../../utils/colors';
import { radius } from '../../utils/radius';

export const FormSectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0 0;
  scroll-margin-top: 120px;

  background-color: ${primaryColor[900]};

  @media (max-width: 360px) {
    padding: 56px 0 0;
  }
`;

export const FormSectionSizeControll = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 0 24px 80px;

  display: flex;
  column-gap: 5rem;

  @media (max-width: 960px) {
    flex-direction: column;
    row-gap: 2.5rem;
  }

  @media (max-width: 360px) {
    padding: 0 16px 56px;
  }
`;

export const BringMuuras = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  width: 50%;

  color: #fff;

  h2 {
    font-size: 2.5rem;
    line-height: 1.1;
  }

  span {
    color: rgba(255, 255, 255, 0.72);
    line-height: 1.55;
    max-width: 46ch;
  }

  @media (max-width: 960px) {
    width: 100%;
  }

  @media (max-width: 360px) {
    h2 {
      font-size: 2rem;
    }
  }
`;

/* Rounded frame that clips the image so it can zoom in slightly on hover. */
export const ImageFrame = styled.div`
  overflow: hidden;
  border-radius: ${radius.xl};
  margin-top: 0.5rem;

  img {
    display: block;
    width: 100%;
    transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  }

  &:hover img {
    transform: scale(1.06);
  }
`;

export const FormContainer = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;

  row-gap: 1.25rem;

  color: #fff;

  h2 {
    font-size: 2rem;
    line-height: 1.15;
    margin-bottom: 0.25rem;
  }

  /* Minimalist translucent fields that sit on the dark-green panel, with a
     clear brand-green focus state. */
  input,
  textarea {
    width: 100%;
    padding: 0.9rem 1rem;
    border-radius: ${radius.md};
    border: 1px solid rgba(255, 255, 255, 0.16);
    background: rgba(255, 255, 255, 0.06);
    color: #ffffff;
    font-family: var(--font-body);
    font-size: 15px;
    transition:
      border-color 0.2s ease,
      background 0.2s ease,
      box-shadow 0.2s ease;
  }

  input::placeholder,
  textarea::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }

  input:hover,
  textarea:hover {
    border-color: rgba(255, 255, 255, 0.28);
  }

  input:focus,
  textarea:focus {
    outline: none;
    border-color: ${primaryColor[400]};
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 0 3px rgba(77, 170, 87, 0.2);
  }

  textarea {
    resize: vertical;
    min-height: 140px;
  }

  @media (max-width: 960px) {
    width: 100%;
  }

  @media (max-width: 360px) {
    input,
    textarea {
      padding: 0.8rem 0.9rem;
    }
  }
`;

export const FormRowTwoInputs = styled.div`
  display: flex;
  column-gap: 1rem;
  width: 100%;

  > div {
    width: 50%;
  }

  @media (max-width: 560px) {
    flex-direction: column;
    row-gap: 1.25rem;

    > div {
      width: 100%;
    }
  }
`;

export const FormField = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

/* Quiet, tracked uppercase label — consistent with the footer eyebrows. */
export const FormFieldLabel = styled.label`
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
`;

export const ConsentRow = styled.div`
  display: flex;
  align-items: flex-start;
  column-gap: 8px;
  margin-top: 0.25rem;

  input[type='checkbox'] {
    width: 18px;
    height: 18px;
    min-width: 18px;
    max-width: 18px;
    flex: 0 0 18px;
    margin-top: 2px;
    display: inline-block;
    box-sizing: border-box;
    accent-color: ${primaryColor[400]};
    cursor: pointer;
  }

  label {
    margin: 0;
    font-size: 13px;
    line-height: 1.45;
    color: rgba(255, 255, 255, 0.7);
  }

  @media (max-width: 560px) {
    column-gap: 8px;
  }
`;

/* Submit follows the DS button language: a green pill with an arrow that
   nudges forward, lifting on hover. */
export const SubmitButton = styled.button`
  align-self: flex-start;
  margin-top: 0.5rem;

  display: inline-flex;
  align-items: center;
  gap: 10px;

  background: ${primaryColor[500]};
  color: #ffffff;
  border: none;
  border-radius: ${radius.pill};
  padding: 13px 26px;

  font-family: var(--font-body);
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;

  transition:
    background 0.25s ease,
    transform 0.25s ease,
    box-shadow 0.25s ease;

  svg {
    transition: transform 0.25s ease;
  }

  &:hover:not(:disabled) {
    background: ${primaryColor[600]};
    transform: translateY(-2px);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.22);
  }

  &:hover:not(:disabled) svg {
    transform: translateX(3px);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (max-width: 360px) {
    width: 100%;
    justify-content: center;
  }
`;

/* --- Submission feedback toast (replaces the native alert) --------------- */
const toastIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Toast = styled.div`
  position: fixed;
  z-index: 9999;
  right: 24px;
  bottom: 24px;
  max-width: min(380px, calc(100vw - 32px));

  display: flex;
  align-items: flex-start;
  gap: 12px;

  padding: 14px 16px;
  background: #ffffff;
  border-radius: ${radius.lg};
  border-left: 4px solid
    ${({ $type }) => ($type === 'error' ? '#c0392b' : primaryColor[500])};
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.22);

  animation: ${toastIn} 0.35s cubic-bezier(0.22, 1, 0.36, 1);

  @media (max-width: 480px) {
    left: 16px;
    right: 16px;
    bottom: 16px;
    max-width: none;
  }
`;

export const ToastIcon = styled.span`
  flex: none;
  margin-top: 1px;
  display: inline-flex;
  color: ${({ $type }) => ($type === 'error' ? '#c0392b' : primaryColor[500])};
`;

export const ToastText = styled.p`
  flex: 1;
  color: ${primaryColor[900]};
  font-size: 14px;
  line-height: 1.45;
`;

export const ToastClose = styled.button`
  flex: none;
  display: inline-flex;
  padding: 2px;
  border: none;
  border-radius: ${radius.pill};
  background: transparent;
  color: rgba(0, 0, 0, 0.4);
  cursor: pointer;
  transition:
    color 0.2s ease,
    background 0.2s ease;

  &:hover {
    color: ${primaryColor[900]};
    background: rgba(0, 0, 0, 0.06);
  }
`;
