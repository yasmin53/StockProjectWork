package com.cts.training.userservice;

import java.util.List;

public interface UserService {
	
	public List<UserDTO> getAllUsers();
	public UserDTO getUserById(int id);
	
	public void deleteUser(int id);
	public UserDTO updateUser(UserDTO user);
	public boolean activateUser(String email);
	UserDTO insert(UserDTO userDTO);
	public UserDTO getUserByUsernameAndPassword(String username, String password);

}













