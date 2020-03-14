package com.cts.training.stockexchangeservice;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class StockExchangeServiceImpl implements StockExchangeService {
	
	@Autowired
	StockExchangeRepo stockexchangeRepo;
	@Override
	public StockExchangeDTO insert(StockExchangeDTO stockexchangeDTO) {
		StockExchange stockexchange = new StockExchange();
		BeanUtils.copyProperties(stockexchangeDTO,stockexchange);
		stockexchangeRepo.save(stockexchange);
		return stockexchangeDTO;

}
	@Override
	public List<StockExchangeDTO> getAllStockExchanges() {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public StockExchangeDTO getStockExchangeById(int id) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public StockExchangeDTO saveStockExchange(StockExchangeDTO stockexchange) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public void deleteStockExchange(int id) {
		// TODO Auto-generated method stub
		
	}
	@Override
	public StockExchangeDTO updateStockExchange(StockExchangeDTO stockexchange) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public boolean activateStockExchange(String email) {
		// TODO Auto-generated method stub
		return false;
	}
}