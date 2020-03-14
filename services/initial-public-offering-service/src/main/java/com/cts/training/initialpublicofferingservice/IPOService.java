package com.cts.training.initialpublicofferingservice;

import java.util.List;


public interface IPOService {

	public List<IPODTO> getAllIPOs();
	public IPODTO getIPOById(int id);
	public IPODTO saveIPO(IPODTO ipo);
	public void deleteIPO(int id);
	public IPODTO updateIPO(IPODTO ipo);
	public boolean activateIPO(String email);
	IPODTO insert(IPODTO ipoDTO);

	
}
