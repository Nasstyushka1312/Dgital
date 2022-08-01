namespace DigitalTwin.Microservice.Job.RemoveExpiredLinks
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            builder.Services.AddLogging();

            builder.Services.AddHostedService<RemoveExpiredLinks>();

            var app = builder.Build();

            app.Run();
        }
    }
}