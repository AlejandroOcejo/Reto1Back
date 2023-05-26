package model;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseChecker {
    private static final String DB_URL = "jdbc:oracle:thin:@localhost:1521:XE";
    private static final String USERNAME = "super";
    private static final String PASSWORD = "abcd1234";

    public static void main(String[] args) {
        try {
            // Load the Oracle JDBC driver
            Class.forName("oracle.jdbc.driver.OracleDriver");

            // Establish a connection to the database
            Connection connection = DriverManager.getConnection(DB_URL, USERNAME, PASSWORD);

            // Connection is successful
            System.out.println("Database is accessible.");

            // Close the connection
            connection.close();
        } catch (ClassNotFoundException e) {
            System.out.println("Oracle JDBC driver not found.");
            e.printStackTrace();
        } catch (SQLException e) {
            System.out.println("Failed to connect to the database.");
            e.printStackTrace();
        }
    }
}