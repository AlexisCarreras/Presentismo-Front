import axios from 'axios'; 

const fecha = () => {

  const hoy = new Date();

  const fecha = hoy.getFullYear() + '-' +  (hoy.getMonth() + 1) + '-' + hoy.getDate();

  return fecha;

};

export default async function HorasTrabajadas() {

    try {
      const response = await axios({
        url: 'https://localhost:44323/api/Workday/WorkingHours',
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
              user:  'Acarreras',
              begin: fecha() + " " + "00:00:00.000" ,
              end:   fecha() + " " + "23:59:00.000"
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