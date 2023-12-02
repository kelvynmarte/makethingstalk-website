import styled from "styled-components";

export const ContentSectionWrapper = styled.div`
    grid-column: full-width;
    display: grid;
    grid-template-columns: inherit;
    row-gap: clamp(4rem, 3rem + 7.907vw, 11.1756rem);
    margin: clamp(4rem, 3rem + 7.907vw, 11.1756rem) 0;

    &.no-margin {
        margin: 0;
    }

    &.small-margin {
        margin: clamp(2.16rem, 1.9675rem + 0.9625vw, 2.93rem) 0;
    }
    &.small-gap {
        row-gap: clamp(2.16rem, 1.9675rem + 0.9625vw, 2.93rem);
    }
`;