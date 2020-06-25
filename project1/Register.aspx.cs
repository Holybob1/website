using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Register : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (IsPostBack)
        {
            String name = Request.Form["username"];
            String password = Request.Form["password"];
            String email = Request.Form["Email"];
            String sql1 = String.Format("Insert Into [User](UserName,Email,[Password]) VALUES('{0}','{1}','{2}')", name, email, password);
            String sql2 = String.Format("SELECT * FROM [User] WHERE UserName='{0}'", name);
            bool exi = MyAdoHelper.Exists(sql2);
            if (exi == true)
            {
                Response.Redirect("Register.aspx");
            }
            else
            {
                MyAdoHelper.DoQuery(sql1);
                Response.Redirect("LogIn.aspx");
            }
        }
    }
}