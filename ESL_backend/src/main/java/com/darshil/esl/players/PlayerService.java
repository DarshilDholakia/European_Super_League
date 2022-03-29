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

}
