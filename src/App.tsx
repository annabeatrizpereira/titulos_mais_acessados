import livros from "./data/dados.json"
import "./styles/index.css"
import "./assets/gold-medal.svg"

export function App(){
    const { data: livro } = livros;

    return (
        <div className="container">
            <h1>Top 10 títulos mais acessados do Bookplay</h1>
            <p>Confira abaixo a lista completa dos livros mais acessados do Bookplay!</p>

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
                            <img src="./src/assets/gold-medal.svg" alt="ícone de uma medalha de ouro" />
                        </td>
                        <td>{livro.Nome}</td>
                        <td>{livro.CodLivro}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
        </div>
    )
}