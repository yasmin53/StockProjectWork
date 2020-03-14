package com.cts.training.stockexchangeservice;

import java.util.List;


public interface StockExchangeService {
	
	public List<StockExchangeDTO> getAllStockExchanges();
	public StockExchangeDTO getStockExchangeById(int id);
	public StockExchangeDTO saveStockExchange(StockExchangeDTO stockexchange);
	public void deleteStockExchange(int id);
	public StockExchangeDTO updateStockExchange(StockExchangeDTO stockexchange);
	public boolean activateStockExchange(String email);
	StockExchangeDTO insert(StockExchangeDTO stockexchangeDTO);


}
