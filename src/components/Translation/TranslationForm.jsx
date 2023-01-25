import { useState } from "react";
import { storeUserTranslation } from "../../api/translation";
import { useUser } from "../../context/UserContext";

const TranslateForm = () => {
    const [inputText, setInputText] = useState(" ")
    const [images, setImages] = useState([]);
    const { user } = useUser();

    const handleChange = (event) => {
        setInputText(event.target.value);
    }

    const handleButtonClick = async () => {
        setImages(inputText.split('').map((char, index) => (
            <img className="sign" key={index} src={`../image/${char}.png`} alt={char} />
        )));
       try {
           await storeUserTranslation({
               userId: user.id,
               translations: [inputText]
           });
       } catch(e) {
        alert(`Oops, an error occurred! Try again later`);
       }
    }

    return (
        <div>
            <input type="text" onChange={handleChange} placeholder="What should I translate?" />
            <button onClick={handleButtonClick}>Translate!</button>
            {images}
        </div>
    )
}

export default TranslateForm
            