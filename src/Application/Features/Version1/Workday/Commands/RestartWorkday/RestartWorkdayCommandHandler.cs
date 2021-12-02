using MediatR;
using Presentismo.Application.Common.Wrappers;
using Presentismo.Application.Services;
using System.Threading;
using System.Threading.Tasks;
using static Presentismo.Application.Features.Version1.Workday.Commands.RestarWorkday.RestartWorkdayContract;

namespace Presentismo.Application.Features.Version1.Workday.Commands.RestarWorkday
{
    public class RestartWorkdayCommandHandler : IRequestHandler<RestartCommand, ApiResponse<Response[]>>
    {
        private IPresentismoService _presentismoServices;

        public RestartWorkdayCommandHandler(IPresentismoService presentismoServices)
        {
            _presentismoServices = presentismoServices;
        }
        public Task<ApiResponse<Response[]>> Handle(RestartCommand request, CancellationToken cancellationToken)
        {
            return _presentismoServices.RestartWorkDay(request);
        }
    }
}
