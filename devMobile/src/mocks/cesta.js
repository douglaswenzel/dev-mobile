import logo from '../../assets/logo.png';

import tomate from '../../assets/Legumes/Tomate.jpg';
import pepino from '../../assets/Legumes/Pepino.jpg';
import brocolis from '../../assets/Legumes/Brocolis.jpg';
import batata from '../../assets/Legumes/Batata.jpg';
import abobora from '../../assets/Legumes/Abobora.jpg';

const cesta = {
    topo: {
        titulo: "Detalhe da cesta",
    },
    detalhes: {
        nome: "Cesta de verduras",
        logoFazenda: logo,
        nomeFazenda: "Jenny Jack Farm",
        descricao: "Uma cesta com produtos selecionaos cuidadosamente da fazenda direto para su casa",
        preco: "R$ 40,00",
        botao: "Comprar",
    },
    itens: {
        titulo: "Itens da cesta",
        lista: [
            {
                nome: "Tomate",
                imagem: tomate,
            },
            {
                nome: "Brocolis",
                imagem: brocolis,
            },
            {
                nome: "Pepino",
                imagem: pepino,
            },
            {
                nome: "Batata",
                imagem: batata
            },
            {
                nome: "Abóbora",
                imagem: abobora,
            },
        ]
    }
}