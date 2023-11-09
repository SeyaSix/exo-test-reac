function ProfileMenu() {
    const profile = {
      firstname: "Mat",
      lastname: "Mo",
    };
  
    return (
      <li>
        {profile.firstname} {profile.lastname}
      </li>
    );
  }
  
  export default ProfileMenu;