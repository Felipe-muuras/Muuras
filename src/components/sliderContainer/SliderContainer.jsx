import { t } from 'i18next';
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
      title: t('impactFirstAwardTitle'),
      link: '',
    },
    {
      imagePath: '/assets/regieorgaan.png',
      title: t('impactSecondAwardTitle'),
      link: '',
    },
    {
      imagePath: '/assets/CircularChallenge.png',
      title: t('impactThirdAwardTtile'),
      link: '',
    },
    {
      imagePath: '/assets/amsterdamInstitute.png',
      title: t('impactFourthAwardTitle'),
      link: '',
    },
  ];

  return (
    <SliderContainer>
      <SliderSectiontitle>
        <h2>{t('impactSectionTitle')}</h2>
        <p>{t('impactSectionDescription')}</p>
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
