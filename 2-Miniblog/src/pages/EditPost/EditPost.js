import styles from "./EditPost.module.css"

import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { useFetchDocument } from "../../hooks/useFetchDocument"
import { useUpdateDocument } from "../../hooks/useUpdateDocument"

import { useAuthValue } from "../../context/AuthContext"

const EditPost = () => {
    const { user } = useAuthValue()
    
    const { id } = useParams()
    
    const { updateDocument, response } = useUpdateDocument("posts")
    
    const navigate = useNavigate()

    const { document: post } = useFetchDocument("posts", id)

    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [body, setBody] = useState("")
    const [tags, setTags] = useState([])
    const [formError, setFormError] = useState("")

    useEffect(() => {
        if(post){
            setTitle(post.title)
            setBody(post.body)
            setImage(post.image)

            const textTags = post.tagsArray.join(", ")

            setTags(textTags)
        }
    }, [post])

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

        const data = {
            title,
            image,
            body,
            tagsArray,
            uid: user.uid,
            createdBy: user.displayName,
        }
        
        updateDocument(id, data)

        navigate("/dashboard")
    }

    return (
        <div className={styles.edit_post}>
            {post && (
                <>
                    <h2>Editing post: {post.title}</h2>
                    <p>Change the post data however you want</p>
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
                        <p className={styles.preview_title}>Current Image Preview:</p>
                        <img
                            className={styles.image_preview}
                            src={post.image}
                            alt={post.title}
                        />
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
                            : (<button className="btn">Save Edit</button>)
                        }
                        {response.error && <p className="error">{response.error}</p>}
                        {formError && <p className="error">{formError}</p>}
                    </form>
                </>
            )}
        </div>
    )
}

export default EditPost