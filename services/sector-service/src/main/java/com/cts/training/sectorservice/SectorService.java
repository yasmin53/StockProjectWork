package com.cts.training.sectorservice;

import java.util.List;



public interface SectorService {
	
	public List<SectorDTO> getAllSectors();
	public SectorDTO getSectorById(int id);
	public SectorDTO saveSector(SectorDTO sector);
	public void deleteSector(int id);
	public SectorDTO updateSector(SectorDTO sector);
	public boolean activateSector(String email);
	SectorDTO insert(SectorDTO sectorDTO);


}
   