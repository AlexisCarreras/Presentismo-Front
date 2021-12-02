using MediatR;
using Presentismo.Application.Common.Wrappers;
using Presentismo.Application.Services;
using System.Threading;
using System.Threading.Tasks;
using static Presentismo.Application.Features.Version1.Workday.Commands.RegisterOfHours.RegisterOfHoursContract;

namespace Presentismo.Application.Features.Version1.Workday.Commands.RegisterOfHours
{
    public class RegisterOfHoursCommandHandler : IRequestHandler<RegisterOfHoursCommand, ApiResponse<Response[]>>
    {
        private IPresentismoService _presentismoServices;

        public RegisterOfHoursCommandHandler(IPresentismoService presentismoServices)
        {
            _presentismoServices = presentismoServices;
        }
        public Task<ApiResponse<Response[]>> Handle(RegisterOfHoursCommand request, CancellationToken cancellationToken)
        {
            return _presentismoServices.RegisterOfHours(request);
        }
    }
}
