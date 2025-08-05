function UserProfile() {

    return (



        <div className="user-profile bg-gray-100 p-8 max-w-sm mx-auto,my-20 rounded-lg shadow-lg sm:p-4 md:p-8 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl max-w-xs "> 
        <img src="https://via.placeholder.com/150" alt="User" className="sm:w-24,h-24 md:w-36,h-36 rounded-full w-36 h-36 mx-auto md:w-36 md:h-36 sm:h-24 object-cover"/>
        <h1 className="text-xl text-blue-800 my-4 md:max-w-sm mx-auto bg-white shadow rounded-lg sm:text-lg md:text-xl">John Doe</h1>
        <p className="text-gray-600 sm:text-sm md:text-base text-base  :">Software Engineer</p>
         </div>
    )


}

export default UserProfile;

