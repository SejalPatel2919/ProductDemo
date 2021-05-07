CREATE DATABASE ProductDb 
GO  
  
USE [ProductDb]  
GO   
SET ANSI_NULLS ON  
GO  
  
SET QUOTED_IDENTIFIER ON  
GO  
  
SET ANSI_PADDING ON  
GO  
  
CREATE TABLE [dbo].[Product](  
    [ProductId] [int] IDENTITY(1,1) NOT NULL,  
    [ProductName] [varchar](50) NOT NULL,  
    [ProductDescription] [varchar](200) NULL,  
    [ProductPrice] [decimal](18, 2) NULL,  
    [ProductQuantity] [int] NULL,  
PRIMARY KEY CLUSTERED   
(  
    [ProductId] ASC  
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]  
) ON [PRIMARY]  
  
GO  
  
SET ANSI_PADDING ON  
GO