using MediatR;
using Presentismo.Application.Common.Wrappers;
using Presentismo.Application.Services;
using System.Threading;
using System.Threading.Tasks;
using static Presentismo.Application.Features.Version1.Workday.Commands.StartWorkday.StartWorkdayContract;

namespace Presentismo.Application.Features.Version1.Workday.Commands.InitWorkday
{
    public class StartWorkdayCommandHandler : IRequestHandler<StartCommand, ApiResponse<Response>>
    {
        private IPresentismoService _presentismoServices;

        public StartWorkdayCommandHandler(IPresentismoService presentismoServices)
        {
            _presentismoServices = presentismoServices;
        }
        public Task<ApiResponse<Response>> Handle(StartCommand request, CancellationToken cancellationToken)
        {
            return _presentismoServices.InitWorkDay(request);
        }
    }
}
