import { isEmpty } from 'lodash'
import { useState, useEffect } from 'react'
import { Container, Draggable } from 'react-smooth-dnd'

import './BoardContent.scss'

import { mapOrder } from 'utilities/sorts'
import Column from 'components/Column/Column'
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
    console.log(dropResult)
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
            <Column column={col} />
          </Draggable>
        ))}
      </Container>
    </div>
  )
}

export default BoardContent
