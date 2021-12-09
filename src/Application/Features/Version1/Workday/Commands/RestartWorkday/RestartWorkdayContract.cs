using MediatR;
using Presentismo.Application.Common.Wrappers;
using System;

namespace Presentismo.Application.Features.Version1.Workday.Commands.RestarWorkday
{
    public abstract class RestartWorkdayContract
    {
        public class RestartCommand : Command, IRequest<ApiResponse<Response[]>>
        {
            public DataRestart Data { get; set; }
        }

        public class DataRestart
        {
            public string User { get; set; }
            public string Hour { get; set; }
            public int IdLugarTrabajo { get; set; }
        }
    }
}
