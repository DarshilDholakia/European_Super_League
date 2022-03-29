package com.darshil.esl.assignment;

import com.darshil.esl.players.Player;

import java.util.List;

public interface AssignmentDao {
    List<Player> selectAllPlayersForUser(Integer user_id);
//    Player selectPlayerForUser(Integer user_id); NOT SURE IF NEEDED
    int insertAssignment(Integer user_id, Integer player_id);
    int deleteAssignment(Integer assignment_id);
    int updateAssignment(Integer assignment_id, Integer user_id, Integer player_id);
}
