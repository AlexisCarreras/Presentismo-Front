using MediatR;
using Presentismo.Application.Common.Wrappers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Presentismo.Application.Features.Version1.Workday.Commands.PauseWorkday
{
    public class PauseWorkdayContract
    {
        public class PauseCommand : Command, IRequest<ApiResponse<PauseResponse[]>>
        {
            public DataPause data { get; set; }
        }

        public class DataPause
        {
            public string usuario { get; set; }
            public string hora { get; set; }
            public int idLugarTrabajo { get; set; }
            public int idTipoHora { get; set; }
        }

        public class PauseResponse
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
