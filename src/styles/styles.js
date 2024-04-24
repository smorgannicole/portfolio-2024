import styled from "styled-components"

export const CarouselWrapper = styled.div`
  .carousel {
    position: absolute;
    width: 100%;
    top: 22vh;
    left: 0;
  }

  .slideInner___2mfX9 {
    display: flex;
    justify-content: center;
  }

  .controls {
    display: flex;
    align-items: center;
    justify-content: center;

    .btn-arrow {
      border: none;
      background: none;
      padding: 11px 20px;
      position: absolute;
      top: 45vh;
    }

    .reg-arrow {
      left: 28vw;
    }

    .reverse-arrow {
      left: 20.1vw;
    }

    .reverse-arrow {
      transform: rotateY(180deg);
    }

    .dot-group {
      position: absolute;
      top: 46vh;
      left: 23vw;

      .carousel__dot {
        width: 8px;
        height: 8px;
        border: none;
        border-radius: 50%;
        margin: 0 4px;
        padding: 0;
        background-color: #d1c4b6;
      }

      .carousel__dot--selected {
        width: 16px;
        height: 8px;
        border-radius: 10px;
        background-color: #686d76;
        transition: background 0.4s ease;
      }
    }
  }
`

export const ModalWrapper = styled.div`
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.03);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }

  .modal {
    background-color: #e4dcd1;
    height: 77vh;
    width: 55vw;
    z-index: 2;
    padding: 3vh 2vw;
    border-radius: 3vh;
  }

  .modal-open {
    overflow: hidden;
  }

  .modal-text-cont {
    position: fixed;
    top: 14vh;
    left: 23.5vw;
  }

  .modal-image {
    max-height: 45vh;
    border-radius: 3vh;
  }

  .modal-title {
    font-size: 6vh;
    cursor: pointer;
    width: fit-content;
  }

  .initial-position {
    transform: translate(0, 0);
    transition: transform 0.3s ease-out;
  }

  .hovered-animation {
    transform: translate(10px, -10px);
    transition: transform 0.3s ease-out;
    transition-property: transform, text-decoration;
    transition-duration: 0.3s;
  }

  .modal-title-and-badges {
    flex-direction: column;
    position: relative;
    margin-left: 2vh;
    justify-content: center;
  }

  .line-cool::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 7vh;
    width: 0;
    height: 0.25vh;
    background-color: black;
    transition: width 0.3s ease;
  }

  .line-cool:hover::after {
    position: absolute;
    width: 81.5%;
  }

  .modal-x {
    height: 2.5vh;
  }
`
