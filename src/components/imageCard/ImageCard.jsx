import { ImageCardContainer, TextImageCard } from './styleImageCard';

export default function ImageCard({ imagePath, title, description }) {
  return (
    <>
      <ImageCardContainer>
        <img src={imagePath} alt={title} loading="lazy" />
        <TextImageCard>
          <h3>{title}</h3>
          <p>{description}</p>
        </TextImageCard>
      </ImageCardContainer>
    </>
  );
}
