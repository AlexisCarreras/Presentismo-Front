using MediatR;
using Presentismo.Application.Common.Wrappers;
using System;

namespace Presentismo.Application.Features.Version1.Workday.Commands.FinishWorkday
{
    public abstract class FinishWorkdayContract
    {
        public class FinishCommand : Command, IRequest<ApiResponse<Response>>
        {
            public DataFinish Data { get; set; }
        }

        public class DataFinish
        {
            public string User { get; set; }
            public string Hour { get; set; }
        }
    }
}
