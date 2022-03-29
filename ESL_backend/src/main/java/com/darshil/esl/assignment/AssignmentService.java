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
        } catch (Exception e) {
            throw new InvalidRequestException("No players found. Try again.");
        }
    }

    public void insertAssignment(Assignments assignments) {
        try {
            assignmentDao.insertAssignment(assignments);
        } catch(RowNotChangedException e) {
            throw new IllegalStateException("Assignment was not added.");
        }
    }

    public void deleteAssignment(Integer assignment_id) {
        try {
            try {assignmentDao.deleteAssignment(assignment_id);
        } catch (RowNotChangedException e) {
                throw new IllegalStateException("Assignment with ID " + assignment_id + "was not deleted!");
            }}
        catch (EmptyResultDataAccessException e) {
            throw new IllegalStateException("Assignment with ID " + assignment_id + "does not exist!");
        }
    }
}
