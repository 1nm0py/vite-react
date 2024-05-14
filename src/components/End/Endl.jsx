import { Col, Container, Row } from "react-bootstrap";
import "./End.css"


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
          </div>
        </Container>
      </div>
    </div>
  )
}
