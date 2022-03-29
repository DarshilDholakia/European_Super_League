package com.darshil.esl.users;

import com.darshil.esl.users.User;
import com.darshil.esl.users.UserService;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


@RestController
public class UserController {
    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    //User Options
    //Add Patient
    @PostMapping(path="user")
    public void addUser(@Valid @RequestBody User user)
    { userService.addNewUser(user);}

    //Get all patients
    @GetMapping(path="user/all")
    public List<User> getUsers() {return
    userService.findAllUsers();}

    //Update User details
    @PutMapping(path="user/{id}")
    public void updateUserById(@RequestBody User user, @PathVariable("id") Integer id) {
        userService.updateUser(id, user);
    }

    // Delete patient by ID
    @DeleteMapping(path="user/{id}")
    public void deleteUserById(@PathVariable("id") Integer id){
        userService.deleteUserById(id);}


}
