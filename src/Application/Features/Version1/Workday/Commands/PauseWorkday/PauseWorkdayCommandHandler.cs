using MediatR;
using Presentismo.Application.Common.Wrappers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using static Presentismo.Application.Features.Version1.Workday.Commands.InitWorkday.InitWorkdayContract;
using static Presentismo.Application.Features.Version1.Workday.Commands.PauseWorkday.PauseWorkdayContract;

namespace Presentismo.Application.Features.Version1.Workday.Commands.PauseWorkday
{
    public class PauseWorkdayCommandHandler : IRequestHandler<PauseCommand, ApiResponse<PauseResponse[]>>
    {
        public Task<ApiResponse<PauseResponse[]>> Handle(PauseCommand request, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }
    }
}
