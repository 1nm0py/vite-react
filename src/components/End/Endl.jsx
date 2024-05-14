import { Col, Container, Row } from "react-bootstrap";


export default function endl() {
  return (
    <div>
      <div className="all">
        <Container>
          <h1 className="home_h1">-----Steam__Community-----</h1>
          <div className="librariy">
            <Row className="justify-content-space-between">
              <Col lg="12">
                <h1 className="home_h1">Активность сообщества</h1>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  )
}
