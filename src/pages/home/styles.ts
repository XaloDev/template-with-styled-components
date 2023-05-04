import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  gap: 1rem;

  p {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`
