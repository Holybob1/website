using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class LogIn : System.Web.UI.Page
{
    public string logInErr;
    public string name;
    protected void Page_Load(object sender, EventArgs e)
    {
            name = Request.Form["username"];
            String password = Request.Form["password"];
        if (name != null && password != null)
        {
            String nameCheck = String.Format("SELECT * FROM [User] WHERE UserName='{0}'", name);
            bool nameExist = MyAdoHelper.Exists(nameCheck);
            if (nameExist)
            {
                
                String passwordCheck = String.Format("SELECT [Password] FROM [User] WHERE UserName='{0}'", name);
                passwordCheck = MyAdoHelper.getSelectInString(passwordCheck);
                if (password == passwordCheck)
                {
                    Session["username"] = name;
                    logInErr = "";
                    Response.Redirect("HomePage.aspx");
                }
                else
                {
                    logInErr = "password is incorrect";
                }
            }
            else
            {
                logInErr = "username not found";
            }


        }
    }
}