import React from 'react';
import PropTypes from 'prop-types';
import DetalhesProdutoModal from '../DetalhesProdutoModal/DetalhesProdutoModal';
import { ProductCard, ImageWrapper, Image, Price, CardData, Title, Description, CardDetails, List, ListItem, DetailsButton, ImgItem } from './CardProdutoStyles';
import icon from '../../assets/icon.png';

function CardProduto(props) {
  const { foto, preço, nome, descricao, caracteristicas } = props;

  return (
    <ProductCard>
      <ImageWrapper>
        <Image src={foto} alt="Capa do curso" />
        <Price>{preço}</Price>
      </ImageWrapper>
      <CardData>
        <Title>{nome}</Title>
        <Description>{descricao}</Description>
        <CardDetails>
          <List>
            {caracteristicas.map((item, index) => {
              if (item) {
                return <ListItem key={index}><ImgItem src={icon}/>{item}</ListItem>;
              }
            })}
          </List>
          <DetailsButton>
            <DetalhesProdutoModal
              foto={foto}
              preço={preço}
              nome={nome}
              descricao={descricao}
              caracteristicas={caracteristicas}
            />
          </DetailsButton>
        </CardDetails>
      </CardData>
    </ProductCard>
  );
}

CardProduto.propTypes = {
  foto: PropTypes.string,
  preço: PropTypes.string,
  nome: PropTypes.string,
  descricao: PropTypes.string,
  caracteristicas: PropTypes.array,
};

export default CardProduto;