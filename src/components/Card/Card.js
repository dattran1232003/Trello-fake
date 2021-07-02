import PropTypes from 'prop-types'

import './Card.scss'

Card.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string,
  }),
}

function Card({ card }) {
  const { title, cover } = card

  return (
    <div className="card-item card-drag-handle">
      {cover && <img className="card-cover" src={cover} alt="dattran image" />}
      {title}
    </div>
  )
}

export default Card
