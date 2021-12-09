using MediatR;
using Presentismo.Application.Common.Wrappers;
using Presentismo.Application.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using static Presentismo.Application.Features.Version1.Workday.Commands.WorkingHours.WorkingHoursContract;

namespace Presentismo.Application.Features.Version1.Workday.Commands.WorkingHours
{
    public class WorkingHoursCommandHandler : IRequestHandler<WorkingHoursCommand, ApiResponse<WorkingHoursResponse>>
    {
        private IPresentismoService _presentismoServices;

        public WorkingHoursCommandHandler(IPresentismoService presentismoServices)
        {
            _presentismoServices = presentismoServices;
        }
        public async Task<ApiResponse<WorkingHoursResponse>> Handle(WorkingHoursCommand request, CancellationToken cancellationToken)
        {
            return await _presentismoServices.WorkingHours(request);
        }
    }
}
