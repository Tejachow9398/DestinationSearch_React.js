// Write your code here
import './index.css'
import DestinationItem from '../DestinationItem'

const DestinationSearch = props => {
  const {destinationsList} = props
  let searchInput = ''
  const onChangeSearchInput = event => {
    searchInput = event.target.value
  }
  return (
    <div className="cont">
      <h1> Destination Search </h1>
      <div className="input-cont">
        <input
          type="Search"
          placeholder="Search"
          className="input"
          onChange={onChangeSearchInput}
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
          alt="search icon"
          className="img"
        />
      </div>
      <ul className="list-container">
        {destinationsList.map(eachUser => (
          <DestinationItem userDetails={eachUser} key={eachUser.id} />
        ))}
      </ul>
    </div>
  )
}

export default DestinationSearch
