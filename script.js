
const req_data_arr=["heading","img","body"];
let req_data;
let news_id;

const temp_obj = new Object();

temp_obj.xml_data="";

   function loadXML()
    {      
        let xmlhttp=new XMLHttpRequest();
      
        xmlhttp.onreadystatechange=function()
        {  
            document.write(req_data); 
            if(this.readyState==4 && this.status==200)
            {
               
           
                // document.write(this.responseXML.getElementsByTagName("heading")[0].childNodes[0].nodeValue);
             
             temp_obj.xml_data= this.responseXML.getElementsByTagName(req_data)[news_id].childNodes[0].nodeValue;
             

               set_head( temp_obj.xml_data);
               
                // return temp_obj.xml_data; 
                // var text="";

                // var x=this.responseXML.getElementsByTagName("heading");
                // document.getElementById("demo").innerHTML=x.length;
                
                // for( i=0;i<x.length;i++)
                // {
                //     text+= x[i].childNodes[0].nodeValue+"<br>";
                // }
    
                // document.getElementById("demo").innerHTML=text;
                
            }
            
        };
        
        // temp_obj.xml_data=
        xmlhttp.open("GET","data_2.xml",true);
        xmlhttp.send();
        
    }
    
    function set_head(temp)
    {
        // document.write(temp+"<br><br><br>");
        // document.write(temp);
                document.getElementById(news_container).innerHTML=temp;
      
    }

  function set_news(n)
    {
        news_id=n;
        
        for(let i=3;i>=1;i--)
        {
            
        news_container="nc"+i;
        
        req_data=req_data_arr[i-1];
       loadXML();   
        }
        
    }
    