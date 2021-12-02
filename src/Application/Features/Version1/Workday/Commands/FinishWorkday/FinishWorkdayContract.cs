using MediatR;
using Presentismo.Application.Common.Wrappers;
using System;

namespace Presentismo.Application.Features.Version1.Workday.Commands.FinishWorkday
{
    public abstract class FinishWorkdayContract
    {
        public class FinishCommand : Command, IRequest<ApiResponse<Response>>
        {
            public DataFinish data { get; set; }
        }

        public class DataFinish
        {
            public string usuario { get; set; }
            public string hora { get; set; }
        }
    }
}
