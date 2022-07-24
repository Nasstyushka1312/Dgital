using DigitalTwin.DAL;
using Microsoft.Extensions.Hosting;
using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace DigitalTwin.Jobs
{
    public class ClearExpiredLinks : BackgroundService
    {
        private readonly DataContext _context;
        private readonly TimeSpan _interval = TimeSpan.FromMinutes(10);

        public ClearExpiredLinks(DataContext context)
        {
            _context = context;
        }

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
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
        }
    }
}
