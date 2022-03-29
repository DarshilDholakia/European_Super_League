package com.darshil.esl.players;
import java.util.List;

public interface PlayerDao {
    List<Player> selectAllPlayers();
    Player selectPlayerById(Integer id);
    int insertPlayer(Player player);
    int deletePlayer(Integer id);
    int updatePlayer(Integer id, Player update);
}
