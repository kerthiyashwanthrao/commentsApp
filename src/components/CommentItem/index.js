// Write your code here
import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {item, onClickLike, onClickDelete, profileBackground} = props
  const {name, id, comment, isLiked} = item

  const like = () => {
    onClickLike(id)
  }

  const onDelete = () => {
    onClickDelete(id)
  }

  const profilePicStyle = () => {
    const style = Math.random(profileBackground)
    return style
  }

  const changeLike = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <li className="container">
      <div className="detailsContainer">
        <p className={`profilePic ${profilePicStyle()}`}>{name.slice(0, 1)}</p>
        <div className="nameCommentContainer">
          <div className="nameContainer">
            <p className="name">{name}</p>
            <p className="date">{formatDistanceToNow(new Date())}</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="likeDeleteContainer">
        <button type="button" onClick={like} className="imgContainer">
          <img src={changeLike} className="likeImg" alt="like" />
          {isLiked ? (
            <p className="liked">Like</p>
          ) : (
            <p className="notLiked">Like</p>
          )}
        </button>
        <button type="button" onClick={onDelete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="deleteImg"
          />
        </button>
      </div>
      <hr className="hr" />
    </li>
  )
}
export default CommentItem
