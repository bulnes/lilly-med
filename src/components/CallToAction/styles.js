import styled from "styled-components";

export const CallToActionType1 = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 8px;

  background: #000000;
  border-radius: 100px;
  text-decoration: none;

  min-width: 216px;
  height: 58.54px;

  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;

  img {
    width: 16px;
    height: 16px;
  }
`;

export const CallToActionType2 = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 5.37px;

  min-width: 177px;
  height: 48px;

  background: #000000;
  border-radius: 67.1706px;
  text-decoration: none;

  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 15px;
  color: #ffffff;

  img {
    width: 14.52px;
    height: 14.52px;
  }
`;

export const CallToActionType3 = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 8px;

  background: transparent;
  border: 1px solid #fff;
  border-radius: 100px;
  text-decoration: none;

  min-width: 208px;
  height: 30px;

  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  color: #ffffff;

  img {
    width: 14px;
    height: 14px;
  }
`;

export const CallToActionType4 = styled.a`
  border-radius: 16px 16px 0px 0px;
  background-image: linear-gradient(180deg, #2bd161 0%, #22a64d 100%);
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  position: fixed;
  bottom: 0;
  left: var(--mobile-aisle-margin);
  right: var(--mobile-aisle-margin);
  width: auto;
  height: 53px;
  z-index: var(--zindex-level5);

  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 10px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;
  color: #ffffff;
  text-transform: uppercase;

  img {
    width: 18px;
    height: 18px;
  }

  @media screen and (min-width: 768px) {
    position: fixed;
    bottom: 20px;
    right: 20px;
    left: auto;
    z-index: 10;
    width: 87px;
    height: 87px;

    display: flex;
    align-content: center;
    justify-content: center;

    color: transparent;
    border-radius: 50%;

    span {
      display: none;
    }

    img {
      width: 57px;
      height: 57px;
    }
  }
`;
