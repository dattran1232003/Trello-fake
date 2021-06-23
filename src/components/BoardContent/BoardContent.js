import { isEmpty } from 'lodash'
import { useState, useEffect } from 'react'

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
      {columns.map((col) => (
        <Column key={col.id} column={col} />
      ))}
    </div>
  )
}

export default BoardContent
