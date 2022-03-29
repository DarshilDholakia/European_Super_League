package com.darshil.esl.assignment;

import com.darshil.esl.InvalidRequestException;
import com.darshil.esl.RowNotChangedException;
import com.darshil.esl.players.Player;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class AssignmentService {

    private AssignmentDao assignmentDao;

    public AssignmentService (AssignmentDao assignmentDao) {
        this.assignmentDao = assignmentDao;
    }

    public List<Player> selectAllPlayersForUser(Integer user_id) {
        try {
            return assignmentDao.selectAllPlayersForUser(user_id);
        }
        catch (Exception e) {
            throw new InvalidRequestException("No players found. Try again.");
        }
    }

    public void insertAssignment(Assignments assignments) {
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
        Integer rowsAffected = assignmentDao.deleteAssignment(assignment_id);
        if (rowsAffected != 1) {
            throw new RowNotChangedException("Assignment with ID " + assignment_id + " was not deleted");
        }
    }
    //TODO: include check for whenever an id of assignment to be deleted is inserted into the URL and that assignment doesn't exist (player service)
}
