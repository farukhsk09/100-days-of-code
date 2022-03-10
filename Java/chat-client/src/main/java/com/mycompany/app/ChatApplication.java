package com.mycompany.app;

import java.net.URI;
import java.net.URISyntaxException;

import com.mycompany.app.db.UserDao;
import com.mycompany.app.resources.CreateTableResource;

import io.dropwizard.Application;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.dynamodb.DynamoDbAsyncClient;
import software.amazon.awssdk.services.dynamodb.DynamoDbClient;

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
        // TODO: implement application
        Region region = Region.US_EAST_1;
        DynamoDbAsyncClient ddb = DynamoDbAsyncClient.builder()
                .endpointOverride(new URI("http://localhost:8000"))
                .region(region)
                .build();
        final UserDao userDao = new UserDao(ddb);
        final CreateTableResource resource = new CreateTableResource(userDao);
        environment.jersey().register(resource);
    }

}
