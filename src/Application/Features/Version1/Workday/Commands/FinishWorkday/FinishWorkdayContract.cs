using MediatR;
using Presentismo.Application.Common.Wrappers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Presentismo.Application.Features.Version1.Workday.Commands.FinishWorkday
{
    public abstract class FinishWorkdayContract
    {
        public class FinishCommand : IRequest<ApiResponse<FinishResponse>>
        {
            public ApiResponse<FinishResponse> res { get; set; }
        }

        public class FinishResponse
        {
            public string idRegsitro { get; set; }
            public string usuario { get; set; }
            public string inicio { get; set; }
            public string fin { get; set; }
            public string lugarTrabajo { get; set; }
            public string tipoHora { get; set; }
            public string horas { get; set; }
        }
    }
}
