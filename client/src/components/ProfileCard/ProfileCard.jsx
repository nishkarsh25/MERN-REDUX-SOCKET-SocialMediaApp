import React from "react";
import "./ProfileCard.css";
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { fetchUser } from "../../slice/userSlice";
import { useEffect } from "react";

const ProfileCard = ({location}) => {
  const { user } = useSelector((state) => state.auth.authData);
  const posts = useSelector((state)=>state.posts.posts)
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.userData);

  useEffect(()=>{
      dispatch(fetchUser(user._id));
  },[])

  
  console.log(userData)

  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={
            userData&&userData.coverPicture
              ? serverPublic + userData.coverPicture
              : serverPublic + "defaultCover.jpg"
          } alt="CoverImage" />
        <img
          src={
            userData&&userData.profilePicture
              ? serverPublic + userData.profilePicture
              : serverPublic + "defaultProfile.png"
          }
          alt="ProfileImage"
        />
      </div>
      <div className="ProfileName">
        <span>{user.firstname} {user.lastname}</span>
        <span>{user.worksAt? user.worksAt : 'Write about yourself'}</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>{userData ? userData.followers.length : 0}</span>
            <span>Followers</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>{userData ? userData.following.length : 0}</span>
            <span>Following</span>
          </div>
          {/* for profilepage */}
          {location === "profilePage" && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>{
                posts.filter((post)=>post.userId === user._id).length
                }</span>
                <span>Posts</span>
              </div>{" "}
            </>
          )}
        </div>
        <hr />
      </div>

      {location === "profilePage" ? (
        ""
      ) : (
        <span>
          <Link to={`/profile/${user._id}`} style={{ textDecoration: "none", color: "inherit" }}>
            My Profile
          </Link>
        </span>
      )}
    </div>
  );
};

export default ProfileCard;
