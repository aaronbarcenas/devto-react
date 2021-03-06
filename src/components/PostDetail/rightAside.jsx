import React, {useEffect, useState, Fragment } from "react";
import { useParams } from "react-router";

const RightAside = () => {
  const {_id} = useParams()

  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8080/posts/${_id}`)
      .then(response => response.json())
      .then(json => setData(json))
  }, []);

  console.log(data.data)



  return (
    <Fragment>
      <div
        className="pt-3 d-none d-lg-block col-lg-3"
        style={{
          position: "",
          right: " 10%",
          zIndex: "",
          height: "100vh",
          overflowYs: "hidden",
        }}
        id="rightAside2"
      >
        <div className="card rounded-sm">
          <div className="bg-dark p-3 rounded-top"></div>
          <div className="card-header">
            <a className="d-flex">
              <span className="mr-2 mb-4">

                <img
                  src={data.data && data.data.post.avatar}
                  className="rounded-circle mw-100 mb-1"
                  alt=""
                />
              </span>
              <span className='mx-4'>{data.data && data.data.post.author}</span>
            </a>
          </div>
          <div className="card-body">
            <a href="/" className="btn btn-follow btn-md btn-block mb-2">
              Follow
            </a>
            <span className="card-text d-block">Location</span>
            <span className="card-text d-block">Azcapotzalco</span>
            <span className="card-text d-flex justify-content-end mt-3">
              <small>JOINED</small>
            </span>
            <small><span className="card-text d-flex justify-content-end">20 de jul. de 2018</span></small>
          </div>
        </div>
        <div className="card mt-3">
          <div className="card-header d-flex justify-content-between">
            {" "}
            <h5 className="font-weight-bold">More from the DEV team 🌟</h5>
          </div>
          <div className="card-body pl-0 pr-0">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                We need to Fix Anti-Harassment Tooling with Tracy Chou and Chloe
                Condon
              </li>
              <li className="list-group-item">Join us for #SheCoded 2021!</li>
              <li className="list-group-item">
                Happy Ada Lovelace Day! Tell us about the women who have
                inspired your coding journey ❤️
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default RightAside;
