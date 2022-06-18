import { useUser } from "../services/users"
import { useRepos } from "../services/repos"

function Home() {
  const USERNAME ='brunoAlbuquerque1'

  const {data:user} = useUser(USERNAME)
  const {data:repo} = useRepos(USERNAME)
  

  return (
      <div style={{margin:50, justifyContent:"center",alignItems:'center',display:'flex',flexDirection:'column'}}>
        <div style={{alignItems:"center",}}>

          <img  style={{width:100,height:100,borderRadius:50}} src={user?.avatar_url} /> 
        </div>
        <div style={{marginTop:20,alignItems:'center',display:'flex',flexDirection:'column'}}>

        <p style={{color:'#fff'}}>{user?.name}</p>
        <p style={{color:'#fff'}}>{user?.bio}</p>
        </div>
        <div style={{marginTop:20,alignItems:'center',display:'flex',flexDirection:'row'}}>

        {repo?.map(repo =>
        <div style={{backgroundColor:'#161b22',borderWidth:1,borderColor:'#fff',borderStyle:'solid',height:200,width:150,margin:20}}>
        <p  style={{color:'#fff'}}>{repo?.name}</p>
        <p  style={{color:'#fff'}}>{repo?.language}</p>
        <p >{repo?.name}</p>
        </div>

          )}
        </div>

      </div>

  )
}

export default Home
