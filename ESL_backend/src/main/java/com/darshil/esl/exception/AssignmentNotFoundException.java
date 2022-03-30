package com.darshil.esl.exception;

import com.darshil.esl.exception.EmptyFieldException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class AssignmentNotFoundException extends EmptyFieldException {
    public AssignmentNotFoundException(String message) {
        super(message);
    }
}
