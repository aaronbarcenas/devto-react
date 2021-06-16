import React, { Fragment } from 'react'
import {useHistory} from 'react-router-dom'

const HeaderButton = () => {
  const history = useHistory()
  return (
    <Fragment>
      <button className="btn btn-primary d-none d-md-block color-blue" type="button" data-toggle="modal" data-target="#staticBackdrop3" onClick={(() => history.push('/new'))}>Create a post</button>
    </Fragment>
  )
}

export default HeaderButton
