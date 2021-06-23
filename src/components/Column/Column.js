import PropTypes from 'prop-types'

import './Column.scss'

import Card from '../Card/Card'
import { mapOrder } from 'utilities/sorts'

Column.propTypes = {
  column: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cards: PropTypes.array.isRequired,
    cardOrder: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
}

function Column({ column }) {
  const { title, cards, cardOrder } = column

  return (
    <div className="column">
      <header>{title}</header>

      <ul className="card-list">
        {mapOrder(cards, cardOrder, 'id').map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </ul>

      <footer>Add another card</footer>
    </div>
  )
}

export default Column
