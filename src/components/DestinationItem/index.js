// Write your code here
import './index.css'

const DestinationItem = props => {
  const {userDetails} = props
  const {imgUrl, name} = userDetails

  return (
    <li className="user-card-container">
      <img src={imgUrl} className="pic" alt="pic" />
      <p> {name}</p>
    </li>
  )
}

export default DestinationItem
