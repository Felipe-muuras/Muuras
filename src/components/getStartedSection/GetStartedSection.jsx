import Button from '../buttonAnimated/Button';
import {
  GetStartedSectionContainer,
  GetStartedCardContainer,
  GetStartedSectionText,
} from './styleGetStartedSection';

export default function GetStartedSection() {
  return (
    <GetStartedSectionContainer>
      <GetStartedCardContainer>
        <img
          src={`${import.meta.env.BASE_URL}assets/GetStartedImage.png`}
          alt="Get Started "
        />
        <GetStartedSectionText>
          <h2>How to get started with Muuras?</h2>
          <p>
            Simply contact us, by email or the contact sheet at the bottom of
            the page, with your project needs—our team will recommend the
            service package that best supports your goals.
          </p>
          <Button label="Contact" />
        </GetStartedSectionText>
      </GetStartedCardContainer>
    </GetStartedSectionContainer>
  );
}
