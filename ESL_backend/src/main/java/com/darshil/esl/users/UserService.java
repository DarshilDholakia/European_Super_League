package com.darshil.esl.users;

import com.darshil.esl.exception.EmptyFieldException;
import com.darshil.esl.exception.InvalidRequestException;
import com.darshil.esl.exception.UserNotFoundException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
public class UserService {
    private UserDao userDao;

    public UserService(UserDao userDao) {

        this.userDao = userDao;
    }

    public boolean doesUserWithIdExist(Integer userId) {
        return userDao
                .selectAllUsers()
                .stream()
                .anyMatch(p -> Objects.equals(p.getId(),userId));
    }

    public int addNewUser(User user) {
        if(user == null){
            throw new EmptyFieldException("User Field cannot be empty, Please try again");
        }
        if (user.getEmail() == null ||
            user.getPassword() == null ||
            user.getTeamName() == null) {
            throw new EmptyFieldException("User cannot have empty fields");
        }

        String uInput;
        uInput = user.getEmail();
            Pattern pattern = Pattern.compile("[a-zA-Z0-9_+&*-]+@" +
                    "@gmail.com" +
                    "@yahoo.co.uk" +
                    "@live.com");
            Matcher matcher = pattern.matcher(uInput);
            boolean isSpecialCharacterPresentInInput = matcher.find();
            if (!isSpecialCharacterPresentInInput) {
                //Throw new InvalidEmailExcpetion
                System.out.println("Processing Thank you");
            }
            else{
                //Add InvalidEmailException
                System.out.println("The email input is invalid, please check again");
            }


        boolean exists = doesUserWithIdExist(user.getId());
        if (exists){
            throw new RuntimeException("User with id" + user.getId() + " already exists");
        }
        //TODO Input potential function to check

        int result = userDao.insertUser(user);
        if(result != 1) {
            throw new InvalidRequestException("Could not register new user");
        } else {
            return 1;
        }

    }

    public User findUserById(Integer id) {
        boolean exists = doesUserWithIdExist(id);
        if (exists) {
           try {
                return userDao.selectUserById(id);
            } catch(EmptyResultDataAccessException e) {
                throw new UserNotFoundException("User with ID" + id + "not found" );
            }
        }
        return userDao.selectUserById(id);
    }

    public List<User> findAllUsers() {
        try {
            return userDao.selectAllUsers();
        } catch (EmptyResultDataAccessException e) {
           throw new UserNotFoundException("No User List Found.");
        }
    }

    public int updateUser(Integer id, User update) {
        if (update == null) {
            throw new IllegalArgumentException("User cannot be null");
        }else if (update.getEmail() == null ||
                update.getPassword() == null ||
                update.getTeamName() == null) {
            throw new EmptyFieldException("User cannot have empty fields");
        } else {
            try {
                return userDao.updateUser(id, update);
            } catch (EmptyResultDataAccessException e) {
                throw new UserNotFoundException("User with id " + id + "not found");
            }
        }

    }
    public int deleteUserById(Integer id) {
        boolean exists = doesUserWithIdExist(id);
        if (exists) {
            User delUser = userDao
                    .selectUserById(id);
            return userDao.deleteUser(id);
        } else {
            throw new UserNotFoundException("Patient with id" + id + " not found");
        }
    }

}
