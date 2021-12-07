using Presentismo.Application.Common.Wrappers;
using Presentismo.Application.Features.Version1.Workday.Commands;
using Presentismo.Application.Features.Version1.Workday.Commands.HourType;
using Presentismo.Application.Features.Version1.Workday.Commands.RegisterOfHours;
using Presentismo.Application.Features.Version1.Workday.Commands.Workplaces;
using System.Net.Http;
using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using static Presentismo.Application.Features.Version1.Workday.Commands.FinishWorkday.FinishWorkdayContract;
using static Presentismo.Application.Features.Version1.Workday.Commands.HourType.HourTypeContract;
using static Presentismo.Application.Features.Version1.Workday.Commands.PauseWorkday.PauseWorkdayContract;
using static Presentismo.Application.Features.Version1.Workday.Commands.RegisterOfHours.RegisterOfHoursContract;
using static Presentismo.Application.Features.Version1.Workday.Commands.RestarWorkday.RestartWorkdayContract;
using static Presentismo.Application.Features.Version1.Workday.Commands.StartWorkday.StartWorkdayContract;
using static Presentismo.Application.Features.Version1.Workday.Commands.Workplaces.WorkplacesContract;

namespace Presentismo.Application.Services
{
    public class PresentismoService : IPresentismoService
    {
        private readonly IHttpClientFactory _httpClientFactory;

        public PresentismoService(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }
        private string Conexion(string uri, Command c)
        {
            var client = _httpClientFactory.CreateClient("PresentismoClient");
            var payload = JsonSerializer.Serialize(c, c.GetType(), new JsonSerializerOptions
            {
                WriteIndented = true
            });
            var result = client.PostAsync(uri, new StringContent(payload, Encoding.UTF8, "application/json")).Result;
            result.EnsureSuccessStatusCode();
            var r = result.Content.ReadAsStringAsync().Result;
            return r;
        }

        public async Task<ApiResponse<Response>> InitWorkDay(StartCommand c)
        {
            string uri = "/inicio";
            var responseJson = Conexion(uri, c);
            var responseInitWorkDay = JsonSerializer.Deserialize<ApiResponse<Response>>(responseJson);
            return responseInitWorkDay;
        }

        public async Task<ApiResponse<Response>> FinishWorkDay(FinishCommand c)
        {
            string uri = "/finalizarDia";
            var responseJson = Conexion(uri, c);
            var responseFinishWorkDay = JsonSerializer.Deserialize<ApiResponse<Response>>(responseJson);
            return responseFinishWorkDay;
        }

        public async Task<ApiResponse<Response[]>> PauseWorkDay(PauseCommand c)
        {
            string uri = "/pausar";
            var responseJson = Conexion(uri, c);
            var responseFinishWorkDay = JsonSerializer.Deserialize<ApiResponse<Response[]>>(responseJson, new JsonSerializerOptions
            {
                DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull
            });
            return responseFinishWorkDay;
        }

        public async Task<ApiResponse<Response[]>> RestartWorkDay(RestartCommand c)
        {
            string uri = "/reiniciar";
            var responseJson = Conexion(uri, c);
            var responseFinishWorkDay = JsonSerializer.Deserialize<ApiResponse<Response[]>>(responseJson, new JsonSerializerOptions
            {
                DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull
            });
            return responseFinishWorkDay;
        }

        public async Task<ApiResponse<Response[]>> RegisterOfHours(RegisterOfHoursCommand c)
        {
            string uri = "/registroHoras";
            var responseJson = Conexion(uri, c);
            var responseFinishWorkDay = JsonSerializer.Deserialize<ApiResponse<Response[]>>(responseJson, new JsonSerializerOptions
            {
                DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull
            });
            return responseFinishWorkDay;
        }

        public async Task<ApiResponse<HourTypeResponse[]>> HourType(HourTypeCommand c)
        {
            string uri = "/tipoHora";
            var responseJson = Conexion(uri, c);
            var responseFinishWorkDay = JsonSerializer.Deserialize<ApiResponse<HourTypeResponse[]>>(responseJson);
            return responseFinishWorkDay;
        }

        public async Task<ApiResponse<WorkplacesResponse[]>> Workplaces(WorkplacesCommand c)
        {
            string uri = "/lugarTrabajo";
            var responseJson = Conexion(uri, c);
            var responseFinishWorkDay = JsonSerializer.Deserialize<ApiResponse<WorkplacesResponse[]>>(responseJson);
            return responseFinishWorkDay;
        }
    }
}
