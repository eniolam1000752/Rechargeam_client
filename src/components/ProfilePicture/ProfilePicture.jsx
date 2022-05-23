import React from "react";
import "./ProfilePicture.scss";
import User from "../../assets/svgs/user.svg";

function ProfilePicture() {
  return (
    <div>
      <div className="in">
        <img src={User} id="output" className="img" />
        <div className="inp">
          <input
            type="file"
            id="avatar"
            name="avatar"
            placeholder="Account"
            accept="image/*"
            onChange={(event) => {
              const image = document.getElementById("output");
              image.src = URL.createObjectURL(event.target.files[0]);
            }}
            style={{ size: 30 }}
          />
        </div>
        <span className="text-style">Account</span>
      </div>
    </div>
  );
}

export default ProfilePicture;
