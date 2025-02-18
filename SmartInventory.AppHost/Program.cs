using IdentityModel.Client;

var builder = DistributedApplication.CreateBuilder(args);

var backendApi = builder.AddProject<Projects.SmartInventory_API>("smartinventoryapi");

builder.AddNpmApp("frontend", "../clientapp")
    .WithReference(backendApi)
    .WaitFor(backendApi)
    .WithEnvironment("BROWSER", "none") // Disable opening browser on npm start
    .WithHttpEndpoint()
    .WithExternalHttpEndpoints()
    .PublishAsDockerFile();

builder.Build().Run();
