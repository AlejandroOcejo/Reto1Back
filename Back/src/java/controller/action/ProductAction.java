/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controller.action;

import java.io.IOException;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import model.Register;
import model.DAO;
import model.Login;
import objects.Order;
import model.MotorOracle;
import model.RefreshProducts;
import model.InsertOrder;

/**
 *
 * @author espec
 */
public class ProductAction {

    //@Override
    public String execute(HttpServletRequest request, HttpServletResponse response) {
        String cadDestino = "";
        String action = (String) request.getParameter("SUBACTION");
//        String[] arrayAction = action.split("\\.");
        switch (action) {
            case "SEND_ORDER":
                cadDestino = requestOrder(request, response);
                break;
        }
        return cadDestino;
    }

    private String requestOrder(HttpServletRequest request, HttpServletResponse response) {
        String strRet = "";
        String[] productNames = request.getParameterValues("productName[]");
        String[] quantities = request.getParameterValues("quantity[]");
        if (productNames != null && quantities != null && productNames.length == quantities.length) {
            for (int i = 0; i < productNames.length; i++) {
                String productName = productNames[i];
                String quantity = quantities[i];
            }
        }

        InsertOrder insOrder = new InsertOrder();
        String json = insOrder.insertOrder();

        try {
            response.setContentType("application/json");
            response.setCharacterEncoding("UTF-8");
            response.getWriter().write(json);
        } catch (IOException e) {
            e.printStackTrace();
        }

        return strRet;

    }
}
