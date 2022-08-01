#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:3.1 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:3.1 AS build
WORKDIR /src
COPY ["Microservices/Backend/DigitalTwin.Microservice.DbManager/DigitalTwin.Microservice.DbManager.csproj", "Microservices/Backend/DigitalTwin.Microservice.DbManager/"]
RUN dotnet restore "Microservices/Backend/DigitalTwin.Microservice.DbManager/DigitalTwin.Microservice.DbManager.csproj"
COPY . .
WORKDIR "/src/Microservices/Backend/DigitalTwin.Microservice.DbManager"
RUN dotnet build "DigitalTwin.Microservice.DbManager.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "DigitalTwin.Microservice.DbManager.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "DigitalTwin.Microservice.DbManager.dll"]