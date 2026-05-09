import { ImageCardContainer, TextImageCard } from './styleImageCard';

export default function ImageCard({ imagePath, title, description }) {
  return (
    <>
      <ImageCardContainer>
        <img src={`${import.meta.env.BASE_URL}${imagePath}`} alt={title} />
        <TextImageCard>
          <h1>{title}</h1>
          <p>{description}</p>
        </TextImageCard>
      </ImageCardContainer>
    </>
  );
}
