import styled from "styled-components";

export const Wrapper = styled.div`
  .content {
    display: flex;
    flex-direction: row;
    gap: 30px;

    padding: 0 33px;
    margin-bottom: 30px;

    overflow-y: hidden;
    overflow-x: auto;
  }

  .dots {
    margin-bottom: 30px;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    gap: 7px;

    .dot {
      background-color: #d7d6d6;
      display: block;
      width: 9px;
      height: 9px;
      border-radius: 50%;
      cursor: pointer;
    }
  }
`;
