import React from "react";
import styled from "styled-components";

const Button = styled.button`
  display: none;
  width: 100%;
  padding: 10px;
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.text_black};
  font-size: 14px;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.8s ease-in-out;
`;
const Card = styled.div`
  width: 330px;
  height: 350px;
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 14px;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.3);
    filter: brightness(1.1);
  }
  &:hover ${Button} {
    display: block;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
`;

const Date = styled.div`
  font-size: 12px;
  margin-left: 2px;
  font-weight: 400;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary + 80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const BlogCards = ({ blog, setOpenModal }) => {
  return (
    <Card onClick={() => setOpenModal({ state: true, blog: blog })}>
      <Image src={blog?.image} />
      <Details>
        <Title>{blog?.title}</Title>
        <Date>{blog?.date}</Date>
      </Details>
    </Card>
  );
};

export default BlogCards;
