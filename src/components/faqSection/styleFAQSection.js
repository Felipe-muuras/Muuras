import styled from 'styled-components';
import { primaryColor, textColor } from '../../utils/colors';
import { radius } from '../../utils/radius';

export const FAQSectionContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 24px 24px 56px;
  scroll-margin-top: 120px;

  @media (max-width: 560px) {
    padding: 20px 20px 44px;
  }
`;

export const FAQSectionInner = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const FAQTitle = styled.h2`
  font-size: var(--fs-section);
  /* Match the elegant Crimson Pro 400 used by every other section title. */
  font-weight: 400;
  color: ${primaryColor[900]};
`;

export const FAQList = styled.div`
  display: flex;
  flex-direction: column;
`;

/* Flat list: each row is separated by a thin divider line (matching the
   layout), no card box. The circular toggle button is kept. */
export const FAQItem = styled.div`
  border-top: 1px solid rgba(5, 5, 5, 0.1);
`;

export const FAQQuestionRow = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 22px 0;
  border: none;
  background: transparent;
  color: ${textColor.primary};
  cursor: pointer;
  text-align: left;
  font: inherit;

  /* Hover feedback on the whole row (question + toggle). */
  &:hover > span:first-child {
    color: ${primaryColor[700]};
  }

  &:hover > span:last-child {
    border-color: ${primaryColor[500]};
    box-shadow: 0 6px 16px rgba(77, 170, 87, 0.22);
  }

  @media (max-width: 560px) {
    gap: 12px;
    padding: 18px 0;
  }
`;

export const FAQQuestion = styled.span`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.4;
  transition: color 0.2s ease;

  @media (max-width: 560px) {
    font-size: 16px;
  }
`;

export const FAQToggle = styled.span`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: ${radius.pill};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${primaryColor[300]};
  background: ${({ $open }) => ($open ? primaryColor[500] : '#ffffff')};
  color: ${({ $open }) => ($open ? '#ffffff' : primaryColor[700])};
  font-size: 22px;
  line-height: 1;
  font-weight: 300;
  transition:
    transform 0.35s ease,
    background 0.35s ease,
    color 0.35s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;
  transform: rotate(${({ $open }) => ($open ? '45deg' : '0deg')});

  @media (max-width: 560px) {
    width: 30px;
    height: 30px;
    font-size: 20px;
  }
`;

export const FAQAnswerShell = styled.div`
  display: grid;
  grid-template-rows: ${({ $open }) => ($open ? '1fr' : '0fr')};
  transition: grid-template-rows 0.35s ease;
`;

export const FAQAnswerInner = styled.div`
  overflow: hidden;
  min-height: 0;
  /* Flush-left with the question; a bit of right inset so long lines don't
     run under where the toggle sits. */
  padding: ${({ $open }) => ($open ? '0 48px 24px 0' : '0 48px 0 0')};
  color: ${textColor.secondary};
  font-size: 16px;
  line-height: 1.7;
  transition: padding 0.35s ease;

  @media (max-width: 560px) {
    padding: ${({ $open }) => ($open ? '0 0 18px' : '0 0 0')};
    font-size: 15px;
    line-height: 1.65;
  }
`;