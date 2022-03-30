package com.darshil.esl.players;

import com.fasterxml.jackson.annotation.JsonCreator;

public enum Club {
    UNITED,
    PSG,
    LIVERPOOL,
    REAL_MADRID,
    JUVENTUS,
    CITY,
    INTER,
    WEST_HAM,
    MILAN,
    ARSENAL,
    BARCELONA,
    ATLETICO

//    @JsonCreator
//    public static Club fromString(String player_club) {
//        return Club == null
//                ? null
//                : Club.valueOf(player_club.toUpperCase());
//    }
}
