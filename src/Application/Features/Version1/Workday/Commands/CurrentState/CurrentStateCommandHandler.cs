using MediatR;
using Presentismo.Application.Common.Wrappers;
using Presentismo.Application.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using static Presentismo.Application.Features.Version1.Workday.Commands.CurrentState.CurrentStateContract;

namespace Presentismo.Application.Features.Version1.Workday.Commands.CurrentState
{
    public class CurrentStateCommandHandler : IRequestHandler<CurrentStateCommand, ApiResponse<CurrentStateResponse>>
    {
        private IPresentismoService _presentismoServices;

        public CurrentStateCommandHandler(IPresentismoService presentismoServices)
        {
            _presentismoServices = presentismoServices;
        }
        public async Task<ApiResponse<CurrentStateResponse>> Handle(CurrentStateCommand request, CancellationToken cancellationToken)
        {
            return await _presentismoServices.CurrentState(request);
        }
    }
}
