import axios from "axios";

export default async function Login(username: string, password: string) {
  try {
    const response = await axios({
      url: "http://localhost:8080/authentication/login",
     // url: "http:// 192.168.2.127:8080/authentication/login",
     
      method: 'post',
      headers: { 'Access-Control-Allow-Origin': '*'},
      data: {
        email: username,
        password: password,
        grant_type: "password",
      }
    })
    console.log(response);
    
    return response;
  }
  catch (e) {
    console.log(e)
  }
}