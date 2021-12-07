using MediatR;
using Presentismo.Application.Common.Wrappers;
using System;

namespace Presentismo.Application.Features.Version1.Workday.Commands
{
    public abstract class Command
    {
        public string usuario { get; set; }
        public string fecha { get; set; }
        public string messageid { get; set; }
        public string message { get; set; }
        public string code { get; set; }
    }

}
