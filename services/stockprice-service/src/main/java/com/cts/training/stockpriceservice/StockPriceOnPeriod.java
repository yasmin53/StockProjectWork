package com.cts.training.stockpriceservice;

import java.time.LocalDate;

public class StockPriceOnPeriod {
	
	private String companyCode;
	private String stockExchange;
	private LocalDate dataPoint;//day mon or year
	private double dataValue;//avg price for that period
	public String getCompanyCode() {
		return companyCode;
	}
	public void setCompanyCode(String companyCode) {
		this.companyCode = companyCode;
	}
	public String getStockExchange() {
		return stockExchange;
	}
	public void setStockExchange(String stockExchange) {
		this.stockExchange = stockExchange;
	}
	public LocalDate getDataPoint() {
		return dataPoint;
	}
	public void setDataPoint(LocalDate dataPoint) {
		this.dataPoint = dataPoint;
	}
	public double getDataValue() {
		return dataValue;
	}
	public void setDataValue(double dataValue) {
		this.dataValue = dataValue;
	}
	public StockPriceOnPeriod() {
		super();
		// TODO Auto-generated constructor stub
	}
	public StockPriceOnPeriod(String companyCode, String stockExchange, LocalDate dataPoint, double dataValue) {
		super();
		this.companyCode = companyCode;
		this.stockExchange = stockExchange;
		this.dataPoint = dataPoint;
		this.dataValue = dataValue;
	}
	@Override
	public String toString() {
		return "StockPriceOnPeriod [companyCode=" + companyCode + ", stockExchange=" + stockExchange + ", dataPoint="
				+ dataPoint + ", dataValue=" + dataValue + "]";
	}
	
	
}
