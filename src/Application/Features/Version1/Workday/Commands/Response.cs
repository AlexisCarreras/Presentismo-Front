using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Presentismo.Application.Features.Version1.Workday.Commands
{
    public class Response
    {
        [JsonPropertyName("idregsitro")]
        public int IdRegistro { get; set; }
        public string usuario { get; set; }
        public DateTime? inicio { get; set; }
        public DateTime? fin { get; set; }
        public string lugarTrabajo { get; set; }
        public string tipoHora { get; set; }
        public string horas { get; set; }
    }
}
