import React from "react";
import HornedBeasts from "./HornedBeasts"
import Form from "./Form.js";


class Main extends React.Component{

    render(){
        return( 
        <div>

                <Form filteredData={this.props.filteredData}/>

             { this.props.hornedData.map((item)=>{
                    return (
                        <HornedBeasts title={item.title} description={item.description} image_url={item.image_url}
                        horns={item.horns}
                        showCard={this.props.showCard} 
                       ></HornedBeasts>
                       
                       )


                })}

        </div>
        )
    };
}

export default Main;