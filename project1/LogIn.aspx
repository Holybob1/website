<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="LogIn.aspx.cs" Inherits="LogIn" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <h2 style="margin:auto">
        LogIn
    </h2>
    <form id="form2" action="Login.aspx" method="post" runat="server" onsubmit="return validate()">
        username: <input placeholder="Username" type="text" name="username" id="username"/> <div id="usernameErr"></div> <br />
        Password: <input placeholder="Password" type="password" name="password" id="password"/> <div id="passwordErr"></div> <br />
       <span><%=logInErr %></span> 
        <input type="submit"  id="submit" value="Send"/>
    </form>

    <div>dont have an account? <br /> <a id="register" href="Register.aspx"><button >Register</button></a></div>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="ContentPlaceHolder2" Runat="Server">
</asp:Content>

