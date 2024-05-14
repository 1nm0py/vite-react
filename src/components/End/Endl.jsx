import { Col, Container, Row } from "react-bootstrap";
import masha from "../../assets/End_imgs/masha.svg"
import danil from "../../assets/End_imgs/danil.svg"
import misha from "../../assets/End_imgs/misha.svg"
import denis from "../../assets/End_imgs/denis.svg"
import "./End.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function endl() {
  return (
    <div>
      <div className="all">
        <Container>
          <h1 className="home_h1">-----Steam__Community-----</h1>
          <div className="librariy">
            <Row className="justify-content-space-between">
              <Col lg="12">
                <h1 className="end_h1">Активность сообщества</h1>
                <p className="end_P">Фанатский и официальный контент для всех игр и программ в Steam. </p>
              </Col>
            </Row>
            <Row className="justify-content-space-between">
              <Col lg="7">
                <div className="my_friends">
                  <h2 className="Your_fri">Твои друзья:</h2>
                  <div className="friend">
                    <img className="Profil" src={masha} alt="" />
                    <div className="nick">
                      <h6 className="Profil_nick">I_Kill_You</h6>
                      <p className="discription">Who does not know me !!! I Kill You</p>
                      <FontAwesomeIcon icon="fa-solid fa-user-plus" size="xl" style={{ color: "#ffffff", }} />
                    </div>
                  </div>
                  <div className="friend">
                    <img className="Profil" src={danil} alt="" />
                    <div className="nick">
                      <h6 className="Profil_nick">I_Kill_You</h6>
                      <p className="discription">Who does not know me !!! I Kill You</p>
                      <FontAwesomeIcon icon="fa-solid fa-user-plus" size="xl" style={{ color: "#ffffff", }} />
                    </div>
                  </div>
                  <div className="friend">
                    <img className="Profil" src={misha} alt="" />
                    <div className="nick">
                      <h6 className="Profil_nick">I_Kill_You</h6>
                      <p className="discription">Who does not know me !!! I Kill You</p>
                      <FontAwesomeIcon icon="fa-solid fa-user-plus" size="xl" style={{ color: "#ffffff", }} />
                    </div>
                  </div>
                  <div className="friend">
                    <img className="Profil" src={denis} alt="" />
                    <div className="nick">
                      <h6 className="Profil_nick">I_Kill_You</h6>
                      <p className="discription">Who does not know me !!! I Kill You</p>
                      <FontAwesomeIcon icon="fa-solid fa-user-plus" size="xl" style={{ color: "#ffffff", }} />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  )
}
