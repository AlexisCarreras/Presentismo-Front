using System.Text.Json.Serialization;

namespace Presentismo.Application.Features.Version1.Workday.Commands
{
    public abstract class Command
    {
        public Header Header { get; set;  }
        public Info Info { get; set; }
    }

    public class Info
    {
        public string Message { get; set; }
        public string Code { get; set; }
    }

    public class Header
    {
        public string Consulter { get; set; }
        public string Date { get; set; }
        [JsonPropertyName("messageid")]
        public string MessageId { get; set; }
    }
}
