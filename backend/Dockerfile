# Use Maven image to build the application
FROM maven:3.8.7-eclipse-temurin-17 AS build

WORKDIR /app
COPY . .

# Build the application and skip tests
RUN mvn clean package -DskipTests

# Use a lightweight JDK image to run the application
FROM eclipse-temurin:17-jdk

WORKDIR /app

# Copy the built JAR from the previous stage
COPY --from=build /app/target/*.jar app.jar

# Expose port (change according to your application)
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
