import "./Form.css"
import memesData from "./memesData"

function Form() {
function getMemeImage() {
    const memes = memesData.data.memes
    const randomMeme = memes[Math.floor(Math.random(memes) * memes.length)]
    const memeUrl = randomMeme.url
}

    return (
        <div className="form">
            <div className="form--input">
                <input 
                    className="form--input_child" 
                    type="text" 
                    placeholder="Top text"
                />
                <input 
                    className="form--input_child" 
                    type="text" 
                    placeholder="Bottom text"
                />
            </div>
            <button onClick={getMemeImage} className="form--button">Get a new meme image 🖼</button>
        </div>
    )
}

export default Form;