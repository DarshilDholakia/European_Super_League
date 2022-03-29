package com.darshil.esl.assignment;

import com.darshil.esl.players.Player;

import java.util.List;

public interface AssignmentDao {
    List<Player> selectAllPlayersForUser(Integer user_id);
//    Player selectPlayerForUser(Integer user_id); MAYBE AN EXTENSION? STATS PAGE FOR EACH PLAYER
    int insertAssignment(Assignments assignments); //lets user add a player to their team
    int deleteAssignment(Integer assignment_id); //lets user remove player from their team
//    int updateAssignment(Integer assignment_id, Integer user_id, Integer player_id);
}
