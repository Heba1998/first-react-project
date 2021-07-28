import React from 'react';
import Form from 'react-bootstrap/Form';
import Horned from './data.json';




class FormF extends  React.Component{

    dataFilter = (event) =>{
           let NumOfHonrns = parseInt(event.target.value);
           let data = Horned;
            if(NumOfHonrns){
                data =Horned.filter((item) =>NumOfHonrns===item.horns);

            }
            this.props.filteredData(data);

        }




    render(){


        return(
            <>

                <Form >


                    <Form.Group aria-label="Default select example">
                        <Form.Label>Choose number of horns you want:</Form.Label>
                        <Form.Control as='select' onChange={this.dataFilter}>
                        <option>All</option>
                        <option value="1">one</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="100">One Hundred</option>
                        </Form.Control>
                    </Form.Group>

                </Form>



            </>

        )
    }
}


export default FormF ;