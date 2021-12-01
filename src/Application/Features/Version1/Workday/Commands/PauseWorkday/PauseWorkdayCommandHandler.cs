using MediatR;
using Presentismo.Application.Common.Wrappers;
using Presentismo.Application.Services;
using System;
using System.Threading;
using System.Threading.Tasks;
using static Presentismo.Application.Features.Version1.Workday.Commands.PauseWorkday.PauseWorkdayContract;

namespace Presentismo.Application.Features.Version1.Workday.Commands.PauseWorkday
{
    public class PauseWorkdayCommandHandler : IRequestHandler<PauseCommand, ApiResponse<PauseResponse[]>>
    {
        private IPresentismoService _presentismoServices;

        public PauseWorkdayCommandHandler(IPresentismoService presentismoServices)
        {
            _presentismoServices = presentismoServices;
        }
        public Task<ApiResponse<PauseResponse[]>> Handle(PauseCommand request, CancellationToken cancellationToken)
        {
            var result = _presentismoServices.PauseWorkDay(request);
            return Task.FromResult(new ApiResponse<PauseResponse[]>
            {
                data = result.Result.data,
                code = result.Result.code,
                fecha = result.Result.fecha,
                message = result.Result.message,
                messageid = result.Result.messageid,
                usuario = result.Result.usuario
            });
        }
    }
}
