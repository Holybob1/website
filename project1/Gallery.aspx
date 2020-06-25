<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="Gallery.aspx.cs" Inherits="HomePage" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="ContentPlaceHolder2" Runat="Server">
    <table>
        <tr>
            <td>
                <div class="tooltip">
                    <a href="BigPic1.aspx"><img src="Gallery/CSGO.jpg" style="height:200px; width:200px"/></a>
                    
                    <span class="tooltiptext"> cs:go one of the first games i played </span>
                </div>
                
            </td>
            <td>
                <div class="tooltip">
                    <a href="BigPic2.aspx"><img src="Gallery/Dota2.jpg" style="height:200px; width:200px" /></a>
                    
                    <span class="tooltiptext"> dota2 is 2d mmo game</span>
                </div>
                
            </td>
            <td >
                <div class="tooltip">
                    <img src="Gallery/fortnite.jpg" style="height:200px; width:200px" />
                    <span class="tooltiptext">fortnite by epicgames who can sell you anything</span>
                </div>
                
            </td>
        </tr>
        <tr>
            <td >
                <div class="tooltip">
                    <a href="https://www.ledgerinsights.com/blockchain-gaming-immutable-naspers-galaxy/"><img src="Gallery/gaming.jpg"  style="height:200px; width:200px"/></a>
                    <span class="tooltiptext">just nice pic</span>
                </div>
            </td>
            <td>
                <div class="tooltip">
                    <a href="https://www.pcholic.co.il/%D7%9E%D7%90%D7%A8%D7%96%D7%99%D7%9D/989-corsair-carbide-series-spec-delta-rgb-tempered-glass-mid-tower-atx-gaming-case-black.html"><img src="Gallery/pc.jpg" style="height:200px; width:200px"/></a>
                    <span class="tooltiptext">gaming pc ontainer by corsair, look cool right</span>
                </div>
                
            </td>
            <td>
                <div class="tooltip">
                    <img src="Gallery/RocketLeague.jpg" style="height:200px; width:200px" />
                <span class="tooltiptext">rocket league, the best game i'v played</span>
                </div>
                
            </td>
        </tr>
    </table>
</asp:Content>