package com.darshil.esl.assignment;

import com.darshil.esl.players.Player;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AssignmentController {

    private AssignmentService assignmentService;

    public AssignmentController(AssignmentService assignmentService) {
        this.assignmentService = assignmentService;
    }

    @GetMapping(path = "assignments/user_id/{user_id}")
    public List<Player> selectAllPlayersForUser(@PathVariable ("user_id") Integer user_id) {
        return assignmentService.selectAllPlayersForUser(user_id);
    }

    @PostMapping(path = "assignments")
    public void insertAssignments(@RequestBody Assignments assignments) {
        assignmentService.insertAssignment(assignments);
    }

    @DeleteMapping(path = "assignments/assignment_id/{assignment_id}")
    public void deleteAssignement(@PathVariable("assignment_id") Integer id) {
        assignmentService.deleteAssignment(id);
    }
}
