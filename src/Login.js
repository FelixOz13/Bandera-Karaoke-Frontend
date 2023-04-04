import { Container } from 'react-bootstrap'


const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=ca8dd146d87243948a2ef07bae55c4e0&response_type=code&redirect_uri=http://localhost:8888/callback&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"
 
export default function Login() {
  return (
    <Container 
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", color: "black" }}
    >
      <a className="btn btn-warning btn-lg" href={AUTH_URL}>
        Presiona para Ingresar a Karaoke
      </a>
    </Container>
  )
}
