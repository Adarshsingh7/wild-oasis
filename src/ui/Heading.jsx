import styled, { css } from 'styled-components';

const Heading = styled.h1`
  ${(props) =>
    props.as === 'h1' &&
    css`
      font-size: 2.6rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.as === 'h2' &&
    css`
      font-size: 1.8rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.as === 'h1' &&
    css`
      font-size: 1.4rem;
      font-weight: 00;
    `}
`;

export default Heading;
