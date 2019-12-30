import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'

const Keypad = ({
  handleClickDel,
  handleonClick
}) => {

  return(
    <Row className='buttons'>
      <Col>
        <Button value={'1'} onClick={(e) => handleonClick(e)}>1</Button>
        <Button value={'2'} onClick={(e) => handleonClick(e)}>2</Button>
        <Button value={'3'} onClick={(e) => handleonClick(e)}>3</Button>
      </Col>
      <Col>
        <Button value={'4'} onClick={(e) => handleonClick(e)}>4</Button>
        <Button value={'5'} onClick={(e) => handleonClick(e)}>5</Button>
        <Button value={'6'} onClick={(e) => handleonClick(e)}>6</Button>
      </Col>
      <Col>
        <Button value={'7'} onClick={(e) => handleonClick(e)}>7</Button>
        <Button value={'8'} onClick={(e) => handleonClick(e)}>8</Button>
        <Button value={'9'} onClick={(e) => handleonClick(e)}>9</Button>
      </Col>  
      <Col>
        <Button value={'0'} onClick={(e) => handleonClick(e)}>0</Button>
        <Button value={'.'} onClick={(e) => handleonClick(e)}>.</Button>
        <Button onClick={handleClickDel}>Del</Button>
      </Col>
    </Row>

  )
}

export default Keypad