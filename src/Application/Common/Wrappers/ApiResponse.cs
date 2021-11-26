using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Presentismo.Application.Common.Wrappers
{
    public class ApiResponse<T>
    {
        public T Data { get; set; }
        public string User { get; set; }
        public DateTime Date { get; set; }
        public string Message { get; set; }
        public static ApiResponse<T> Create()
        {
            return new ApiResponse<T>()
            {
                Date = DateTime.Now,
                User = Guid.NewGuid().ToString()
            };
        }
    }
}
