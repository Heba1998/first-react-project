
import React from "react";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectedBeast from "./components/SelectedBeast";
import Horned from './components/data.json';
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
    data: Horned ,

    showingData: {}
    }
  }


  showCard = (values) => {

    this.setState({
    selected:true,
    showingData:values,
  });
  }

  hideCard = () => {
    this.setState({
    selected: false});
}




  render() {
    return (
    <div>
    <Header/>
    <Main showCard={this.showCard} hornedData={this.state.data}/>
    <SelectedBeast selected={this.state.selected} showingData={this.state.showingData} hideCard={this.hideCard} />
    <Footer />
  </div>
    
  )
}


}

export default App;