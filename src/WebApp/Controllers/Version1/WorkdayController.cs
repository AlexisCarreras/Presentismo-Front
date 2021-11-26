using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Nancy.Json;
using Presentismo.Application.Features.Version1.Workday.Commands.InitWorkday;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace WebApp.Controllers.Version1
{
    public class WorkdayController : ApiControllerBase
    {
        [HttpPost("initial")]
        public async Task<IActionResult> InitialWorkday([FromBody] InitWorkdayContract.Command command)
        {

            //var httpWebRequest = (HttpWebRequest)WebRequest.Create("http://presentismocda.herokuapp.com/inicio");
            //httpWebRequest.ContentType = "application/json";
            //httpWebRequest.Method = "POST";

            //using (var streamWriter = new StreamWriter(httpWebRequest.GetRequestStream()))
            //{
            //    string json = new JavaScriptSerializer().Serialize(new
            //    {
            //        usuario = "fruiz",
            //        fecha = "2021-11-17 09:00:00",
            //        messageid = "202111700900009992",
            //        data = new
            //        {
            //            usuario = "fruiz",
            //            hora = "2021-11-17 09:00:00.000",
            //            idLugarTrabajo = 4,
            //            idTipoHora = 2
            //        },
            //        message = "",
            //        code = ""
            //    });
            //    streamWriter.Write(json);
            //    streamWriter.Flush();
            //    streamWriter.Close();
            //}

            //var httpResponse = (HttpWebResponse)httpWebRequest.GetResponse();
            //using (var streamReader = new StreamReader(httpResponse.GetResponseStream()))
            //{
            //    var result = streamReader.ReadToEnd();
            //    return Ok(result);
            //}

            var res = await Mediator.Send(command);
            return Ok(res);
        }
    }
}
