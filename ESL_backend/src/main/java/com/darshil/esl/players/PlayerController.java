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
        return playerService.getPlayerById(playerId);
    }
}
