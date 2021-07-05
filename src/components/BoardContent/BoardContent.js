import { isEmpty } from 'lodash'
import { useState, useEffect } from 'react'
import { Container, Draggable } from 'react-smooth-dnd'

import './BoardContent.scss'

import { mapOrder } from 'utilities/sorts'
import Column from 'components/Column/Column'
import { applyDrag } from 'utilities/dragDrop'
import { initialData } from 'actions/initialData'

function BoardContent() {
  const [board, setBoard] = useState({})
  const [columns, setColumns] = useState([])

  useEffect(() => {
    const boardFromDB = initialData.boards.find(({ id }) => id === 'board-1')

    if (boardFromDB) {
      setBoard(boardFromDB)

      setColumns(mapOrder(boardFromDB.columns, boardFromDB.columnOrder, 'id'))
    }
  }, [])

  const onColumnDrop = (dropResult) => {
    const newColumns = applyDrag(columns, dropResult)
    const newBoard = {
      ...board,
      columns: newColumns,
      columnOrder: newColumns.map(getId),
    }

    setColumns(newColumns)
    setBoard(newBoard)
  }

  const onCardDrop = (columnId, dropResult) => {
    if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
      const columnIndex = columns.findIndex((col) => col.id === columnId)
      const column = columns[columnIndex]

      const newCards = applyDrag(column.cards, dropResult)

      const newColumn = {
        ...column,
        cards: newCards,
        cardOrder: newCards.map(getId),
      }

      // using map to create new Array and release last array
      const newColumnsList = columns.map((col, i) =>
        i === columnIndex ? newColumn : col
      )

      const newBoard = {
        ...board,
        columns: newColumnsList,
        columnOrder: newColumnsList.map(getId),
      }

      setColumns(newColumnsList)
      setBoard(newBoard)
    }
  }

  return isEmpty(board) ? (
    <div
      className="not-found"
      style={{
        padding: '10px',
        color: 'white',
      }}
    >
      Board not found!
    </div>
  ) : (
    <div className="board-content">
      <Container
        orientation="horizontal"
        onDrop={onColumnDrop}
        getChildPayload={(index) => columns[index]}
        dragHandleSelector=".column-drag-handle"
        dropPlaceholder={{
          animationDuration: 150,
          showOnTop: true,
          className: 'column-drop-preview',
        }}
      >
        {columns.map((col) => (
          <Draggable key={col.id}>
            <Column onCardDrop={onCardDrop} column={col} />
          </Draggable>
        ))}
      </Container>
    </div>
  )
}

const getId = ({ id }) => id

export default BoardContent
