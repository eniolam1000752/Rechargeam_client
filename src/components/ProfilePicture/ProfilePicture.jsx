import React from "react";
import "./ProfilePicture.scss";
import User from "../../assets/svgs/user.svg";
import { InputText } from "../InputText/InputText";

function ProfilePicture() {
  return (
    <div>
      <div className="in">
        <img src={User} className="img" />
        <div className="inp">
          <input
            type="file"
            id="avatar"
            name="avatar"
            placeholder="Account"
            accept="image/*"
            style={{ size: 30 }}
          />
        </div>
        <span className="text-style">Account</span>
      </div>
    </div>
  );
}

export default ProfilePicture;
