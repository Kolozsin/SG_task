package com.kolozsin.SG_TASK.controller;

import com.kolozsin.SG_TASK.DTO.LoginRequest;
import com.kolozsin.SG_TASK.Model.Password;
import com.kolozsin.SG_TASK.Model.User;
import com.kolozsin.SG_TASK.repository.PasswordRepository;
import com.kolozsin.SG_TASK.repository.UserRepository;
import jdk.javadoc.doclet.Reporter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.Option;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    PasswordRepository passwordRepository;

    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers() {
        try {
            List<User> users = new ArrayList<User>(userRepository.findAll().stream()
                    .toList());
            if (users.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(users, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<Boolean> login(@RequestBody LoginRequest loginRequest) {
        boolean response = false;
        try {
            long id = loginRequest.getLoginUser().getId();
            if (id == -1) {
                Optional<User> currentUser = userRepository.findAll().stream().filter((user ->
                        user.getUserName().equals(loginRequest.getLoginUser().getUserName()))).findFirst();
                if(currentUser.isPresent()){
                    id = currentUser.get().getId();
                }
                else{
                    return new ResponseEntity<>(response, HttpStatus.UNAUTHORIZED);
                }
            }

            User user = userRepository.getReferenceById(id);
            Password maybePassword = passwordRepository.getReferenceById(id);
            if (user.getUserName().equals(loginRequest.getLoginUser().getUserName())
                    && maybePassword.getPassword().equals(loginRequest.getPassword())) {
                response = true;
            }
        } catch (Exception e) {
            System.out.println(e);
        }
        if (response) {
            return new ResponseEntity<>(response, HttpStatus.OK);
        }
        return new ResponseEntity<>(response, HttpStatus.UNAUTHORIZED);
    }
}
