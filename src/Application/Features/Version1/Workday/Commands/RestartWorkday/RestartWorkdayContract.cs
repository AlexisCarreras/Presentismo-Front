using MediatR;
using Presentismo.Application.Common.Wrappers;
using System;

namespace Presentismo.Application.Features.Version1.Workday.Commands.RestarWorkday
{
    public abstract class RestartWorkdayContract
    {
        public class RestartCommand : Command, IRequest<ApiResponse<Response[]>>
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
    }
}
