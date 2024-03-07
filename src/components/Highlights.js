import React from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import '../stylesheet/highlights.css'
import { convertTime } from '../util/DateTimeFormat'

function Highlights({
  currentReport
}) {
  return (
    <Container fluid>
      <Row className="row_1">
        <Col xs={4} md={4} lg={4} className="card_col">
          <Card className="card_humididty">
            <Card.Body className="card_body">
              <Card.Title className="card_title">Humidity</Card.Title>
              <Card.Img className="humidity" src="/weather_icons/humidity.png" />
              <Card.Text className="card_text">{currentReport?.main?.humidity}%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={4} md={4} lg={4} className="card_col">
          <Card className="card_wind">
            <Card.Body className="card_body">
              <Card.Title className="card_title">Wind speed</Card.Title>
              <Card.Img className="wind" src="/weather_icons/wind-day.png" />
              <Card.Text className="card_text">{currentReport?.wind?.speed}m/s</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={4} md={4} lg={4} className="card_col">
          <Card className="card_cloud">
            <Card.Body className="card_body">
              <Card.Title className="card_title">Coluds</Card.Title>
              <Card.Img className="clouds" src="/weather_icons/clouds.png" />
              <Card.Text className="card_text">{currentReport?.clouds?.all}%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="row_2">
      <Col xs={4} md={4} lg={4} className="card_col">
          <Card className="card_pressure">
            <Card.Body className="card_body">
              <Card.Title className="card_title">Pressure</Card.Title>
              <Card.Img className="pressure" src="/weather_icons/pressure.png" />
              <Card.Text className="card_text">{currentReport?.main?.pressure}hPa</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={4} md={4} lg={4} className="card_col">
          <Card className="card_sunrise">
          <Card.Body className="card_body">
              <Card.Title className="card_title">Sunrise</Card.Title>
              <Card.Img className="sunrise" src="/weather_icons/sunrise.png" />
              <Card.Text className="card_text">{convertTime(currentReport?.sys?.sunrise)}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={4} md={4} lg={4} className="card_col">
          <Card className="card_sunset">
            <Card.Body className="card_body">
              <Card.Title className="card_title">Sunset</Card.Title>
              <Card.Img className="sunset" src="/weather_icons/sunset.png" />
              <Card.Text className="card_text">{convertTime(currentReport?.sys?.sunset)}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Highlights