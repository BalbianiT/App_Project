var express = require('express');
var path = require('path');

//leaving in the bodyParser in case we ever send up form data and need to get data out of form
var bodyParser = require('body-parser');


var app = express();

// view engine setup
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

// start by creating data so we don't have to type it in each time
let serverPlantArray = [];


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



serverPlantArray.push(new PlantObject("Eucalyptus", "Eucalyptus Globulus", "Myrtle family", "Cool", "Green", "Large", "Medium", "https://www.thespruce.com/how-to-grow-and-use-eucalyptus-1762354"));
serverPlantArray.push(new PlantObject("Aloe Vera", "Alpe Barbadensis Miller", "Asphodelaceae","Temperate", "Green", "Medium", "Low", "https://www.thespruce.com/how-to-grow-and-use-eucalyptus-1762354"));
serverPlantArray.push(new PlantObject("Christmas Cactus", "Schlumbergera Truncata", "Cactaceae", "Coastal", "Green/Pink", "Small", "Medium", "https://www.thespruce.com/how-to-grow-and-use-eucalyptus-1762354"));
serverPlantArray.push(new PlantObject("Zebra Plant", "Aphelandra Squarrosa", "Acanthaceae", "Tropical", "Green", "Medium", "High", "https://www.thespruce.com/how-to-grow-and-use-eucalyptus-1762354"));
serverPlantArray.push(new PlantObject("Peace Lily", "Spathiphyllum", "Arums", "Tropical", "White/Green", "Medium", "Medium", "https://www.thespruce.com/how-to-grow-and-use-eucalyptus-1762354"));
serverPlantArray.push(new PlantObject("African Violet", "Saintpaulia", "Gesneriaceae", "Temperate", "Green/Purple", "Small", "Low", "https://www.amazon.com/african-violets-live-plants/s?k=african+violets+live+plants"));
serverPlantArray.push(new PlantObject("Dracaena Kiwi", "Dracaena", "Asparagaceae", "Tropical", "Green", "Large", "Low","https://gardengoodsdirect.com/products/dracaena-marginata-kiwi#:~:text=Dracaena%20marginata%20kiwi%20is%20an,cleaning%20the%20air%20of%20toxins."));
serverPlantArray.push(new PlantObject("Rubber Fig", "Ficus Elastica", "Moraceae", "Warm", "Green", "X-Large", "Medium", "https://www.shopterrain.com/products/ficus-tineke-plant"));
serverPlantArray.push(new PlantObject("Fiddle-Leaf Fig", "Ficus Lyrata", "Moraceae", "Tropical", "Green", "Large", "High", "https://bloomscape.com/product/fiddle-leaf-fig/"));
serverPlantArray.push(new PlantObject("China Doll Plant", "Radermachera sinica", "Bignoniaceae", "Subtropical", "Green", "Medium", "Low", "https://www.indoorplants.com/RadermacheraChinaDoll/"));
serverPlantArray.push(new PlantObject("Purple Velvet Plant", "Gynura aurantiaca", "Asteraceae", "Temperate", "Purple/Green", "Small", "Medium", "https://www.growjoy.com/store/pc/Purple-Velvet-Plant-p9777.htm"));
serverPlantArray.push(new PlantObject("West Indian Holly", "Turnera ulmifolia", "Vitaceae", "Tropical", "Red/Yellow/Green", "Small", "Medium", "https://www.bonanza.com/listings/Leea-Coccinea-Rubra-Hawaiian-Indian-Holly-10-Seeds-TRF01/857863996?goog_pla=1"));
serverPlantArray.push(new PlantObject("Corn Plant", "Dracaena fragrans", "Asparagaceae", "Warm", "Green/Pink", "X-Large", "Medium","https://www.brighterblooms.com/products/massangeana-dracaena-corn-plant?variant=13669636702269&utm_source=google_shopping&utm_medium=organic"));
serverPlantArray.push(new PlantObject("Double Ellen Pink", "Helleborus x hybridus", "Helleborus", "Temperate", "Pink/Green", "Small", "Low", "https://www.waysidegardens.com/helleborus-merlin/p/27599/?gclid=EAIaIQobChMIjIj3q6i67wIVdQp9Ch01PgKWEAQYASABEgKbDvD_BwE&utm_source=google&utm_medium=cpc&utm_campaign=ppc_google_pla&ef_id=EAIaIQobChMIjIj3q6i67wIVdQp9Ch01PgKWEAQYASABEgKbDvD_BwE:G:s"));
serverPlantArray.push(new PlantObject("Eastern Teaberry", "Gaultheria procumbens", "Ericaceae", "Temperate", "Red/Green", "Medium", "Low", "https://www.target.com/p/3pk-winterberry-gaultheria-procumbens-plant-in-grower-pot-national-plant-network/-/A-81629527?ref=tgt_adv_XS000000&AFID=google_pla_df&fndsrc=tgtao&DFA=71700000012577535&CPNG=PLA_Patio%2BGarden%2BShopping&adgroup=SC_Patio%2BGarden_PatioGrill&LID=700000001170770pgs&LNM=PRODUCT_GROUP&network=g&device=c&location=9033301&targetid=pla-1055914097028&ds_rl=1246978&ds_rl=1247068&ds_rl=1248099&gclid=EAIaIQobChMIyauUvqm67wIV4w59Ch1_iw6KEAQYBCABEgKIevD_BwE&gclsrc=aw.ds"));
serverPlantArray.push(new PlantObject("Silver Lace", "Fallopia baldschuanica", "Knotweed Family", "Warm", "Green/White", "Medium", "Medium", "https://hirts.com/silver-lace-vine-polygonum-aubertii-2-5-pot/"));
serverPlantArray.push(new PlantObject("Mother Fern", "Asplenium viviparum", "Spleenwort", "Warm", "Green", "Small", "Low", "https://plantsexpress.com/webstore-plantsexpress/webstore/productdetailsouth.aspx?plantid=8295&list=0&itemno=ASP-BUL-01000"));
serverPlantArray.push(new PlantObject("ZZ Plant", "Zamioculcas", "Araceae", "Warm", "Green", "Large", "Low", "https://hirts.com/rare-zz-plant-zamioculcas-zamiifolia-easy-to-grow-house-plant-4-pot/"));


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});


/* GET plantList. */
app.get('/plantList', function(req, res) {
    res.json(serverPlantArray);
});



/* POST to addPlant */
app.post('/addPlant', function(req, res) {
    console.log(req.body);
    serverPlantArray.push(req.body);
    // set the res(ponse) object's status propery to a 200 code, which means success
    res.status(200).send(JSON.stringify('success'));
  });



app.delete('/deletePlant/:id', (req, res) => {
    let id = req.params.id;
    for (var i = 0; i < serverPlantArray.length; i++) {
        if (serverPlantArray[i].ID === id) {
            serverPlantArray.splice(i, 1);  // remove 1 element at loc i
            res.send('success');
        }
    }
    res.status(404);  // if not found
});


app.listen(3000);  // not setting port number in www.bin, simple to do here
console.log('3000 is the magic port');

module.exports = app;
