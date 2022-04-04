package com.darshil.esl.users;

import com.darshil.esl.assignment.AssignmentService;
import com.darshil.esl.exception.EmptyFieldException;
import com.darshil.esl.exception.InvalidRequestException;
import com.darshil.esl.exception.UserNotFoundException;
import com.darshil.esl.players.Player;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
public class UserService {
    private UserDao userDao;
    private AssignmentService assignmentService;

    public UserService(UserDao userDao, AssignmentService assignmentService) {

        this.userDao = userDao;
        this.assignmentService = assignmentService;
    }

    public boolean doesUserWithIdExist(Integer userId) {
        return userDao
                .selectAllUsers()
                .stream()
                .anyMatch(p -> Objects.equals(p.getId(),userId));
    }

    public int addNewUser(User user) {
        checkUserInputProperties(user);

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

        List<User> allUsers = findAllUsers();
        for (int i = 0; i < allUsers.size(); i++) {
            if (allUsers.get(i).getTeamName().equals(user.getTeamName())) {
                throw new InvalidRequestException("Team name already taken!");
            }
        }

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
           throw new UserNotFoundException("No Users in the Database!");
        }
    }

    public int updateUser(Integer id, User update) {
        checkUserInputProperties(update);

        try {
            return userDao.updateUser(id, update);
        } catch (EmptyResultDataAccessException e) {
            throw new UserNotFoundException("User with id " + id + "not found");
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

    private void checkUserInputProperties(User user) {
        if(user.getTeamName() == null) {
            throw new InvalidRequestException("Team Name cannot be null");
        }
        if(user.getEmail() == null) {
            throw new InvalidRequestException("Email cannot be null");
        }
        if(user.getPassword() == null) {
            throw new InvalidRequestException("Password field cannot be null");
        }
    }


    public void tallyTotalUserPoints(List <Integer> userIdsWithPlayer) {
        for (Integer userId : userIdsWithPlayer) {
            List<Player> playerList = assignmentService.selectAllPlayersForUser(userId);
            System.out.println(playerList);
            int totalPoints = 0;

            for (Player player : playerList) {
                totalPoints += player.getPoints();

            }
            User currentUser = findUserById(userId);
            currentUser.setTotalPoints(totalPoints);
            User user = new User();
            user.setPassword(currentUser.getPassword());
            user.setTeamName(currentUser.getTeamName());
            user.setEmail(currentUser.getEmail());
            user.setTotalPoints(currentUser.getTotalPoints());
            updateUser(userId, user);
            System.out.println("user: " + user);
            System.out.println(totalPoints);
            System.out.println(currentUser);

        }

    }

}
