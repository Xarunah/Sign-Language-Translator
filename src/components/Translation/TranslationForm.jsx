import { useEffect, useState } from "react";
import { storeUserTranslation } from "../../api/translation";
import { STORAGE_KEY_USER } from "../../const/storageKeys";
import { useUser } from "../../context/UserContext";
import { storageSave } from "../../Storage/storage";
import { findUserById } from "../../api/user";

const TranslateForm = () => {
    const [inputText, setInputText] = useState(" ")
    const [images, setImages] = useState([]);
    const { user,setUser } = useUser();

    useEffect(() => {
        const findUser = async () => {
            const[error, latestUser] = await findUserById(user.id)
            if (error===null){
                storageSave(STORAGE_KEY_USER, latestUser)
                setUser(latestUser) 
            }
        }
        findUser()
    },[setUser, user.id])
    
    const handleChange = (event) => {
        setInputText(event.target.value);
    }
    
    const handleButtonClick = async () => {
        console.log(inputText, user)
        let parseHistoryInput = inputText.replace(/[^a-z A-Z]/g, '')
        
        storeUserTranslation(parseHistoryInput, user)
        let parseInput = inputText.toLowerCase().replace(/[^a-z]/g, '')
        setImages( parseInput.split('').map((char, index) => (
            <img className="sign" key={index} src={`../image/${char}.png`} alt={char} />
        )));
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
            