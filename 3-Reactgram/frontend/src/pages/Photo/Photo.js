import "./Photo.css"

import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { UseSelector, useDispatch, useSelector } from "react-redux"
import { useResetComponentMessage } from "../../hooks/useResetComponentMessage"

import { uploads } from "../../utils/config"
import { getPhoto, like, comment } from "../../slices/photoSlice"

import Message from "../../components/Message"
import PhotoItem from "../../components/PhotoItem"
import LikeContainer from "../../components/LikeContainer"

const Photo = () => {
    const { id } = useParams()

    const dispatch = useDispatch()

    const resetMessage = useResetComponentMessage(dispatch)

    const { user } = useSelector(state => state.auth)
    const { photo, loading, error, message } = useSelector(state => state.photo)

    const [commentText, setCommentText] = useState("")

    useEffect(() => {
        dispatch(getPhoto(id))
    }, [dispatch, id])

    const handleLike = () => {
        dispatch(like(photo._id))

        resetMessage()
    }

    const handleComment = (e) => {
        e.preventDefault()

        const commentData = {
            comment: commentText,
            id: photo._id,
        }

        dispatch(comment(commentData))

        setCommentText("")

        resetMessage()
    }

    if(loading){
        return <p>Loading...</p>
    }

    return (
        <div id="photo">
            <PhotoItem photo={photo} />
            <LikeContainer photo={photo} user={user} handleLike={handleLike}/>
            <div className="message-container">
                {error && <Message msg={error} type="error" />}
                {message && <Message msg={message} type="success" />}
            </div>
            <div className="comments">
                {photo.comments && (
                    <>
                        <h3>Comments: ({photo.comments.length})</h3>
                        <form onSubmit={handleComment}>
                            <input
                                type="text"
                                placeholder="Insert your comment..."
                                value={commentText}
                                onChange={(e)=> setCommentText(e.target.value)}
                            />
                            <input type="submit" value="Send" />
                        </form>
                        {photo.comments.length === 0 && <p>There are no comments...</p>}
                        {photo.comments.map(comment => (
                            <div key={comment.comment} className="comment">
                                <div className="author">
                                    {comment.userImage && (
                                        <img
                                            src={`${uploads}/users/${comment.userImage}`}
                                            alt={comment.userName}
                                        />
                                    )}
                                    <Link to={`/users/${comment.userId}`}>
                                        <p>{comment.userName}</p>
                                    </Link>
                                </div>
                                <p>{comment.comment}</p>
                            </div>
                        ))}
                    </>
                )}
            </div>
        </div>
    )
}

export default Photo