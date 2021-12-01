using Presentismo.Application.Common.Wrappers;
using Presentismo.Application.Features.Version1.Workday.Commands.FinishWorkday;
using Presentismo.Application.Features.Version1.Workday.Commands.PauseWorkday;
using System.Threading.Tasks;
using static Presentismo.Application.Features.Version1.Workday.Commands.FinishWorkday.FinishWorkdayContract;
using static Presentismo.Application.Features.Version1.Workday.Commands.InitWorkday.InitWorkdayContract;
using static Presentismo.Application.Features.Version1.Workday.Commands.PauseWorkday.PauseWorkdayContract;
using static Presentismo.Application.Features.Version1.Workday.Commands.RestarWorkday.RestartWorkdayContract;

namespace Presentismo.Application.Services
{
    public interface IPresentismoService
    {
        Task<ApiResponse<InitResponse>> InitWorkDay(InitCommand c);
        Task<ApiResponse<FinishResponse>> FinishWorkDay(FinishCommand request);
        Task<ApiResponse<PauseResponse[]>> PauseWorkDay(PauseCommand request);
        Task<ApiResponse<RestartResponse[]>> RestartWorkDay(RestartCommand request);

    }
}