using Presentismo.Application.Common.Wrappers;
using Presentismo.Application.Features.Version1.Workday.Commands;
using Presentismo.Application.Features.Version1.Workday.Commands.RegisterOfHours;
using System.Threading.Tasks;
using static Presentismo.Application.Features.Version1.Workday.Commands.FinishWorkday.FinishWorkdayContract;
using static Presentismo.Application.Features.Version1.Workday.Commands.PauseWorkday.PauseWorkdayContract;
using static Presentismo.Application.Features.Version1.Workday.Commands.RegisterOfHours.RegisterOfHoursContract;
using static Presentismo.Application.Features.Version1.Workday.Commands.RestarWorkday.RestartWorkdayContract;
using static Presentismo.Application.Features.Version1.Workday.Commands.StartWorkday.StartWorkdayContract;

namespace Presentismo.Application.Services
{
    public interface IPresentismoService
    {
        Task<ApiResponse<Response>> InitWorkDay(StartCommand c);
        Task<ApiResponse<Response>> FinishWorkDay(FinishCommand request);
        Task<ApiResponse<Response[]>> PauseWorkDay(PauseCommand request);
        Task<ApiResponse<Response[]>> RestartWorkDay(RestartCommand request);
        Task<ApiResponse<Response[]>> RegisterOfHours(RegisterOfHoursCommand request);
    }
}