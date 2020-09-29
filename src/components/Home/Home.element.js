import styled from "styled-components";

export const Main = styled.div``;

export const Title = styled.div`
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5vh;
  font-weight: 300;
`;

export const ItemDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  margin: 0 2vw;
`;

export const Items = styled.div`
  margin-left: 3vw;
  margin-right: 3vw;
`;

export const ItemPic = styled.img`
  width: 100%;
  border-radius: 900em;
`;

export const ItemName = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 20px;
  font-weight: 300;
`;

export const Contact = styled.div`
  background-image: url("https://images.unsplash.com/photo-1492892132812-a00a8b245c45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60");
  height: 250px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  align-items: center;
  width: 100%;
  opacity: 0.9;
  margin-top: 5vh;
`;

export const ContactDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ContactTitle = styled.div`
  color: whitesmoke;
  font-size: 4vw;
  margin-bottom: 1vw;
`;
export const ContactNumber = styled.div`
  color: whitesmoke;
  font-size: 2vw;
`;
export const ContactAddress = styled.div`
  color: whitesmoke;
  font-size: 1.5vw;
  margin-top: 0.5vw;
`;

export const Intro = styled.div`
  background-image: url("https://images.unsplash.com/photo-1551554781-c46200ea959d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60");
  height: 250px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  display: grid;
  align-items: center;
  width: 100%;
  opacity: 0.5;
`;

export const IntroTitle = styled.div`
  font-size: 2.5vw;
  display: flex;
  justify-content: center;
  font-weight: bold;
  color: rgb(214, 0, 0);
`;

export const IntroText = styled.div`
  font-size: 1.5vw;
  display: flex;
  justify-content: center;
  margin-left: 6%;
  margin-right: 6%;
`;

export const Footer = styled.div`
  height: 6vw;
  background: #43658b;
  border-top: 1px solid #133b5c;
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 1.2vw;
`;
