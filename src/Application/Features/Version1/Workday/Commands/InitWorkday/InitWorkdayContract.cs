using MediatR;
using Presentismo.Application.Common.Wrappers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Presentismo.Application.Features.Version1.Workday.Commands.InitWorkday
{
    public abstract class InitWorkdayContract
    {
        public class InitCommand : IRequest<ApiResponse<InitResponse>>
        {
            //public ApiResponse<InitResponse> res { get; set; }
            public string usuario { get; set; }
            public string fecha { get; set; }
            public string messageid { get; set; }
            public Data data { get; set; }
            public string message { get; set; }
            public string code { get; set; }

        }

        public class Data
        {
            public string usuario { get; set; }
            public string hora { get; set; }
            public int idLugarTrabajo { get; set; }
            public int idTipoHora { get; set; }
        }

        public class InitResponse
        {
            public string usuario { get; set; }
            public int idRegsitro { get; set; }
            public DateTime inicio { get; set; }
            public string tipoHora { get; set; }
            public string horas { get; set; }


        }
    }
}
