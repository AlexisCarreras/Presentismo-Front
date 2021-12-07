using MediatR;
using Presentismo.Application.Common.Wrappers;

namespace Presentismo.Application.Features.Version1.Workday.Commands.HourType
{
    public abstract class HourTypeContract
    {
        public class HourTypeCommand : Command, IRequest<ApiResponse<HourTypeResponse[]>>
        {
        }
        public class HourTypeResponse
        {
            public int id { get; set; }
            public string nombre { get; set; }
            public string tipo { get; set; }
        }
    }
}
