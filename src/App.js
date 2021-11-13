import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import GoogleLogin from 'react-google-login';

function App() {
  const respuestaGoogle = (respuesta) => {
    console.log(respuesta);
  }
  return (
    <div>
      <GoogleLogin
        clientId= "334174794750-aij5p4094j2g4rk7bksukpb3eeb7bnul.apps.googleusercontent.com"
        buttonText="Inicia sesión con google"
        onSuccess={respuestaGoogle}
        onFailure={respuestaGoogle}
        cookiePolicy={'single_host_origin'}
      />,
      <Main />
      <Footer />
    </div>
  );
}

export default App;
