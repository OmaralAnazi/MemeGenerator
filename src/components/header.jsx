import "react"

export default function Header() {
    return (
        <header>
            <div className="header-content">
                <img className="header--image" src="./troll-face.png" alt="troll face" />
                <h1 className="header--title">Meme Generator</h1>
            </div>
        </header>
    )
}