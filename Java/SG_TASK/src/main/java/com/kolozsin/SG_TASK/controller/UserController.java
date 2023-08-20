package com.kolozsin.SG_TASK.controller;

import com.kolozsin.SG_TASK.Model.User;
import com.kolozsin.SG_TASK.repository.UserRepository;
import jdk.javadoc.doclet.Reporter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllTutorials() {
        try {
            /*
                In reality, I would never do something like this, but this is just a demo app with no
                usage. Passwords should never be stored like this, with the account next to it in plain
                text. And to make things worse, it should never be read up by a controller that is only
                interested in the username list.
             */
            List<User> users = new ArrayList<User>(userRepository.findAll().stream()
                    .peek(user -> user.setPassword("*"))
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
    public ResponseEntity<Boolean> login(@RequestBody User loginUser) {
        boolean response = false;
        // In a real program this should never look like this, I would search based on the id and get that. This is here just so
        // there is Stream API usage in JAVA.
        System.out.println("LOGIN WITH: username: "+ loginUser.getUserName() + "  and   password:  "+loginUser.getPassword());
        Optional<User> maybeUser = userRepository.findAll().stream().filter(user -> user.getUserName().equals(loginUser.getUserName())).findFirst();

        if(maybeUser.isPresent()){
            User user = maybeUser.get();
            if(user.getUserName().equals(loginUser.getUserName()) && user.getPassword().equals(loginUser.getPassword())) {
                response = true;
            }
        }

        if(response){
            return new ResponseEntity<>(response, HttpStatus.OK);
        }
        return new ResponseEntity<>(response, HttpStatus.UNAUTHORIZED);
    }
}
