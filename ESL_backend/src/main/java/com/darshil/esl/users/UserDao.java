package com.darshil.esl.users;

import java.util.List;

public interface UserDao {
    List<User> selectAllUsers();
    User selectUserById(Integer id);
    int insertUser(User user);
    int deleteUser(User user);
    int updateUser(Integer id, User update);
}
