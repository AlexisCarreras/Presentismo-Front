using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Presentismo.Application.Features.Version1.Workday.Commands.InitWorkday;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApp.Controllers.Version1
{
    public class WorkdayController : ApiControllerBase
    {
        [HttpPost("initial")]
        public async Task<IActionResult> InitialWorkday([FromBody] InitWorkdayContract.Command command)
        {
            var com = command;
            var res = await Mediator.Send(command);
            return Ok(res);
        }
    }
}
