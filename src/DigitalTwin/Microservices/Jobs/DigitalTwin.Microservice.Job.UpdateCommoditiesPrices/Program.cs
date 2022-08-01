namespace DigitalTwin.Microservice.Job.UpdateCommoditiesPrices
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            builder.Services.AddLogging();

            builder.Services.AddHostedService<UpdateCommoditiesPrices>();

            var app = builder.Build();

            app.Run();
        }
    }
}