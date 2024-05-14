import { Col, Container, Row } from "react-bootstrap";
import "./Center.css"
import Cs_002 from "../../assets/Home_imgs/Cs_002.jpg"
import mafiya from "../../assets/Home_imgs/Mafiya-2.jpg"
import batle from "../../assets/Home_imgs/batle.jpg"

export default function Center() {
  return (
    <div>
      <div className="all">
        <Container>
          <h1 className="home_h1">-----Steam__Library-----</h1>
          <div className="librariy">
            <Row className="justify-content-space-between">
              <Col lg="5">
                <img className="logo_games" src={Cs_002} alt="" />
                <h4 className="logo_h4">Counter-Strike-2</h4>
                <p className="logo_P"> Kомпьютерная игра в жанре многопользовательского тактического шутера от первого лица, разработанная компанией Valve.</p>
                <h5 className="Yuklangan">Cкачано</h5>
                <button className="logo_Btn">Играть</button>
              </Col>
              <Col lg="5">
                <img className="logo_games" src={mafiya} alt="" />
                <h4 className="logo_h4">Mafiya-2</h4>
                <p className="logo_P"> Kомпьютерная игра в жанре многопользовательского тактического шутера от первого лица, разработанная компанией Valve.</p>
                <h5 className="Yuklangan">Cкачано</h5>
                <button className="logo_Btn">Играть</button>
              </Col>
            </Row>
            <Row className="justify-content-space-between">
              <h1 className="recoment">Рекомендуем:</h1>
              <Col lg="3">
                <img className="choose" src={Cs_002} alt="" />
              </Col>
              <Col lg="3">
                <img className="choose" src={mafiya} alt="" />
              </Col>
              <Col lg="3">
                <img className="choose" src={batle} alt="" />
              </Col>
              <Col lg="3">
                <img className="choose" src={Cs_002} alt="" />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  )
}
