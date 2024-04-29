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
    position: absolute;
    top: 46.5vh;
    left: 22vw;

    .btn-arrow {
      border: none;
      background: none;
    }

    .reverse-arrow {
      transform: rotateY(180deg);
    }

    .dot-group {
      margin: 0 0.5vw;

      .carousel__dot {
        width: 8px;
        height: 8px;
        border: none;
        border-radius: 50%;
        margin: 0 0.25vw;
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
    background-color: rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
  }

  .modal-overlay-home {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
  }

  .modal {
    background-color: #e4dcd1;
    height: 77vh;
    width: 55vw;
    z-index: 2;
    padding: 3vh 2vw;
    border-radius: 3vh;
    overflow-y: hidden;
    position: relative;
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
    width: fit-content;
    line-height: 1;
  }

  .modal-title-and-badges {
    flex-direction: column;
    margin-left: 2vh;
    justify-content: center;
    position: relative;
  }

  .modal-x {
    height: 2.5vh;
  }

  .view-repo {
    margin-top: -0.25vh;
    margin-bottom: 2vh;
    font-size: 2vh;
    width: fit-content;
  }

  .palette-cont {
    position: absolute;
    top: 0;
    left: 0;
  }
`
