import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {name: '', comment: '', commentsList: []}

  changeName = event => {
    this.setState({name: event.target.value})
  }

  changeComment = event => {
    this.setState({comment: event.target.value})
  }

  addComment = event => {
    event.preventDefault()
    const {name, comment} = this.setState

    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
    }

    this.setState(prev => ({
      commentsList: [...prev.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  onClickLike = id => {
    this.setState(prev => ({
      commentsList: prev.commentsList.map(item => {
        if (id === item.id) {
          return {...item, isLiked: !item.isLiked}
        }
        return item
      }),
    }))
  }

  onClickDelete = id => {
    const {commentsList} = this.state
    const updatedCommentsList = commentsList.filter(item => item.id !== id)
    this.setState({
      commentsList: updatedCommentsList,
    })
  }

  render() {
    const {name, comment, commentsList} = this.state
    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">Comments</h1>
          <div className="cardContainer">
            <form className="detailsContainer" onSubmit={this.addComment}>
              <p className="para">Say something about 4.0 Technologies</p>
              <input
                type="text"
                onChange={this.changeName}
                value={name}
                placeholder="Your Name"
                className="inputName"
              />
              <textarea
                className="inputComment"
                rows="4"
                cols="20"
                value={comment}
                onChange={this.changeComment}
                placeholder="Your Comment"
              />
              <button type="submit" className="submitBtn">
                Add Comment
              </button>
            </form>
            <img
              alt="comments"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              className="commentsImg"
            />
          </div>
          <div className="commentsCountContainer">
            <p className="commentsCount">{commentsList.length}</p>
            <p className="commentsPara">comments</p>
          </div>
          <hr className="hr" />
          <ul>
            {commentsList.map(item => (
              <CommentItem
                key={item.id}
                item={item}
                onClickLike={this.onClickLike}
                onClickDelete={this.onClickDelete}
                profileBackground={initialContainerBackgroundClassNames}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Comments
