import axios from 'axios'; 

export default async function FinalizarDia() {

    try {
      const response = await axios({
        url: 'https://localhost:44323/api/Workday/finish',
        method: 'post',
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        data: {
          header: {
            consulter: 'fruiz',
            date: '2021-12-17 09:00:00',
            messageid: '202111700900009992',
          },
          data: {
              user: 'Fruiz',
              hour: '2021-12-15 12:30:00.000',
          }, 
          info: {
            message: '',
            code: ''
          }
        }
      }) 
      console.log(response);
      
      return response;
    }
    catch (e) {
      console.log(e)
    } 
    
}