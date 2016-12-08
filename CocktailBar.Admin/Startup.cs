namespace CocktailBar.Admin {
    using System;
    using System.Linq;
    using Microsoft.AspNetCore.Builder;
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.AspNetCore.Http;
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.DependencyInjection;
    using Microsoft.Extensions.Logging;

    public class Startup {
        public Startup(IHostingEnvironment env) {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        private IConfigurationRoot Configuration { get; }

        public void ConfigureServices(IServiceCollection services) {
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory) {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            if (env.IsDevelopment()) {
                app.UseDeveloperExceptionPage();
                app.UseBrowserLink();
            }
            else {
                app.UseExceptionHandler("/Home/Error");
            }

            var clientRoutes = new[] {"/ingredients", "/recipes"};

            app.Use(async (context, next) =>
            {
                // If the request matches one of those paths, change it.
                // This needs to happen before UseDefaultFiles.
                if (context.Request.Path.HasValue &&
                    null !=
                    clientRoutes.FirstOrDefault(
                        route => 
                        context.Request.Path.Value.StartsWith(route, StringComparison.OrdinalIgnoreCase))) {
                    context.Request.Path = new PathString("/");
                }

                await next();
            });

            app.Map("/api",
                builder => { builder.RunProxy(new ProxyOptions {Host = "localhost", Port = "8000", Scheme = "http"}); });
            app.UseDefaultFiles();
            app.UseStaticFiles();
        }
    }
}