import PropTypes from 'prop-types'
import './Card.scss'

Card.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string
  })
}

function Card({ card }) {
  const { title, cover } = card

  return (
    <li className="card-item">
      {cover && <img className="card-cover" src={cover} alt="dattran image" />}
      {title}
    </li>
  )
}

export default Card
