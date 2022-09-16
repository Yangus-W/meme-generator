import image from './troll-face.png'

function Header() {
    return (
        <div>
            <img src={image} alt='troll-face'/>
            <h2>Meme Generator</h2>
            <h4>React Course - Project 3</h4>
        </div>
    )
}

export default Header;