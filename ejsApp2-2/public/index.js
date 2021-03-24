// start by creating data so we don't have to type it in each time
let plantArray = [];

let Database = [];

// define a constructor to create plant objects
let PlantObject = function (pName, pScientific, pFamily, pClimate, pColor, pSize, pMaintenance, pURL) {
    this.ID = Math.random().toString(16).slice(5);  // tiny chance could get duplicates!  
    //this.ID = pID;
    
    this.PlantName = pName;
    this.Scientific = pScientific;
    this.Family = pFamily;  // action  comedy  drama  horrow scifi  musical  western
    this.Climate = pClimate;
    this.Color = pColor;
    this.Size = pSize;
    this.Maintenance = pMaintenance;
    this.URL = pURL;
}




Database.push(new PlantObject("Eucalyptus", "Eucalyptus Globulus", "Myrtle family", "Cool", "Green", "Large", "Medium", "https://www.thespruce.com/how-to-grow-and-use-eucalyptus-1762354"));
Database.push(new PlantObject("Aloe Vera", "Alpe Barbadensis Miller", "Asphodelaceae","Temperate", "Green", "Medium", "Low", "https://www.thespruce.com/how-to-grow-and-use-eucalyptus-1762354"));
Database.push(new PlantObject("Christmas Cactus", "Schlumbergera Truncata", "Cactaceae", "Coastal", "Green/Pink", "Small", "Medium", "https://www.thespruce.com/how-to-grow-and-use-eucalyptus-1762354"));
Database.push(new PlantObject("Zebra Plant", "Aphelandra Squarrosa", "Acanthaceae", "Tropical", "Green", "Medium", "High", "https://www.thespruce.com/how-to-grow-and-use-eucalyptus-1762354"));
Database.push(new PlantObject("Peace Lily", "Spathiphyllum", "Arums", "Tropical", "White/Green", "Medium", "Medium", "https://www.thespruce.com/how-to-grow-and-use-eucalyptus-1762354"));
Database.push(new PlantObject("African Violet", "Saintpaulia", "Gesneriaceae", "Temperate", "Green/Purple", "Small", "Low", "https://www.amazon.com/african-violets-live-plants/s?k=african+violets+live+plants"));
Database.push(new PlantObject("Dracaena Kiwi", "Dracaena", "Asparagaceae", "Tropical", "Green", "Large", "Low","https://gardengoodsdirect.com/products/dracaena-marginata-kiwi#:~:text=Dracaena%20marginata%20kiwi%20is%20an,cleaning%20the%20air%20of%20toxins."));
Database.push(new PlantObject("Rubber Fig", "Ficus Elastica", "Moraceae", "Warm", "Green", "X-Large", "Medium", "https://www.shopterrain.com/products/ficus-tineke-plant"));
Database.push(new PlantObject("Fiddle-Leaf Fig", "Ficus Lyrata", "Moraceae", "Tropical", "Green", "Large", "High", "https://bloomscape.com/product/fiddle-leaf-fig/"));
Database.push(new PlantObject("China Doll Plant", "Radermachera sinica", "Bignoniaceae", "Subtropical", "Green", "Medium", "Low", "https://www.indoorplants.com/RadermacheraChinaDoll/"));
Database.push(new PlantObject("Purple Velvet Plant", "Gynura aurantiaca", "Asteraceae", "Temperate", "Purple/Green", "Small", "Medium", "https://www.growjoy.com/store/pc/Purple-Velvet-Plant-p9777.htm"));
Database.push(new PlantObject("West Indian Holly", "Turnera ulmifolia", "Vitaceae", "Tropical", "Red/Yellow/Green", "Small", "Medium", "https://www.bonanza.com/listings/Leea-Coccinea-Rubra-Hawaiian-Indian-Holly-10-Seeds-TRF01/857863996?goog_pla=1"));
Database.push(new PlantObject("Corn Plant", "Dracaena fragrans", "Asparagaceae", "Warm", "Green/Pink", "X-Large", "Medium","https://www.brighterblooms.com/products/massangeana-dracaena-corn-plant?variant=13669636702269&utm_source=google_shopping&utm_medium=organic"));
Database.push(new PlantObject("Double Ellen Pink", "Helleborus x hybridus", "Helleborus", "Temperate", "Pink/Green", "Small", "Low", "https://www.waysidegardens.com/helleborus-merlin/p/27599/?gclid=EAIaIQobChMIjIj3q6i67wIVdQp9Ch01PgKWEAQYASABEgKbDvD_BwE&utm_source=google&utm_medium=cpc&utm_campaign=ppc_google_pla&ef_id=EAIaIQobChMIjIj3q6i67wIVdQp9Ch01PgKWEAQYASABEgKbDvD_BwE:G:s"));
Database.push(new PlantObject("Eastern Teaberry", "Gaultheria procumbens", "Ericaceae", "Temperate", "Red/Green", "Medium", "Low", "https://www.target.com/p/3pk-winterberry-gaultheria-procumbens-plant-in-grower-pot-national-plant-network/-/A-81629527?ref=tgt_adv_XS000000&AFID=google_pla_df&fndsrc=tgtao&DFA=71700000012577535&CPNG=PLA_Patio%2BGarden%2BShopping&adgroup=SC_Patio%2BGarden_PatioGrill&LID=700000001170770pgs&LNM=PRODUCT_GROUP&network=g&device=c&location=9033301&targetid=pla-1055914097028&ds_rl=1246978&ds_rl=1247068&ds_rl=1248099&gclid=EAIaIQobChMIyauUvqm67wIV4w59Ch1_iw6KEAQYBCABEgKIevD_BwE&gclsrc=aw.ds"));
Database.push(new PlantObject("Silver Lace", "Fallopia baldschuanica", "Knotweed Family", "Warm", "Green/White", "Medium", "Medium", "https://hirts.com/silver-lace-vine-polygonum-aubertii-2-5-pot/"));
Database.push(new PlantObject("Mother Fern", "Asplenium viviparum", "Spleenwort", "Warm", "Green", "Small", "Low", "https://plantsexpress.com/webstore-plantsexpress/webstore/productdetailsouth.aspx?plantid=8295&list=0&itemno=ASP-BUL-01000"));
Database.push(new PlantObject("ZZ Plant", "Zamioculcas", "Araceae", "Warm", "Green", "Large", "Low", "https://hirts.com/rare-zz-plant-zamioculcas-zamiifolia-easy-to-grow-house-plant-4-pot/"));



