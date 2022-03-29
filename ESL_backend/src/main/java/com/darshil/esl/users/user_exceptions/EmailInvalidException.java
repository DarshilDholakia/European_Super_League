package com.darshil.esl.users.user_exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.BAD_REQUEST)
public class EmailInvalidException extends IllegalStateException {

    public EmailInvalidException(String message) {
        super(message);
    }
}
