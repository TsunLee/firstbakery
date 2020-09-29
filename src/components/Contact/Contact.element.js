import styled from "styled-components";

export const Back = styled.div`
  background-image: url("https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 100%;
  @media screen and (max-width: 741px) {
    margin-top: 5vw;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  grid-gap: 2vw;
  margin: auto;
  justify-content: center;
  @media screen and (max-width: 741px) {
    padding-top: 7vw;
    width: 45%;
    grid-gap: 3vw;
  }
  @media screen and (max-width: 611px) {
    padding-top: 10vw;
    width: 50%;
    grid-gap: 4vw;
  }
  @media screen and (max-width: 521px) {
    padding-top: 16vw;
    width: 51%;
    grid-gap: 5vw;
  }
`;

export const Title = styled.div`
  color: white;
  text-shadow: 2px 2px 10px #f4f7f7;
  font-size: 7vw;
  display: flex;
  justify-content: center;
  font-weight: 500;
  padding-top: 1vw;
`;

export const Input = styled.input`
  height: 2.5vw;
  border: 1.5px solid black;
  outline: none;

  @media screen and (max-width: 741px) {
    height: 3vw;
  }
  @media screen and (max-width: 611px) {
    height: 4vw;
  }
`;

export const Text = styled.input`
  height: 210px;
  border: 1.5px solid black;
  outline: none;

  @media screen and (max-width: 741px) {
    height: 25vw;
  }
  @media screen and (max-width: 611px) {
    height: 26vw;
  }
  @media screen and (max-width: 512px) {
    height: 30vw;
  }
`;

export const Button = styled.button`
  width: 30%;
  margin: 0 0 2vw 28vw;
  border: none;
  outline: none;
  font-size: 1.3vw;
  padding: 0;
  border-radius: 7px;
  background: #dfd3d3;
  @media screen and (max-width: 741px) {
    margin-left: 31vw;
  }
  @media screen and (max-width: 611px) {
    margin-left: 35vw;
  }
  @media screen and (max-width: 521px) {
    margin-left: 36vw;
  }
  :hover {
    cursor: pointer;
    color: white;
    background: none;
    font-size: 2vw;
    transition: ease-in 0.3s;
  }
`;
