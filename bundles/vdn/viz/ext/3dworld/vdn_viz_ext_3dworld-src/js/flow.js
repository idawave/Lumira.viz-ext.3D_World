/*<<dependency*/
define("vdn_viz_ext_3dworld-src/js/flow", [ "vdn_viz_ext_3dworld-src/js/module" ], function(moduleFunc) {
/*dependency>>*/
    var flowRegisterFunc = function(){
		var flow = sap.viz.extapi.Flow.createFlow({
			id : "vdn.viz.ext.3dworld",
			name : "3D World",
			dataModel : "sap.viz.api.data.CrosstableDataset",
			type : "SVG"
		});
		var element  = sap.viz.extapi.Flow.createElement({
			id : "sap.viz.ext.module.3DWorldModule",
			name : "Hello World Module"
		});
		element.implement("sap.viz.elements.common.BaseGraphic", moduleFunc);
		/*Feeds Definition*/
		//ds1: City, Year
		var ds1 = {
		    "id": "vdn.viz.ext.module.3DWorldModule.DS1",
		    "name": "Lon/Lat Dimensions",
		    "type": "Dimension",
		    "min": 0,
		    "max": 2,
		    "aaIndex": 1,
		    "minStackedDims": 1,
		    "maxStackedDims": Infinity
		};
		element.addFeed(ds1);
		
		//ms1: Margin, Quantity sold, Sales revenue
		var ms1 = {
		    "id": "vdn.viz.ext.module.3DWorldModule.MS1",
		    "name": "Size/Color Measures",
		    "type": "Measure",
		    "min": 0,
		    "max": 2,
		    "mgIndex": 1
		};
		element.addFeed(ms1);
		
		flow.addElement({
			"element":element,
			"propertyCategory" : "plotArea"
		});
		sap.viz.extapi.Flow.registerFlow(flow);
    };
    flowRegisterFunc.id = "vdn.viz.ext.3dworld";
    return {
        id : flowRegisterFunc.id,
        init : flowRegisterFunc
    };
});