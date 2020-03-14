package com.cts.training.stockpriceservice;
import java.time.LocalDate;
import java.util.List;
import org.springframework.web.multipart.MultipartFile;
import com.cts.training.stockpriceservice.StockPrice;
public interface StockPriceService {
	public StockPrice addStockPrice(StockPrice stockPrice);
    public void deleteStockPrice(int id);
    public StockPrice updateStockPrice(StockPrice stockPrice);
    public List<StockPrice> getAllStockPrices();
    public StockPrice getStockPriceById(int id);
	public ImportSummary addStockPricesFromExcelSheet(MultipartFile file) throws Exception;
	List<StockPriceOnPeriod> getCompanyStockPriceBetween(String companyCode, String stockExchange, LocalDate startDate,
			LocalDate endDate);
}