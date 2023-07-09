import styled from 'styled-components';

const ProductImage = styled.img`
  max-width: 70%;
  height: auto;
`;

const CaracteristicasList = styled.div`
  p {
    font-size: medium;
    padding-top: 5px;
    padding-left: 35px;
    background-image: url('../../assets/icon.png');
    background-repeat: no-repeat;
  }
`;

const CardButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 14px 32px;
  width: 158px;
  height: 51px;
  background: #F2A50C;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  border: none;

  &:hover {
    background-color: #d18e09;
  }
`;

const ListItens = styled.li`
  color: #333;
  font-weight: 400;
  font-size: 16px;
`;

const ImgItem = styled.img`
padding-right: 10px;
`;

export { ProductImage, CaracteristicasList, CardButton, ListItens, ImgItem };