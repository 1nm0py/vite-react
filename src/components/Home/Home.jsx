import { Carousel, Col, Container, Row } from "react-bootstrap";
import "./Home.css"
import { useState } from "react";
import CS_02 from "../../assets/Home_imgs/cs2.jpg"
import Dota_02 from "../../assets/Home_imgs/dota-2.jpg"
import elder_ring from "../../assets/Home_imgs/elder-ring.jpg"
import letf_04 from "../../assets/Home_imgs/left-4.jpg"
import HomeWorld from "../../assets/Home_imgs/homeworld-2.jpg"
import Cs_002 from "../../assets/Home_imgs/Cs_002.jpg"
import mafiya from "../../assets/Home_imgs/Mafiya-2.jpg"
import batle from "../../assets/Home_imgs/batle.jpg"






export default function Home() {
  // function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  }
  // }
  return (
    <div className="all">
      <Container>
        <h1 className="home_h1">-----Steam___Shop-----</h1>
        <div className="all_nav">
          <Row className="justify-content-between">
            <Col lg="7">
              <ul className="ul_home">
                <li className="li_home">Магазин</li>
                <li className="li_home">Новые</li>
                <li className="li_home">Популярные</li>
                <li className="li_home">Новости</li>
                <li className="li_home">Бесплатные</li>
              </ul>
            </Col>
            <Col lg="3">
              <div className="srch_div">
                <input className="search" type="text" placeholder="Search" />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <Container>
        <Row>
          <Col lg="12">
            <h1 className="recoment">Рекомендуем:</h1>
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <img className="BG_IMG_gamrs" src={CS_02} alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="BG_IMG_gamrs" src={Dota_02} alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="BG_IMG_gamrs" src={elder_ring} alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="BG_IMG_gamrs" src={letf_04} alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="BG_IMG_gamrs" src={HomeWorld} alt="" />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="justify-content-space-between">
          <Col lg="4">
            <img className="logo_games" src={Cs_002} alt="" />
            <h4 className="logo_h4">Counter-Strike-2</h4>
            <p className="logo_P"> Kомпьютерная игра в жанре многопользовательского тактического шутера от первого лица, разработанная компанией Valve.</p>
            <button className="logo_Btn">Играть</button>
          </Col>
          <Col lg="4">
            <img className="logo_games" src={mafiya} alt="" />
            <h4 className="logo_h4">Mafiya-2</h4>
            <p className="logo_P"> Kомпьютерная игра в жанре многопользовательского тактического шутера от первого лица, разработанная компанией Valve.</p>
            <button className="logo_Btn">Играть</button>
          </Col>
          <Col lg="4">
            <img className="logo_games" src={batle} alt="" />
            <h4 className="logo_h4">Battlefield-2042</h4>
            <p className="logo_P"> Kомпьютерная игра в жанре многопользовательского тактического шутера от первого лица, разработанная компанией Valve.</p>
            <button className="logo_Btn">Cкачать</button>
          </Col>
        </Row>
        <Row className="justify-content-space-between">
          <Col lg="4">
            <img className="logo_games" src={Cs_002} alt="" />
            <h4 className="logo_h4">Counter-Strike-2</h4>
            <p className="logo_P"> Kомпьютерная игра в жанре многопользовательского тактического шутера от первого лица, разработанная компанией Valve.</p>
            <button className="logo_Btn">Cкачать</button>
          </Col>
          <Col lg="4">
            <img className="logo_games" src={mafiya} alt="" />
            <h4 className="logo_h4">Mafiya-2</h4>
            <p className="logo_P"> Kомпьютерная игра в жанре многопользовательского тактического шутера от первого лица, разработанная компанией Valve.</p>
            <button className="logo_Btn">Cкачать</button>
          </Col>
          <Col lg="4">
            <img className="logo_games" src={batle} alt="" />
            <h4 className="logo_h4">Battlefield-2042</h4>
            <p className="logo_P"> Kомпьютерная игра в жанре многопользовательского тактического шутера от первого лица, разработанная компанией Valve.</p>
            <button className="logo_Btn">Cкачать</button>
          </Col>
        </Row>
        <Row className="justify-content-space-between">
          <Col lg="4">
            <img className="logo_games" src={Cs_002} alt="" />
            <h4 className="logo_h4">Counter-Strike-2</h4>
            <p className="logo_P"> Kомпьютерная игра в жанре многопользовательского тактического шутера от первого лица, разработанная компанией Valve.</p>
            <button className="logo_Btn">Cкачать</button>
          </Col>
          <Col lg="4">
            <img className="logo_games" src={mafiya} alt="" />
            <h4 className="logo_h4">Mafiya-2</h4>
            <p className="logo_P"> Kомпьютерная игра в жанре многопользовательского тактического шутера от первого лица, разработанная компанией Valve.</p>
            <button className="logo_Btn">Cкачать</button>
          </Col>
          <Col lg="4">
            <img className="logo_games" src={batle} alt="" />
            <h4 className="logo_h4">Battlefield-2042</h4>
            <p className="logo_P"> Kомпьютерная игра в жанре многопользовательского тактического шутера от первого лица, разработанная компанией Valve.</p>
            <button className="logo_Btn">Cкачать</button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}