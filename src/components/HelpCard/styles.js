import styled from "styled-components";

export const Wrapper = styled.div`
  width: 311px;
  height: 188.08px;

  background-repeat: no-repeat;
  background-position: right center;
  background-size: contain;

  border-radius: 13.4341px;
  overflow: hidden;

  position: relative;

  .layer,
  .content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }

  .layer {
    z-index: 0;
    opacity: 0.6;
  }

  .content {
    z-index: 1;

    padding: 19px 0 19px 19px;
    max-width: 177px;
    height: 100%;

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: flex-start;
    justify-content: space-between;
    align-items: flex-start;

    .title {
      font-style: normal;
      font-weight: 800;
      font-size: 26.8682px;
      line-height: 27px;
      /* or 100% */

      color: #ffffff;
    }
  }
`;
