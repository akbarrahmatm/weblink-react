import userImg from "../asset/profile/user.jpg"


const Profile = () => {
    return(
        <div>
            <div className="profile">    
                <img src={userImg} className="rounded-circle imgProfile"/>
                <p className="usernameProfile">
                    Akbar Rahmat Mulyatama
                    <span className="desc">I love you in every universe, but anyway hit me up !</span>
                </p>        
            </div>             
        </div>
    )
}

export default Profile