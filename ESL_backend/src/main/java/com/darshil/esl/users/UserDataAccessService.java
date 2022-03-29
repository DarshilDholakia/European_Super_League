package com.darshil.esl.users;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public class UserDataAccessService implements UserDao {

     private JdbcTemplate jdbcTemplate;
     public UserDataAccessService (JdbcTemplate jdbcTemplate) {
          this.jdbcTemplate = jdbcTemplate;
     }
     @Override
     public int insertUser (User user) {
          String sql = """
                  INSERT INTO users ( email, password, team_name, total_points)
                  VALUES (?, ?, ?, ?)
                  """;
          return jdbcTemplate.update(sql,
                  user.getEmail(),user.getPassword(),user.getTeamName(),user.getTotalPoints());
     }
     @Override
     public int deleteUser(Integer id) {
          String sql = "DELETE FROM users WHERE id=?";
          int rowsAffected = jdbcTemplate.update(sql, id);
          return rowsAffected;
     }
     @Override
     public int updateUser(Integer id, User update) {
          String sql = "UPDATE users SET email = ?, password = ?, team_name = ?, total_points = ? WHERE id = ?";
          int rowsAffected = jdbcTemplate.update(sql, update.getEmail(), update.getPassword(), update.getTeamName(), update.getTotalPoints(), id);

          if (rowsAffected ==1){
               return 1;
          }
          return 0;
     }

     @Override
     public User selectUserById(Integer id) {
          String sql = "SELECT id, email, password, team_name, total_points FROM users WHERE users.id = ?";
          return jdbcTemplate.queryForObject(sql, new UserMapper(), id);
     }

     @Override
     public List<User> selectAllUsers() {
          String sql = "SELECT id, email, password, team_name, total_points FROM users";
          return jdbcTemplate.query(sql, new UserMapper());
     }
}
