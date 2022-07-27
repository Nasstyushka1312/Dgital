﻿// <auto-generated />
using System;
using DigitalTwin.DAL;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace DigitalTwin.DAL.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20220726232620_AddProducts")]
    partial class AddProducts
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 63)
                .HasAnnotation("ProductVersion", "5.0.17")
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

            modelBuilder.Entity("DigitalTwin.DAL.Models.ActivateLink", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<DateTime>("ExpirationTime")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("timestamp without time zone")
                        .HasDefaultValueSql("CURRENT_TIMESTAMP + INTERVAL '15 minute'");

                    b.Property<string>("Link")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("UserId")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("UserId")
                        .IsUnique();

                    b.ToTable("ActivateLinks");
                });

            modelBuilder.Entity("DigitalTwin.DAL.Models.ActivatedExtension", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<DateTime>("ActivateDate")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("timestamp without time zone")
                        .HasDefaultValueSql("CURRENT_TIMESTAMP");

                    b.Property<DateTime>("ExpirationDate")
                        .HasColumnType("timestamp without time zone");

                    b.Property<int>("ExtensionId")
                        .HasColumnType("integer");

                    b.Property<int?>("ModelId")
                        .HasColumnType("integer");

                    b.Property<int?>("UserId")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("ExtensionId");

                    b.HasIndex("ModelId");

                    b.HasIndex("UserId");

                    b.ToTable("ActivatedExtensions");
                });

            modelBuilder.Entity("DigitalTwin.DAL.Models.DigitalModel", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<DateTime>("CreateDate")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("timestamp without time zone")
                        .HasDefaultValueSql("CURRENT_TIMESTAMP");

                    b.Property<int>("ProductId")
                        .HasColumnType("integer");

                    b.Property<int>("UserId")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("ProductId");

                    b.HasIndex("UserId");

                    b.ToTable("DigitalModels");
                });

            modelBuilder.Entity("DigitalTwin.DAL.Models.Extension", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<bool>("ForUser")
                        .HasColumnType("boolean");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<decimal>("Price")
                        .HasColumnType("numeric");

                    b.HasKey("Id");

                    b.HasIndex("Name")
                        .IsUnique();

                    b.ToTable("Extensions");
                });

            modelBuilder.Entity("DigitalTwin.DAL.Models.LegalEntity", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<string>("ChargeName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("ContractNumber")
                        .HasColumnType("text");

                    b.Property<string>("INN")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("SupervisorName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("UserId")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("INN")
                        .IsUnique();

                    b.HasIndex("UserId")
                        .IsUnique();

                    b.ToTable("LegalEntities");
                });

            modelBuilder.Entity("DigitalTwin.DAL.Models.Product", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<string>("Code")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<decimal?>("CurrentPrice")
                        .HasColumnType("numeric");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("Code")
                        .IsUnique();

                    b.ToTable("Products");
                });

            modelBuilder.Entity("DigitalTwin.DAL.Models.ProductPriceHistory", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<DateTime>("Date")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("timestamp without time zone")
                        .HasDefaultValueSql("CURRENT_TIMESTAMP");

                    b.Property<decimal>("Price")
                        .HasColumnType("numeric");

                    b.Property<int>("ProductId")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("ProductId");

                    b.ToTable("ProductPriceHistory");
                });

            modelBuilder.Entity("DigitalTwin.DAL.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<DateTime>("CreateDate")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("timestamp without time zone")
                        .HasDefaultValueSql("CURRENT_TIMESTAMP");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<bool>("IsActive")
                        .HasColumnType("boolean");

                    b.Property<bool>("IsIndividual")
                        .HasColumnType("boolean");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Role")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("Email")
                        .IsUnique();

                    b.ToTable("Users");
                });

            modelBuilder.Entity("DigitalTwin.DAL.Models.ActivateLink", b =>
                {
                    b.HasOne("DigitalTwin.DAL.Models.User", "User")
                        .WithOne("ActivateLink")
                        .HasForeignKey("DigitalTwin.DAL.Models.ActivateLink", "UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("DigitalTwin.DAL.Models.ActivatedExtension", b =>
                {
                    b.HasOne("DigitalTwin.DAL.Models.Extension", "Extension")
                        .WithMany("ActivatedExtensions")
                        .HasForeignKey("ExtensionId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("DigitalTwin.DAL.Models.DigitalModel", "DigitalModel")
                        .WithMany("ActivatedExtensions")
                        .HasForeignKey("ModelId");

                    b.HasOne("DigitalTwin.DAL.Models.User", "User")
                        .WithMany("ActivatedExtensions")
                        .HasForeignKey("UserId");

                    b.Navigation("DigitalModel");

                    b.Navigation("Extension");

                    b.Navigation("User");
                });

            modelBuilder.Entity("DigitalTwin.DAL.Models.DigitalModel", b =>
                {
                    b.HasOne("DigitalTwin.DAL.Models.Product", "Product")
                        .WithMany("DigitalModels")
                        .HasForeignKey("ProductId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("DigitalTwin.DAL.Models.User", "User")
                        .WithMany("DigitalModels")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Product");

                    b.Navigation("User");
                });

            modelBuilder.Entity("DigitalTwin.DAL.Models.LegalEntity", b =>
                {
                    b.HasOne("DigitalTwin.DAL.Models.User", "User")
                        .WithOne("LegalEntity")
                        .HasForeignKey("DigitalTwin.DAL.Models.LegalEntity", "UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("DigitalTwin.DAL.Models.ProductPriceHistory", b =>
                {
                    b.HasOne("DigitalTwin.DAL.Models.Product", "Product")
                        .WithMany("ProductPriceHistory")
                        .HasForeignKey("ProductId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Product");
                });

            modelBuilder.Entity("DigitalTwin.DAL.Models.DigitalModel", b =>
                {
                    b.Navigation("ActivatedExtensions");
                });

            modelBuilder.Entity("DigitalTwin.DAL.Models.Extension", b =>
                {
                    b.Navigation("ActivatedExtensions");
                });

            modelBuilder.Entity("DigitalTwin.DAL.Models.Product", b =>
                {
                    b.Navigation("DigitalModels");

                    b.Navigation("ProductPriceHistory");
                });

            modelBuilder.Entity("DigitalTwin.DAL.Models.User", b =>
                {
                    b.Navigation("ActivatedExtensions");

                    b.Navigation("ActivateLink");

                    b.Navigation("DigitalModels");

                    b.Navigation("LegalEntity");
                });
#pragma warning restore 612, 618
        }
    }
}
