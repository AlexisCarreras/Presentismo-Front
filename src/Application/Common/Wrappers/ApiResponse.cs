namespace Presentismo.Application.Common.Wrappers
{
    public class ApiResponse<T>
    {
        public Header Header { get; set; }
        public Info Info { get; set; }
        public T Data { get; set; }
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
        public string Messageid { get; set; }
    }
}
