package model;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import objects.Order;

public class InsertOrder {

    private MotorOracle motor;

    public InsertOrder() {
        motor = new MotorOracle();
    }

    public String insertOrder() {
        motor = new MotorOracle();
        motor.connect();
        ArrayList<Order> orderList = new ArrayList<>();
        String employeeId = null;
        //String clientId = request.getParameter("clientId");
        String sql = "SELECT MAX(ORDER_ID) FROM ORDERS";
        ResultSet resultSet = motor.executeQuery(sql);
        int id = 0;
        try {
            if (resultSet.next()) {
                id = resultSet.getInt(1);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }

        for (Order order : orderList) {
            int quantityInt = 0;
            quantityInt++;
            String productName = order.getProductName();
            String quantity = Integer.toString(quantityInt);

            sql = "INSERT INTO ORDERS('" + id + "', " + null + "', " + 1 + ", '" + null + "', '" + 3 + "')";

        }
        return null;
    }
}
