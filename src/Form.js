import "./Form.css"

function Form() {
    return (
        <form className="form">
            <div className="form--input">
                <input className="form--input_child" type="text"/>
                <input className="form--input_child" type='text'/>
            </div>
            <button className="form--button">Get a new meme image 🖼</button>
        </form>
    )
}

export default Form;