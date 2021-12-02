using MediatR;
using Presentismo.Application.Common.Wrappers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Presentismo.Application.Features.Version1.Workday.Commands.RegisterOfHours
{
    public abstract class RegisterOfHoursContract
    {
        public class RegisterOfHoursCommand : Command, IRequest<ApiResponse<Response[]>>
        {
            public DataRegister data { get; set; }
        }

        public class DataRegister
        {
            public string usuario { get; set; }
            public string dia { get; set; }
        }
    }
}
