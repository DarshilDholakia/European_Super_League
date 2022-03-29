package com.darshil.esl.players;
import java.util.List;

public interface PlayerDao {
    List<Player> selectAllPlayers();
    Player selectPlayerById(Integer id);
    int insertPlayer(Player player);
    int deletePlayerById(Integer id);
    int updatePlayerById(Integer id, Player updatedPlayer);
    List<Player> selectPlayerByName(String player_name);
    List<Player> selectPlayersByPosition(Position player_position);
    List<Player> selectPlayersByClub(Club player_club);
}
