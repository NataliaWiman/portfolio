import styled from "styled-components";

export const BlobStyled = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  margin-top: 10vh;
  z-index: -10;

  :before {
    content: "";
    display: block;
    width: 70vh;
    height: 70vh;
    background-color: #ffce34;
    background-size: 1600% 1600%;
    transform-origin: 50% 50%;
    transform-style: preserve-3d;
    perspective: 1000px;
    animation: transform 20s ease-in-out infinite both alternate,
      movement 15s ease-in-out infinite both;
  }

  @keyframes transform {
    0%,
    100% {
      border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%;
    }
    14% {
      border-radius: 40% 60% 54% 46% / 49% 60% 40% 51%;
    }
    28% {
      border-radius: 54% 46% 38% 62% / 49% 70% 30% 51%;
    }
    42% {
      border-radius: 61% 39% 55% 45% / 61% 38% 62% 39%;
    }
    56% {
      border-radius: 61% 39% 67% 33% / 70% 50% 50% 30%;
    }
    70% {
      border-radius: 50% 50% 34% 66% / 56% 68% 32% 44%;
    }
    84% {
      border-radius: 46% 54% 50% 50% / 35% 61% 39% 65%;
    }
  }

  @keyframes movement {
    0%,
    100% {
      transform: none;
    }
    50% {
      transform: translateY(5%) rotateY(10deg);
    }
  }
`;
