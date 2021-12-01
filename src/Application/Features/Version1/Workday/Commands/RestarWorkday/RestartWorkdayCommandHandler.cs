using MediatR;
using Presentismo.Application.Common.Wrappers;
using Presentismo.Application.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using static Presentismo.Application.Features.Version1.Workday.Commands.RestarWorkday.RestartWorkdayContract;

namespace Presentismo.Application.Features.Version1.Workday.Commands.RestarWorkday
{
    public class RestartWorkdayCommandHandler : IRequestHandler<RestartCommand, ApiResponse<RestartResponse[]>>
    {
        private IPresentismoService _presentismoServices;

        public RestartWorkdayCommandHandler(IPresentismoService presentismoServices)
        {
            _presentismoServices = presentismoServices;
        }
        public Task<ApiResponse<RestartResponse[]>> Handle(RestartCommand request, CancellationToken cancellationToken)
        {
            var result = _presentismoServices.RestartWorkDay(request);
            return Task.FromResult(new ApiResponse<RestartResponse[]>
            {
                data = result.Result.data,
                code = result.Result.code,
                fecha = result.Result.fecha,
                message = result.Result.message,
                messageid = result.Result.messageid,
                usuario = result.Result.usuario,
            });
        }
    }
}
