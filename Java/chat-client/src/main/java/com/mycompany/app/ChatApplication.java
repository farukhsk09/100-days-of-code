package com.mycompany.app;

import java.net.URI;
import java.net.URISyntaxException;

import com.mycompany.app.db.UserDao;
import com.mycompany.app.resources.UserResource;

import io.dropwizard.Application;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.dynamodb.DynamoDbAsyncClient;

public class ChatApplication extends Application<ChatConfiguration> {

    public static void main(final String[] args) throws Exception {
        new ChatApplication().run(args);
    }

    @Override
    public String getName() {
        return "Chat";
    }

    @Override
    public void initialize(final Bootstrap<ChatConfiguration> bootstrap) {
        // TODO: application initialization
    }

    @Override
    public void run(final ChatConfiguration configuration,
                    final Environment environment) throws URISyntaxException {
        Region region = Region.US_EAST_1;
        DynamoDbAsyncClient ddb = DynamoDbAsyncClient.builder()
                .endpointOverride(new URI(configuration.getDynamoDBUrl()))
                .region(region)
                .build();
        final UserDao userDao = new UserDao(ddb);
        
        final UserResource resource = new UserResource(userDao,configuration.getTokenUrl());
        environment.jersey().register(resource);
    }

}
