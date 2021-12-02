﻿using MediatR;
using Presentismo.Application.Common.Wrappers;
using System;

namespace Presentismo.Application.Features.Version1.Workday.Commands.PauseWorkday
{
    public abstract class PauseWorkdayContract
    {
        public class PauseCommand : Command, IRequest<ApiResponse<Response[]>>
        {
            public DataPause data { get; set; }
        }

        public class DataPause
        {
            public string usuario { get; set; }
            public string hora { get; set; }
            public int idLugarTrabajo { get; set; }
            public int idTipoHora { get; set; }
        }
    }
}
