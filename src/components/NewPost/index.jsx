import React, { Fragment, useState } from 'react'
import { useHistory } from "react-router-dom";
import { newPost } from '../../services';


const NewPost = () => {
    const [imageUrl,setImageUrl]= useState();
    const [titlePost, setTitlePost] = useState();
    const [textPost, setTextPost] = useState();

    const history = useHistory();

    const submit = (event) => {
        event.preventDefault()
        newPost({image:imageUrl, titlePost, textPost})
        .then(response =>history.push('/'))
        .catch(error => alert('ocurrio un error, intenta mas tarde'))
    }

  return (
    <Fragment>
      <div className="container">
        <div className="row">
            <div className="col-12 mt-2">
                <form className="mb-4  px-5" id="addPostForm" onSubmit={submit} >
                    <div className="border rounded bg-light p-5">
                        <div className="form-group">
                            <input type="texto" className="form-control w-50" id="imageUrl" placeholder="Add a cover image" onChange={event =>setImageUrl(event.target.value)}/>
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control" id="title" aria-describedby="title" placeholder="New post title here..." onChange={event =>setTitlePost(event.target.value)}/>
                        </div>
                        <div className="form-group">
                          <input type="texto" className="form-control pb-5" id="content" placeholder="Write your post content here..." onChange={event =>setTextPost(event.target.value)}/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" id="btnAddPost">Publish</button>
                    <button type="button" className="btn btn-secondary" id="btnSaveDraft">Save draft</button>
                </form>
            </div>
        </div>
    </div>
    </Fragment>
  )
}

export default NewPost;
