import React, { Fragment } from "react";
import lupa from '../../images/lupa-icon.svg'
import message from '../../images/message-icon.svg'
import bell from '../../images/bell-icon.svg'
import user from '../../images/add-user.svg'

const HeaderIcons = () => {
  return (
    <Fragment>
      <img
        className="d-md-none pr-3 navbar-toggler border-top-0 border-right-0 border-left-0 border-bottom-0"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSearchContent"
        src={lupa}
        alt="lupa-icon"
        aria-controls="navbarSearchContent"
          aria-expanded="false" aria-label="Toggle navigation"
      />
      <img
        className="ps-md-4 pe-2"
        type="button"
        data-toggle="collapse"
        data-target="#navbarWriteContent"
        src={message}
        alt="write-icon"
        aria-controls="navbarWriteContent" aria-expanded="false" aria-label="Toggle navigation"
      />
      <img
        className="ps-2 pe-3"
        type="button"
        data-toggle="collapse"
        data-target="#navbarBellContent"
        src={bell}
        alt="bell-icon"
        aria-controls="navbarBellContent" aria-expanded="false" aria-label="Toggle navigation"
      />
      <img
        className="rounded-circle margin-right-icon"
        src="https://res.cloudinary.com/practicaldev/image/fetch/s--jl25ieQ4--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/570253/d305dc25-89e7-4959-bba9-f85ff315a1c7.jpeg"
        width="30"
        height="30"
        alt=""
      />
      <img
        className="pl-md-4 pr-2"
        type="button"
        data-toggle="modal"
        data-target="#staticBackdrop"
        src={user}
        alt="write-icon"
        aria-controls="navbarWriteContent" aria-expanded="false" aria-label="Toggle navigation"
      />
    </Fragment>
  );
};

export default HeaderIcons;
