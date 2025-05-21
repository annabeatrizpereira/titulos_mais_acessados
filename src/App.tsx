import { useEffect, useState } from 'react';

import { Title } from "./components/title";
import { Header } from "./components/header"
import { Footer } from "./components/footer"
import { Subtitle } from './components/subtitle';

import "./styles/index.css"
import goldMedal from "./assets/gold-medal.svg"
import sadFace from "./assets/sad.svg"

export function App(){
    // atribuindo tipo de dados 
    const [dados, setDados] = useState<{ data: { CodLivro: number, Nome: string }[] } | null>(null);
    const [erro, setErro] = useState(null);

    // definindo url base
    const url = "https://bmain.bookplay.com.br/parceiros/6BB6F620/recrutamento/top10/acessos";

    // comunicação com a api 
    useEffect(() => {
        fetch(url) 
        .then((res) => {
            if (!res.ok) {
            throw new Error(`Erro ${res.status}: ${res.statusText}`);
            }
            return res.json();
        })
        .then((data) => setDados(data))
        .catch((err) => setErro(err.message));
    }, []);


    // if api failed
    if (erro){
        return <div className="message">
            <img src={sadFace} alt="ícone de emoji triste" />
            <h2>Ops! Tente novamente mais tarde</h2>
        </div>
    }

    // if api succeded, loading
    if (!dados){ 
        return <div className="message ellipsis">
            <h2>Carregando</h2>
        </div>
    }

    // atribuindo os dados para a variável livro
    const { data: livro } = dados;

    // retornando a  webpage
    return (
        <>
            < Header />
            <main className="container">
                < Title name="Top 10 livros mais acessados do Bookplay" />
                <Subtitle name="Confira abaixo a lista completa dos livros mais acessados do Bookplay!" />

                <table>
                    <thead>
                        <tr>
                            <th>Ranking</th>
                            <th>Nome do livro</th>
                            <th>Código</th>
                        </tr>
                    </thead>
                    <tbody>
                        {livro.map((livro, index) => (
                        <tr>
                            <td>
                                <span>{index + 1}</span>
                                <img src={goldMedal} alt="ícone de uma medalha de ouro" className="gold-medals" />
                            </td>
                            <td>{livro.Nome}</td>
                            <td>{livro.CodLivro}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </main>

            < Footer />
        </>
    )
}