package com.cts.training.sectorservice;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service

public class SectorServiceImpl implements SectorService{

	@Autowired
	SectorRepo sectorRepo;
	@Override
	public SectorDTO insert(SectorDTO sectorDTO) {
		Sector sector = new Sector();
		BeanUtils.copyProperties(sectorDTO,sector);
		sectorRepo.save(sector);
		return sectorDTO;
	}
	@Override
	public List<SectorDTO> getAllSectors() {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public SectorDTO getSectorById(int id) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public SectorDTO saveSector(SectorDTO sector) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public void deleteSector(int id) {
		// TODO Auto-generated method stub
		
	}
	@Override
	public SectorDTO updateSector(SectorDTO sector) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public boolean activateSector(String email) {
		// TODO Auto-generated method stub
		return false;
	}
	

}
