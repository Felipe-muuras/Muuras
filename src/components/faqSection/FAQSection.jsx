import { useState } from 'react';
import {
  FAQSectionContainer,
  FAQSectionInner,
  FAQTitle,
  FAQList,
  FAQItem,
  FAQQuestionRow,
  FAQQuestion,
  FAQToggle,
  FAQAnswerShell,
  FAQAnswerInner,
} from './styleFAQSection';

export default function FAQSection({ sectionId, title, items }) {
  // First question starts open as an affordance — it signals the list is
  // interactive and invites the user to click the others.
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <FAQSectionContainer id={sectionId} data-reveal>
      <FAQSectionInner>
        <FAQTitle>{title}</FAQTitle>

        <FAQList data-reveal-stagger>
          {items.map((item, index) => {
            const isOpen = activeIndex === index;
            const questionId = `${sectionId}-question-${index}`;
            const answerId = `${sectionId}-answer-${index}`;

            return (
              <FAQItem key={item.question}>
                <FAQQuestionRow
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  id={questionId}
                  onClick={() =>
                    setActiveIndex(isOpen ? null : index)
                  }
                >
                  <FAQQuestion>{item.question}</FAQQuestion>
                  <FAQToggle $open={isOpen} aria-hidden="true">
                    +
                  </FAQToggle>
                </FAQQuestionRow>

                <FAQAnswerShell
                  id={answerId}
                  role="region"
                  aria-labelledby={questionId}
                  $open={isOpen}
                >
                  <FAQAnswerInner $open={isOpen}>
                    {item.answer}
                  </FAQAnswerInner>
                </FAQAnswerShell>
              </FAQItem>
            );
          })}
        </FAQList>
      </FAQSectionInner>
    </FAQSectionContainer>
  );
}