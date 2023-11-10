import styled from 'styled-components';

// Styled component for the section
const StyledSection = styled.section<{ $imageUrl: string }>`
  position: relative;
  height: 80vh;
  background: ${(props) => `url('${props.$imageUrl}')`} center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

// Styled component for the text overlay
const TextOverlay = styled.div`
    display: flex;

    h1 {
        width: 50%;
    }
`;

// Props for the ImageSection component
interface ImageSectionProps {
  imageUrl: string;
  text: string;
}

// Your React component
const ImageSection: React.FC<ImageSectionProps> = ({ imageUrl, text }) => {
  return (
    <StyledSection $imageUrl={imageUrl}>
      <TextOverlay className='container'>
        <h1>{text}</h1>
      </TextOverlay>
    </StyledSection>
  );
};

export default ImageSection;
