package com.cts.training.initialpublicofferingservice;

import java.io.Serializable;
import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@Table(name="ipos")
@XmlRootElement
public class IPODTO implements Serializable{

	private static final long serialVersionUID = 2575561862105094930L;
	@Id
	private int id;
	private String companyname;
	private String stockexchanges;
	private double pricepershare;
	private int totalshares;
	private LocalDateTime opendatetime;
	private String remarks;
	
	public IPODTO() {
		
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCompanyname() {
		return companyname;
	}

	public void setCompanyname(String companyname) {
		this.companyname = companyname;
	}

	public String getStockexchanges() {
		return stockexchanges;
	}

	public void setStockexchanges(String stockexchanges) {
		this.stockexchanges = stockexchanges;
	}

	public double getPricepershare() {
		return pricepershare;
	}

	public void setPricepershare(double pricepershare) {
		this.pricepershare = pricepershare;
	}

	public int getTotalshares() {
		return totalshares;
	}

	public void setTotalshares(int totalshares) {
		this.totalshares = totalshares;
	}

	public LocalDateTime getOpendatetime() {
		return opendatetime;
	}

	public void setOpendatetime(LocalDateTime opendatetime) {
		this.opendatetime = opendatetime;
	}

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	@Override
	public String toString() {
		return "IPODTO [id=" + id + ", companyname=" + companyname + ", stockexchanges=" + stockexchanges
				+ ", pricepershare=" + pricepershare + ", totalshares=" + totalshares + ", opendatetime=" + opendatetime
				+ ", remarks=" + remarks + "]";
	}

	public IPODTO(int id, String companyname, String stockexchanges, double pricepershare, int totalshares,
			LocalDateTime opendatetime, String remarks) {
		super();
		this.id = id;
		this.companyname = companyname;
		this.stockexchanges = stockexchanges;
		this.pricepershare = pricepershare;
		this.totalshares = totalshares;   
		this.opendatetime = opendatetime;
		this.remarks = remarks;
	}

	

}
