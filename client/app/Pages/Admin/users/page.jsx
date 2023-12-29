import React from 'react'

const page = () => {
  useEffect(() => {
    const auth=()=>{
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
    }
    const fetchdata=async()=>{
      const res= await fetch("/api/user/admin/noofuser")
      const data=await res.json()
      const len=data.length
      setLength(len)
    }
    auth()
    fetchdata()
  }, []);

  const numberAnimation = useSpring({
    from: { number: 0 },
    to: { number: length },
    config: { duration: 1000 },
  });

  return (
    <div>page</div>
  )
}

export default page