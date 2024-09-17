import React, { useEffect } from 'react'

const Doctor = () => {

  useEffect(()=> {
    fetchData();
  }, []);

  const fetchData = async() => {
    const data = await fetch("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=31.2245%2C75.7718&radius=1500&type=hospital&keyword=heart&key=AIzaSyCZ4SEGIjhfwioLKuVtQvNS5WP4T_aY4O4");
    
    const json = await data.json();
    console.log(json);

  }


 
  return (
    <div>



    </div>
  )
}

export default Doctor