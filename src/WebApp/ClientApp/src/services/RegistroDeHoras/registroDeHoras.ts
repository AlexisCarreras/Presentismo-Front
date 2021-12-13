import axios from 'axios'; 

export default async function RegistroDeHoras() {
   
    try {
        const response = await axios({
          url: 'https://presentismocda.herokuapp.com/registroHoras',
          method: 'post', 
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
          data: { 
              header: {
                consulter: 'fruiz',
                date: '2021-12-10 09:00:00',
                messageid: '202111700900009992',
              },
              data: {
                user: 'fruiz',
                day: '2021-12-10'
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