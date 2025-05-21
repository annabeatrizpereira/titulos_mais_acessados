import logo from "../assets/bookplay-logo.svg"

export function Header(){
    // select > options seria o nível 3, resolvi deixar porque o front já estava pronto
    // a > logout seria o nível 4
    return <header>
        <img src={logo} alt="Logo Bookplay" id="logo" />

        <nav>
            <ul>
                <li>
                    <select>
                        <option value="1" >Livros</option>
                        <option value="2"  onClick={() => alert("Nós estamos trabalhando nisso ;(")} >Cursos</option>
                        <option value="3"  onClick={() => alert("Nós estamos trabalhando nisso ;(")} >Videoaulas</option>
                        <option value="5"  onClick={() => alert("Nós estamos trabalhando nisso ;(")}>Banca</option>
                        <option value="6"  onClick={() => alert("Nós estamos trabalhando nisso ;(")} >Audiobooks</option>
                    </select>
                    <a href="https://bookplay.com.br/">Site Oficial</a>
                    {/* <a href="#">Logout</a> */}
                </li>
            </ul>
        </nav>
    </header>
}