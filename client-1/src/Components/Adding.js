import React,{createElement} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Adding.css';

export default function Adding(){

    var customername;
      var   bikename;
      var   bikemodel;
       var  bikenumber;
       var complients;
        var ddate;
       var cardf;
      var cardthird;
      var cards;
      var c_name;
      var b_name;
      var b_model;
      var b_number;
      var compl;
      var pdate;
      var forthdiv;
    function createcard(){
        customername=document.getElementById("customername");
        bikename=document.getElementById("bikename");
         bikemodel=document.getElementById("bikemodel");
         bikenumber=document.getElementById("bikenumber");
         complients=document.getElementById("complients");
          ddate=document.getElementById("date");
          cardf=document.getElementById("created_maincard");
        //  cardthird=document.getElementById("completed_maincard");
        
        

         cards=document.createElement("div");
        cards.classList.add("createddiv");
         c_name=document.createElement("label");

        c_name.textContent="customer name : "+customername.value;
        console.log(c_name);
        customername.value="";
         b_name=document.createElement("label");
         b_name.style.display="block";
        b_name.textContent="bike name : "+bikename.value;
        bikename.value="";
         b_model=document.createElement("label");
         b_model.style.display="block";
        b_model.textContent="bike model : "+bikemodel.value;
        bikemodel.value="";
         b_number=document.createElement("label");
         b_number.style.display="block";
        b_number.textContent="bike number : "+bikenumber.value;
        bikenumber.value="";
        cards.appendChild(c_name);
        cards.appendChild(b_name);
        cards.appendChild(b_model);
        cards.appendChild(b_number);
        
       
       

        compl = document.createElement("p");
        compl.textContent="Complients : "+complients.value;
        complients.value="";
        cards.appendChild(compl);

        pdate = document.createElement("p");
       
        pdate.textContent = ddate.value; 
        ddate.value="";
        cards.appendChild(pdate);

        cardf.appendChild(cards);
        
        var createbtn = document.createElement("input");
        createbtn.classList.add("createbtns");
        createbtn.setAttribute("type","button");
        createbtn.setAttribute("value","completed");
         createbtn.addEventListener("click",copydiv);
        cards.appendChild(createbtn);
        

    }
    function copydiv(){
        cardthird=document.getElementById("completed_maincard");

          forthdiv=document.createElement("div");
         forthdiv.classList.add("createddiv");
        let c_name1=document.createElement("label");
        c_name1.style.display="block";
        c_name1.textContent=c_name.textContent;
         forthdiv.appendChild(c_name1);

         let b_name1=document.createElement("label");
         b_name1.style.display="block";
         b_name1.textContent=b_name.textContent;
         forthdiv.appendChild(b_name1);
        
         let b_model1=document.createElement("label");
         b_model1.style.display="block";
         b_model1.textContent=b_model.textContent;
         forthdiv.appendChild(b_model1);

         let b_number1=document.createElement("label");

         b_number1.textContent=b_number.textContent;
         forthdiv.appendChild(b_number1);
        
         let compl1=document.createElement("p");
         compl1.textContent=compl.textContent;
         forthdiv.appendChild(compl1);
        
         let ddate1=document.createElement("p");
         ddate1.textContent=pdate.textContent;

         var deletebtn = document.createElement("input");
         deletebtn.classList.add("deletebtns");
         deletebtn.setAttribute("type","button");
         deletebtn.setAttribute("value","delete");
         deletebtn.addEventListener("click",deletediv);
         forthdiv.appendChild(deletebtn);
         




         forthdiv.appendChild(ddate1);
         forthdiv.appendChild(ddate1);
         cards.remove();
        cardthird.appendChild(forthdiv);
    }
    function deletediv(){
        forthdiv.remove();
    }
        
    return(
        <>
            <div className="row create_maindiv">
                
                <div className="create_card col-lg-4">
                    <table>
                        <tbody>
                            <tr>
                                <th><lable>Customer Name:</lable></th>
                                <td><input type="text" name="customername" id="customername" placeholder="enter customer name"className="ml-3 createtitle"/></td>
                            </tr>
                            <tr>
                                <th><lable>Bike Name:</lable></th>
                                <td><input type="text" name="bikename" id="bikename"  placeholder="enter bike name"className="ml-3 mt-2 createtitle"/></td>
                            </tr>
                            <tr>
                                <th><lable>Bike Model:</lable></th>
                                <td><input type="text" name="bikemodel" id="bikemodel" placeholder="enter bike Model"className="ml-3  mt-2 createtitle"/></td>
                            </tr>
                            <tr>
                                <th><lable>Bike Number:</lable></th>
                                <td><input type="text" name="bikenumber" id="bikenumber"  placeholder="enter bike number" className="ml-3 mt-2 createtitle"/></td>
                             </tr>
                             <tr>
                                <th><lable>Complients :</lable></th>
                                <td><textarea type="text" name="complients" id="complients" className="float-right createdesc mt-2"></textarea></td>
                             </tr>
                             <tr>
                                <th><lable>Due date :</lable></th>
                                <td><input type="date" id="date" name = "date"  className="float-right createdate"/> </td>
                             </tr>
                             <tr>
                   <td colSpan={2}><input type="button" id="createbtn" value="createcard" onClick={createcard} className="createbtn"/></td>
                </tr>
                        </tbody>
                    </table>
                </div>
                <div className="created_card col-lg-4 border text-white" id="created_maincard">
                    <h3>bike service on process</h3>

                </div>
                <div className="completed_card col-lg-4 border text-white" id="completed_maincard">
                        <h3>bike service completed</h3>
                
               </div>

            </div>
        </>
    );
}
