package com.darshil.esl.assignment;

import com.darshil.esl.players.Club;
import com.darshil.esl.players.Player;
import com.darshil.esl.players.Position;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class AssignmentMapper implements RowMapper<Assignments> {

    @Override
    public Assignments mapRow(ResultSet rs, int rowNum) throws SQLException {
        return new Assignments(
                rs.getInt("id"),
                rs.getInt("user_id"),
                rs.getInt("player_id")
                );
    }
}
