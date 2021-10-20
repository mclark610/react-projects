import React, {Fragment} from 'react'
import {Modal} from '@material-ui/core'


export default TaskModal = (props) => {
  return (
    <Fragment>
      <Modal
        open={open}
      >
      <h2>I am Task Modal</h2>
      </Modal>
    </Fragment>
  )
}