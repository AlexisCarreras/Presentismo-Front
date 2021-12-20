import axios from 'axios'; 

const fecha = () => {

  const hoy = new Date();

  const fecha = hoy.getFullYear() + '-' +  (hoy.getMonth() + 1) + '-' + hoy.getDate();
  // console.log( "RegistroHoras: " + fecha );

  return fecha;

};

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
                date: '2021-12-17 14:00:00',
                messageid: '202111700900009992',
              },
              data: {
                user: 'Jpedernera',
                day: fecha(),
                // day: '2021-12-17',
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