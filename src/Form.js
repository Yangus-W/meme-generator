import "./Form.css"

function Form() {
function handleClick() {
    console.log("I was clicked!")
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
            <button onClick={handleClick} className="form--button">Get a new meme image 🖼</button>
        </div>
    )
}

export default Form;