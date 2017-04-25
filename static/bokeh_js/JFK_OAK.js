document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("ac542aea-28f8-4e28-a86d-09f6f7ef7090");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ac542aea-28f8-4e28-a86d-09f6f7ef7090' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.pydata.org/bokeh/release/bokeh-0.12.3.min.js', 'https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.3.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"270246a7-c5ef-4bf1-880b-6535f970f53c":{"roots":{"references":[{"attributes":{"overlay":{"id":"3e23d181-f228-4b7e-bd24-a533dda7a5b6","type":"BoxAnnotation"},"plot":{"id":"42f24c85-48fa-462d-9f42-ebe4a8653954","subtype":"Chart","type":"Plot"}},"id":"bf40db22-78b7-42b5-84e6-26f084856ec0","type":"BoxZoomTool"},{"attributes":{},"id":"1e36eb1a-264f-44b0-9016-f38a270f33c2","type":"BasicTicker"},{"attributes":{"data_source":{"id":"c00e282a-74f0-4bdc-a614-eaf46ac78f2a","type":"ColumnDataSource"},"glyph":{"id":"c3aceaaa-8ff7-4cdd-a3e6-129ec915d73d","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"aa8ebae7-7f1e-4708-9840-f88766c363f9","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"460ef060-e8f8-4eab-b0d2-52dfb0dfaa97","subtype":"Chart","type":"Plot"}},"id":"0a00ef6f-dc87-4b83-9155-35ed5523d53d","type":"HelpTool"},{"attributes":{"plot":null,"text":"JetBlue Airways"},"id":"1519cb9d-13ea-466a-9f88-1798cbddb7c0","type":"Title"},{"attributes":{"dilate":true,"fill_color":{"value":"#fee8c8"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fee8c8"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"5c7eb21b-4785-4254-a6a0-481cfc76e45c","type":"Rect"},{"attributes":{"data_source":{"id":"3469cbf9-c771-41d1-8372-bfca4b1a9847","type":"ColumnDataSource"},"glyph":{"id":"1df987fc-f5aa-4631-bb38-0129a2c4241e","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"0d36b5b7-3adc-47c0-84dd-78b9e77af973","type":"GlyphRenderer"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"c35b313d-2c47-4e60-a079-7182ba44d8d7","type":"LinearAxis"}],"left":[{"id":"289be27a-54e5-40ff-b963-816a6f3a250c","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"3e23d181-f228-4b7e-bd24-a533dda7a5b6","type":"BoxAnnotation"},{"id":"e2256e0b-0149-44cf-9d8c-5f008f0cd40c","type":"GlyphRenderer"},{"id":"3de54437-24f6-4afa-8366-d2ff646bfb26","type":"GlyphRenderer"},{"id":"49c716db-70b3-4f6b-9ea8-9928abdaa26d","type":"GlyphRenderer"},{"id":"0d36b5b7-3adc-47c0-84dd-78b9e77af973","type":"GlyphRenderer"},{"id":"05ce0f21-1e92-44e4-a4e8-77890062e237","type":"GlyphRenderer"},{"id":"8382b4ee-e663-44a8-bd06-e257f89a978f","type":"GlyphRenderer"},{"id":"d0ee68f5-7953-44dc-9485-b7fdcc417ad0","type":"GlyphRenderer"},{"id":"ca805621-8342-4c1d-b2d5-5beb26536a2b","type":"GlyphRenderer"},{"id":"aa8ebae7-7f1e-4708-9840-f88766c363f9","type":"GlyphRenderer"},{"id":"c35b313d-2c47-4e60-a079-7182ba44d8d7","type":"LinearAxis"},{"id":"289be27a-54e5-40ff-b963-816a6f3a250c","type":"CategoricalAxis"},{"id":"607fa1e3-1e26-476b-b91e-94f67a8a3eeb","type":"ColorBar"}],"right":[{"id":"607fa1e3-1e26-476b-b91e-94f67a8a3eeb","type":"ColorBar"}],"title":{"id":"1519cb9d-13ea-466a-9f88-1798cbddb7c0","type":"Title"},"tool_events":{"id":"8db837e5-2861-49a5-ba76-ce49761165fb","type":"ToolEvents"},"toolbar":{"id":"94e36b26-9b29-4cf8-b744-66ef03db1133","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"371b324e-5d53-408d-b4eb-fc982f48ebd1","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"c3375c9c-f182-4206-a185-78e9b782d616","type":"FactorRange"}},"id":"42f24c85-48fa-462d-9f42-ebe4a8653954","subtype":"Chart","type":"Plot"},{"attributes":{"color_mapper":{"id":"10c502ae-17f2-4311-86f1-6da134c5aeb9","type":"LinearColorMapper"},"formatter":{"id":"da8d3ad9-cca2-4022-b042-afa281dc04e7","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"42f24c85-48fa-462d-9f42-ebe4a8653954","subtype":"Chart","type":"Plot"},"ticker":{"id":"b3c58f3f-06b7-4129-a012-113caca9ab6e","type":"BasicTicker"}},"id":"607fa1e3-1e26-476b-b91e-94f67a8a3eeb","type":"ColorBar"},{"attributes":{"overlay":{"id":"b811b420-10fd-4698-ac19-49e6f84bd266","type":"BoxAnnotation"},"plot":{"id":"460ef060-e8f8-4eab-b0d2-52dfb0dfaa97","subtype":"Chart","type":"Plot"}},"id":"9d119dd4-db71-4a5a-93ff-921c547ba2f1","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"7d1c8d0c-c9b5-477e-8e6d-ce0b485d7f6b","type":"ColumnDataSource"},"glyph":{"id":"61d8c2d8-82d1-40c0-8802-27e8486044ea","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"1721f448-9746-418e-a85b-75c6066c43c9","type":"GlyphRenderer"},{"attributes":{"child":{"id":"460ef060-e8f8-4eab-b0d2-52dfb0dfaa97","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"041bb397-17c4-4c07-a218-408a1fcd33b4","type":"Panel"},{"attributes":{"plot":{"id":"42f24c85-48fa-462d-9f42-ebe4a8653954","subtype":"Chart","type":"Plot"}},"id":"6dc04442-61a7-4317-a64a-0a721e30f8dd","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(23.3, 26.7]"],"chart_index":[{"POS_ARR_DELAY":"(23.3, 26.7]"}],"values":[23.357142857142858],"x":[20],"y":["Tuesday"]}},"id":"b1e9da21-869a-4d7f-9ce5-2f2d0afeddef","type":"ColumnDataSource"},{"attributes":{},"id":"cdd08b12-c469-4f5e-9893-fd420f21eee1","type":"BasicTickFormatter"},{"attributes":{},"id":"0a2eee2f-d9a5-421c-8198-caef704ecd89","type":"CategoricalTickFormatter"},{"attributes":{"data_source":{"id":"a0ad01ab-ca55-44ef-afba-165815063e85","type":"ColumnDataSource"},"glyph":{"id":"50fbb4e1-d086-4f4c-8bed-30931fe5b13a","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"8382b4ee-e663-44a8-bd06-e257f89a978f","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[13.038461538461538,11.545454545454545,10.5,13.22,12.433333333333334,13.25925925925926],"x":[17,16,21,9,16,17],"y":["Monday","Thursday","Thursday","Friday","Saturday","Sunday"]}},"id":"52f6d15f-fa3f-416c-a919-ae59b5338aee","type":"ColumnDataSource"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"82622df6-5cb1-47e5-9dbb-676b9779fd0f","type":"FactorRange"},{"attributes":{"data_source":{"id":"5555ee4f-b8d8-461c-a330-d781f2e752df","type":"ColumnDataSource"},"glyph":{"id":"e60b0898-1b77-4fc3-9d6f-19542d7a7092","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"773f476a-cddc-407c-a112-c0f8983ecb60","type":"GlyphRenderer"},{"attributes":{},"id":"8db837e5-2861-49a5-ba76-ce49761165fb","type":"ToolEvents"},{"attributes":{"data_source":{"id":"52f6d15f-fa3f-416c-a919-ae59b5338aee","type":"ColumnDataSource"},"glyph":{"id":"c68a3ab4-3a8a-4a54-bc95-0928880e88e4","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c0236a34-9f80-48b8-98ba-fa7225f1c03f","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"61d8c2d8-82d1-40c0-8802-27e8486044ea","type":"Rect"},{"attributes":{"plot":{"id":"460ef060-e8f8-4eab-b0d2-52dfb0dfaa97","subtype":"Chart","type":"Plot"}},"id":"9e40eba9-0014-4a3f-b8d3-441797156bce","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(23.3, 26.7]"],"chart_index":[{"POS_ARR_DELAY":"(23.3, 26.7]"}],"values":[23.357142857142858],"x":[20],"y":["Tuesday"]}},"id":"1e951008-4283-4d52-b62d-7b4ee4ad118c","type":"ColumnDataSource"},{"attributes":{},"id":"da8d3ad9-cca2-4022-b042-afa281dc04e7","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"}],"values":[15.777777777777779,13.696428571428571,15.589285714285714],"x":[16,16,16],"y":["Monday","Friday","Sunday"]}},"id":"c8c39717-242f-43b2-8866-6a0b68a05e44","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3e23d181-f228-4b7e-bd24-a533dda7a5b6","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"}],"values":[15.777777777777779,13.696428571428571,15.589285714285714],"x":[16,16,16],"y":["Monday","Friday","Sunday"]}},"id":"5cca826e-b9c4-47eb-9cf0-bb5b188ca08c","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":23},"id":"f2cddbb1-71f9-4153-880c-402fc27ff307","type":"Range1d"},{"attributes":{},"id":"f681ca64-a6ea-4c67-830b-e4fc0e74cf9c","type":"CategoricalTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#fee8c8"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fee8c8"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"e60b0898-1b77-4fc3-9d6f-19542d7a7092","type":"Rect"},{"attributes":{},"id":"b3c58f3f-06b7-4129-a012-113caca9ab6e","type":"BasicTicker"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"bd8ced5e-62e4-496f-8333-f78a487ab159","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"42f24c85-48fa-462d-9f42-ebe4a8653954","subtype":"Chart","type":"Plot"},"ticker":{"id":"f681ca64-a6ea-4c67-830b-e4fc0e74cf9c","type":"CategoricalTicker"}},"id":"289be27a-54e5-40ff-b963-816a6f3a250c","type":"CategoricalAxis"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"223ecf2c-5fec-4816-9c5f-0fb41739b53e","type":"Rect"},{"attributes":{},"id":"7b99c5cc-3cda-4476-91c3-d8c079b39241","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"42f24c85-48fa-462d-9f42-ebe4a8653954","subtype":"Chart","type":"Plot"}},"id":"90c5912e-822d-480b-98e4-419d5fc04ff2","type":"PanTool"},{"attributes":{},"id":"93dddc8f-9c70-403b-8143-680381f7d6ce","type":"CategoricalTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b811b420-10fd-4698-ac19-49e6f84bd266","type":"BoxAnnotation"},{"attributes":{},"id":"bd8ced5e-62e4-496f-8333-f78a487ab159","type":"CategoricalTickFormatter"},{"attributes":{},"id":"79080fd2-b144-4f29-bd2a-81e7caa0212a","type":"BasicTicker"},{"attributes":{"plot":{"id":"42f24c85-48fa-462d-9f42-ebe4a8653954","subtype":"Chart","type":"Plot"}},"id":"d048e247-be9f-40be-a5ad-305626ebed4b","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]","(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[19.677419354838708,18.96551724137931],"x":[16,17],"y":["Tuesday","Friday"]}},"id":"d76b6fc3-35e1-4c9c-afea-8a5a72ae5826","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"ca1a7147-88f1-4a6f-a6cf-81898d65e7d9","type":"Rect"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"90c5912e-822d-480b-98e4-419d5fc04ff2","type":"PanTool"},{"id":"6dc04442-61a7-4317-a64a-0a721e30f8dd","type":"WheelZoomTool"},{"id":"bf40db22-78b7-42b5-84e6-26f084856ec0","type":"BoxZoomTool"},{"id":"d048e247-be9f-40be-a5ad-305626ebed4b","type":"SaveTool"},{"id":"c677586c-2d8d-408b-bcbd-28c06e42c436","type":"ResetTool"},{"id":"76649d63-364f-4415-b8f4-fa4d52c696f1","type":"HelpTool"}]},"id":"94e36b26-9b29-4cf8-b744-66ef03db1133","type":"Toolbar"},{"attributes":{"data_source":{"id":"d76b6fc3-35e1-4c9c-afea-8a5a72ae5826","type":"ColumnDataSource"},"glyph":{"id":"c176b444-ad46-4c16-8069-6c1c03649bd5","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"0b065dc8-0d8d-4733-b550-b718bb58bf8d","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[4.1568627450980395,6.333333333333333,5.566666666666666,6.0],"x":[9,9,9,8],"y":["Monday","Tuesday","Wednesday","Friday"]}},"id":"f1a83b3a-71b4-44f7-a03e-f3482f68c96a","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"da0c9156-cae3-4b23-bfdc-de1fc14a632d","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20, 23.3]","(20, 23.3]"],"chart_index":[{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"}],"values":[23.142857142857142,21.733333333333334],"x":[20,20],"y":["Monday","Wednesday"]}},"id":"b3953926-a910-472b-b7cc-852ba19a513d","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"42f24c85-48fa-462d-9f42-ebe4a8653954","subtype":"Chart","type":"Plot"}},"id":"76649d63-364f-4415-b8f4-fa4d52c696f1","type":"HelpTool"},{"attributes":{},"id":"15f446d4-89b7-4158-b14d-2187f053ad1d","type":"ToolEvents"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"0a2eee2f-d9a5-421c-8198-caef704ecd89","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"460ef060-e8f8-4eab-b0d2-52dfb0dfaa97","subtype":"Chart","type":"Plot"},"ticker":{"id":"93dddc8f-9c70-403b-8143-680381f7d6ce","type":"CategoricalTicker"}},"id":"3a8ca643-ed9e-40f6-a2b5-cc2c034dfa16","type":"CategoricalAxis"},{"attributes":{"plot":{"id":"460ef060-e8f8-4eab-b0d2-52dfb0dfaa97","subtype":"Chart","type":"Plot"}},"id":"c651f986-ca63-44aa-b2a2-1a5d9ee85599","type":"ResetTool"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"93713a89-2537-479a-b097-667ddc28cf71","type":"Title"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"da6f2fc1-2f3d-4414-a829-6ff3e74a13ea","type":"Rect"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"b8976b59-e8d9-4c59-8e66-500273715f91","type":"LinearColorMapper"},{"attributes":{"plot":{"id":"42f24c85-48fa-462d-9f42-ebe4a8653954","subtype":"Chart","type":"Plot"}},"id":"c677586c-2d8d-408b-bcbd-28c06e42c436","type":"ResetTool"},{"attributes":{},"id":"ad22410a-59ca-4672-909d-532c99eb2bf8","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[7.363636363636363,9.882352941176471,7.9375,8.0,7.2745098039215685],"x":[17,9,9,17,9],"y":["Wednesday","Thursday","Saturday","Saturday","Sunday"]}},"id":"32795055-d0e9-49f3-ba20-b505ba2b1e5c","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"667352a7-6b05-4068-9be9-365324063a7a","type":"ColumnDataSource"},"glyph":{"id":"da0c9156-cae3-4b23-bfdc-de1fc14a632d","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d4e7436c-c055-4850-8156-6f98a500307f","type":"GlyphRenderer"},{"attributes":{"color_mapper":{"id":"b8976b59-e8d9-4c59-8e66-500273715f91","type":"LinearColorMapper"},"formatter":{"id":"ad22410a-59ca-4672-909d-532c99eb2bf8","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"460ef060-e8f8-4eab-b0d2-52dfb0dfaa97","subtype":"Chart","type":"Plot"},"ticker":{"id":"f15ad599-6985-436c-bebd-0d4baceeaa69","type":"BasicTicker"}},"id":"68cdb84a-0dc9-4b25-9086-7c9b007e7f30","type":"ColorBar"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"10c502ae-17f2-4311-86f1-6da134c5aeb9","type":"LinearColorMapper"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"cdd08b12-c469-4f5e-9893-fd420f21eee1","type":"BasicTickFormatter"},"plot":{"id":"42f24c85-48fa-462d-9f42-ebe4a8653954","subtype":"Chart","type":"Plot"},"ticker":{"id":"79080fd2-b144-4f29-bd2a-81e7caa0212a","type":"BasicTicker"}},"id":"c35b313d-2c47-4e60-a079-7182ba44d8d7","type":"LinearAxis"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"db40b0e0-734c-4540-be2b-81663d115025","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[0.0,0.2727272727272727,0.0,0.3333333333333333,0.0,2.5,1.5,0.0,0.0],"x":[8,17,11,21,8,21,21,8,19],"y":["Monday","Tuesday","Wednesday","Wednesday","Thursday","Friday","Saturday","Sunday","Sunday"]}},"id":"c00e282a-74f0-4bdc-a614-eaf46ac78f2a","type":"ColumnDataSource"},{"attributes":{"child":{"id":"42f24c85-48fa-462d-9f42-ebe4a8653954","subtype":"Chart","type":"Plot"},"title":"B6"},"id":"92459c88-4525-4a14-8e7d-3cdeabdc94f7","type":"Panel"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[4.1568627450980395,6.333333333333333,5.566666666666666,6.0],"x":[9,9,9,8],"y":["Monday","Tuesday","Wednesday","Friday"]}},"id":"5555ee4f-b8d8-461c-a330-d781f2e752df","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"460ef060-e8f8-4eab-b0d2-52dfb0dfaa97","subtype":"Chart","type":"Plot"}},"id":"c9a7dee7-3172-497e-afde-b52781bb3e2e","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[0.0,0.2727272727272727,0.0,0.3333333333333333,0.0,2.5,1.5,0.0,0.0],"x":[8,17,11,21,8,21,21,8,19],"y":["Monday","Tuesday","Wednesday","Wednesday","Thursday","Friday","Saturday","Sunday","Sunday"]}},"id":"febf6877-c553-45e6-aacf-f8b995cd6f47","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"665b2169-1541-4890-add6-301f11f9a300","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fff7ec"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fff7ec"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"0ba2dd91-d495-41fc-bdfe-f4398f834aad","type":"Rect"},{"attributes":{"data_source":{"id":"febf6877-c553-45e6-aacf-f8b995cd6f47","type":"ColumnDataSource"},"glyph":{"id":"0ba2dd91-d495-41fc-bdfe-f4398f834aad","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"3fca22d0-c50a-49a2-b5d7-e6229fdf795d","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":23},"id":"371b324e-5d53-408d-b4eb-fc982f48ebd1","type":"Range1d"},{"attributes":{"plot":{"id":"460ef060-e8f8-4eab-b0d2-52dfb0dfaa97","subtype":"Chart","type":"Plot"}},"id":"09d06cb0-0bb7-4ba7-a3b6-e79341d94f14","type":"PanTool"},{"attributes":{"data_source":{"id":"5cca826e-b9c4-47eb-9cf0-bb5b188ca08c","type":"ColumnDataSource"},"glyph":{"id":"db40b0e0-734c-4540-be2b-81663d115025","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"05ce0f21-1e92-44e4-a4e8-77890062e237","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"9c6d27f3-8bf6-43ba-a26f-d7ccfffec2f0","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[13.038461538461538,11.545454545454545,10.5,13.22,12.433333333333334,13.25925925925926],"x":[17,16,21,9,16,17],"y":["Monday","Thursday","Thursday","Friday","Saturday","Sunday"]}},"id":"a0ad01ab-ca55-44ef-afba-165815063e85","type":"ColumnDataSource"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"7b99c5cc-3cda-4476-91c3-d8c079b39241","type":"BasicTickFormatter"},"plot":{"id":"460ef060-e8f8-4eab-b0d2-52dfb0dfaa97","subtype":"Chart","type":"Plot"},"ticker":{"id":"1e36eb1a-264f-44b0-9016-f38a270f33c2","type":"BasicTicker"}},"id":"c355f647-dff0-4e21-94fb-12599e995da3","type":"LinearAxis"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"a2d5936e-298c-4ffc-964c-668e4a7413dd","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"c68a3ab4-3a8a-4a54-bc95-0928880e88e4","type":"Rect"},{"attributes":{"data_source":{"id":"1e951008-4283-4d52-b62d-7b4ee4ad118c","type":"ColumnDataSource"},"glyph":{"id":"44c7b065-9484-4a58-9add-a438c84ba8db","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"3de54437-24f6-4afa-8366-d2ff646bfb26","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"b3953926-a910-472b-b7cc-852ba19a513d","type":"ColumnDataSource"},"glyph":{"id":"223ecf2c-5fec-4816-9c5f-0fb41739b53e","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"53f07448-9822-4b51-be7f-335d8741f186","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0,30.0,27.08108108108108,30.0,30.0,30.0,30.0,27.571428571428573,30.0],"x":[21,21,16,17,20,20,20,20,21],"y":["Monday","Tuesday","Wednesday","Thursday","Thursday","Friday","Saturday","Sunday","Sunday"]}},"id":"188e6de2-91e8-4253-af22-eb521ab8b492","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"188e6de2-91e8-4253-af22-eb521ab8b492","type":"ColumnDataSource"},"glyph":{"id":"ca1a7147-88f1-4a6f-a6cf-81898d65e7d9","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e2256e0b-0149-44cf-9d8c-5f008f0cd40c","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"c176b444-ad46-4c16-8069-6c1c03649bd5","type":"Rect"},{"attributes":{"data_source":{"id":"32795055-d0e9-49f3-ba20-b505ba2b1e5c","type":"ColumnDataSource"},"glyph":{"id":"da6f2fc1-2f3d-4414-a829-6ff3e74a13ea","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d0ee68f5-7953-44dc-9485-b7fdcc417ad0","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0,30.0,27.08108108108108,30.0,30.0,30.0,30.0,27.571428571428573,30.0],"x":[21,21,16,17,20,20,20,20,21],"y":["Monday","Tuesday","Wednesday","Thursday","Thursday","Friday","Saturday","Sunday","Sunday"]}},"id":"7d1c8d0c-c9b5-477e-8e6d-ce0b485d7f6b","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"50fbb4e1-d086-4f4c-8bed-30931fe5b13a","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]","(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[19.677419354838708,18.96551724137931],"x":[16,17],"y":["Tuesday","Friday"]}},"id":"3469cbf9-c771-41d1-8372-bfca4b1a9847","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"c8c39717-242f-43b2-8866-6a0b68a05e44","type":"ColumnDataSource"},"glyph":{"id":"665b2169-1541-4890-add6-301f11f9a300","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"aae0abf2-ccb4-4431-8317-097070fc26ab","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"f1a83b3a-71b4-44f7-a03e-f3482f68c96a","type":"ColumnDataSource"},"glyph":{"id":"5c7eb21b-4785-4254-a6a0-481cfc76e45c","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ca805621-8342-4c1d-b2d5-5beb26536a2b","type":"GlyphRenderer"},{"attributes":{"callback":null,"tabs":[{"id":"041bb397-17c4-4c07-a218-408a1fcd33b4","type":"Panel"},{"id":"92459c88-4525-4a14-8e7d-3cdeabdc94f7","type":"Panel"}]},"id":"a1e7c380-be25-44b9-8998-897fe971422b","type":"Tabs"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"c355f647-dff0-4e21-94fb-12599e995da3","type":"LinearAxis"}],"left":[{"id":"3a8ca643-ed9e-40f6-a2b5-cc2c034dfa16","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"b811b420-10fd-4698-ac19-49e6f84bd266","type":"BoxAnnotation"},{"id":"1721f448-9746-418e-a85b-75c6066c43c9","type":"GlyphRenderer"},{"id":"122b1686-bdff-452d-b837-df405ccf27c1","type":"GlyphRenderer"},{"id":"53f07448-9822-4b51-be7f-335d8741f186","type":"GlyphRenderer"},{"id":"0b065dc8-0d8d-4733-b550-b718bb58bf8d","type":"GlyphRenderer"},{"id":"aae0abf2-ccb4-4431-8317-097070fc26ab","type":"GlyphRenderer"},{"id":"c0236a34-9f80-48b8-98ba-fa7225f1c03f","type":"GlyphRenderer"},{"id":"d4e7436c-c055-4850-8156-6f98a500307f","type":"GlyphRenderer"},{"id":"773f476a-cddc-407c-a112-c0f8983ecb60","type":"GlyphRenderer"},{"id":"3fca22d0-c50a-49a2-b5d7-e6229fdf795d","type":"GlyphRenderer"},{"id":"c355f647-dff0-4e21-94fb-12599e995da3","type":"LinearAxis"},{"id":"3a8ca643-ed9e-40f6-a2b5-cc2c034dfa16","type":"CategoricalAxis"},{"id":"68cdb84a-0dc9-4b25-9086-7c9b007e7f30","type":"ColorBar"}],"right":[{"id":"68cdb84a-0dc9-4b25-9086-7c9b007e7f30","type":"ColorBar"}],"title":{"id":"93713a89-2537-479a-b097-667ddc28cf71","type":"Title"},"tool_events":{"id":"15f446d4-89b7-4158-b14d-2187f053ad1d","type":"ToolEvents"},"toolbar":{"id":"b6eb6d87-9fdc-4cf8-b994-ede106ca915a","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"f2cddbb1-71f9-4153-880c-402fc27ff307","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"82622df6-5cb1-47e5-9dbb-676b9779fd0f","type":"FactorRange"}},"id":"460ef060-e8f8-4eab-b0d2-52dfb0dfaa97","subtype":"Chart","type":"Plot"},{"attributes":{"data_source":{"id":"b1e9da21-869a-4d7f-9ce5-2f2d0afeddef","type":"ColumnDataSource"},"glyph":{"id":"9c6d27f3-8bf6-43ba-a26f-d7ccfffec2f0","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"122b1686-bdff-452d-b837-df405ccf27c1","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[7.363636363636363,9.882352941176471,7.9375,8.0,7.2745098039215685],"x":[17,9,9,17,9],"y":["Wednesday","Thursday","Saturday","Saturday","Sunday"]}},"id":"667352a7-6b05-4068-9be9-365324063a7a","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"7b2133be-ce4a-4fe8-ba52-7fbaef2c4c3a","type":"ColumnDataSource"},"glyph":{"id":"a2d5936e-298c-4ffc-964c-668e4a7413dd","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"49c716db-70b3-4f6b-9ea8-9928abdaa26d","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"44c7b065-9484-4a58-9add-a438c84ba8db","type":"Rect"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"c3375c9c-f182-4206-a185-78e9b782d616","type":"FactorRange"},{"attributes":{"dilate":true,"fill_color":{"value":"#fff7ec"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fff7ec"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"c3aceaaa-8ff7-4cdd-a3e6-129ec915d73d","type":"Rect"},{"attributes":{},"id":"f15ad599-6985-436c-bebd-0d4baceeaa69","type":"BasicTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"1df987fc-f5aa-4631-bb38-0129a2c4241e","type":"Rect"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"09d06cb0-0bb7-4ba7-a3b6-e79341d94f14","type":"PanTool"},{"id":"9e40eba9-0014-4a3f-b8d3-441797156bce","type":"WheelZoomTool"},{"id":"9d119dd4-db71-4a5a-93ff-921c547ba2f1","type":"BoxZoomTool"},{"id":"c9a7dee7-3172-497e-afde-b52781bb3e2e","type":"SaveTool"},{"id":"c651f986-ca63-44aa-b2a2-1a5d9ee85599","type":"ResetTool"},{"id":"0a00ef6f-dc87-4b83-9155-35ed5523d53d","type":"HelpTool"}]},"id":"b6eb6d87-9fdc-4cf8-b994-ede106ca915a","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20, 23.3]","(20, 23.3]"],"chart_index":[{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"}],"values":[23.142857142857142,21.733333333333334],"x":[20,20],"y":["Monday","Wednesday"]}},"id":"7b2133be-ce4a-4fe8-ba52-7fbaef2c4c3a","type":"ColumnDataSource"}],"root_ids":["a1e7c380-be25-44b9-8998-897fe971422b"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"270246a7-c5ef-4bf1-880b-6535f970f53c","elementid":"ac542aea-28f8-4e28-a86d-09f6f7ef7090","modelid":"a1e7c380-be25-44b9-8998-897fe971422b"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-0.12.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
});