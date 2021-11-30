using Presentismo.Application.Common.Wrappers;
using Presentismo.Application.Features.Version1.Workday.Commands.FinishWorkday;
using Presentismo.Application.Features.Version1.Workday.Commands.InitWorkday;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using static Presentismo.Application.Features.Version1.Workday.Commands.FinishWorkday.FinishWorkdayContract;
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
        private string Conexion(string uri, InitCommand c)
        {
            var client = _httpClientFactory.CreateClient("PresentismoClient");
            var payload = JsonSerializer.Serialize(c);
            var result = client.PostAsync(uri, new StringContent(payload, Encoding.UTF8, "application/json")).Result;

            var status = (int)result.StatusCode;
            var r = result.Content.ReadAsStringAsync().Result;
            return result.Content.ReadAsStringAsync().Result;
        }

        public async Task<ApiResponse<InitResponse>> InitWorkDay(InitCommand c)
        {
            string uri = "/inicio";
            var responseJson = Conexion(uri, c);
            var responseInitWorkDay = JsonSerializer.Deserialize<ApiResponse<InitResponse>>(responseJson);
            return responseInitWorkDay;
        }

        public Task<ApiResponse<FinishResponse>> FinishWorkDay(FinishCommand request)
        {
            throw new NotImplementedException();
        }
    }
}
