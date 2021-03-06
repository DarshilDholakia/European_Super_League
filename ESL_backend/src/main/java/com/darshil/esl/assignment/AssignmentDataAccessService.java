package com.darshil.esl.assignment;

import com.darshil.esl.players.Player;
import com.darshil.esl.players.PlayerMapper;
import org.springframework.jdbc.core.ArgumentPreparedStatementSetter;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class AssignmentDataAccessService implements AssignmentDao {
    private JdbcTemplate jdbcTemplate;

    public AssignmentDataAccessService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Assignments> selectAllAssignments() {
        String sql = """
                SELECT id,user_id,player_id 
                FROM player_assignment;
                """;
        return jdbcTemplate.query(sql, new AssignmentMapper());
    }

    @Override
    public Assignments selectAssignmentById(Integer assignment_id) {
        String sql = """
                SELECT id,user_id,player_id 
                FROM player_assignment 
                WHERE id = ?;
                """;
        return jdbcTemplate.queryForObject(sql, new AssignmentMapper(), assignment_id);
    }

    @Override
    public List<Player> selectAllPlayersForUser(Integer user_id) {
        String sql = """
                SELECT player_id,player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points 
                FROM ((users 
                INNER JOIN player_assignment 
                ON player_assignment.user_id = users.id)
                INNER JOIN players ON player_assignment.player_id = players.id) 
                WHERE users.id = ?;
                """;
        return jdbcTemplate.query(sql, new AssignmentPlayerMapper(), user_id);
    }

    @Override
    public int insertAssignment(Assignments assignments) {
        String sql = """
                INSERT INTO player_assignment (user_id, player_id) VALUES (?, ?);
                """;
        int rowAffected = jdbcTemplate.update(
                sql,
                assignments.getUser_id(),
                assignments.getPlayer_id()
        );
            return rowAffected;
    }

    @Override
    public int deleteAssignment(Integer assignment_id) {
        String sql = """
                DELETE FROM player_assignment 
                WHERE id = ?;
                """;
        return jdbcTemplate.update(sql, assignment_id);
    }

    @Override
    public int updateAssignment(Integer assignment_id, Assignments assignment) {
        String sql = """
                UPDATE player_assignment SET (user_id, player_id) = (?, ?)
                WHERE id = ?
                """;

        int rowsAffected = jdbcTemplate.update(sql, assignment.getUser_id(), assignment.getPlayer_id(), assignment_id);
        return rowsAffected;
    }

    @Override
    public List<Assignments> selectAssignmentByUserIdAndPlayerId(Integer user_id, Integer player_id) {
        String sql = """
                SELECT id,user_id,player_id 
                FROM player_assignment 
                WHERE user_id = ? 
                AND player_id = ?;
                """;

        return jdbcTemplate.query(sql, new AssignmentMapper(), user_id, player_id);
    }
}
