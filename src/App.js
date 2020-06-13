import React, { Component } from 'react'
import { Cards, CountryPicker, Chart } from './components'
import styles from './App.module.css'
import { fetchData } from './components/api/index'
import coronaImg from './images/a.jpg'
import Footer from './Footer'
class App extends Component {
  
  state = {
    data:{},
    country : ''
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({
      data:fetchedData
    })
  }
  handleCountryChange = async (country) =>{
    const fetchedData = await fetchData(country);
    this.setState({data:fetchedData, country:country})
  }

  render() {
    const{data , country} = this.state;
    
    return (
      <div className={styles.container}>
       
        <img className ={styles.image} src ={coronaImg} alt = 'COVID-19' />
        <Cards  data = {data}/>
        <CountryPicker handleCountryChange ={this.handleCountryChange} />
        <Chart data = {data} country = {country}/>
        <Footer />
      </div>
      
    )
  }
}

export default App
