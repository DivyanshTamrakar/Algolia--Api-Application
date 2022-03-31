import {useState , useEffect} from "react"
import Navbar from "./Navbar"
import Table from "./Table";
import Footer from "./Footer"



function App() {
  const API_URL = 'https://hn.algolia.com/api/v1/search_by_date?tags=story&page='
  const [posts, setPosts] = useState([])
  const [count , setCount] = useState(0)




  useEffect(()=> {
   const fetchPosts = async () => {
     try{
       const response =  await fetch(`${API_URL}${count}`);
       const data =  await response.json()
       console.log(data)
     }catch(err){
       console.log(err)
     }
   }
   setInterval(() => {
     fetchPosts()
   },10000)
  fetchPosts()
  },[])


  

  return (
    <div className="App">
       <Navbar/>
       <Table posts = {posts}/>
       <Footer/> 

    </div>
  );
}


export default App;
