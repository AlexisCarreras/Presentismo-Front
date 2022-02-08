import axios from 'axios'; 

export default async function LugarTrabajo() {

  try {
    const response = await axios({
      //url: 'https://localhost:44323/api/Workday/Workplaces',
      //url: 'https://localhost:5001/api/Workday/CurrentState',
      //url: 'https://presentismocda.herokuapp.com/',
      //url: 'http://192.168.0.83:8080/Workplace'
        url: 'http://localhost:8080/Workplace',
      method: 'post',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      data: {
        header: {
          consulter: 'fruiz',
          date: '2021-12-10 09:00:00',
          messageId: '202111700900009992',
        },
        data: {
            
        },
        info: {
          message: '',
          code: ''
        }
      }
    }) 
    // console.log(response);
    
    return response;
  }
  catch (e) {
    console.log(e)
  }
  
}