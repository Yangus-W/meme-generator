import "./Form.css"

function Form() {
    return (
        <form className="form">
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
            <button className="form--button">Get a new meme image 🖼</button>
        </form>
    )
}

export default Form;