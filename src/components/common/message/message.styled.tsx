import styled from 'styled-components';

const Message = styled.p`
  margin: 0;
  padding: 0;

  font-size: ${({ theme }) => theme.font.medium};
  line-height: 200%;
  font-weight: 800;
  color: ${({ theme }) => theme.color.white};

  text-align: center;
`;

export { Message };
