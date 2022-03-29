package com.darshil.esl.players;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

@Service
public class PlayerService {

    private PlayerDao playerDao;

    public PlayerService(@Qualifier("player_postgres") PlayerDao playerDao){
        this.playerDao = playerDao;
    }
}
