using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Presentismo.Application.Common.Wrappers
{
    public class ApiResponse<Response>
    {
        public string usuario { get; set; }
        public string fecha { get; set; }
        public string messageid { get; set; }
        public Response data { get; set; }
        public string message { get; set; }
        public string code { get; set; }
    }
}