let selectedSize = "not selected";
let selectedMaintenanceLevel = "not selected";

document.addEventListener("DOMContentLoaded", function () {

    createList();

// add button events ************************************************************************
    
    document.getElementById("buttonAdd").addEventListener("click", function () {
        plantArray.push(new PlantObject(document.getElementById("pname").value, document.getElementById("scientific").value,
        document.getElementById("family").value ,document.getElementById("climate").value, document.getElementById("color").value, selectedSize, selectedMaintenanceLevel));
        document.location.href = "index.html#ListPlants";
        // also add the URL value
    });
    
    document.getElementById("buttonClear").addEventListener("click", function () {
        document.getElementById("pname").value = "";
        document.getElementById("scientific").value = "";
        document.getElementById("family").value = "";
        document.getElementById("climate").value = "";
        document.getElementById("color").value = "";
        document.getElementById("URL").value = "";
    });

    $(document).bind("change", "#select-size", function (event, ui) {
        selectedSize = $('#select-size').val();
    });

    $(document).bind("change", "#maintenance-level", function(event, ui) {
        selectedMaintenanceLevel = $('#maintenance-level').val();
    });

    document.getElementById("delete").addEventListener("click", function () {
        deletePlant(document.getElementById("IDparmHere").innerHTML);
        createList();  // recreate li list after removing one
        document.location.href = "index.html#ListPlants";  // go back to plant list 
    });

// 2 sort button event methods
    document.getElementById("buttonSortPlantName").addEventListener("click", function () {
        plantArray.sort(dynamicSort("PlantName"));
        createList();
        document.location.href = "index.html#ListPlants";
    });

    document.getElementById("buttonSortSize").addEventListener("click", function () {
        plantArray.sort(dynamicSort("Size"));
        createList();
        document.location.href = "index.html#ListPlants";
    });

    // button on details page to view the youtube video
    document.getElementById("moreinfo").addEventListener("click", function () {
        window.open(document.getElementById("oneURL").innerHTML);
    });

    document.getElementById("familySort").addEventListener("click", function()
    {
        document.getElementById("recommendations").innerHTML = "";
  
        for (let i = 0; i < plantArray.length; i++)
        {
            for (let j = 0; j < Database.length; j++)
            {
                if (plantArray[i].Family == Database[j].Family)
                {
                   document.getElementById("recommendations").innerHTML += "<li>" + Database[j].PlantName + " (" + Database[j].Family + ")";
                }
                else
                {
                    document.getElementById("recommendations").innerHTML = "Sorry, looks like we dont have any plants belonging to that Family.";
                }
            }
        }
    });
  
    document.getElementById("maintenanceSort").addEventListener("click", function()
    {
        document.getElementById("recommendations").innerHTML = "";
  
        for (let i = 0; i < plantArray.length; i++)
        {
            for (let j = 0; j < Database.length; j++)
            {
                if (plantArray[i].Maintenance == Database[j].Maintenance)
                {
                   document.getElementById("recommendations").innerHTML += "<li>" + Database[j].PlantName + " (" + Database[j].Maintenance + ")";
                }
            }
        }
    });
  
   
    document.getElementById("sizeSort").addEventListener("click", function()
    {
        document.getElementById("recommendations").innerHTML = "";
  
        let counterXS = 0;
        let counterS= 0;
        let counterM = 0;
        let counterL = 0;
        let counterXL = 0;
  
        for (let i = 0; i < plantArray.length; i++)
        {
            if (plantArray[i].Size == "X-Small")
            {
                counterXS++;
            }
            else if (plantArray[i].Size == "Small")
            {
                counterS++;
            }
            else if (plantArray[i].Size == "Medium")
            {
                counterM++;
            }
            else if (plantArray[i].Size == "Large")
            {
                counterL++;
            }
            else if (plantArray[i].Size == "X-Large")
            {
                counterXL++;
            }
        }
  
        if (counterXS >= plantArray.Length/3)
        {
            for (let j = 0; j < Database.length; j++)
            {
                if (Database[j].Size == "X-Small")
                {
                    document.getElementById("recommendations").innerHTML += "<li>" + Database[j].PlantName + " (" + Database[j].Size + ")";
                }
            }
        }
        else if (counterS >= plantArray.length/3)
        {
            for (let j = 0; j < Database.length; j++)
            {
                if (Database[j].Size == "Small")
                {
                    document.getElementById("recommendations").innerHTML += "<li>" + Database[j].PlantName + " (" + Database[j].Size + ")";
                }
            }
        }
        else if (counterM >= plantArray.length/3)
        {
            for (let j = 0; j < Database.length; j++)
            {
                if (Database[j].Size == "Medium")
                {
                    document.getElementById("recommendations").innerHTML += "<li>" + Database[j].PlantName + " (" + Database[j].Size + ")";
                }
            }
        }
        else if (counterL >= plantArray.length/3)
        {
            for (let j = 0; j < Database.length; j++)
            {
                if (Database[j].Size == "Large")
                {
                    document.getElementById("recommendations").innerHTML += "<li>" + Database[j].PlantName + " (" + Database[j].Size + ")";
                }
            }
        }
        else if (counterXL >= plantArray.length/3)
        {
            for (let j = 0; j < Database.length; j++)
            {
                if (Database[j].Size == "X-Large")
                {
                    document.getElementById("recommendations").innerHTML += "<li>" + Database[j].PlantName + " (" + Database[j].Size + ")";
                }
            }
        }
        else
        {
            document.getElementById("recommendations").innerHTML = "Sorry, looks like we don't have any plants that size.";

        }
  
    });
 


// end of add button events ************************************************************************

  
  
// page before show code *************************************************************************
    // page before show code *************************************************************************
    $(document).on("pagebeforeshow", "#ListPlants", function (event) {   // have to use jQuery 
        createList();
    });

 /*   $(document).on("pagebeforeshow", "#FindPlants", function (event) {   // have to use jQuery 
        // clear prior data
        var divPlantList = document.getElementById("divPlantListSubset");
        while (divPlantList.firstChild) {    // remove any old data so don't get duplicates
            divPlantList.removeChild(divPlantList.firstChild);
        };
    }); */

    // need one for our details page to fill in the info based on the passed in ID
    $(document).on("pagebeforeshow", "#details", function (event) {   // have to use jQuery 
        let localID = document.getElementById("IDparmHere").innerHTML;
        let arrayPointer = GetArrayPointer(localID);
        document.getElementById("oneName").innerHTML = "The plant name is: " + plantArray[arrayPointer].PlantName;
        document.getElementById("oneScientific").innerHTML = "The scientific name of the plant is: " + plantArray[arrayPointer].Scientific;
        document.getElementById("oneFamily").innerHTML = "The plant family is: " + plantArray[arrayPointer].Family;
        document.getElementById("oneClimate").innerHTML = "The native climate of the plant is: " + plantArray[arrayPointer].Climate;
        document.getElementById("oneColor").innerHTML = "The plant color is: " + plantArray[arrayPointer].Color;
        document.getElementById("oneSize").innerHTML = "The plant size is: " + plantArray[arrayPointer].Size;
        document.getElementById("oneMaintenance").innerHTML = "The plant maintenance level is: " + plantArray[arrayPointer].Maintenance;
        document.getElementById("oneURL").innerHTML = plantArray[arrayPointer].URL;
        
    });
 
});  
// end of wait until document has loaded event  *************************************************************************

