import {useEffect, useState} from 'react'
import axios from 'axios'
import AxiosPostExample from './AxiosPostExample';
import AxiosDeleteExample from './AxiosDeleteExample';
import MultiApiFetching from './MultiApiFetching';

const Axiosprac = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const axiosfunc = async () => {
          try {
            const response = await axios('https://jsonplaceholder.typicode.com/posts');
            setPosts(response.data);
            console.log(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        axiosfunc(); 
      }, []); 
  return (
    <>
    <h1>Axios get</h1>
    <ul style={{listStyle: 'none', padding: 0}}>
        {
            posts.splice(0,10).map(post => {
                return (
                    <li key={post.id}>{post.id}. {post.title}</li>
                )
            })
        }
    </ul>
    <h1>Axios post</h1>
    <AxiosPostExample />
    <h1>Axios put</h1>
    <AxiosPostExample />
    <h1>Axios delete</h1>
    <AxiosDeleteExample />
    <h1>MultiApi fetching</h1>
    <MultiApiFetching />
    </>
  )
}

export default Axiosprac