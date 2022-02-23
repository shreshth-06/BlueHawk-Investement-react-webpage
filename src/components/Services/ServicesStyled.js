import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(18 22 22);

  @media screen and (max-width: 998px) {
    height: 1200px;
  }

  @media screen and (max-width: 768px) {
    height: 1620px;
  }

  @media screen and (max-width: 580px) {
    height: 1750px;
  }
  @media screen and (max-width: 480px) {
    height: 1850px;
  }
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 90px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  color: rgb(2 87 104);
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  align-items: center;
  text-align: center;
`;

export const ServicesP = styled.p`
  font-size: 18px;
  line-height: 19px;
  letter-spacing: 1.5px;
  align-items: center;
  text-align: center;
`;

export const ServicesWrapper = styled.div`
  max-width: 1400px;
  margin: 0 14px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
  @media screen and (max-width: 398px) {
    grid-template-columns: 1fr;
    padding: 0 5px;
  }
`;

export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 420px;
  margin-bottom: 30px;

  padding: 30px;
  box-shadow: 0 1px 3px rgba (0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;
