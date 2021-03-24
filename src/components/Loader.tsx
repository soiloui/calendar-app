import styled from 'styled-components';

const StyledLoader = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 130px;
  height: 150px;

  span {
    width: 55px;
    height: 55px;
    background-color: #000;
    display: inline-block;
    -webkit-animation: loadingAnimation 1.8s infinite ease-in-out both;
    animation: loadingAnimation 1.8s infinite ease-in-out both;
  }

  span:nth-child(1) {
    background-color: #008cff;
    -webkit-animation-delay: 0.2s;
            animation-delay: 0.2s;
  }

  span:nth-child(2) {
    background-color: #0170ca;
    -webkit-animation-delay: 0.3s;
            animation-delay: 0.3s;
  }

  span:nth-child(3) {
    background-color: #34a3fd;
    -webkit-animation-delay: 0.4s;
            animation-delay: 0.4s;
  }

  span:nth-child(4) {
    background-color: #80c6ff;
    -webkit-animation-delay: 0.5s;
            animation-delay: 0.5s;
  }

@keyframes loadingAnimation {
  0% {
    -webkit-transform: rotateY(0deg);
            transform: rotateY(0deg);
    -webkit-transform: rotateY(0deg);
            transform: rotateY(0deg);
  }
  50% {
    -webkit-transform: rotateY(180deg);
            transform: rotateY(180deg);
    -webkit-transform: rotateY(180deg);
            transform: rotateY(180deg);
  }
  100% {
    -webkit-transform: rotateX(180deg);
            transform: rotateX(180deg);
    -webkit-transform: rotateX(180deg);
            transform: rotateX(180deg);
  }
}
@-webkit-keyframes loadingAnimation {
  0% {
    -webkit-transform: rotateY(0deg);
            transform: rotateY(0deg);
  }
  50% {
    -webkit-transform: rotateY(180deg);
            transform: rotateY(180deg);
  }
  100% {
    -webkit-transform: rotateX(180deg);
            transform: rotateX(180deg);
  }
}
`;

const Loader = () => {
  return (
    <StyledLoader>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </StyledLoader>
  )
}

export default Loader
