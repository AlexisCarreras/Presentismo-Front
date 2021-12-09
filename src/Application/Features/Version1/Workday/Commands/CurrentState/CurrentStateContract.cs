using MediatR;
using Presentismo.Application.Common.Wrappers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Presentismo.Application.Features.Version1.Workday.Commands.CurrentState
{
    public abstract class CurrentStateContract
    {
        public class CurrentStateCommand : Command, IRequest<ApiResponse<CurrentStateResponse>>
        {
            public CurrentStateResponse Data { get; set; }
        }
        public class CurrentStateResponse
        {
            public string HoraInicio { get; set; }
            public string HoraFin { get; set; }
            public string HorasTrabajadas { get; set; }
            public string LugarTrabajo { get; set; }
            public string Estado { get; set; }
        }
    }

}
