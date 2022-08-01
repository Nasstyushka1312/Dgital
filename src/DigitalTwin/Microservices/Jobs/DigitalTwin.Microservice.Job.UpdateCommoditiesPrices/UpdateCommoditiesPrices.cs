using Newtonsoft.Json;

namespace DigitalTwin.Microservice.Job.UpdateCommoditiesPrices
{
    public class UpdateCommoditiesPrices : BackgroundService
    {
        //private readonly DataContext _context;
        private readonly ILogger _logger;
        private readonly IConfiguration _configuration;

        private readonly TimeSpan _interval = TimeSpan.FromHours(12);

        public UpdateCommoditiesPrices(IServiceProvider serviceProvider, IConfiguration configuration, ILogger<UpdateCommoditiesPrices> logger)
        {
            //_context = serviceProvider.CreateScope().ServiceProvider.GetRequiredService<DataContext>();
            _configuration = configuration;
            _logger = logger;
        }

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            _logger.LogInformation($"Start UpdateProductPrices. {DateTime.UtcNow}");

            while (!stoppingToken.IsCancellationRequested)
            {
                //UpdateCommoditiesApiProducts();

                await Task.Delay(_interval, stoppingToken);
            }

            _logger.LogWarning($"Stop UpdateProductPrices! {DateTime.UtcNow}");
        }

        /*private async void UpdateCommoditiesApiProducts()
        {
            using var client = new HttpClient();
            try
            {
                string codes = string.Join(',', _context.Products.Select(x => x.Code));
                if (codes == null)
                    throw new Exception("Product table is empty!");

                var result = client.GetAsync($"https://commodities-api.com/api/latest?" +
                    $"access_key={_configuration.GetValue<string>("WebAPI:CommoditiesAPI:Token")}" +
                    $"&base={_configuration.GetValue<string>("WebAPI:CommoditiesAPI:Currency")}" +
                    $"&symbols={codes}").Result;
                if (result.StatusCode == HttpStatusCode.OK)
                {
                    string content = result.Content.ReadAsStringAsync().Result;

                    CommoditiesAPI.Root commoditiesObject = JsonConvert.DeserializeObject<CommoditiesAPI.Root>(content);

                    foreach (var item in commoditiesObject.Data.Rates)
                    {
                        if (item.Key.Equals("USD"))
                            continue;

                        int? productId = _context.Products.First(x => x.Code.Equals(item.Key)).Id;
                        if (productId == null)
                            continue;

                        ProductPriceHistory productPriceHistory = new ProductPriceHistory()
                        {
                            Price = 1 / item.Value,
                            ProductId = (int)productId
                        };

                        await _context.AddAsync(productPriceHistory);

                        var product = _context.Products.First(x => x.Id == productId);
                        product.CurrentPrice = 1 / item.Value;

                        _context.Update(product);
                    }
                    await _context.SaveChangesAsync();
                }
                else
                    throw new Exception("Wrong status code!");
            }
            catch (Exception e)
            {
                _logger.LogError(e, $"Error while reading commoditiesAPI");
            }
        }*/
    }

    public class CommoditiesAPI
    {
        public class Data
        {
            [JsonProperty("success")]
            public bool Success { get; set; }

            [JsonProperty("timestamp")]
            public int Timestamp { get; set; }

            [JsonProperty("date")]
            public string Date { get; set; }

            [JsonProperty("base")]
            public string Base { get; set; }

            [JsonProperty("rates")]
            public Dictionary<string, decimal> Rates { get; set; }

            [JsonProperty("unit")]
            public string Unit { get; set; }
        }

        public class Root
        {
            [JsonProperty("data")]
            public Data Data { get; set; }
        }
    }
}
