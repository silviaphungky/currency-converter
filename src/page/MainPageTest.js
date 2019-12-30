import React, { Component } from 'react'
import { Button, Row, Col } from 'react-bootstrap'
import Keypad from '../components/Keypad'
import { getResultCurrencyConverter, getCurrencyDetails } from '../service/api/v1/currency_converter'
import InputScreen from '../components/InputScreen';
import OutputScreen from '../components/OutputScreen';

class MainPageTest extends Component {

  constructor(props){
    super(props)
    this.state = {
      basedCurrencies: [],
      convertCurrencies: [],
      convert: '',
      convertValue: '',
      convertResult: '',
      defaultBased: 'USD',
      defaultConvert: 'IDR'
    }
    
  }

  componentDidMount() {
    let currency = []
    getCurrencyDetails()
      .then((response) => {
        Object.entries(response.data.results).map((country) =>{
          const currencyDetails = country[1].currencyId + ' ' + country[1].currencySymbol + '         (' + country[1].name +')'
          currency.push(currencyDetails) 
        })
        this.setState({
          basedCurrencies: currency,
          convertCurrencies: currency
        })
      })
  }

  handleonClick = (e) => {
    if(this.state.convertValue.length<9){
      this.setState({
        convertValue: this.state.convertValue + e.target.value
      })
    }
    else{
      this.setState(prevState => ({
        convertValue: prevState.convertValue
      }))
    }
  }

  handleClickConvert = () => {
    console.log(this.state.defaultBased+'_'+this.state.defaultConvert)
    var basedToConvert = this.state.defaultBased+'_'+this.state.defaultConvert
    getResultCurrencyConverter(basedToConvert)
      .then((response) =>
        this.setState({
          convertResult: this.state.convertValue * response.data[basedToConvert]
        })
      )
  }

  handleClickSelectBased = (e) => {
    this.setState({
      defaultBased: e.target.value.split(' ')[0]
    })
  }

  handleClickSelectConvert = (e) => {
    this.setState({
      defaultConvert: e.target.value.split(' ')[0]
    })
  }

  handleClickDel = () => {
    this.setState({
      convertValue: this.state.convertValue.slice(0, -1)
    })
  }

  render(){
    return(
      <div style={{height: '100vh', border: 'solid blue 1px'}}>
          <div className='header'>
            Currency Converter
          </div>
        <Col className='Main-Page'>
          <Row>
            <InputScreen
              convertValue={this.state.convertValue}
              basedCurrencies={this.state.basedCurrencies}
              handleClickSelectBased={this.handleClickSelectBased}
            />
          </Row>
          <Row>
            <OutputScreen
              convertResult={this.state.convertResult}
              convertCurrencies={this.state.convertCurrencies}
              handleClickSelectConvert={this.handleClickSelectConvert}
            />
          </Row>
          <Row style={{paddingTop: '10px'}}>
            <Button className='convert-button' onClick={this.handleClickConvert}>Convert</Button>
          </Row>
          <Row>
            <Keypad
              handleClickDel={this.handleClickDel}
              handleonClick={this.handleonClick}
            />
          </Row>
        </Col>
      </div>
    )
  }
}
export default MainPageTest