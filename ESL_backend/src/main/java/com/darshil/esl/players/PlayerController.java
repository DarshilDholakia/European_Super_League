package com.darshil.esl.players;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class PlayerController {

    private PlayerService playerService;

    public PlayerController(PlayerService playerService){
        this.playerService = playerService;
    }

    @GetMapping(path = "player/all")
    public List<Player> playerList() {
        return playerService.selectAllPlayers();
    }

    @GetMapping(path = "player/{id}")
    public Player getPlayerById(@PathVariable("id") Integer playerId){
        return playerService.selectPlayerById(playerId);
    }

    @PostMapping(path = "player")
    public void insertPlayer(@RequestBody Player player) {
        playerService.insertPlayer(player);
    }

    @DeleteMapping(path = "player/{id}")
    public void deletePlayerById(@PathVariable("id") Integer playerId) {
        playerService.deletePlayerById(playerId);
    }

    @PutMapping(path = "player/{id}")
    public void updatePlayerById(@PathVariable("id") Integer playerId, @RequestBody Player updatedPlayer) {
        playerService.updatePlayerById(playerId, updatedPlayer);
    }

    @GetMapping(path = "player/name/{name}")
    public List<Player> selectPlayersByName(@PathVariable("name") String name){
        return playerService.selectPlayersByName(name);
    }

    @GetMapping(path = "player/position/{player_position}")
    public List<Player> getPlayersByPosition(@PathVariable("player_position") String player_position){
        return playerService.selectPlayersByPosition(Position.valueOf(player_position)); //converts string input for
        // player_position into an ENUM
    }

    @GetMapping(path = "player/club/{player_club}")
    public List<Player> getPlayersByClub(@PathVariable("player_club") String player_club){
        return playerService.selectPlayersByClub(player_club.toUpperCase()); //converts string to uppercase for better
        //UEx
    }
}
