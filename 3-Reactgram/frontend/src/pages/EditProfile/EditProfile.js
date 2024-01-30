import "./EditProfile.css"

import { useEffect, useState } from "react"
import { uploads } from "../../utils/config"
import { useSelector, useDispatch } from "react-redux"
import { profile, updateProfile } from "../../slices/userSlice"

import Message from "../../components/Message"
import { useResetComponentMessage } from "../../hooks/useResetComponentMessage"

const EditProfile = () => {
    const dispatch = useDispatch()

    const resetMessage = useResetComponentMessage(dispatch)

    const { user, message, error, loading } = useSelector(state => state.user)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [profileImage, setProfileImage] = useState("")
    const [bio, setBio] = useState("")
    const [previewImage, setPreviewImage] = useState("")

    useEffect(() => {
        dispatch(profile())
    }, [dispatch])

    useEffect(() => {
        if(user){
            setName(user.name)
            setEmail(user.email)
            setBio(user.bio)
        }
    }, [user])


    const handleSubmit = async (e) => {
        e.preventDefault()

        const userData = { name }

        if(profileImage){
            userData.profileImage = profileImage
        }

        if(bio){
            userData.bio = bio
        }

        if(password){
            userData.password = password
        }

        const formData = new FormData()

        const userFormData = Object.keys(userData).forEach(key => formData.append(key, userData[key]))

        formData.append("user", userFormData)

        await dispatch(updateProfile(formData))

        resetMessage()
    }


    const handleFile = (e) => {
        const image = e.target.files[0]

        setPreviewImage(image)
        setProfileImage(image)
    }


    return (
        <div id="edit-profile">
            <h2>Edit your data</h2>
            <p className="subtitle">Add a profile picture and tell us more about yourself...</p>
            {(user.profileImage || previewImage) && (
                <img
                className="profile-image"
                    src={previewImage
                        ? URL.createObjectURL(previewImage)
                        : `${uploads}/users/${user.profileImage}`}
                    alt={user.name} />
            )}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled
                />
                <label>
                    <span>Profile Picture:</span>
                    <input
                        type="file"
                        onChange={handleFile}
                    />    
                </label>
                <label>
                    <span>Bio:</span>
                    <input
                        type="text"
                        placeholder="Profile description"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                    />
                </label>
                <label>
                    <span>Do you want to change your password?</span>
                    <input
                        type="password"
                        placeholder="Enter your new password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                {loading
                    ? <input type="submit" value="Loading..." disabled />
                    : <input type="submit" value="Update" />}
                {error && <Message msg={error} type="error" />}
                {message && <Message msg={message} type="message" />}
            </form>
        </div>
    )
}

export default EditProfile