using MediatR;
using Presentismo.Application.Common.Wrappers;
using System.Threading;
using System.Threading.Tasks;
using static Presentismo.Application.Features.Version1.Workday.Commands.InitWorkday.InitWorkdayContract;

namespace Presentismo.Application.Features.Version1.Workday.Commands.InitWorkday
{
    public class InitWorkdayCommandHandler : IRequestHandler<Command, ApiResponse<Response>>
    {
        public Task<ApiResponse<Response>> Handle(Command request, CancellationToken cancellationToken)
        {
            return Task.FromResult(ApiResponse<Response>.Create());
        }
    }
}
