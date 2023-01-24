import {useState, useEffect} from 'react'
import {useForm} from 'react-hook-form'
import {loginUser} from "../../api/user"
import {storageSave} from '../../Storage/storage';
import {useHistory} from "react-router-dom";

const usernameConfig = {
    required: true, minLength: 5
}

const LoginForm = () => {
    const {register, handleSubmit, formState: {errors},} = useForm();

    // Local State
    const [loading, setLoading] = useState(false)
    const [apiError, setApiError] = useState(null)

    // Side Effects
    useEffect(() => {

    }, []) // Empty Dependencies - Only run once

    // Event Handlers
    const onSubmit = async({username}) => {
        setLoading(true);
        const [error, user] = await loginUser(username);
        if (error !== null) {
            setApiError(error)
        }
        if (user !== null) {
            storageSave("Translation-account", user)
        }
        setLoading(false);
    };


    // Render Function
    const errorMessage = (() =>{
        if (!errors.username) {
            return null
        }
        if (errors.username && errors.username.type === "required") {
            return <span> Username is required</span>
        }
        if (errors.username && errors.username.type === "minLength") {
            return <span> Username is too short (min. 5 characters)</span>
        }
    })()

    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
                <label htmlFor='username'>Username: </label>
                <input type="text" placeholder="What's your name?" {...register("username", usernameConfig)} />
                {errorMessage}
            </fieldset>
            <button type="submit" disabled={loading}>Continue</button>
            {loading && <p>Logging in...</p>}
            {apiError && <p>{apiError}</p>}
        </form>
        </>
    );
};
export default LoginForm