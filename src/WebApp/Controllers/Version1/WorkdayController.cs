using Microsoft.AspNetCore.Mvc;
using Presentismo.Application.Features.Version1.Workday.Commands.CurrentState;
using Presentismo.Application.Features.Version1.Workday.Commands.FinishWorkday;
using Presentismo.Application.Features.Version1.Workday.Commands.HourType;
using Presentismo.Application.Features.Version1.Workday.Commands.PauseWorkday;
using Presentismo.Application.Features.Version1.Workday.Commands.RegisterOfHours;
using Presentismo.Application.Features.Version1.Workday.Commands.RestarWorkday;
using Presentismo.Application.Features.Version1.Workday.Commands.StartWorkday;
using Presentismo.Application.Features.Version1.Workday.Commands.WorkingHours;
using Presentismo.Application.Features.Version1.Workday.Commands.Workplaces;
using System.Threading.Tasks;

namespace WebApp.Controllers.Version1
{
    public class WorkdayController : ApiControllerBase
    {
        [HttpPost("initial")]
        public async Task<IActionResult> InitialWorkday([FromBody] StartWorkdayContract.StartCommand command)
        {
            var res = await Mediator.Send(command);
            return Ok(res);
        }
        [HttpPost("finish")]
        public async Task<IActionResult> FinishWorkday([FromBody] FinishWorkdayContract.FinishCommand command)
        {
            var res = await Mediator.Send(command);
            return Ok(res);
        }
        [HttpPost("pause")]
        public async Task<IActionResult> PauseWorkday([FromBody] PauseWorkdayContract.PauseCommand command)
        {
            var res = await Mediator.Send(command);
            return Ok(res);
        }
        [HttpPost("restart")]
        public async Task<IActionResult> RestartWorkday([FromBody] RestartWorkdayContract.RestartCommand command)
        {
            var res = await Mediator.Send(command);
            return Ok(res);
        }

        [HttpPost("Registerofhours")]
        public async Task<IActionResult> RegisterOfHoursWorkday([FromBody] RegisterOfHoursContract.RegisterOfHoursCommand command)
        {
            var res = await Mediator.Send(command);
            return Ok(res);
        }

        [HttpPost("HourType")]
        public async Task<IActionResult> HourType([FromBody] HourTypeContract.HourTypeCommand command)
        {
            var res = await Mediator.Send(command);
            return Ok(res);
        }

        [HttpPost("Workplaces")]
        public async Task<IActionResult> Workplaces([FromBody] WorkplacesContract.WorkplacesCommand command)
        {
            var res = await Mediator.Send(command);
            return Ok(res);
        }

        [HttpPost("CurrentState")]
        public async Task<IActionResult> CurrentState([FromBody] CurrentStateContract.CurrentStateCommand command)
        {
            var res = await Mediator.Send(command);
            return Ok(res);
        }

        [HttpPost("WorkingHours")]
        public async Task<IActionResult> WorkingHours([FromBody] WorkingHoursContract.WorkingHoursCommand command)
        {
            var res = await Mediator.Send(command);
            return Ok(res);
        }
    }
}
