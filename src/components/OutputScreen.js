import React from 'react'
import { Container, Row, Col, FormControl } from 'react-bootstrap'

const OutputScreen = ({
  convertResult,
  convertCurrencies,
  handleClickSelectConvert
}) => {
  
  return(
    <Container>
      <Row style={{paddingTop: '10px'}}>
        <Col>
          <FormControl as={'select'} onChange={(e) => handleClickSelectConvert(e)}>
            {convertCurrencies.map((convertCurrency) => (
              <option
                value={convertCurrency}
              >
                {convertCurrency}
              </option> 
            ))} 
          </FormControl>
        </Col>
        <Col xs={7} md={7} style={{fontSize:'20px', color:'white', fontFamily: 'Roboto Thin'}}>
          {convertResult? convertResult.toFixed(2) : ''}
        </Col>
      </Row>
    </Container>
  )
}

export default OutputScreen