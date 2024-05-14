import { Col, Container, Row } from "react-bootstrap"
import "./Type.css"
import { Link } from "react-router-dom"

export default function Type() {
    return (
        <div>
            <Container>
                <Row className="justify-content-center">
                    <Col lg="8">
                        <ul className="ul_li">
                            <Link to="/">
                                <li className="li_ul">Магазин</li>
                            </Link>
                            <Link to="/center">
                                <li className="li_ul">Библиотека</li>
                            </Link>
                            <Link to="/endl">
                                <li className="li_ul">Сообщество</li>
                            </Link>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
