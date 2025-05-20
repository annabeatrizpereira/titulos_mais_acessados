import "../assets/bookplay-logo.svg"

export function Header(){
    return <header>
        <img src="./src/assets/bookplay-logo.svg" alt="Logo Bookplay" id="logo" />

        <nav>
            <ul>
                <li>
                    {/* <select>
                        <option value="1" >Livros</option>
                        <option value="2">Cursos</option>
                        <option value="3">Videoaulas</option>
                        <option value="5">Banca</option>
                        <option value="6">Audiobooks</option>
                    </select> */}
                    <a href="https://bookplay.com.br/">Site Oficial</a>
                    {/* <a href="#">Logout</a> */}
                </li>
            </ul>
        </nav>
    </header>
}