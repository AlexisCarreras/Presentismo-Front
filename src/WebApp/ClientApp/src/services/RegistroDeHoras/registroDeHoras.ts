import axios from 'axios'; 

export default async function RegistroDeHoras() {
   
    try {
        const response = await axios({
          url: 'https://localhost:44323/api/Workday/Registerofhours',
          method: 'post', 
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
          data: { 
              header: {
                consulter: 'Fruiz',
                date: '2021-12-10 09:00:00',
                messageid: '202111700900009992',
              },
              data: {
                user: 'Fruiz',
                day: '2021-12-15'
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