package com.darshil.esl.players;
import com.darshil.esl.exception.InvalidRequestException;
import com.darshil.esl.exception.PlayerNotFoundException;
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

    public Player selectPlayerById(Integer id){
        return getPlayerOrThrowNull(id);
    }

    public int insertPlayer(Player player){
        checkPlayerInputProperties(player);

        Integer rowsAffected = playerDao.insertPlayer(player); // insertPlayer will return the number of rows
        // affected as it is a sql implemented method. We created a variable for readability of this happening.
        if (rowsAffected != 1) {
            throw new IllegalStateException("Could not add player...");
        }
        return rowsAffected;
    }

    public int deletePlayerById(Integer id) {
        Player playerInDb = getPlayerOrThrowNull(id);   // Need to check this player exists first
        Integer rowsAffected = playerDao.deletePlayerById(playerInDb.getId());

        if (rowsAffected != 1) {
            throw new IllegalStateException("Could not delete player...");
        }
        return rowsAffected;
    }

    public int updatePlayerById(Integer id, Player updatedPlayer) {
        Player playerInDb = getPlayerOrThrowNull(id);   // Check person exists
        checkPlayerInputProperties(updatedPlayer);   // Check against our set of criteria for player entry properties,
        // since update method will require a new player entry

        Integer rowsAffected = playerDao.updatePlayerById(playerInDb.getId(), updatedPlayer);
        if (rowsAffected != 1) {
            throw new IllegalStateException("Could not update player...");
        }
        return rowsAffected;
    }

    public List<Player> selectPlayersByName(String player_name){

        List<Player> playerList = playerDao.selectPlayersByName(player_name);
        if (playerList==null){
            throw new InvalidRequestException("No players found for that name");
        }
        return playerList;
    }

    public List<Player> selectPlayersByPosition(Position player_position){

        List<Player> playerList = playerDao.selectPlayersByPosition(player_position);
        if (playerList==null){
            throw new InvalidRequestException("No players found for that position");
        }
        return playerList;
    }

    public List<Player> selectPlayersByClub(Club player_club){

        //check if player_club exists in enum

        List<Player> playerList = playerDao.selectPlayersByClub(player_club);
        if (playerList==null){
            throw new InvalidRequestException("No players found for that club");
        }
        return playerList;
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
        if(player.getPrice() == 0) {
            throw new InvalidRequestException("Price cannot be zero or less");
        }
        if(player.getGoals() == null) {
            throw new InvalidRequestException("Goals cannot be null");
        }
        if(player.getGoals() < 0) {
            throw new InvalidRequestException("Goals cannot be negative");
        }
        if(player.getAssists() == null) {
            throw new InvalidRequestException("Assists cannot be null");
        }
        if(player.getAssists() < 0) {
            throw new InvalidRequestException("Assists cannot be negative");
        }
        if(player.getRed_cards() == null) {
            throw new InvalidRequestException("Red cards cannot be null");
        }
        if(player.getRed_cards() < 0) {
            throw new InvalidRequestException("Red cards cannot be negative");
        }
        if(player.getYellow_cards() == null) {
            throw new InvalidRequestException("Yellow cards cannot be null");
        }
        if(player.getYellow_cards() < 0) {
            throw new InvalidRequestException("Yellow cards cannot be negative");
        }
        if(player.getClean_sheets() == null) {
            throw new InvalidRequestException("Clean sheets cannot be null");
        }
        if(player.getClean_sheets() < 0) {
            throw new InvalidRequestException("Clean sheets cannot be negative");
        }
        if(player.getPoints() == null) {
            throw new InvalidRequestException("Points cannot be null");
        }
    }


}
