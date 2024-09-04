
import React from "react";
import Navbar from  "./components/Navbar";
import Cards from "./components/Cards"
import Filter from "./components/Filter"
import { apiUrl, filterData  } from "./data";
import { useState,useEffect } from "react";
import Spinner from "./components/Spinner";
import {toast} from "react-toastify";


const App = () => { 
  const [courses, setCourses] = useState({});
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try{
      let response = await fetch(apiUrl);
      let output = await response.json();
      //output -> 
      setCourses(output.data);
    }
    catch(error) {
        toast.error("Unable to fetch data form API");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [])
  

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
        <Navbar/>
      </div>
      <div className="bg-bgDark2">
        <div>
          <Filter 
          filterData={filterData}
            category={category}
            setCategory={setCategory}
          />
        </div>
        <div className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">

        {
        (courses.length === 0 || Object.keys(courses).length === 0) ? 
        (<div>No Courses Found</div>) : 
        (loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>))
        }

          {/* {
            loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>)
          } */}
        </div>
      </div>


    </div>
  );
};

export default App;













































































































// import logo from './logo.svg';
// import './App.css';
// //import {useState} from 'react';
// import  {useEffect, useState} from "react";

// function App() {
//   const [text,setText]=useState('');
//   const[name,setName]=useState('Harsh')

// //variation one   every render
//   // useEffect(()=>{
//   //   console.log("UI RENDERING DONE")
//   // })


//   //variation 2  

//   //   first render
//   //useEffect(()=>{
//     //   console.log("UI RENDERING DONE")
//     // },[])
  
  
  



//   //variation 3 whenever dependency changes
//   // useEffect(()=>{
//   // console.log('change observed')
//   // },[name]);




//   //variatino 4  to handle unamounting of a component


//   useEffect(()=>{
//      //add event listner
//      console.log("listner Addedd")

//      return ()=>{
//       console.log('listner removed')
//      }

//   },[text])






//   function ChangeHandler(event){
//     console.log(text);
//     setText(event.target.value);
//   }
//   return (
//     <div className="App">
//       <input type='text' onChange={ChangeHandler}></input>

//     </div>
//   );
// }

// export default App;
