import React from 'react'
import { Row, Col, FormControl, Container } from 'react-bootstrap'

const InputScreen = ({ 
  convertValue,
  basedCurrencies,
  handleClickSelectBased
 }) => {

  return(
    <Container>
      <Row style={{paddingTop: '10px'}}>
        <Col>
          <FormControl as={'select'} onChange={(e) => handleClickSelectBased(e)}>
            {basedCurrencies.map((basedCurrency) => (
              <option value={basedCurrency}>
              {basedCurrency}
              </option> 
            ))} 
          </FormControl>
        </Col>
        <Col xs={7} md={7} style={{fontSize:'20px', color:'white', fontFamily:'Roboto Thin'}}>
          {convertValue? convertValue : '' }
        </Col>
      </Row>
    </Container>
  )
}

export default InputScreen