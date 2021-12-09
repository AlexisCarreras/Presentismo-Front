using MediatR;
using Presentismo.Application.Common.Wrappers;
using System;

namespace Presentismo.Application.Features.Version1.Workday.Commands.PauseWorkday
{
    public abstract class PauseWorkdayContract
    {
        public class PauseCommand : Command, IRequest<ApiResponse<Response[]>>
        {
            public DataPause Data { get; set; }
        }

        public class DataPause
        {
            public string User { get; set; }
            public string Hour { get; set; }
            public int IdLugarTrabajo { get; set; }
        }
    }
}
