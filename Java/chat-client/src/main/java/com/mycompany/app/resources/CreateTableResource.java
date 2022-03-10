package com.mycompany.app.resources;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;
import java.util.UUID;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;
import java.util.stream.Collectors;

import javax.inject.Inject;
import javax.ws.rs.HeaderParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.mycompany.app.api.TokenCustom;
import com.mycompany.app.api.User;

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




@Path("/create")
@Produces(MediaType.APPLICATION_JSON)
public class CreateTableResource{
    Logger logger = Log.getLogger(CreateTableResource.class);
    private DynamoDbAsyncClient ddb;
    private DynamoDbClient ddbsync;
    public CreateTableResource(DynamoDbAsyncClient ddb,DynamoDbClient ddbsync){
        this.ddb=ddb;
        this.ddbsync=ddbsync;
    }

    @Path("/user")
    @POST
    public void createUser(User user,@HeaderParam("Token") String token) throws ExecutionException{
        logger.info("recieved a user "+user.toString());
        //validate token using the go client
        //insert user into dynamoDB 
        String primaryKey = "USER#"+user.getUsername();
        String sortKey = "PASSWORD#"+user.getPassword();
        //create the item
        Map<String, AttributeValue> item = new HashMap<>();
        item.put("PKey", AttributeValue.builder().s(primaryKey).build());
        item.put("SKey", AttributeValue.builder().s(sortKey).build());
        item.put("CreatedOn", AttributeValue.builder().s(String.valueOf(System.currentTimeMillis())).build());

        //create the putitemrequest
        PutItemRequest putItemRequest;
        putItemRequest = PutItemRequest.builder()
                            .tableName("MESSAGES_USER_TABLE")
                            .item(item)
                            .build();
        Map<String, AttributeValue> keyMap=new HashMap<>();
        keyMap.put("PKey", AttributeValue.builder().s(primaryKey).build());
        keyMap.put("SKey", AttributeValue.builder().s(sortKey).build());
        CompletableFuture<PutItemResponse> response = this.ddb.putItem(putItemRequest);
        response.join();
        /*CompletableFuture<PutItemResponse> response = this.ddb.putItem(putItemRequest);
        response.join();
        
        
        GetItemRequest getItemRequest = GetItemRequest.builder().tableName("MESSAGES_USER_TABLE").key(keyMap).build();
        CompletableFuture<GetItemResponse> responseget = this.ddb.getItem(getItemRequest);
        try {
            GetItemResponse finalresponse = responseget.get();
            System.out.println(finalresponse.item().get(primaryKey).s());
        } catch (InterruptedException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }*/
        // ddbsync.putItem(putItemRequest);
        GetItemRequest getItemRequest = GetItemRequest.builder().tableName("MESSAGES_USER_TABLE").key(keyMap).build();
        GetItemResponse getresponse = ddbsync.getItem(getItemRequest);
        Map<String, AttributeValue> map=getresponse.item().values().stream().collect(Collectors.toMap(AttributeValue::s, s->s));
        Set<String> keys = map.keySet();
            for (String sinKey : keys) {
                System.out.format("%s: %s\n", sinKey, map.get(sinKey).toString());
            }
        System.out.println(getresponse.item().entrySet().size());
        
        return;
    }
    
}
