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
    public TokenCustom createUser(User user){
        logger.info("recieved a user "+user.toString());

        TokenCustom token = new TokenCustom();
        token.setExpiry("24hr");
        token.setToken(UUID.randomUUID().toString());
        token.setRefresh_token("refresh_token");
        return token;
    }
    
}
