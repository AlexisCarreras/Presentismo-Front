using MediatR;
using Presentismo.Application.Common.Wrappers;
using Presentismo.Application.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using static Presentismo.Application.Features.Version1.Workday.Commands.Workplaces.WorkplacesContract;

namespace Presentismo.Application.Features.Version1.Workday.Commands.Workplaces
{
    public class WorkplacesCommandHandler : IRequestHandler<WorkplacesCommand, ApiResponse<WorkplacesResponse[]>>
    {
        private IPresentismoService _presentismoServices;

        public WorkplacesCommandHandler(IPresentismoService presentismoServices)
        {
            _presentismoServices = presentismoServices;
        }

        public async Task<ApiResponse<WorkplacesResponse[]>> Handle(WorkplacesCommand request, CancellationToken cancellationToken)
        {
            return await _presentismoServices.Workplaces(request);
        }
    }
}
