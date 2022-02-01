import axios from 'axios'; 

const fecha = () => {

  const hoy = new Date();

  const fecha = hoy.getFullYear() + '-' +  (hoy.getMonth() + 1) + '-' + hoy.getDate();

  const hora  = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds() + '.' + hoy.getMilliseconds();

  console.log( "Finalizar: " + fecha + ' ' + hora );

  return fecha + ' ' + hora;

};

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
              user: 'fruiz',
              hour: fecha(),
              // hour: "2022-01-14 10:00:00" 
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