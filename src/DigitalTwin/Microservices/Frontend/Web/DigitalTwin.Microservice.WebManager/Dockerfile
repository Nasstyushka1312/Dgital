#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["Microservices/Frontend/Web/DigitalTwin.Microservice.WebManager/DigitalTwin.Microservice.WebManager.csproj", "Microservices/Frontend/Web/DigitalTwin.Microservice.WebManager/"]
RUN dotnet restore "Microservices/Frontend/Web/DigitalTwin.Microservice.WebManager/DigitalTwin.Microservice.WebManager.csproj"
COPY . .
WORKDIR "/src/Microservices/Frontend/Web/DigitalTwin.Microservice.WebManager"
RUN dotnet build "DigitalTwin.Microservice.WebManager.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "DigitalTwin.Microservice.WebManager.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "DigitalTwin.Microservice.WebManager.dll"]