import { Col, Container, Row } from "react-bootstrap"
import notFound from "../../assets/404_img/fatal.jpg"
import "./Ftl_404.css"

export default function Ftl_404() {
  return (
    <div>
      <Container>
        <Row className="justify-content-center">
          <Col lg="11">
            <img className="page_404" src={notFound} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
