import Header from './componentes/Header.js';
import Main from './componentes/Main.js';
import Footer from './componentes/Footer';
import Header2 from './componentes2/Header2.js';
import Pelicula from './componentes2/Pelicula.js';
import peliculas from './json/peliculas.json';
import Footer2 from './componentes2/Footer2.js';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
//import { Container, Row} from 'react-bootstrap';

function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Main />
              <Footer />

            </>
          }></Route>
          <Route path="peliculas" element={
            <>
              <Header2 imgVolver="../imgs/Cineplex_logo.svg.png" />
              {peliculas.map((peli, i) =>
                <Pelicula
                  key={i}
                  titulo={peli.titulo}
                  fecha={peli.fecha}
                  IcoFace={peli.IcoFace}
                  IcoTw={peli.IcoTw}
                  IcoIg={peli.IcoIg}
                  ImgPort={peli.ImgPort}
                  sinopsis={peli.sinopsis}
                  texto1A={peli.texto1A}
                  texto1B={peli.texto1B}
                  texto1C={peli.texto1C}
                  texto1D={peli.texto1D}
                  primerboton={peli.primerboton}
                  segundoboton={peli.segundoboton}
                  Cri1={peli.Cri1}
                  Cri2={peli.Cri2}
                  Cri3={peli.Cri3}
                ></Pelicula>)}
              <Footer2 />

            </>
          }></Route>


        </Routes>
      </BrowserRouter>



    </>


    /*<Container>
    <Row>
      <Col md={3}><Header nombre = "Lucas"/></Col>
      <Col md={3}><Main /></Col>
      <Col md={3}> <Footer/></Col>
      <Col md={3}>  </Col>
    
      </Row>
    
    
    </Container>*/
  );
}

export default App;
