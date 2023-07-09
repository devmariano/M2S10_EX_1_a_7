import styled from 'styled-components';

export const ProductCard = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px;
  color: #afafaf;
`;

export const ImageWrapper = styled.div`
  flex: 1;
  width: 50%;
  height: 310px;
  background-color: #afafaf;
  border-radius: 5px;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Price = styled.span`
  position: absolute;
  right: 0;
  margin-top: 20px;
  background-color: #f2a50c;
  padding: 8px 16px 8px 8px;
  border-radius: 4px 0 0 4px;
  color: #000;
  transition: 0.3s;

  &:hover {
    transform: scale(1.2);
  }
`;

export const CardData = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 8px;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  color: #333;
  font-weight: 400;
  font-size: 24px;
`;

export const Description = styled.p`
  color: #666;
  font-weight: 400;
  font-size: 16px;
  text-align: justify;
  margin-bottom: 32px;
`;

export const CardDetails = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: left;
  margin-left: -32px;
`;

export const ListItem = styled.li`
  color: #333;
  font-weight: 400;
  font-size: 16px;
`;

export const ImgItem = styled.img`
padding-right: 10px;
`;

export const DetailsButton = styled.div`
  align-self: flex-end;
`;