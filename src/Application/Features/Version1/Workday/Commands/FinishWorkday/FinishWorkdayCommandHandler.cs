using MediatR;
using Presentismo.Application.Common.Wrappers;
using Presentismo.Application.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using static Presentismo.Application.Features.Version1.Workday.Commands.FinishWorkday.FinishWorkdayContract;

namespace Presentismo.Application.Features.Version1.Workday.Commands.FinishWorkday
{
    public class FinishWorkdayCommandHandler : IRequestHandler<FinishCommand, ApiResponse<FinishResponse>>
    {
        private IPresentismoService _presentismoServices;
        public FinishWorkdayCommandHandler(IPresentismoService presentismoServices)
        {
            _presentismoServices = presentismoServices;
        }
        public Task<ApiResponse<FinishResponse>> Handle(FinishCommand request, CancellationToken cancellationToken)
        {
            var result = _presentismoServices.FinishWorkDay(request);

            return Task.FromResult(new ApiResponse<FinishResponse>
            {
                usuario = result.Result.usuario,

            });
        }
    }
}
