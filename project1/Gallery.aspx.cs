using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class HomePage : System.Web.UI.Page
{
    public string theUser;
    protected void Page_Load(object sender, EventArgs e)
    {
        if (Session["username"] != null)
        {
            theUser = (String)Session["username"];
        }
        else
        {
            Response.Redirect("login.aspx");
        }
    }
}