import styled from "styled-components";

export const Wrapper = styled.div`
  width: 311px;
  height: 452px;
  background-color: #ffffff;
  border-radius: 13.4341px;

  .title {
    background-color: #e3d8cb;
    border-radius: 13.4341px 13.4341px 0px 0px;
    min-height: 120px;

    font-style: normal;
    font-weight: 800;
    font-size: 26.8683px;
    line-height: 27px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 13.44px;

    color: #656565;

    padding: 17.4px;

    img {
      width: 83.29px;
      height: 83.29px;
    }
  }

  .cover {
    aspect-ratio: 311 / 134.34;
    overflow: hidden;
    object-fit: cover;

    img {
      aspect-ratio: 311 / 134.34;
      width: 100%;
      height: 100%;
    }
  }

  .description {
    padding: 13px 19px 24px;
    font-style: normal;
    font-weight: 400;
    font-size: 13.4341px;
    line-height: 19px;
    color: #656565;

    p {
      margin-bottom: 15px;
    }
  }
`;
