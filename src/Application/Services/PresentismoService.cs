using Presentismo.Application.Common.Wrappers;
using Presentismo.Application.Features.Version1.Workday.Commands.InitWorkday;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using static Presentismo.Application.Features.Version1.Workday.Commands.InitWorkday.InitWorkdayContract;

namespace Presentismo.Application.Services
{
    public class PresentismoService : IPresentismoService
    {
        private readonly IHttpClientFactory _httpClientFactory;

        public PresentismoService(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }
        private String Conexion(string uri, Command c)
        {
            var client = _httpClientFactory.CreateClient("PresentismoClient");
            var payload = JsonSerializer.Serialize<ApiResponse<Response>>(c.res);
            var result = client.PostAsync(uri, new StringContent(payload, Encoding.UTF8, "application/json")).Result;

            var status = (int)result.StatusCode;

            return result.Content.ReadAsStringAsync().Result;
        }

        public async Task<ApiResponse<Response>> InitWorkDay(Command c)
        {
            string uri = "/inicio";
            var responseJson = Conexion(uri, c);
            var responseInitWorkDay = JsonSerializer.Deserialize<ApiResponse<Response>>(responseJson);
            return responseInitWorkDay;
        }
    }
}
