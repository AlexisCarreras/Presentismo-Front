using Presentismo.Application.Common.Wrappers;
using Presentismo.Application.Features.Version1.Workday.Commands.FinishWorkday;
using System.Threading.Tasks;
using static Presentismo.Application.Features.Version1.Workday.Commands.FinishWorkday.FinishWorkdayContract;
using static Presentismo.Application.Features.Version1.Workday.Commands.InitWorkday.InitWorkdayContract;

namespace Presentismo.Application.Services
{
    public interface IPresentismoService
    {
        Task<ApiResponse<InitResponse>> InitWorkDay(InitCommand c);
        Task<ApiResponse<FinishResponse>> FinishWorkDay(FinishCommand request);
    }
}