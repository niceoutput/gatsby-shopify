import styled from 'styled-components';

export const Grid = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);

        & > :first-child {
            order: 2
        }

        & > :last-child {
            order: 1;
        }
    }
`;
