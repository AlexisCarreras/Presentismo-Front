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
        public class Command : IRequest<ApiResponse<Response>>
        {

        }

        public class Response
        {
        }
    }
}
