import axios from 'axios'; 

export default async function PausarDia() {

  try {
    const response = await axios({
      url: 'https://localhost:44323/api/Workday/pause',
      method: 'post',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      data: {
        header: {
          consulter: 'lmessi',
          hour: '2021-12-02 09:00:00',
          messageId: '202111700900009992',
        },
        data: {
            user: 'Fruiz', 
            hour: '2021-12-14 11:30:00.000',
            idLugarTrabajo: null,
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
