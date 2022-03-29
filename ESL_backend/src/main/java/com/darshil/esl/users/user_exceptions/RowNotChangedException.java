package com.darshil.esl.users.user_exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.BAD_REQUEST)
public class RowNotChangedException extends IllegalStateException{

    public RowNotChangedException(String message) {
        super(message);
    }
}
