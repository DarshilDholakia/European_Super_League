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

    @GetMapping(path = "assignments/all")
    public List<Assignments> assignmentList() {
        return assignmentService.selectAllAssignments();
    }

    @GetMapping(path = "assignments/user_id/{user_id}")
    public List<Player> selectAllPlayersForUser(@PathVariable("user_id") Integer user_id) {
        return assignmentService.selectAllPlayersForUser(user_id);
    }

    @GetMapping(path = "assignments/user_id/{user_id}/player_id/{player_id}")
    public List<Assignments> selectAssignmentByUserIdAndPlayerId(@PathVariable("user_id") Integer user_id, @PathVariable("player_id") Integer player_id) {
        return assignmentService.selectAssignmentByUserIdAndPlayerId(user_id, player_id);
    }

    @PostMapping(path = "assignments")
    public void insertAssignments(@RequestBody Assignments assignments) {
        assignmentService.insertAssignment(assignments);
    }

    @DeleteMapping(path = "assignments/assignment_id/{assignment_id}")
    public void deleteAssignment(@PathVariable("assignment_id") Integer id) {
        assignmentService.deleteAssignment(id);
    }

    @PutMapping (path = "assignments/assignment_id/{assignment_id}")
    public void updateAssignment(@PathVariable("assignment_id") Integer assignment_id, @RequestBody Assignments assignment) {
        assignmentService.updateAssignment(assignment_id,assignment);
    }


}
