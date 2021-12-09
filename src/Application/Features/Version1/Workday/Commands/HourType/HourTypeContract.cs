using MediatR;
using Presentismo.Application.Common.Wrappers;
using System.Text.Json.Serialization;

namespace Presentismo.Application.Features.Version1.Workday.Commands.HourType
{
    public abstract class HourTypeContract
    {
        public class HourTypeCommand : Command, IRequest<ApiResponse<HourTypeResponse[]>>
        {
        }
        public class HourTypeResponse
        {
            public int Id { get; set; }
            [JsonPropertyName("nombre")]
            public string Name { get; set; }
            [JsonPropertyName("tipo")]
            public string Type { get; set; }
        }
    }
}
