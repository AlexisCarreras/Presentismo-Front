import axios from 'axios'; 

const fecha = () => {

  const hoy = new Date();

  const fecha = hoy.getFullYear() + '-' +  ('0' + (hoy.getMonth() + 1)).slice(-2) + '-' + hoy.getDate();

  return fecha;

};

export default async function HorasTrabajadas() {

    try {
      const response = await axios({
          //url: 'https://localhost:44323/api/Workday/WorkingHours',
          url: 'http://192.168.0.83:8080/WorkingHours',
        method: 'post',
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        data: {
          header: {
            consulter: 'fruiz',
            date: '2022-01-13 09:00:00',
            messageId: '202111700900009992',
          },
          data: {
              user:  'fruiz',
              begin: fecha() + " " + "00:00:00" ,
              end:   fecha() + " " + "23:59:00"
              // begin: "2022-01-14 00:00:00.000",
              // end: "2022-01-14 23:59:00.000"
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