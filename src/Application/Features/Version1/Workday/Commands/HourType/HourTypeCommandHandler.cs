using MediatR;
using Presentismo.Application.Common.Wrappers;
using Presentismo.Application.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using static Presentismo.Application.Features.Version1.Workday.Commands.HourType.HourTypeContract;

namespace Presentismo.Application.Features.Version1.Workday.Commands.HourType
{
    public class HourTypeCommandHandler : IRequestHandler<HourTypeCommand, ApiResponse<HourTypeResponse[]>>
    {
        private IPresentismoService _presentismoServices;

        public HourTypeCommandHandler(IPresentismoService presentismoServices)
        {
            _presentismoServices = presentismoServices;
        }

        public async Task<ApiResponse<HourTypeResponse[]>> Handle(HourTypeCommand request, CancellationToken cancellationToken)
        {
            return await _presentismoServices.HourType(request);
        }
    }

}
