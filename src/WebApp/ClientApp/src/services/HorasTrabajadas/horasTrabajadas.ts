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
        //url: 'https://localhost:5001/api/Workday/CurrentState',
         //url: 'https://presentismocda.herokuapp.com/',
        method: 'post',
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        data: {
          header: {
            consulter: 'acarreras',
            date: '2022-01-13 09:00:00',
            messageid: '202111700900009992',
          },
          data: {
              user:  'acarreras',
              begin: fecha() + " " + "00:00:00.000" ,
              end:   fecha() + " " + "23:59:00.000"
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