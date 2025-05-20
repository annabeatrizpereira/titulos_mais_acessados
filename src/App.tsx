import { useEffect, useState } from 'react';

import { Title } from "./components/title";
import { Header } from "./components/header"
import { Footer } from "./components/footer"
import { Subtitle } from './components/subtitle';

import "./styles/index.css"
import "./assets/gold-medal.svg"
import "./assets/sad.svg"

export function App(){
    // definindo um tipo para os dados codlivro e nome
    const [dados, setDados] = useState<{ data: { CodLivro: number, Nome: string }[] } | null>(null);

    const [erro, setErro] = useState(null);

    let url = "https://bmain.bookplay.com.br/parceiros/6BB6F620/recrutamento/top10/acessos";

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


    if (erro){
        return <div className="message">
            <img src="./src/assets/sad.svg" alt="ícone de emoji triste" />
            <h2>Ops! Tente novamente mais tarde</h2>
        </div>
    }

    if (!dados){ 
        return <div className="message ellipsis">
            <h2>Carregando</h2>
        </div>
    }


    const { data: livro } = dados;

    return (
        <>
            < Header />
            <main className="container">
                < Title name="Top 10 títulos mais acessados do Bookplay" />
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
                                <img src="./src/assets/gold-medal.svg" alt="ícone de uma medalha de ouro" className="gold-medals" />
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