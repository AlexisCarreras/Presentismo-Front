using MediatR;
using Presentismo.Application.Common.Wrappers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Presentismo.Application.Features.Version1.Workday.Commands.CurrentState
{
    public abstract class CurrentStateContract
    {
        public class CurrentStateCommand : Command, IRequest<ApiResponse<CurrentStateResponse>>
        {
            public CurrentStateData Data { get; set; }
        }
        public class CurrentStateResponse
        {
            [JsonPropertyName("horaInicio")]
            public string BeginTime { get; set; }

            [JsonPropertyName("horaFin")]
            public string EndingTime { get; set; }

            [JsonPropertyName("horasTrabajadas")]
            public int? WorkingHours { get; set; }

            [JsonPropertyName("lugarTrabajo")]
            public string Workplace { get; set; }

            [JsonPropertyName("estado")]
            public string State { get; set; }
        }

        public class CurrentStateData
        {
            public string User { get; set; }
            public string Day { get; set; }
        }
    }

}