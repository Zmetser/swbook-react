import styled, { keframes, keyframes } from 'styled-components';

const LoadAnim = styled.div`
  background-color: yellowgreen;
  width: 600px;
  height: 50px;
  font-size: 2rem;
  @keyframes load-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  animation: load-spin 4s infinite;
`;
const Loading = () => {
  return <LoadAnim>Loading</LoadAnim>;
};

export default Loading;
