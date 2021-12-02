using MediatR;
using Presentismo.Application.Common.Wrappers;
using Presentismo.Application.Services;
using System.Threading;
using System.Threading.Tasks;
using static Presentismo.Application.Features.Version1.Workday.Commands.PauseWorkday.PauseWorkdayContract;

namespace Presentismo.Application.Features.Version1.Workday.Commands.PauseWorkday
{
    public class PauseWorkdayCommandHandler : IRequestHandler<PauseCommand, ApiResponse<Response[]>>
    {
        private IPresentismoService _presentismoServices;

        public PauseWorkdayCommandHandler(IPresentismoService presentismoServices)
        {
            _presentismoServices = presentismoServices;
        }
        public Task<ApiResponse<Response[]>> Handle(PauseCommand request, CancellationToken cancellationToken)
        {
            return _presentismoServices.PauseWorkDay(request);
        }
    }
}
