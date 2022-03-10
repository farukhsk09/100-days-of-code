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

import com.mycompany.app.api.TokenCustom;
import com.mycompany.app.api.User;
import com.mycompany.app.db.UserDao;

import org.eclipse.jetty.util.log.Log;
import org.eclipse.jetty.util.log.Logger;

import software.amazon.awssdk.services.dynamodb.DynamoDbAsyncClient;
import software.amazon.awssdk.services.dynamodb.DynamoDbClient;
import software.amazon.awssdk.services.dynamodb.model.AttributeValue;
import software.amazon.awssdk.services.dynamodb.model.DescribeTableRequest;
import software.amazon.awssdk.services.dynamodb.model.GetItemRequest;
import software.amazon.awssdk.services.dynamodb.model.GetItemResponse;
import software.amazon.awssdk.services.dynamodb.model.PutItemRequest;
import software.amazon.awssdk.services.dynamodb.model.PutItemResponse;




@Path("/user")
@Produces(MediaType.APPLICATION_JSON)
public class CreateTableResource{
    Logger logger = Log.getLogger(CreateTableResource.class);
    private UserDao userDao;
    public CreateTableResource(UserDao userDao){
        this.userDao=userDao;
    }

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

    @GET
    public User getUser(@QueryParam("username") String username,@QueryParam("password") String password,@HeaderParam("Token") String token){
        logger.info("getting user:::::");
        User newUser = userDao.getUser(username, password);
        return newUser;
    }
    
}
