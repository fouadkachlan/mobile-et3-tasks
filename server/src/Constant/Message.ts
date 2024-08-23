
export const NewsMessages  =  {
    Fail : {
        errorNewsAddMessage :  "Error while adding news.",
        errorNewsFetchMessage :  "Error while fetching news."
    },
    Success : {
        successNewsAddMessage : "News Added Successfully.",
        successNewsFetchMessage : "News Fetched Successfully"
    }

}
export const MiddlewareMessages = {
    GateKeeper : {
        Fail : {
            encryptionKeyNotDefinedError : "Encryption Key Is not defined.",
            authorizationHeaderMissingError : "Authorization Header Is missing.",
            tokenMissingError : "Token is missing",
            invalidToken : "Token is Invalid",
            tokenExpired : "Token is Expired",
            roleError : "Forbidden: You don't have the required role",
            unexpectedFieldError : "Unexpected Field Error!"
        },
        Success : {

        }
    },
    RateLimiter : {
        DefaultRateLimit : "Default Rate Limit",
        Fail : {
            toManyRequests :  "Too many requests, please try again later.",
            RateLimiterError : "Error in Rate Limiter"
        },
        Success : {

        }

    }
}
export const ServerStatus = {
    Error : {
        internalServerError: "Internal Server Error."
    },
    Success : {
        serverListening : "Server is listening on port"
    }
}

export const DatabaseStatus = {
    Fail : {
        databaseConnectionError : "Unable to connect to the database.",
        queryExecutionError : 'Error executing query'
    },
    Success : {
        databaseConnectionSuccess : "Connected to the MySQL database Successfully"
       
    }
}

export const RateLimitStatus = {
    Fail : {
        RateLimitLibraryFail : "Failure in User Library, and An Exception is Thrown!",
        RateLimitControllerFail : "Error While getting Rate Limit!"

    }, 
    Success : {
        RateLimitLibrarySuccess : "Success In User Library",
        RateLimitControllerSuccess : "Success In Getting Rate Limit"

    }
}

export const UserMessages = {
    Fail : {
        emailAndPasswordError : "Email or Password is invalid.",
        emailIsRequiredError : "Email is required.",
        userCreateError : "Error while creating user.",
        adminCreateError : "Error while creating admin.",
        userNotValidError: "User is not valid.",
        userNotFoundError : "User not found ou data unavailable",
        fetchDataError : "Failed to fetch Data",
        UpdateError : "Error While Updating"
    },
    Success : {
        userCreateSuccess : "User Created Successfully",
        userSignUpSuccess : "User Signed Up Successfully",
        LoginSuccessfull : "Login Successfull",
        UpdateSuccessfull: "User Updated Successfully!"

    }
}


