import axios from 'axios'; 

export default async function Rechazado() {

  try {
    const response = await axios({
        //url: 'https://localhost:44323/api/Workday/Workplaces',
        url: 'http://localhost:8081/registroHorasRechazados',
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
