package com.cts.training.stockexchangeservice;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;

import org.springframework.stereotype.Component;


public class StockExchangeDTO implements Serializable{

	
	private int id;
	private String stockexchangename;
	private String brief;
	private String address;
	private String remarks;
	
	public StockExchangeDTO() {
		
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getStockexchangename() {
		return stockexchangename;
	}

	public void setStockexchangename(String stockexchangename) {
		this.stockexchangename = stockexchangename;
	}

	public String getBrief() {
		return brief;
	}

	public void setBrief(String brief) {
		this.brief = brief;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	public StockExchangeDTO(int id, String stockexchangename, String brief, String address, String remarks) {
		super();
		this.id = id;
		this.stockexchangename = stockexchangename;
		this.brief = brief;
		this.address = address;
		this.remarks = remarks;
	}

	@Override
	public String toString() {
		return "StockExchange [id=" + id + ", stockexchangename=" + stockexchangename + ", brief=" + brief
				+ ", address=" + address + ", remarks=" + remarks + "]";
	}

	
}
