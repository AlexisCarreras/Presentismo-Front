using MediatR;
using Presentismo.Application.Common.Wrappers;

namespace Presentismo.Application.Features.Version1.Workday.Commands.Workplaces
{
    public abstract class WorkplacesContract
    {
        public class WorkplacesCommand : Command, IRequest<ApiResponse<WorkplacesResponse[]>>
        {
        }
        public class WorkplacesResponse
        {
            public int id { get; set; }
            public string nombre { get; set; }
        }
    }
}
