
import React from "react";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import 'bootstrap/dist/css/bootstrap.min.css';

import Horned from './components/data.json';
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
    data: Horned ,
    }
  }




  render() {
    return (
    <div>
    <Header/>
    <Main hornedData={this.state.data}/>
    <Footer />
  </div>
    
  )
}


}

export default App