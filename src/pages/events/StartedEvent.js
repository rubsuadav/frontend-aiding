import React from "react";
import { started } from "./services/backend";
import { useEffect } from 'react';
import { Row, Col, Card } from 'antd';
import moment from 'moment';
import { useNavigate } from "react-router-dom";

function StartedEvent() {
  let navigate = useNavigate();

    /*DATOS*/
  const [event_data, setEventData] = React.useState([
    {
    title: '...',
    description: '...',
    start_date: '...',
    end_date: '...',
    places: '...',
    }
  ]);
  

  /*CARGA DE DATOS*/
  useEffect(() => {
    started.get().then((response) => {setEventData(response.data);});}, []);

  /*FORMATEO DE FECHAS*/
  function formatDate(date) {
    return moment(date).format('DD/MM/YYYY');
  }

  return (
    <div className='container my-5'>
      
      <h1 id="eventosTitulo">Eventos empezados</h1>
      <Row gutter={[24, 24]} justify="center" >
        {event_data.map((data, index) => (
          <Col span={8} key={index}>
            <Card className="shadow" title={data.title} bordered={false} onClick={() => navigate(`/events/${data.id}`)}>
              {data.description}
              <br/>
              {formatDate(data.start_date)} - {formatDate(data.end_date)}
              <br/>
              Sitios: {data.places}
              </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default StartedEvent;