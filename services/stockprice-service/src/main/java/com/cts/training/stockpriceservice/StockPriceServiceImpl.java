   package com.cts.training.stockpriceservice;
import java.io.InputStream;
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.ZoneId;
import java.time.format.DateTimeParseException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import com.cts.training.stockpriceservice.StockPrice;
import com.cts.training.stockpriceservice.StockPriceRepo;
import com.cts.training.stockpriceservice.StockPriceService;
@Service
public class StockPriceServiceImpl implements StockPriceService {
	Logger logger=LoggerFactory.getLogger(this.getClass());
	@Autowired
	StockPriceRepo stockPriceRepo; 
	@Override
	public 	StockPrice addStockPrice(StockPrice stockPrice) {
		stockPriceRepo.save(stockPrice);
	    return stockPrice;
	}
	@Override
	public List<StockPrice> getAllStockPrices(){
		List<StockPrice> entities = stockPriceRepo.findAll();
		List<StockPrice> stockPrices = new ArrayList<StockPrice>();
		for(StockPrice entity: entities) {
			StockPrice stockPrice = new StockPrice();
			BeanUtils.copyProperties(entity, stockPrice);
			stockPrices.add(stockPrice);
		}
		logger.info("Entity: "+entities);
		logger.info("DTO: "+stockPrices);
		return stockPrices;
	}
	@Override
	public void deleteStockPrice(int id) {
		stockPriceRepo.deleteById(id);
	}
	@Override
	public StockPrice getStockPriceById(int id){
		Optional<StockPrice> stockPrices = stockPriceRepo.findById(id);
		StockPrice stockPrice = new StockPrice();
		BeanUtils.copyProperties(stockPrices.orElse(new StockPrice()), stockPrice);
		return stockPrice;
	}
	@Override
	public StockPrice updateStockPrice(StockPrice stockPrice) {
		stockPriceRepo.save(stockPrice);
		return stockPrice;
	}
	@Override
	public ImportSummary addStockPricesFromExcelSheet(MultipartFile file) throws Exception {
		InputStream in = file.getInputStream();
		int currentRowNum = 1;
		int currentCellNum = 0;
		LocalDate startDate = LocalDate.MAX;
		LocalDate endDate = LocalDate.MIN;
		List<String> duplicates = new ArrayList<String>();
		List<StockPrice> stockPricesEntities = new ArrayList<StockPrice>();
		Set<String> companyCodes = new HashSet<String>();
		Set<String> stockExchanges = new HashSet<String>();
		if (file.getOriginalFilename().endsWith(".xls")) {
			try (HSSFWorkbook workbook = new HSSFWorkbook(in)) {
				HSSFSheet stockPricesSheet = workbook.getSheetAt(0);
				HSSFRow row = stockPricesSheet.getRow(currentRowNum);
				while (row != null && row.getCell(0) != null) {
					String companyCode = row.getCell(currentCellNum++).getStringCellValue().trim();
					String stockExchange = row.getCell(currentCellNum++).getStringCellValue().trim();
					double currentPrice = (double) row.getCell(currentCellNum++).getNumericCellValue();
					companyCodes.add(companyCode);
					stockExchanges.add(stockExchange);
					LocalDate date = row.getCell(currentCellNum++).getDateCellValue().toInstant()
							.atZone(ZoneId.of("+05:30")).toLocalDate();
					startDate = date.isBefore(startDate) ? date : startDate;
					endDate = date.isAfter(endDate) ? date : endDate;
					LocalTime time = row.getCell(currentCellNum++).getDateCellValue().toInstant()
							.atZone(ZoneId.of("+05:30")).toLocalTime();
					if (!stockPriceRepo.getIfAlreadyExists(companyCode, stockExchange, date, time).isPresent()) {
						StockPrice stockPriceEntity = new StockPrice(0,companyCode, stockExchange,
								currentPrice, date, time);
						stockPricesEntities.add(stockPriceEntity);
					} else {
						duplicates.add("The record at row " + (currentRowNum + 1) + " is duplicate.");
					}
					row = stockPricesSheet.getRow(++currentRowNum);
					currentCellNum = 0;
				}
			} catch (NullPointerException e) {
				throw new Exception("The file has some missing value at " + (currentRowNum + 1) + ":" + (currentCellNum)
						+ " (row:column). ");
			} catch (IllegalStateException e) {
				throw new Exception("The file has some wrong value at " + (currentRowNum + 1) + ":" + (currentCellNum)
						+ " (row:column). ");
			} catch (DateTimeParseException e) {
				throw new Exception("The file has wrong date/time format value at " + (currentRowNum + 1) + ":"
						+ (currentCellNum) + " (row:column). ");
			}
		} else if (file.getOriginalFilename().endsWith(".xlsx")) {
			try (XSSFWorkbook workbook = new XSSFWorkbook(in)) {
				XSSFSheet stockPricesSheet = workbook.getSheetAt(0);
				System.out.println(stockPricesSheet.getLastRowNum());
				XSSFRow row = stockPricesSheet.getRow(currentRowNum);
				while (row != null && row.getCell(0) != null) {
					String companyCode = row.getCell(currentCellNum++).getStringCellValue().trim();
					companyCode = companyCode.trim();
					String stockExchange = row.getCell(currentCellNum++).getStringCellValue().trim();
					long currentPrice = (long) row.getCell(currentCellNum++).getNumericCellValue();
//					if (!serviceProxy.getAllStockExchangesNames().contains(stockExchangeName)) {
//						throw new Exception("The file has unkown stock exchange value at " + (currentRowNum + 1) + ":"
//								+ (currentCellNum - 1) + " (row:column). ");
//					}
//					if (!serviceProxy.getCompanyByStockCodeAndExchangeName(companyCode, stockExchangeName)) {
//						System.out.println(serviceProxy.getCompanyByStockCodeAndExchangeName(companyCode, stockExchangeName));
//						throw new Exception("The file has unkown company code value at " + (currentRowNum + 1) + ":"
//								+ (currentCellNum - 2) + " (row:column). ");
//					}
					companyCodes.add(companyCode);
					stockExchanges.add(stockExchange);
					LocalDate date = row.getCell(currentCellNum++).getDateCellValue().toInstant()
							.atZone(ZoneId.of("+05:30")).toLocalDate();
					startDate = date.isBefore(startDate) ? date : startDate;
					endDate = date.isAfter(endDate) ? date : endDate;
					LocalTime time = row.getCell(currentCellNum++).getDateCellValue().toInstant()
							.atZone(ZoneId.of("+05:30")).toLocalTime();
 
					if (!stockPriceRepo.getIfAlreadyExists(companyCode, stockExchange, date, time).isPresent()) {
						StockPrice stockPriceEntity = new StockPrice(0,companyCode, stockExchange,
								currentPrice, date, time);
						stockPricesEntities.add(stockPriceEntity);
					} else {
						duplicates.add("The record at row " + (currentRowNum + 1) + " is duplicate.");
					}
					row = stockPricesSheet.getRow(++currentRowNum);
					currentCellNum = 0;
				}
			} catch (NullPointerException e) {
				throw new Exception("The file has some missing value at " + (currentRowNum + 1) + ":" + (currentCellNum)
						+ " (row:column). ");
			} catch (IllegalStateException e) {
				throw new Exception("The file has some wrong value at " + (currentRowNum + 1) + ":" + (currentCellNum)
						+ " (row:column). ");
			} catch (DateTimeParseException e) {
				throw new Exception("The file has wrong date/time format value at " + (currentRowNum + 1) + ":"
						+ (currentCellNum) + " (row:column). ");
			}
		}
		stockPriceRepo.saveAll(stockPricesEntities);
		return new ImportSummary(stockPricesEntities.size(), startDate, endDate, companyCodes, stockExchanges,
				duplicates);
	}
	
	@Override
	public List<StockPriceOnPeriod>getCompanyStockPriceBetween(String companyCode,String stockExchange,LocalDate startDate,LocalDate endDate)
	{
		return stockPriceRepo.getStockPriceBetweenDates(companyCode, stockExchange, startDate, endDate);
	}
}