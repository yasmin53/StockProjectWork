package com.cts.training.initialpublicofferingservice;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class IPOServiceImpl implements IPOService {
	
	@Autowired
	IPORepo ipoRepo;
	@Override
	public IPODTO insert(IPODTO ipodto) {
		IPO ipo = new IPO();
		BeanUtils.copyProperties(ipodto,ipo);
		ipoRepo.save(ipo);
		return ipodto;
	}
	@Override
	public List<IPODTO> getAllIPOs() {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public IPODTO getIPOById(int id) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public IPODTO saveIPO(IPODTO ipo) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public void deleteIPO(int id) {
		// TODO Auto-generated method stub
		
	}
	@Override
	public IPODTO updateIPO(IPODTO ipo) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public boolean activateIPO(String email) {
		// TODO Auto-generated method stub
		return false;
	}
	
	

}




