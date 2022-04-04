package com.darshil.esl.assignment;

import com.darshil.esl.exception.AssignmentNotFoundException;
import com.darshil.esl.exception.EmptyFieldException;
import com.darshil.esl.exception.InvalidRequestException;
import com.darshil.esl.exception.RowNotChangedException;
import com.darshil.esl.players.Player;
import com.darshil.esl.users.User;
import org.springframework.data.relational.core.sql.In;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AssignmentService {

    private AssignmentDao assignmentDao;

    public AssignmentService (AssignmentDao assignmentDao) {
        this.assignmentDao = assignmentDao;
    }

    public List<Assignments> selectAllAssignments() {

        List<Assignments> assignments = assignmentDao.selectAllAssignments();
        if (assignments.isEmpty()) {
            throw new InvalidRequestException("No assignments exist!");
        }
        return assignments;
    }

    public List<Player> selectAllPlayersForUser(Integer user_id) {
        checkIfIdValid(user_id);

        List<Player> assignments = assignmentDao.selectAllPlayersForUser(user_id);

        if(assignments == null) {
            throw new InvalidRequestException("No players found, please try again.");
        }
            return assignments;
    }

    public List<Integer> selectAllUsersWithPlayerId(Integer player_id) {
        checkIfIdValid(player_id);

        //Select All assignments.
        List<Assignments> allAssignments = assignmentDao.selectAllAssignments();

        //Loop through assisngments, returning the users that contain the player_id
        List<Integer> userIdsWithPlayer = new ArrayList<Integer>();
        for (Assignments assignment : allAssignments) {
            if (assignment.getPlayer_id() == player_id) {
                userIdsWithPlayer.add(assignment.getUser_id());
            }

        }
        return userIdsWithPlayer;

    }
        //

//        List<> assignments = assignmentDao.selectAllPlayersForUser(user_id);
//
//        if(assignments == null) {
//            throw new InvalidRequestException("No players found, please try again.");
//        }
//        return assignments;


    public List<Assignments> selectAssignmentByUserIdAndPlayerId(Integer user_id, Integer player_id) {
        checkIfIdValid(user_id);
        checkIfIdValid(player_id);

        List<Assignments> assignments = assignmentDao.selectAssignmentByUserIdAndPlayerId(user_id, player_id);

        if(assignments == null) {
            throw new InvalidRequestException("No assignments found, please try again.");
        }
        return assignments;
    }

    public void insertAssignment(Assignments assignments) {
        List<Player> playerList = selectAllPlayersForUser(assignments.getUser_id());
        for (int i = 0; i < playerList.size(); i++) {
            if (playerList.get(i).getId() == assignments.getPlayer_id()) {
                throw new InvalidRequestException("You already have the player!");
            }
        }

        if(assignments.getUser_id() == null) {
            throw new InvalidRequestException("User id cannot be null");
        }
        if(assignments.getPlayer_id() == null) {
            throw new InvalidRequestException("Player id cannot be null");
        }

        Integer rowsAffected = assignmentDao.insertAssignment(assignments);
        if (rowsAffected != 1) {
            throw new RowNotChangedException("Assignment was not added");
        }
    }

    public void deleteAssignment(Integer assignment_id) {
        checkIfIdValid(assignment_id);

        Assignments assignments = assignmentDao.selectAssignmentById(assignment_id);
        if (assignments == null) {
            throw new AssignmentNotFoundException("Assignment with ID " + assignment_id + " does not exist.");
        }

        Integer rowsAffected = assignmentDao.deleteAssignment(assignment_id);
        if (rowsAffected != 1) {
            throw new RowNotChangedException("Assignment with ID " + assignment_id + " was not deleted");
        }
    }

    public void updateAssignment (Integer assignment_id, Assignments assignment) {
        checkIfIdValid(assignment_id);

        Assignments assignments = assignmentDao.selectAssignmentById(assignment_id);
        if (assignments == null) {
            throw new AssignmentNotFoundException("Assignment with ID " + assignment_id + " does not exist.");
        }

        Integer rowsAffected = assignmentDao.updateAssignment(assignment_id, assignment);
        if (rowsAffected != 1) {
            throw new RowNotChangedException("Assignment with ID " + assignment_id + " was not deleted");
        }
    }

    public void checkIfIdValid(Integer id) {
        if (id == null || id <= 0) {
            throw new InvalidRequestException("Please enter a valid ID");
        }
    }
}
