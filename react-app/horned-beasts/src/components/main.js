import React from "react";
import HornedBeasts from "./HornedBeasts"


class Main extends React.Component{

    render(){
        return( 
        <div>
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