import "./Profile.css"

import { useState, useEffect, useRef } from "react"
import { Link, useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { BsFillEyeFill, BsNewspaper, BsPencilFill, BsXLg } from "react-icons/bs"
import { useResetComponentMessage } from "../../hooks/useResetComponentMessage"

import { uploads } from "../../utils/config"
import { getUserDetails } from "../../slices/userSlice"
import { publishPhoto, getUserPhotos, deletePhoto, updatePhoto } from "../../slices/photoSlice"

import Message from "../../components/Message"

const Profile = () => {
    const { id } = useParams()

    const dispatch = useDispatch()

    const { user, loading } = useSelector(state => state.user)
    const { user: userAuth} = useSelector(state => state.auth)
    const { photos, loading: loadingPhoto, message: messagePhoto, error: errorPhoto } = useSelector(state => state.photo)

    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    
    const [editId, setEditId] = useState("")
    const [editImage, setEditImage] = useState("")
    const [editTitle, setEditTitle] = useState("")

    const newPhotoForm = useRef()
    const editPhotoForm = useRef()

    useEffect(() => {
        dispatch(getUserDetails(id))
        dispatch(getUserPhotos(id))
    }, [dispatch, id])

    const resetMessage = useResetComponentMessage(dispatch)

    const submitHandle = (e) => {
        e.preventDefault()

        const photoData = { title, image }

        const formData = new FormData()

        const photoFormData = Object.keys(photoData).forEach(key => formData.append(key, photoData[key]))

        formData.append("photo", photoFormData)

        dispatch(publishPhoto(formData))

        setTitle("")

        resetMessage()
    }

    const handleFile = (e) => {
        const image = e.target.files[0]

        setImage(image)
    }

    const handleDelete = (id) => {
        dispatch(deletePhoto(id))

        resetMessage()
    }

    const hideOrShowForms = () => {
        newPhotoForm.current.classList.toggle("hide")
        editPhotoForm.current.classList.toggle("hide")
    }

    const handleUpdate = (e) => {
        e.preventDefault()

        const photoData = { title: editTitle, id: editId }

        dispatch(updatePhoto(photoData))

        resetMessage()
    }

    const handleEdit = (photo) => {
        if(editPhotoForm.current.classList.contains("hide")){
            hideOrShowForms()
        }

        setEditId(photo._id)
        setEditTitle(photo.title)
        setEditImage(photo.image)
    }

    const handleCancelEdit = (e) => {
        hideOrShowForms()
    }

    if(loading){
        return <p>Loading...</p>
    }

    return (
        <div id="profile">
            <div className="profile-header">
                {user.profileImage && (
                    <img src={`${uploads}/users/${user.profileImage}`} alt={user.name} />
                )}
                <div className="profile-description">
                    <h2>{user.name}</h2>
                    <p>{user.bio}</p>
                </div>
            </div>
            {id === userAuth._id && (
                <>
                    <div className="new-photo" ref={newPhotoForm}>
                        <h3>Share a moment of yours:</h3>
                        <form onSubmit={submitHandle}>
                            <label>
                                <span>Title:</span>
                                <input
                                    type="text"
                                    placeholder="Insert a title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </label>
                            <label>
                                <span>Image:</span>
                                <input
                                    type="file"
                                    onChange={handleFile}
                                />
                            </label>
                            {loadingPhoto
                                ? (<input type="submit" value="Wait" disabled />)
                                : (<input type="submit" value="Post" />)}
                        </form>
                    </div>
                    <div className="edit-photo hide" ref={editPhotoForm}>
                        <p>Editing:</p>
                        {editImage && (
                            <img
                                src={`${uploads}/photos/${editImage}`}
                                alt={editTitle}
                            />
                        )}
                        <form onSubmit={handleUpdate}>
                            <input
                                type="text"
                                placeholder="Enter the new title"
                                value={editTitle}
                                onChange={(e) => setEditTitle(e.target.value)}
                            />
                            <input type="submit" value="Update" />
                            <button className="cancel-btn" onClick={handleCancelEdit}>Cancel</button>
                        </form>
                    </div>
                    {errorPhoto && <Message msg={errorPhoto} type="error" />}
                    {messagePhoto && <Message msg={messagePhoto} type="sucess" />}
                </>
            )}
            <div className="user-photos">
                <h2>Published photos:</h2>
                <div className="photos-container">
                    {photos && photos.map(photo => (
                        <div key={photo._id} className="photo">
                            {photo.image && (
                                <img
                                    src={`${uploads}/photos/${photo.image}`}
                                    alt={photo.title}
                                />
                            )}
                            {id === userAuth._id
                            ? (<div className="actions">
                                <Link className="btn" to={`/photos/${photo._id}`}>
                                    <BsFillEyeFill />
                                </Link>
                                <BsPencilFill onClick={() => handleEdit(photo)} />
                                <BsXLg onClick={() => handleDelete(photo._id)} />
                            </div>)
                            : (<Link className="btn" to={`/photos/${photo._id}`}>See</Link>)}
                        </div>
                    ))}
                    {photos.length === 0 && <p>There are still no published photos.</p>}
                </div>
            </div>
        </div>
    )
}

export default Profile