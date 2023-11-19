import styled from 'styled-components';
import { Section } from './Section';

// Styled component for the section
const StyledSection = styled(Section)<{ $imageUrl: string }>`
  grid-column: full-width;
  display: grid;
  grid-template-columns: inherit;
  background: ${(props) => `url('${props.$imageUrl}')`} center/cover no-repeat;
  color: white;
`;

// Styled component for the text overlay
const TextOverlay = styled.div`
    grid-column: breakout;
    display: flex;

    h1 {
        width: max(50%, 400px);
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
		<StyledSection $imageUrl={imageUrl} className='full-width'>
			<TextOverlay className='container'>
				<h1>{text}</h1>
			</TextOverlay>
		</StyledSection>
	);
};

export default ImageSection;
