import { useUser } from "../services/users"
import { useRepos } from "../services/repos"
import {Container,WrapImage,Image,InnerBio,WrapRepo,TextBio,TextName,Repos,TextRepo} from './styles'

function Home() {
  const USERNAME ='brunoAlbuquerque1'

  const {data:user} = useUser(USERNAME)
  const {data:repo} = useRepos(USERNAME)
  

  return (
    <Container>
        <WrapImage >
          <Image src={user?.avatar_url}/>
        </WrapImage>
        <InnerBio>
          <TextName> {user?.name} </TextName>
          <TextBio> {user?.bio} </TextBio>
        </InnerBio>

    <div style={{display:"flex",alignItems:'center',justifyContent:'center'}}>
      <WrapRepo>
          {repo?.map(repo =>
          <Repos>
            <TextRepo>{repo?.name}</TextRepo>
            <TextRepo >{repo?.language}</TextRepo>
          </Repos>
          )}
      </WrapRepo>
</div>

      
</Container>

  )
}

export default Home
