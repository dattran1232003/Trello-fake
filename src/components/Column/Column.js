import PropTypes from 'prop-types'
import { Container, Draggable } from 'react-smooth-dnd'

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

  const onCardDrop = (dropResult) => {
    console.log(dropResult)
  }

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
            animationDuration: 150,
            showOnTop: true,
            className: 'cards-drop-preview',
          }}
          dropPlaceholderAnimationDuration={200}
          onDrop={onCardDrop}
          getChildPayload={(index) => cards[index]}
        >
          {mapOrder(cards, cardOrder, 'id').map((card) => (
            <Draggable key={card.id}>
              <Card card={card} />
            </Draggable>
          ))}
        </Container>
      </div>

      <footer>Add another card</footer>
    </div>
  )
}

export default Column
