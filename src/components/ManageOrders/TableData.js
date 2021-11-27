import axios from 'axios';
import React from 'react';
import { Button } from 'react-bootstrap';

const TableData = ({ order }) => {
    const { status } = order;
    
    const updateStatus = (status) => {
        
        if (status === 'Pending')
        {
            order.status = 'Pending'
            console.log(order)
            }
        
       else if (status === 'Active')
        {
            order.status = 'Active';
                  console.log(order)
        }
        
        axios.put(`https://frightful-flesh-29607.herokuapp.com/order/${order._id}`, order)
    .then(res => {
    //  console.log(res)
    })
    .catch(err => console.log(err));

    }
    return (
        <>
            <tr>
         
                <td>{order.name}</td>
                <td>{status}</td>
                

                   <td>
                
                 {  order.status!=="Pending"?<Button variant="danger" onClick={()=>{updateStatus("Pending")}}>Pending</Button>:<Button variant="success" onClick={()=>{updateStatus("Active")}}>Active</Button>}
                </td>
            
                </tr>
            
            
          
         </>
    );
};

export default TableData;