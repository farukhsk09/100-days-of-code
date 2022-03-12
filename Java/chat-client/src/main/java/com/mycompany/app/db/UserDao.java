package com.mycompany.app.db;

import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;
import java.util.UUID;
import java.util.concurrent.CompletableFuture;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import javax.ws.rs.WebApplicationException;

import com.mycompany.app.api.User;

import org.eclipse.jetty.util.log.Log;
import org.eclipse.jetty.util.log.Logger;

import software.amazon.awssdk.services.dynamodb.DynamoDbAsyncClient;
import software.amazon.awssdk.services.dynamodb.model.AttributeValue;
import software.amazon.awssdk.services.dynamodb.model.GetItemRequest;
import software.amazon.awssdk.services.dynamodb.model.GetItemResponse;
import software.amazon.awssdk.services.dynamodb.model.PutItemRequest;
import software.amazon.awssdk.services.dynamodb.model.PutItemResponse;

public class UserDao {

    private final DynamoDbAsyncClient ddb;
    Logger logger = Log.getLogger(UserDao.class);

    public UserDao(DynamoDbAsyncClient ddb){
        this.ddb=ddb;
    }

    public void createUser(User user){
        String primaryKey = "USER#"+user.getUsername();
        String sortKey = "PASSWORD#"+user.getPassword();
        
        //create the item
        Map<String, AttributeValue> item = new HashMap<>();
        item.put("PKey", AttributeValue.builder().s(primaryKey).build());
        item.put("SKey", AttributeValue.builder().s(sortKey).build());
        item.put("Age",AttributeValue.builder().n(String.valueOf(user.getAge())).build());
        item.put("Gender",AttributeValue.builder().s(user.getGender()).build());
        item.put("UserId",AttributeValue.builder().s(UUID.randomUUID().toString()).build());
        Optional.ofNullable(user.getPreferences()).ifPresent(value -> {
            item.put("Preferences", AttributeValue.builder().s(value).build());
        });
        item.put("CreatedDate", AttributeValue.builder().s(String.valueOf(System.currentTimeMillis())).build());

        PutItemRequest putItemRequest = PutItemRequest.builder()
                .tableName("MESSAGES_USER_TABLE")
                .item(item)
                .build();
        CompletableFuture<PutItemResponse> responsecf = this.ddb.putItem(putItemRequest);
        responsecf.thenAccept(response->{
            logger.info("Successfully inserted user into the DB");
        });
        return;
    }

    public User getUser(String username,String password){
        
        Map<String, AttributeValue> keyMap = new HashMap<>();
        String primaryKey = "USER#"+username;
        String sortKey = "PASSWORD#"+password;
        keyMap.put("PKey", AttributeValue.builder().s(primaryKey).build());
        keyMap.put("SKey",AttributeValue.builder().s(sortKey).build());

        GetItemRequest getItemRequest = GetItemRequest.builder().tableName("MESSAGES_USER_TABLE").key(keyMap).build();
        CompletableFuture<GetItemResponse> responsecf = this.ddb.getItem(getItemRequest);
        try {
            GetItemResponse response = responsecf.join();
            Set<String> keys = response.item().keySet();
            List<AttributeValue> mapValues = response.item().values().stream().collect(Collectors.toList());
            User user = new User();
            user.setAge(Integer.parseInt(response.item().get("Age").n()));
            user.setGender(response.item().get("Gender").s());
            user.setUsername(username);
            user.setUserId(response.item().get("UserId").s());
            Optional.ofNullable(response.item().get("Preferences")).ifPresent(value -> {
                user.setPreferences(value.s());
            });
            return user;
        } catch (Exception e) {
            throw new WebApplicationException(e.getMessage());
        }
    }
    
}
