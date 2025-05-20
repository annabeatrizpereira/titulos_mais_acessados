import "../assets/bookplay-logo.svg"

export function Header(){
    return <header>
        <img src="./src/assets/bookplay-logo.svg" alt="Logo Bookplay" id="logo" />

        <nav>
            <ul>
                <li>
                    <select>
                        <option value="livros" >Livros</option>
                        <option value="cursos">Cursos</option>
                        <option value="videoaulas">Videoaulas</option>
                        <option value="banca">Banca</option>
                        <option value="audiobook">Audiobooks</option>
                    </select>
                    <a href="https://bookplay.com.br/">Site Oficial</a>
                    <a href="#">Logout</a>
                </li>
            </ul>
        </nav>
    </header>
}