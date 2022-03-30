package com.darshil.esl.players;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class PlayerMapper implements RowMapper<Player> {

    @Override
    public Player mapRow(ResultSet rs, int rowNum) throws SQLException {
        return new Player(rs.getInt("id"),
            rs.getString("player_name"),
            Position.valueOf(rs.getString("player_position").toUpperCase()),
            Club.valueOf(rs.getString("player_club").toUpperCase()),
            rs.getInt("price"),
            rs.getInt("goals"),
            rs.getInt("assists"),
            rs.getInt("red_cards"),
            rs.getInt("yellow_cards"),
            rs.getInt("clean_sheets"),
            rs.getInt("points"));
    }
}
