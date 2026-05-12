import AwardCard from '../awardCard/AwardCard.jsx';

import {
  SliderContainer,
  SliderSectiontitle,
  SliderTrack,
  Slide,
} from './styleSliderContainer.js';

export default function SliderSection() {
  const awards = [
    {
      imagePath: '/assets/duurzame.png',
      title: 'Nominated for Duurzame Dinsdag',
    },
    {
      imagePath: '/assets/regieorgaan.png',
      title: 'SoW & FloW: Collaborative experimentation',
    },
    {
      imagePath: '/assets/CircularChallenge.png',
      title: 'Winner of the Circular Challenge: High rise',
    },
    {
      imagePath: '/assets/amsterdamInstitute.png',
      title: 'Boosting at the AMS Institute',
    },
  ];

  return (
    <SliderContainer>
      <SliderSectiontitle>
        <h2>Impact</h2>
        <p>See how our work is making a difference</p>
      </SliderSectiontitle>
      <SliderTrack>
        {[...awards, ...awards].map((award, index) => (
          <Slide key={index}>
            <AwardCard imagePath={award.imagePath} title={award.title} />
          </Slide>
        ))}
      </SliderTrack>
    </SliderContainer>
  );
}
