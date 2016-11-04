namespace CocktailBar.Server.API {
    using System.Net;
    using DataLayer.Ingredients;
    using DataLayer.Interfaces.Ingredients;
    using Microsoft.AspNetCore.Builder;
    using Microsoft.AspNetCore.Diagnostics;
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.AspNetCore.Http;
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.DependencyInjection;
    using Microsoft.Extensions.Logging;
    using Microsoft.Extensions.PlatformAbstractions;
    using Swashbuckle.Swagger.Model;

    public class Startup {
        public Startup(IHostingEnvironment env) {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services) {
            // Add framework services.
            services.AddMvc();

            services.AddSwaggerGen(options => {
                options.SingleApiVersion(new Info {
                    Title = "CocktailBar API",
                    Version = "v1",
                    Contact =
                        new Contact {
                            Email = "aleks.gorbach@gmail.com",
                            Name = "Alex Horbach",
                            Url = "https://vk.com/alexandr_gorbach"
                        }
                });

                options.IncludeXmlComments(PlatformServices.Default.Application.ApplicationBasePath +
                                           "\\CocktailBar.Server.API.xml");
            });
            services.AddCors(options => { options.AddPolicy("AllowOrigin", builder => builder.AllowAnyOrigin()); });

            services
                .AddSingleton
                <IIngredientsRepository,
                    MemoryIngredientsRepository>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory) {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            app.UseMvc();

            app.UseCors("AllowOrigin");

            if (env.IsDevelopment()) {
                app.UseDeveloperExceptionPage();
                app.UseExceptionHandler(options => {
                    options.Run(
                        async context => {
                            context.Response.StatusCode = (int) HttpStatusCode.InternalServerError;
                            context.Response.ContentType = "text/html";
                            var ex = context.Features.Get<IExceptionHandlerFeature>();
                            if (ex != null) {
                                var err = $"<h1>Error: {ex.Error.Message}</h1>{ex.Error.StackTrace}";
                                await context.Response.WriteAsync(err).ConfigureAwait(false);
                            }
                        });
                });
            }

            app.UseSwagger();

            app.UseSwaggerUi();
        }
    }
}