// next 2 functions could be combined into 1 with a little work
// such as I could pass in a variable which said which divPlantList div it should draw
// to, and if no value is passed in to subset too, I could just include all.


function createList() {
    // clear prior data
    var divPlantList = document.getElementById("divPlantList");
    while (divPlantList.firstChild) {    // remove any old data so don't get duplicates
        divPlantList.removeChild(divPlantList.firstChild);
    };

    var ul = document.createElement('ul');

    plantArray.forEach(function (element,) {   // use handy array forEach method
        var li = document.createElement('li');
        // adding a class name to each one as a way of creating a collection
        li.classList.add('onePlant'); 
        // use the html5 "data-parm" to encode the ID of this particular data object
        // that we are building an li from
        li.setAttribute("data-parm", element.ID);
        li.innerHTML = element.ID + ":  " + element.PlantName + "  " + element.Size;
        ul.appendChild(li);
    });
    divPlantList.appendChild(ul)

    // now we have the HTML done to display out list, 
    // next we make them active buttons
    // set up an event for each new li item, 
    var liArray = document.getElementsByClassName("onePlant");
    Array.from(liArray).forEach(function (element) {
        element.addEventListener('click', function () {
        // get that data-parm we added for THIS particular li as we loop thru them
        var parm = this.getAttribute("data-parm");  // passing in the record.Id
        // get our hidden <p> and write THIS ID value there
        document.getElementById("IDparmHere").innerHTML = parm;
        // now jump to our page that will use that one item
        document.location.href = "index.html#details";
        });
    });

};

function deletePlant(which) {
    console.log(which);
    let arrayPointer = GetArrayPointer(which);
    plantArray.splice(arrayPointer, 1);  // remove 1 element at index 
}

// cycles thru the array to find the array element with a matching ID
function GetArrayPointer(localID) {
    for (let i = 0; i < plantArray.length; i++) {
        if (localID === plantArray[i].ID) {
            return i;
        }
    }
}
  


/**
 *  https://ourcodeworld.com/articles/read/764/how-to-sort-alphabetically-an-array-of-objects-by-key-in-javascript
* Function to sort alphabetically an array of objects by some specific key.
* 
* @param {String} property Key of the object to sort.
*/
function dynamicSort(property) {
    var sortOrder = 1;

    if (property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }

    return function (a, b) {
        if (sortOrder == -1) {
            return b[property].localeCompare(a[property]);
        } else {
            return a[property].localeCompare(b[property]);
        }
    }
}
