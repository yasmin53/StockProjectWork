package com.cts.training.userservice;
import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.cts.training.userservice.UserDTO;
import com.cts.training.userservice.User;
import com.cts.training.userservice.UserRepo;
import com.cts.training.userservice.UserService;
@Service
public class UserServiceImpl implements UserService{
	@Autowired
	UserRepo userRepo;
	@Override
	public UserDTO insert(UserDTO ud) {
		User user=new User();
		BeanUtils.copyProperties(ud, user);
		userRepo.save(user);
		return ud;
	}
	@Override
	public UserDTO updateUser(UserDTO ud) {
		User user=new User();
		BeanUtils.copyProperties(ud, user);
		BeanUtils.copyProperties(userRepo.save(user), ud);
		return ud;
	}
	@Override
	public void deleteUser(int id) {
		userRepo.deleteById(id);
	}
	@Override
	public UserDTO getUserById(int id) throws NoSuchElementException{
		Optional<User> user=userRepo.findById(id);
		UserDTO userDTO=new UserDTO();
		BeanUtils.copyProperties(user.get(), userDTO);
		// TODO Auto-generated method stub
		return userDTO;
	}
	@Override
	public List<UserDTO> getAllUsers() {
		List<User> entities = userRepo.findAll();
		List<UserDTO> userList = new ArrayList<UserDTO>();
		for(User entity: entities) {
			UserDTO userDTO = new UserDTO();
			BeanUtils.copyProperties(entity, userDTO);
			userList.add(userDTO);
		}
		System.out.println("Entity: "+entities);
		System.out.println("DTO: "+userList);
		return userList;
	}
	@Override
	public UserDTO getUserByUsernameAndPassword(String username, String password) {
		Optional<User> user=userRepo.findByUsernameAndPassword(username, password);
		UserDTO userDTO=new UserDTO();
		BeanUtils.copyProperties(user.get(), userDTO);
		return userDTO;
	}
	@Override
	public boolean activateUser(String email) {
		// TODO Auto-generated method stub
		return false;
	}
}