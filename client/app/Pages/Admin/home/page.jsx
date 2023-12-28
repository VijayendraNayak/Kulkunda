import React from 'react'

const page = () => {
  useEffect(() => {
    const isLoggedIn = !!localStorage.getItem("userToken");
    const userRole = localStorage.getItem('userRole');
    const isAdmin = userRole === 'admin' && userRole !== null && userRole !== undefined;
    if (!isLoggedIn) {
      router.replace("/Pages/login");
    }
    if(!isAdmin){
      router.replace("/Pages/login");
      console.log("The user should be admin to access this page")
    }
  }, []);
  return (
    <div>page</div>
  )
}

export default page