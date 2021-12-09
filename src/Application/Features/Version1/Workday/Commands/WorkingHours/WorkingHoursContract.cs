using MediatR;
using Presentismo.Application.Common.Wrappers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Presentismo.Application.Features.Version1.Workday.Commands.WorkingHours
{
    public abstract class WorkingHoursContract
    {
        public class WorkingHoursCommand : Command, IRequest<ApiResponse<WorkingHoursResponse>>
        {
            public WorkingHoursData Data { get; set; }
        }
        public class WorkingHoursData
        {
            public string User { get; set; }
            public string Begin { get; set; }
            public string End { get; set; }
        }

        public class WorkingHoursResponse
        {
            [JsonPropertyName("horas")]
            public int Hours { get; set; }
            [JsonPropertyName("minutos")]
            public int Minutes { get; set; }
        }
    }

}
