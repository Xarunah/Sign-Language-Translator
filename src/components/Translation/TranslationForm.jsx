import { useEffect, useState } from "react";
import { storeUserTranslation } from "../../api/translation";
import { STORAGE_KEY_USER } from "../../const/storageKeys";
import { useUser } from "../../context/UserContext";
import { storageSave } from "../../Storage/storage";
import { findUserById } from "../../api/user";
import "../../styling/translationStyling.css";
import {Link} from "react-router-dom"
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
        let parseInput = inputText.toLowerCase().replace(/[^a-z]/g, '')
        
        const[error, updatedUser] = await storeUserTranslation(parseHistoryInput, user)
        if (error !== null) {return}

        storageSave(STORAGE_KEY_USER, updatedUser)
        setUser(updatedUser)
        setImages( parseInput.split('').map((char, index) => (
            <img className="sign" key={index} src={`../image/${char}.png`} alt={char} />
        )));
    }

    return (
        <div className="box-translation">

            <div className='translation-input'>
            <input type="text" onChange={handleChange} placeholder="What should I translate?" />
            <button className='translation-button' onClick={handleButtonClick}><i className="fa-solid fa-arrow-right"></i></button>
            <div className="translation-img">{images}</div>

        </div>
            <div>
                <Link to="/profile">
                <button className="go-to-profile-button">Profile <i className="fa-solid fa-user"></i></button>
                </Link>
            </div>
        </div>
        

    )
}

export default TranslateForm
            