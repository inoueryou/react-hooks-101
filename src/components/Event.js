import React from 'react'
import { DELETE_EVENT } from '../actions'

const Event = ({dispatch, event}) => {
  const id = event.id
    const handleClickDleteButton = () => {
      const result = window.confirm(`イベント(id=${id})を本当に削除してもいいですか？`)
      if (result) dispatch({
        type: DELETE_EVENT,
        id: id,
      })
    }

    return (
      <tr>
        <td>{ id }</td>
        <td>{ event.title}</td>
        <td>{ event.body}</td>
        <td><button type="button" className="btn btn-danger" onClick={handleClickDleteButton}>削除</button></td>
      </tr>
    )
}

export default Event
