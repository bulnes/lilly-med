import styled from "styled-components";

export const Wrapper = styled.div`
  min-width: 313px;
  min-height: 404px;

  background: #ffffff;
  border-radius: 13.5px;

  .cover {
    border-radius: 13.5px 13.5px 0px 0px;
    aspect-ratio: 312.52 / 121.5;

    img {
      border-radius: 13.5px 13.5px 0px 0px;
      width: 100%;
      height: 100%;
    }
  }

  .content {
    padding: 20px 19px 27px;

    .title {
      font-style: normal;
      font-weight: 800;
      font-size: 27px;
      line-height: 27px;
      color: #5a5a5a;
      margin-bottom: 0.2em;
    }

    .subtitle {
      font-style: normal;
      font-weight: 600;
      font-size: 18.9px;
      line-height: 27px;
      color: #5a5a5a;
      margin-bottom: 1.2em;
    }

    .description {
      font-style: normal;
      font-weight: 400;
      font-size: 16.2px;
      line-height: 20px;
      color: #656565;
      margin-bottom: 1.2em;
    }
  }
`;
