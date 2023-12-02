import styled from 'styled-components';

// Styled component for the section
const StyledSection = styled.section<{ $imageUrl?: string, $contentType?: string }>`
  grid-column: ${(props) => props.$contentType ? props.$contentType : "content" };
  display: grid;
  align-items: center;
  min-height: max(70svh, 36svw);
  grid-template-columns: inherit;
  ${(props) => props.$imageUrl ? `background: url('${props.$imageUrl}') center/cover no-repeat;` : ``} 
  color: white;
`;

// Styled component for the text overlay
const TextOverlay = styled.div`
    grid-column: breakout;
    display: flex;
    h1, h2, h3 {
        width: max(50%, 400px);
        margin: 2rem 0;
    }
`;

// Props for the ImageSection component
interface ImageSectionProps {
  imageUrl: string;
  text?: string;
}

// Your React component
const ImageSection: React.FC<ImageSectionProps> = ({ imageUrl, text }) => {
	return (
		<StyledSection $imageUrl={imageUrl} $contentType="full-width">
			<TextOverlay>
				<h2>{text}</h2>
			</TextOverlay>
		</StyledSection>
	);
};

export default ImageSection;
