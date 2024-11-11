package com.excelr.fillcart.service;

import com.excelr.fillcart.dto.UserDto;
import com.excelr.fillcart.model.User;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class UserDtoService {

    public User dtoToUser(UserDto dto){
        User user = new User();
        user.setFullName(dto.getFullName());
        user.setPhoneNumber(dto.getPhoneNumber());
        user.setEmail(dto.getEmail());
        user.setAddress(dto.getAddress());
        user.setPassword(dto.getPassword());//BCrypt password
        user.setCreatedAt(LocalDateTime.now());
        return user;
    }
}
