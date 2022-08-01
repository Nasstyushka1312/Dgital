namespace DigitalTwin.Microservice.Job.RemoveExpiredLinks
{
    public class RemoveExpiredLinks : BackgroundService
    {
        //private readonly DataContext _context;
        private readonly ILogger _logger;
        private readonly TimeSpan _interval = TimeSpan.FromMinutes(10);

        public RemoveExpiredLinks(IServiceProvider serviceProvider, ILogger<RemoveExpiredLinks> logger)
        {
            //_context = serviceProvider.CreateScope().ServiceProvider.GetRequiredService<DataContext>();
            _logger = logger;
        }

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            _logger.LogInformation($"Start ClearExpiredLinks. {DateTime.UtcNow}");

            while (!stoppingToken.IsCancellationRequested)
            {
                /*var rows = _context.ActivateLinks.Where(x => x.ExpirationTime < DateTime.UtcNow);
                if (rows.Any())
                {
                    _context.ActivateLinks.RemoveRange(rows);
                    _context.SaveChanges();
                }*/

                await Task.Delay(_interval, stoppingToken);
            }

            _logger.LogWarning($"Stop ClearExpiredLinks! {DateTime.UtcNow}");
        }
    }
}
