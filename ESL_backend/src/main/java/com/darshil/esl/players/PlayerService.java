package com.darshil.esl.players;
import com.darshil.esl.InvalidRequestException;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlayerService {

    private PlayerDao playerDao;

    public PlayerService(@Qualifier("player_postgres") PlayerDao playerDao){
        this.playerDao = playerDao;
    }

    public List<Player> selectAllPlayers(){
        List<Player> playerList = playerDao.selectAllPlayers();
        if (playerList==null){
            throw new InvalidRequestException("There were no players found");
        }
        return playerList;
    }

    public Player getPlayerById(Integer id){
        return getPlayerOrThrowNull(id);
    }

    private Player getPlayerOrThrowNull(Integer id){
        if (id == null || id <= 0){
            throw new PlayerNotFoundException("Player id is invalid");
        }
        Player player = playerDao.selectPlayerById(id);
        if(player == null){
            throw new PlayerNotFoundException("Player with id " + id + " doesn't exist");
        }
        return player;
    }

    private void checkPlayerInputProperties(Player player) {
        if(player.getPlayer_name() == null) {
            throw new InvalidRequestException("Name cannot be null");
        }
        if(player.getPlayer_position() == null) {
            throw new InvalidRequestException("Position cannot be null");
        }
        if(player.getPlayer_club() == null) {
            throw new InvalidRequestException("Club cannot be null");
        }
        if(player.getPrice() == null) {
            throw new InvalidRequestException("Price cannot be null");
        }
        if(player.getGoals() == null) {
            throw new InvalidRequestException("Goals cannot be null");
        }
        if(player.getAssists() == null) {
            throw new InvalidRequestException("Assists cannot be null");
        }
        if(player.getRed_cards() == null) {
            throw new InvalidRequestException("Red cards cannot be null");
        }
        if(player.getYellow_cards() == null) {
            throw new InvalidRequestException("Yellow cards cannot be null");
        }
        if(player.getClean_sheets() == null) {
            throw new InvalidRequestException("Clean sheets cannot be null");
        }
        if(player.getPoints() == null) {
            throw new InvalidRequestException("Points cannot be null");
        }
    }
}
