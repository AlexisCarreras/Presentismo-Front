using MediatR;
using Presentismo.Application.Common.Wrappers;
using System.Text.Json.Serialization;

namespace Presentismo.Application.Features.Version1.Workday.Commands.Workplaces
{
    public abstract class WorkplacesContract
    {
        public class WorkplacesCommand : Command, IRequest<ApiResponse<WorkplacesResponse[]>>
        {
        }
        public class WorkplacesResponse
        {
            public int Id { get; set; }
            [JsonPropertyName("nombre")]
            public string Name { get; set; }
        }
    }
}
