
const UserProfile = ({ email}:any) => {
    let initials = 'A'
  if (email){
    initials = email?.charAt(0)
  }else{

  }
    return (
      <div className="px-3 pb-1">
        <span className="text-2xl text-green-700">{initials}</span>
      </div>
    )
  }
  
  export default UserProfile