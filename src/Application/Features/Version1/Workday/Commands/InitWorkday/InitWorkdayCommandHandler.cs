using MediatR;
using Nancy.Json;
using Presentismo.Application.Common.Wrappers;
using Presentismo.Application.Services;
using System.IO;
using System.Net;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;
using static Presentismo.Application.Features.Version1.Workday.Commands.InitWorkday.InitWorkdayContract;

namespace Presentismo.Application.Features.Version1.Workday.Commands.InitWorkday
{
    public class InitWorkdayCommandHandler : IRequestHandler<InitCommand, ApiResponse<InitResponse>>
    {
        private IPresentismoService _presentismoServices;

        public InitWorkdayCommandHandler(IPresentismoService presentismoServices)
        {
            _presentismoServices = presentismoServices;
        }

        public Task<ApiResponse<InitResponse>> Handle(InitCommand request, CancellationToken cancellationToken)
        {
            var result = _presentismoServices.InitWorkDay(request);

            return Task.FromResult(new ApiResponse<InitResponse>
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
