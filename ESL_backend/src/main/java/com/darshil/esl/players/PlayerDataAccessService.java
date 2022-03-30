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
//        RowMapper<Player> playerRowMapper = (rs, rowNum) -> {  //rowmapper to go through each row, gives you result set,
//            // which we then turn into ints, strings etc to make a new player object
//            Player player = new Player(
//                    rs.getInt("id"),
//                    rs.getString("player_name"),
//                    Position.valueOf(rs.getString("player_position")),//converts player_position input to an enum
//                    Club.valueOf(rs.getString("player_club")),
//                    rs.getInt("price"),
//                    rs.getInt("goals"),
//                    rs.getInt("assists"),
//                    rs.getInt("red_cards"),
//                    rs.getInt("yellow_cards"),
//                    rs.getInt("clean_sheets"),
//                    rs.getInt("points")
//            );
//            return player; //so its not lost in the heap
//        };
        List<Player> playerList = jdbcTemplate.query(sql, new PlayerMapper());
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
                FROM players 
                WHERE id = ?
                """;
        List<Player> playerList = jdbcTemplate.query(sql, new PlayerMapper(), id);
        if (playerList.isEmpty()) {
            return null;
        } else {
            return playerList.get(0); // Returns first element from player list we've just made (contains sql mappings)
            // - this first element is the player entry we've found by their id
        }
    }

    @Override
    public int insertPlayer(Player player) {
        String sql = """
                INSERT INTO players (player_name, player_position, player_club, price, goals, assists, red_cards, yellow_cards, clean_sheets, points)
                VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                """;

        // Use .update jdbcTemplate method when inserting/deleting/updating
        int rowsAffected = jdbcTemplate.update(
                sql,
                player.getPlayer_name(),
                player.getPlayer_position().name(),
                player.getPlayer_club().name(),
                player.getPrice(),
                player.getGoals(),
                player.getAssists(),
                player.getRed_cards(),
                player.getYellow_cards(),
                player.getClean_sheets(),
                0
        );
        // Should return 1 as only 1 row is added - anything else it should throw error in the service!!
        return rowsAffected;
    }

    @Override
    public int deletePlayerById(Integer id) {
        String sql = "DELETE FROM players WHERE id = ?";
        int result = jdbcTemplate.update(sql, id);
        return result;
    }

    @Override
    public int updatePlayerById(Integer id, Player updatedPlayer) {
        String sql = """
                UPDATE players SET (player_name, player_position, player_club, price, goals, assists, red_cards, yellow_cards, clean_sheets, points) 
                = (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                WHERE id = ?
                """;

        int rowsAffected = jdbcTemplate.update(
                sql,
                updatedPlayer.getPlayer_name(),
                updatedPlayer.getPlayer_position().name(),
                updatedPlayer.getPlayer_club().name(),
                updatedPlayer.getPrice(),
                updatedPlayer.getGoals(),
                updatedPlayer.getAssists(),
                updatedPlayer.getRed_cards(),
                updatedPlayer.getYellow_cards(),
                updatedPlayer.getClean_sheets(),
                5*updatedPlayer.getGoals() + 3*updatedPlayer.getAssists() -3*updatedPlayer.getRed_cards()
                        -1*updatedPlayer.getYellow_cards() + 4*updatedPlayer.getClean_sheets(),
                id
        );

        return rowsAffected;
    }

    @Override
    public List<Player> selectPlayersByName(String player_name) {
        String sql = """
                SELECT id, player_name, player_position, player_club, price, goals, assists, red_cards, yellow_cards, clean_sheets, points 
                FROM players WHERE player_name = ?
                """;
        List<Player> playerList = jdbcTemplate.query(sql, new PlayerMapper(), player_name);
        if (playerList.isEmpty()) {
            return null;
        } else {
            return playerList;
        }
    }

    @Override
    public List<Player> selectPlayersByPosition(Position player_position) {
        String sql = """
                SELECT id, player_name, player_position, player_club, price, goals, assists, red_cards, yellow_cards, clean_sheets, points 
                FROM players WHERE player_position = ?
                """;
        List<Player> playerList = jdbcTemplate.query(sql, new PlayerMapper(), player_position.name());
        if (playerList.isEmpty()) {
            return null;
        } else {
            return playerList;
        }
    }

    @Override
    public List<Player> selectPlayersByClub(Club player_club) {
        String sql = """
                SELECT id, player_name, player_position, player_club, price, goals, assists, red_cards, yellow_cards, clean_sheets, points 
                FROM players WHERE player_club = ?
                """;
        List<Player> playerList = jdbcTemplate.query(sql, new PlayerMapper(), player_club.name());
        if (playerList.isEmpty()) {
            return null;
        } else {
            return playerList;
        }
    }
}
