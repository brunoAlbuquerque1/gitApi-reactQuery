

import styled from "styled-components";

export const Container = styled.div`
   
    flex-direction: column;
    margin: 20px;
`;

export const WrapImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;



export const Image = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 80px;
    `;

export const InnerBio = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    margin: 20px;
`;


export const TextBio = styled.p`
    color:#fff;
    font-size: 25px;
`;
export const TextRepo = styled.p`
    color:#fff;
    font-size: 15px;

`;
export const TextName = styled.p`
    color:#fff;
    font-size: 18px;
`;
export const Repos = styled.div`
  width: 150px;
  height: 150px;
  margin: 20px;
  padding: 10px;
  border: 1px solid #fff;
    display: flex;
  flex-wrap: wrap;
`;


export const WrapRepo = styled.ul`
  list-style: none;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 30px;
  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
  }
  @media screen and (min-width: 900px) and (max-width: 1500px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
  }
`;
