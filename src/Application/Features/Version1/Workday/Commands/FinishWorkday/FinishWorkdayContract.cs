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
        public class FinishCommand : Command, IRequest<ApiResponse<FinishResponse>>
        {
            public DataFinish data { get; set; }
        }

        public class DataFinish
        {
            public string usuario { get; set; }
            public string hora { get; set; }
        }

        public class FinishResponse
        {
            public int idRegsitro { get; set; }
            public string usuario { get; set; }
            public DateTime inicio { get; set; }
            public DateTime fin { get; set; }
            public string lugarTrabajo { get; set; }
            public string tipoHora { get; set; }
            public string horas { get; set; }
        }
    }
}
