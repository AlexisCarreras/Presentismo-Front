using MediatR;
using Presentismo.Application.Common.Wrappers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Presentismo.Application.Features.Version1.Workday.Commands.RestarWorkday
{
    public abstract class RestartWorkdayContract
    {
        public class RestartCommand : Command, IRequest<ApiResponse<RestartResponse[]>>
        {
            public DataRestart data { get; set; }
        }

        public class DataRestart
        {
            public string usuario { get; set; }
            public string hora { get; set; }
            public int idLugarTrabajo { get; set; }
            public int idTipoHora { get; set; }
        }

        public class RestartResponse
        {
            public int idRegsitro { get; set; }
            public string usuario { get; set; }
            public DateTime? inicio { get; set; }
            public DateTime? fin { get; set; }
            public string lugarTrabajo { get; set; }
            public string tipoHora { get; set; }
            public string horas { get; set; }

        }
    }
}
