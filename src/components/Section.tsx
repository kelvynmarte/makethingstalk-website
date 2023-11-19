import styled from "styled-components";

export const Section = styled.section<{ $contentWidth?: string }>`
  grid-column: ${(props) => props.$contentWidth ? props.$contentWidth : "content" };
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;