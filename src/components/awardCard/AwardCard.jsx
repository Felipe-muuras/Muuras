import { AwardCardContainer, AwardTextCardContainer } from './styleAwardCard';

export default function AwardCard({ imagePath, title }) {
  return (
    <AwardCardContainer>
      <img src={imagePath} alt={title} />
      <AwardTextCardContainer>
        <h2>{title}</h2>
      </AwardTextCardContainer>
    </AwardCardContainer>
  );
}
