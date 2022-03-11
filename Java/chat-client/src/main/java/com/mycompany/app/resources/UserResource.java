package com.mycompany.app.resources;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;
import java.util.UUID;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;
import java.util.stream.Collectors;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.HeaderParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import com.mycompany.app.api.User;
import com.mycompany.app.api.UserRequest;
import com.mycompany.app.db.UserDao;

import org.eclipse.jetty.util.log.Log;
import org.eclipse.jetty.util.log.Logger;




@Path("/user")
@Produces(MediaType.APPLICATION_JSON)
public class UserResource{
    Logger logger = Log.getLogger(UserResource.class);
    private UserDao userDao;
    public UserResource(UserDao userDao){
        this.userDao=userDao;
    }

    /**Creates a user with password */
    @Path("/create")
    @POST
    public void createUser(User user,@HeaderParam("Token") String token) throws ExecutionException{
        logger.info("recieved user registration request for : "+user.getUsername());
        //send to dao to create user
        userDao.createUser(user);
        return;
        //validate token using the go client
        //insert user into dynamoDB 
    }

    @Path("/signin")
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    public User getUser(UserRequest req,@HeaderParam("Token") String token){
        logger.info("getting user:::::");
        User user = userDao.getUser(req.getUsername(), req.getPassword());
        return user;
    }
    
}
