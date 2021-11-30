using Presentismo.Application.Common.Wrappers;
using System.Threading.Tasks;
using static Presentismo.Application.Features.Version1.Workday.Commands.InitWorkday.InitWorkdayContract;

namespace Presentismo.Application.Services
{
    public interface IPresentismoService
    {
        Task<ApiResponse<Response>> InitWorkDay(Command c);
    }
}