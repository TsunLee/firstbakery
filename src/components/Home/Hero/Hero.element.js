import styled from "styled-components";

export const HeroImg = styled.div`
  background-image: url("https://images.unsplash.com/photo-1523294587484-bae6cc870010?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1728&q=80");
  height: 100%;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  display: grid;
  width: 100%;
  @media screen and (max-width: 741px) {
    margin-top: 25px;
  }
`;

export const HeroHeader = styled.div`
  justify-content: flex-start;
  align-items: center;
  color: white;
  font-size: 6vw;
  margin-top: 20vh;
  margin-bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 50vw;
  padding: 0 10px;
  border-radius: 3px;
  margin-left: 2vw;
  @media screen and (max-width: 600px) {
    margin-top: 17vh;
  }
`;
export const Title = styled.div`
  font-size: 2vw;
  font-weight: 300;
  color: darkkhaki;
  width: 18vw;
  justify-content: center;
  align-items: center;
  margin-bottom: 20vh;
  margin-top: 2vh;
  margin-left: 3vw;
  border-top: 2px solid rgb(41, 45, 51);
  border-bottom: 2px solid rgb(41, 45, 51);
  @media screen and (max-width: 600px) {
    width: 22vw;
    border-top: 1px solid rgb(41, 45, 51);
    border-bottom: 1px solid rgb(41, 45, 51);
    margin-bottom: 15vh;
  }
`;
