using MediatR;
using Presentismo.Application.Common.Wrappers;

namespace Presentismo.Application.Features.Version1.Workday.Commands.RegisterOfHours
{
    public abstract class RegisterOfHoursContract
    {
        public class RegisterOfHoursCommand : Command, IRequest<ApiResponse<Response[]>>
        {
            public DataRegister Data { get; set; }
        }

        public class DataRegister
        {
            public string User { get; set; }
            public string Day { get; set; }
        }
    }
}
