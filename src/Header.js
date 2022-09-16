import image from './troll-face.png'
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <img className='header--image' src={image} alt='troll-face'/>
            <h2 className='header--title'>Meme Generator</h2>
            <h4 className='header--project'>React Course - Project 3</h4>
        </div>
    )
}

export default Header;