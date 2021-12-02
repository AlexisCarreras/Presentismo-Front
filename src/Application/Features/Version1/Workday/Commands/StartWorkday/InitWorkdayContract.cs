using MediatR;
using Presentismo.Application.Common.Wrappers;
using System;

namespace Presentismo.Application.Features.Version1.Workday.Commands.StartWorkday
{
    public abstract class StartWorkdayContract
    {
        public class StartCommand : Command, IRequest<ApiResponse<Response>>
        {
            public DataStart data { get; set; }
        }

        public class DataStart
        {
            public string usuario { get; set; }
            public string hora { get; set; }
            public int idLugarTrabajo { get; set; }
            public int idTipoHora { get; set; }
        }
    }
}
