using MediatR;
using Presentismo.Application.Common.Wrappers;
using System;

namespace Presentismo.Application.Features.Version1.Workday.Commands.StartWorkday
{
    public abstract class StartWorkdayContract
    {
        public class StartCommand : Command, IRequest<ApiResponse<Response>>
        {
            public DataStart Data { get; set; }
        }

        public class DataStart
        {
            public string User { get; set; }
            public string Hour { get; set; }
            public int IdLugarTrabajo { get; set; }
        }
    }
}
