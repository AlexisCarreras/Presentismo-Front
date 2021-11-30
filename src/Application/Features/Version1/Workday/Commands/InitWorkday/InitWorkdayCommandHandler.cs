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
    public class InitWorkdayCommandHandler : IRequestHandler<Command, ApiResponse<Response>>
    {
        private IPresentismoService _presentismoServices;

        public InitWorkdayCommandHandler(IPresentismoService presentismoServices)
        {
            _presentismoServices = presentismoServices;
        }

        public Task<ApiResponse<Response>> Handle(Command request, CancellationToken cancellationToken)
        {
            var result = _presentismoServices.InitWorkDay(request);

            return Task.FromResult(new ApiResponse<Response>
            {
                data = result.Result.data,
                fecha = result.Result.fecha,
                message = result.Result.message,
                usuario = result.Result.usuario,
                code = result.Result.code,
                messageid = result.Result.messageid
            });
        }
    }
}
