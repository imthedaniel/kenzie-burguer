import styled from 'styled-components'

// Colors
export const colors = {
  primary: 'slategray',
  accent: 'tomato',
  white: 'whitesmoke',
  green: '#2ecc71',
  red: '#e74c3c',
}

// Breakpoints
export const breakpoints = {
  sm: `20rem`,
  med: `48rem`,
  lg: `64rem`,
}

export const StyledModal = styled.div`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    outline: none;
  }

  button {
    cursor: pointer;
  }

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 0vh;
    background-color: transparent;
    overflow: hidden;
    transition: background-color 0.25s ease;
    z-index: 9999;

    &.open {
      position: fixed;
      width: 100%;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.6);
      transition: background-color 0.25s;

      > .content-wrapper {
        transform: scale(1);
      }
    }

    .content-wrapper {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      min-width: 90%;
      top: -150px;

      margin: 0;
      padding: 2.5rem;
      background-color: white;
      border-radius: 0.3125rem;
      box-shadow: 0 0 2.5rem rgba(0, 0, 0, 0.5);
      transform: scale(0);
      transition: transform 0.25s;
      transition-delay: 0.15s;

      .close {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2.5rem;
        height: 2.5rem;
        border: none;
        background-color: transparent;
        font-size: 1.5rem;
        transition: 0.25s linear;

        &:before,
        &:after {
          position: absolute;
          content: '';
          width: 1.25rem;
          height: 0.125rem;
          background-color: black;
        }

        &:before {
          transform: rotate(-45deg);
        }

        &:after {
          transform: rotate(45deg);
        }

        &:hover {
          transform: rotate(360deg);

          &:before,
          &:after {
            background-color: ${colors.accent};
          }
        }
      }

      .modal-header {
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin: 0;
        padding: 0 0 1.25rem;

        h2 {
          font-size: 1.5rem;
          font-weight: bold;
          color: #333333;
        }
      }

      .content {
        position: relative;
        display: flex;

        p {
          font-size: 0.875rem;
          line-height: 1.75;
        }
      }

      .modal-footer {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin: 0;
        padding: 1.875rem 0 0;

        .action {
          position: relative;
          margin-left: 0.625rem;
          padding: 0.625rem 1.25rem;
          border: none;
          background-color: ${colors.primary};
          border-radius: 0.25rem;
          color: white;
          font-size: 0.87rem;
          font-weight: 300;
          overflow: hidden;
          z-index: 1;

          &:before {
            position: absolute;
            content: '';
            top: 0;
            left: 0;
            width: 0%;
            height: 100%;
            background-color: rgba(255, 255, 255, 0.2);
            transition: width 0.25s;
            z-index: 0;
          }

          &:first-child {
            background-color: ${colors.green};
          }

          &:last-child {
            background-color: ${colors.red};
          }

          &:hover {
            &:before {
              width: 100%;
            }
          }
        }
      }

      @media screen and (min-width: 768px) {
        min-width: 50%;
      }

      @media screen and (min-width: 1024px) {
        min-width: 40%;
      }

      @media screen and (min-width: 1440px) {
        min-width: 30%;
      }

      @media screen and (min-width: 1500px) {
        min-width: 20%;
      }
    }
  }
`
