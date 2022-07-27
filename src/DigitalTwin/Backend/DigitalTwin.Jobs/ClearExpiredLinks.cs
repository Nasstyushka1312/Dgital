using DigitalTwin.DAL;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace DigitalTwin.Jobs
{
    public class ClearExpiredLinks : BackgroundService
    {
        private readonly DataContext _context;
        private readonly ILogger _logger;
        private readonly TimeSpan _interval = TimeSpan.FromMinutes(10);

        public ClearExpiredLinks(IServiceProvider serviceProvider, ILogger<ClearExpiredLinks> logger)
        {
            _context = serviceProvider.CreateScope().ServiceProvider.GetRequiredService<DataContext>();
            _logger = logger;
        }

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            _logger.LogInformation($"Start ClearExpiredLinks. {DateTime.UtcNow}");

            while (!stoppingToken.IsCancellationRequested)
            {
                var rows = _context.ActivateLinks.Where(x => x.ExpirationTime < DateTime.UtcNow);
                if (rows.Any())
                {
                    _context.ActivateLinks.RemoveRange(rows);
                    _context.SaveChanges();
                }

                await Task.Delay(_interval, stoppingToken);
            }

            _logger.LogWarning($"Stop ClearExpiredLinks! {DateTime.UtcNow}");
        }
    }
}
