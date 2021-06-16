import React, { Fragment } from 'react'

const HeaderButton = () => {
  return (
    <Fragment>
      <button className="btn btn-primary d-none d-md-block color-blue" type="button" data-toggle="modal" data-target="#staticBackdrop3">Create a post</button>
    </Fragment>
  )
}

export default HeaderButton
