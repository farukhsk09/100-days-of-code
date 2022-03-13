package com.mycompany.app.resources;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.http.HttpResponse.BodyHandlers;
import java.util.concurrent.ExecutionException;

import javax.ws.rs.HeaderParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.MediaType;

import com.mycompany.app.api.TokenCustom;
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
    }

    @Path("/signin")
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    public TokenCustom getUser(UserRequest req,@HeaderParam("Token") String token){
        logger.info("getting user:::::");
        userDao.getUser(req.getUsername(), req.getPassword());
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder().uri(URI.create("http://localhost:9090/validate")).GET().build();
        TokenCustom custom = new TokenCustom();
        try {
            HttpResponse<String> response = client.send(request, BodyHandlers.ofString());
            custom.setToken(response.body());
            //hard coded params
            custom.setExpiry("120seconds");
            custom.setRefresh_token("");
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
            throw new WebApplicationException(e.getMessage());
        }
        return custom;
    }
    
}
