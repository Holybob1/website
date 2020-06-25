<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="Register.aspx.cs" Inherits="Register" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
    <script src="scripts/FormValidations.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <h2 style="margin:auto">
        Register
    </h2>
    <form id="form1" action="Register.aspx" method="post" runat="server" onsubmit="return validate()">
         Username: <input placeholder="Username" type="text" name="username" id="username"/> <div id="usernameErr"></div> <br />
        Email: <input  placeholder="Email" type="email" name="Email" id="Email"/><br />
        Password: <input placeholder="Password" type="password" name="password" id="password"/> <div id="passwordErr"></div> <br />
        city: <select name="city">
            <option >kfar saba</option>
            <option >alfe menashe</option>
            <option >raanana</option>
        </select> <br />
        <input type="submit"  id="submit" value="Send"/>
    </form>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="ContentPlaceHolder2" Runat="Server">
</asp:Content>

