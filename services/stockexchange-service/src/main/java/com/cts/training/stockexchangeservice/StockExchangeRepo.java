package com.cts.training.stockexchangeservice;

import org.springframework.data.jpa.repository.JpaRepository;


public interface StockExchangeRepo extends JpaRepository<StockExchange, Integer> {

}
