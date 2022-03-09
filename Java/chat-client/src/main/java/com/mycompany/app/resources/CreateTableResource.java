package com.mycompany.app.resources;

import java.util.UUID;

import javax.ws.rs.HeaderParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.mycompany.app.api.TokenCustom;
import com.mycompany.app.api.User;

import org.eclipse.jetty.util.log.Log;
import org.eclipse.jetty.util.log.Logger;




@Path("/create")
@Produces(MediaType.APPLICATION_JSON)
public class CreateTableResource{
    Logger logger = Log.getLogger(CreateTableResource.class);

    @Path("/user")
    @POST
    public void createUser(User user,@HeaderParam("Token") String token){
        logger.info("recieved a user "+user.toString());
        //validate token using the go client
        //insert user into dynamoDB 
        String primaryKey = "USER#"+user.getUsername();
        String sortKey = "PASSWORD#"+user.getPassword();
        
        return;
    }
    
}
