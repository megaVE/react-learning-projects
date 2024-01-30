import styles from "./CreatePost.module.css"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuthValue } from "../../context/AuthContext"
import { useInsertDocument } from "../../hooks/useInsertDocument"

const CreatePost = () => {
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [body, setBody] = useState("")
    const [tags, setTags] = useState([])
    const [formError, setFormError] = useState("")

    const { user } = useAuthValue()

    const { insertDocument, response } = useInsertDocument("posts")

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        setFormError("")

        try {
            new URL(image)
        } catch (error) {
            setFormError("The image must be an URL.")
        }

        const tagsArray = tags.split(",").map(tag => tag.trim().toLowerCase())

        if(!title || !image || !tags || !body){
            setFormError("Please fulfil all the available fields.")
        }

        if(formError){
            return
        }
        
        insertDocument({
            title,
            image,
            body,
            tagsArray,
            uid: user.uid,
            createdBy: user.displayName,
        })

        navigate("/")
    }

    return (
        <div className={styles.create_post}>
            <h2>Create post</h2>
            <p>Write about whatever you want and share your knowledge!</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Title:</span>
                    <input
                        type="text" 
                        name="title"
                        placeholder="Create a good title..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </label>
                <label>
                    <span>Image URL:</span>
                    <input
                        type="text" 
                        name="image"
                        placeholder="Insert a image that represents your post"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        required
                    />
                </label>
                <label>
                    <span>Content:</span>
                    <textarea
                        name="body"
                        placeholder="Insert the content of the post"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        required
                    />
                </label>
                <label>
                    <span>Tags:</span>
                    <input
                        type="text" 
                        name="tags"
                        placeholder="Insert the tags separated by comma"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                        required
                    />
                </label>
                {response.loading
                    ? (<button className="btn" disabled>Loading</button>)
                    : (<button className="btn">Post</button>)
                }
                {response.error && <p className="error">{response.error}</p>}
                {formError && <p className="error">{formError}</p>}
            </form>
        </div>
    )
}

export default CreatePost