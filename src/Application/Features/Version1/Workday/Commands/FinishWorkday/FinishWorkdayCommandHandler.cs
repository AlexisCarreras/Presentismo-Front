using MediatR;
using Presentismo.Application.Common.Wrappers;
using Presentismo.Application.Services;
using System.Threading;
using System.Threading.Tasks;
using static Presentismo.Application.Features.Version1.Workday.Commands.FinishWorkday.FinishWorkdayContract;

namespace Presentismo.Application.Features.Version1.Workday.Commands.FinishWorkday
{
    public class FinishWorkdayCommandHandler : IRequestHandler<FinishCommand, ApiResponse<Response>>
    {
        private IPresentismoService _presentismoServices;

        public FinishWorkdayCommandHandler(IPresentismoService presentismoServices)
        {
            _presentismoServices = presentismoServices;
        }
        public Task<ApiResponse<Response>> Handle(FinishCommand request, CancellationToken cancellationToken)
        {
            return _presentismoServices.FinishWorkDay(request);
        }
    }
}
