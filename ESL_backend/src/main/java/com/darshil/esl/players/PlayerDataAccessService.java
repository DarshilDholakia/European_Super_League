package com.darshil.esl.players;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("player_postgres")
public class PlayerDataAccessService implements PlayerDao {

    private JdbcTemplate jdbcTemplate;  // Make JDBC template a property so that we can use its methods

    public PlayerDataAccessService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Player> selectAllPlayers() {
        String sql = """
                SELECT id, player_name, player_position, player_club, price, goals, assists, red_cards, yellow_cards, clean_sheets, points 
                FROM players
                """;
        RowMapper<Player> playerRowMapper = (rs, rowNum) -> {  //rowmapper to go through each row, gives you result set,
            // which we then turn into ints, strings etc to make a new player object
            Player player = new Player(
                    rs.getInt("id"),
                    rs.getString("player_name"),
                    Position.valueOf(rs.getString("player_position")),//converts player_position input to an enum
                    Club.valueOf(rs.getString("player_club")),
                    rs.getInt("price"),
                    rs.getInt("goals"),
                    rs.getInt("assists"),
                    rs.getInt("red_cards"),
                    rs.getInt("yellow_cards"),
                    rs.getInt("clean_sheets"),
                    rs.getInt("points")
            );
            return player; //so its not lost in the heap
        };
        List<Player> playerList = jdbcTemplate.query(sql, playerRowMapper);
        if (playerList.isEmpty()) {
            return null;
        } else {
            return playerList;
        }
    }


    @Override
    public Player selectPlayerById(Integer id) {
        String sql = """
                SELECT id, player_name, player_position, player_club, price, goals, assists, red_cards, yellow_cards, clean_sheets, points 
                FROM players where id = ?
                """;
        RowMapper<Player> playerRowMapper = (rs, rowNum) -> {  //rowmapper to go through each row, gives you result set,
            // which we then turn into ints, strings etc to make a new player object
            return new Player(
                    rs.getInt("id"),
                    rs.getString("player_name"),
                    Position.valueOf(rs.getString("player_position")),//converts player_position input to an enum
                    Club.valueOf(rs.getString("player_club")),
                    rs.getInt("price"),
                    rs.getInt("goals"),
                    rs.getInt("assists"),
                    rs.getInt("red_cards"),
                    rs.getInt("yellow_cards"),
                    rs.getInt("clean_sheets"),
                    rs.getInt("points")
            );
        };
        List<Player> playerList = jdbcTemplate.query(sql, playerRowMapper);
        if (playerList.isEmpty()) {
            return null;
        } else {
            return playerList.get(0); // Returns first element from player list we've just made (contains sql mappings)
            // - this first element is the player entry we've found by their id
        }
    }

    @Override
    public int insertPlayer(Player player) {
        return 0;
    }

    @Override
    public int deletePlayer(Integer id) {
        return 0;
    }

    @Override
    public int updatePlayer(Integer id, Player update) {
        return 0;
    }
}