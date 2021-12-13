import axios from 'axios'; 

export default async function FinalizarDia() {

    try {
      const response = await axios({
        url: 'https://presentismocda.herokuapp.com/finalizarDia',
        method: 'post',
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        data: {
          header: {
            consulter: 'fruiz',
            date: '2021-12-03 09:00:00',
            messageid: '202111700900009992',
          },
          data: {
              user: 'fruiz',
              hour: '2021-12-02 14:50:00.000',
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