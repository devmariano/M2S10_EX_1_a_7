import './Main.css';
import CardProduto from '../CardProduto/CardProduto';
import css from '../../assets/css.png';
import node from '../../assets/node.png';
import react from '../../assets/react.png';

function Main() {
  const cursos = [
    {
      id: 1,
      foto: css,
      preço: 'R$199,00',
      nome: 'CSS: Pseudo-classes e Pseudo-elementos',
      descricao:
        'Neste curso falaremos sobre a utilização de pseudo-classes e pseudo-elementos no CSS para uma estilização mais personalizada dos elementos HTML. Pseudo-classes tais como first-child, last-child e nth-child, assim como os pseudo-elementos after e before nos ajudam a construir páginas mais customizáveis como, por exemplo, a criação de tabelas zebradas, mudar o estilo de um link quando o cursor do mouse estiver sobre ele etc.',
      caracteristicas: [
        'Pseudo-classes de Estado',
        'Pseudo-classes Estruturais: child',
        'Pseudo-elementos: alterando partes de um elemento',
        'Pseudo-elementos: adicionando conteúdos a um elemento'
      ]
    },
    {
      id: 2,
      foto: node,
      preço: 'R$299,00',
      nome: 'Node.js: Recebendo parâmetros no back-end',
      descricao:
        'Neste curso vamos continuar utilizando o Express, o framework Node que tem como principal objetivo o trabalho com APIs. Durante o decorrer desse conteúdo, vamos aprender a receber parâmetros no back-end da nossa aplicação. O recebimento de parâmetros vai nos permitir uma maior comunicação entre front-end e back-end, dando a possibilidade de criarmos aplicações mais complexas.',
      caracteristicas: [
        'Recebendo requisições na API com Express',
        'Tratando os parâmetros na API',
        'Retornando um JSON com mais de uma chave',
        'Tratando Erros na API'
      ]
    },
    {
      id: 3,
      foto: react,
      preço: 'R$249,00',
      nome: 'React: Passando e recebendo tags e componentes via props',
      descricao:
        'No React criamos um componente que por sua vez possui componentes menores. Uma das vantagens de criar um componente é a possibilidade de reaproveitá-lo. Através das props conseguimos reaproveitar um componente e alterar apenas algumas informações dele. Além de dados como o nome ou o valor de um produto, também conseguimos passar tags e outros componentes via props. Neste curso vamos aprender como isso é feito e qual a vantagem do seu uso.',
      caracteristicas: [
        'Recebendo tags e componentes via props',
        'Passando tags e componentes via props',
        'Conhecendo o projeto base',
        'Componente EstruturaPagina'
      ]
    }
  ];

  return (
    <div className="card-wrapper">
      {cursos.map((curso) => (
        <CardProduto
          key={curso.id}
          foto={curso.foto}
          preço={curso.preço}
          nome={curso.nome}
          descricao={curso.descricao}
          caracteristicas={curso.caracteristicas}
        />
      ))}
    </div>
  );
}

export default Main;