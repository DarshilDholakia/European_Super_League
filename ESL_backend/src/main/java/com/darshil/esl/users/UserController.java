package com.darshil.esl.users;

import com.darshil.esl.users.User;
import com.darshil.esl.users.UserService;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


@RestController
@RequestMapping("users")
public class UserController {
    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    //User Options
    //Add Patient
    @PostMapping
    public void addPatient(@Valid @RequestBody User user)
    { userService.addNewUser(user);}

    //Get all patients
    @GetMapping
    public List<User> getUsers() {return
    userService.findAllUsers();}

    //Update User details
    @PutMapping("{id}")
    public void updateUserbyId(@RequestBody User user, @PathVariable("id") Integer id) {
        userService.updateUser(id, user);
    }

    // Delete patient by ID
    @DeleteMapping("{id}")
    public void deleteUser(@PathVariable("id") Integer id){
        userService.deleteUserById(id);}


}
