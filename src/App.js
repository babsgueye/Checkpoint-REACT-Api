
import './App.css';
import React, { useEffect, useState } from "react";

const App = () => {
 const [listOfUser, setListOfUser] = useState();// where to store the returned data
 const [error, setError] = useState(null);// where to store the coming errors
 useEffect(() => {
   function axiosListOfUser() {// the function to fetch data from the api
     axios.get('/user?ID=1, /user?ID=2, /user?ID=3, /user?ID=4, /user?ID=5, /user?ID=6, /user?ID=7, /user?ID=8, /user?ID=9, /user?ID=10')
       .then(res => res.json())
       .then(res => setListOfUser(res))
       .catch(err => setError(err));
   }

   axiosListOfUser();
 }, []);
 return <div />;
};
export default App;

