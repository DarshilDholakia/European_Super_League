package com.darshil.esl.users;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class UserMapper implements RowMapper<User> {
    @Override
    public User mapRow(ResultSet resultset, int i) throws SQLException {
        return new User(
                resultset.getInt("id"),
                resultset.getString("email"),
                resultset.getString("password"),
                resultset.getString("team_name"),
                resultset.getInt("total_points")
        );
    }
}
