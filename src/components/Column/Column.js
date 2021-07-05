import PropTypes from 'prop-types'
import { Container, Draggable } from 'react-smooth-dnd'

import './Column.scss'

import Card from '../Card/Card'
import { mapOrder } from 'utilities/sorts'

Column.propTypes = {
  onCardDrop: PropTypes.func.isRequired,
  column: PropTypes.shape({
    id: PropTypes.string.isRequired,
    cards: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    cardOrder: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
}

function Column({ onCardDrop, column }) {
  const { title, cards, cardOrder } = column

  const onCardDropCB = onCardDrop.bind(this, column.id)

  return (
    <div className="column">
      <header className="column-drag-handle">{title}</header>

      <div className="card-list">
        <Container
          orientation="vertical" // default
          groupName="cards"
          dragClass="card-ghost"
          dropClass="card-gost-drop"
          dragHandleSelector=".card-drag-handle"
          dropPlaceholder={{
            showOnTop: true,
            animationDuration: 150,
            className: 'cards-drop-preview',
          }}
          dropPlaceholderAnimationDuration={200}
          onDrop={onCardDropCB}
          getChildPayload={(index) => cards[index]}
        >
          {mapOrder(cards, cardOrder, 'id').map((card) => (
            <Draggable key={card.id}>
              <Card card={card} />
            </Draggable>
          ))}
        </Container>
      </div>

      <footer>
        <div className="footer-actions">
          <i className="fa fa-plus icon" /> Add another card
        </div>
      </footer>
    </div>
  )
}

export default Column
