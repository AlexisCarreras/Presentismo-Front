using System;
using System.Text.Json.Serialization;

namespace Presentismo.Application.Features.Version1.Workday.Commands
{
    public class Response
    {
        public int IdRegistro { get; set; }
        public string User { get; set; }
        public DateTime? Begin { get; set; }
        public DateTime? End { get; set; }
        [JsonPropertyName("lugarTrabajo")]
        public string Workplace { get; set; }
        [JsonPropertyName("tipoHora")]
        public string TypeOfHour { get; set; }
        [JsonPropertyName("hour")]
        public string Hours { get; set; }
    }
}