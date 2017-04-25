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
      };var element = document.getElementById("0bd69a85-aa9b-4af8-af48-27c74917724f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0bd69a85-aa9b-4af8-af48-27c74917724f' but no matching script tag was found. ")
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
                  var docs_json = {"a75b9ed0-8053-496a-bcff-fe4cb9081d01":{"roots":{"references":[{"attributes":{"dilate":true,"fill_color":{"value":"#fee8c8"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fee8c8"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"dcb55bcc-8958-42e7-9e9b-0d02f3bf67f7","type":"Rect"},{"attributes":{},"id":"8699a7b8-801a-4689-9198-f07598993a2f","type":"CategoricalTicker"},{"attributes":{},"id":"365d2bc2-e9e4-476c-8cba-8dccd0dab455","type":"ToolEvents"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"e0ec94c1-05a0-4e60-a849-37da9bdc009c","type":"LinearColorMapper"},{"attributes":{"data_source":{"id":"339916f3-b026-4017-8032-5b154184d11e","type":"ColumnDataSource"},"glyph":{"id":"94b609cd-e3cf-4154-a9fa-3cc77b39767a","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"52525735-6760-423f-8d0c-9f614040b61d","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 4.4]","(3.3, 4.4]","(3.3, 4.4]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 4.4]"},{"POS_ARR_DELAY":"(3.3, 4.4]"},{"POS_ARR_DELAY":"(3.3, 4.4]"}],"values":[3.4,3.388888888888889,4.285714285714286],"x":[6,6,11],"y":["Monday","Friday","Sunday"]}},"id":"a9fc8b76-eb4c-4c0a-89c4-e6698a8333e2","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 7.8]","(6.7, 7.8]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 7.8]"},{"POS_ARR_DELAY":"(6.7, 7.8]"}],"values":[7.0,7.125],"x":[7,11],"y":["Tuesday","Wednesday"]}},"id":"b4169ce0-6140-4060-b71c-066d21ca92f5","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"cccf5d0f-8412-45d4-92e8-a22e1422e7c4","type":"Rect"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"bfa84bf9-0aa3-4a9e-b79b-09e9b674c0f0","type":"Title"},{"attributes":{"plot":{"id":"5fe78408-411a-47b7-88f6-5aa089f81845","subtype":"Chart","type":"Plot"}},"id":"b154eff8-9552-4a6e-9e7c-6cd3bdfdc8b6","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(8.9, 10]"],"chart_index":[{"POS_ARR_DELAY":"(8.9, 10]"}],"values":[10.0],"x":[7],"y":["Friday"]}},"id":"911a99c6-8419-4561-8312-1527325e6734","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"aa898587-160d-44e4-920f-dbd31b61aeee","type":"ColumnDataSource"},"glyph":{"id":"dcb55bcc-8958-42e7-9e9b-0d02f3bf67f7","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"541e721a-1e5d-4729-b8a0-785aa88ed21b","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"350d6300-0667-4dd9-a3ec-bd847f6bcb8e","type":"ColumnDataSource"},"glyph":{"id":"b12dcafd-8320-4fbe-b9e5-b1b02e180be2","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d47b6c73-3b6d-4b9c-9f19-71d97dd11868","type":"GlyphRenderer"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"ac2ed5db-4fe0-4807-a4eb-7d1ff42b10c6","type":"LinearAxis"}],"left":[{"id":"2073c505-42f0-48d7-aef0-fbbdf2c685b2","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"8135cfff-f764-478a-af25-75331c5e9fee","type":"BoxAnnotation"},{"id":"e10b153c-ea2c-489e-96d7-1d56f8a04d66","type":"GlyphRenderer"},{"id":"842bbb74-5b5a-4c9b-9cbd-49920ac12a38","type":"GlyphRenderer"},{"id":"8a4f0e5e-7e3e-4da9-bb43-eff67d663fb0","type":"GlyphRenderer"},{"id":"a811fc35-b7f7-4305-b69a-6a9292e7fa89","type":"GlyphRenderer"},{"id":"8c5d73b7-fbdb-469a-ac0e-fcb1d8339a38","type":"GlyphRenderer"},{"id":"10a5d9e1-d36e-492d-9be1-7ca72f373637","type":"GlyphRenderer"},{"id":"9a448921-1328-495e-b38c-cd86fc5e443f","type":"GlyphRenderer"},{"id":"541e721a-1e5d-4729-b8a0-785aa88ed21b","type":"GlyphRenderer"},{"id":"ac2ed5db-4fe0-4807-a4eb-7d1ff42b10c6","type":"LinearAxis"},{"id":"2073c505-42f0-48d7-aef0-fbbdf2c685b2","type":"CategoricalAxis"},{"id":"dc368f4f-3597-43ae-adaf-8c6c8a1eeef1","type":"ColorBar"}],"right":[{"id":"dc368f4f-3597-43ae-adaf-8c6c8a1eeef1","type":"ColorBar"}],"title":{"id":"bfa84bf9-0aa3-4a9e-b79b-09e9b674c0f0","type":"Title"},"tool_events":{"id":"365d2bc2-e9e4-476c-8cba-8dccd0dab455","type":"ToolEvents"},"toolbar":{"id":"03049008-f40c-46f7-8610-d64235d6bb69","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"8a681588-5c1a-4080-81af-865441d2a90c","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"47349b84-24ce-4097-8323-12556aa8a022","type":"FactorRange"}},"id":"5fe78408-411a-47b7-88f6-5aa089f81845","subtype":"Chart","type":"Plot"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 4.4]","(3.3, 4.4]","(3.3, 4.4]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 4.4]"},{"POS_ARR_DELAY":"(3.3, 4.4]"},{"POS_ARR_DELAY":"(3.3, 4.4]"}],"values":[3.4,3.388888888888889,4.285714285714286],"x":[6,6,11],"y":["Monday","Friday","Sunday"]}},"id":"339916f3-b026-4017-8032-5b154184d11e","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":23},"id":"8a681588-5c1a-4080-81af-865441d2a90c","type":"Range1d"},{"attributes":{"child":{"id":"63c69011-843e-4333-93a9-057dc108194d","subtype":"Chart","type":"Plot"},"title":"WN"},"id":"03fc4505-9b8a-4c32-b213-69878bb87352","type":"Panel"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(4.4, 5.6]"],"chart_index":[{"POS_ARR_DELAY":"(4.4, 5.6]"}],"values":[5.222222222222222],"x":[14],"y":["Saturday"]}},"id":"7f39e133-f31b-4983-9824-51628e369e95","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"abe1fd22-6677-44b1-ab56-fe2680478b07","type":"ColumnDataSource"},"glyph":{"id":"79992079-1f6e-4497-a702-0cd38f1e47b1","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"9a448921-1328-495e-b38c-cd86fc5e443f","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(1.1, 2.2]","(1.1, 2.2]","(1.1, 2.2]","(1.1, 2.2]","(1.1, 2.2]"],"chart_index":[{"POS_ARR_DELAY":"(1.1, 2.2]"},{"POS_ARR_DELAY":"(1.1, 2.2]"},{"POS_ARR_DELAY":"(1.1, 2.2]"},{"POS_ARR_DELAY":"(1.1, 2.2]"},{"POS_ARR_DELAY":"(1.1, 2.2]"}],"values":[1.7142857142857142,1.8205128205128205,2.2222222222222223,2.0,1.8888888888888888],"x":[11,6,7,11,6],"y":["Monday","Wednesday","Wednesday","Thursday","Saturday"]}},"id":"abe1fd22-6677-44b1-ab56-fe2680478b07","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(4.4, 5.6]"],"chart_index":[{"POS_ARR_DELAY":"(4.4, 5.6]"}],"values":[5.222222222222222],"x":[14],"y":["Saturday"]}},"id":"8cd64796-400e-4c56-b86a-532b314a55d1","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"4a98ac33-6efd-4e0e-97e8-c806d886483c","type":"ColumnDataSource"},"glyph":{"id":"2813788f-fd66-48b7-a1b2-c5ffeca7dd5d","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"10a5d9e1-d36e-492d-9be1-7ca72f373637","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"63c69011-843e-4333-93a9-057dc108194d","subtype":"Chart","type":"Plot"}},"id":"fc9cf62d-795e-482d-af77-b33f7ee60c1e","type":"ResetTool"},{"attributes":{"plot":{"id":"5fe78408-411a-47b7-88f6-5aa089f81845","subtype":"Chart","type":"Plot"}},"id":"c62a4a41-e9ba-4515-a07e-af1e276354fc","type":"ResetTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"2813788f-fd66-48b7-a1b2-c5ffeca7dd5d","type":"Rect"},{"attributes":{"plot":{"id":"5fe78408-411a-47b7-88f6-5aa089f81845","subtype":"Chart","type":"Plot"}},"id":"27ba6545-c655-413c-bf31-f7ed3b34c136","type":"PanTool"},{"attributes":{"data_source":{"id":"6bd80a9f-7742-40f2-8822-4bc98a52b073","type":"ColumnDataSource"},"glyph":{"id":"81218e7b-c7b2-43f4-a4d2-81945189e3bd","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e10b153c-ea2c-489e-96d7-1d56f8a04d66","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"d915087c-9f6a-4d70-9e3e-f4450c02e10c","type":"Rect"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"27ba6545-c655-413c-bf31-f7ed3b34c136","type":"PanTool"},{"id":"b154eff8-9552-4a6e-9e7c-6cd3bdfdc8b6","type":"WheelZoomTool"},{"id":"177cdf8a-de76-435e-85f4-9c6eedfb6bc3","type":"BoxZoomTool"},{"id":"0c27a037-2dbb-4812-876f-741957b6061a","type":"SaveTool"},{"id":"c62a4a41-e9ba-4515-a07e-af1e276354fc","type":"ResetTool"},{"id":"56b2043e-f0a3-41d7-9445-c0177f56b7f6","type":"HelpTool"}]},"id":"03049008-f40c-46f7-8610-d64235d6bb69","type":"Toolbar"},{"attributes":{"data_source":{"id":"4f337ae0-2617-4bd8-a5c1-ed3cfb2bdf89","type":"ColumnDataSource"},"glyph":{"id":"cccf5d0f-8412-45d4-92e8-a22e1422e7c4","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d0687694-b67c-4d8d-9b9e-b7204b155080","type":"GlyphRenderer"},{"attributes":{},"id":"2d43602f-f8d8-438c-81c3-db2b1df6f4d3","type":"BasicTicker"},{"attributes":{},"id":"000fe933-e71e-42cd-bda1-695eb7d869ff","type":"CategoricalTickFormatter"},{"attributes":{},"id":"db3df98e-cc4d-429d-bc82-7e9c2da81acb","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.01, 1.1]","[-0.01, 1.1]","[-0.01, 1.1]","[-0.01, 1.1]","[-0.01, 1.1]","[-0.01, 1.1]","[-0.01, 1.1]"],"chart_index":[{"POS_ARR_DELAY":"[-0.01, 1.1]"},{"POS_ARR_DELAY":"[-0.01, 1.1]"},{"POS_ARR_DELAY":"[-0.01, 1.1]"},{"POS_ARR_DELAY":"[-0.01, 1.1]"},{"POS_ARR_DELAY":"[-0.01, 1.1]"},{"POS_ARR_DELAY":"[-0.01, 1.1]"},{"POS_ARR_DELAY":"[-0.01, 1.1]"}],"values":[0.0,0.0,0.0,0.125,0.0,0.625,0.0],"x":[11,5,7,10,15,7,9],"y":["Tuesday","Saturday","Saturday","Saturday","Saturday","Sunday","Sunday"]}},"id":"350d6300-0667-4dd9-a3ec-bd847f6bcb8e","type":"ColumnDataSource"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"a22817a6-cb31-47a4-8b14-3db6cd312ca2","type":"FactorRange"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"db3df98e-cc4d-429d-bc82-7e9c2da81acb","type":"BasicTickFormatter"},"plot":{"id":"5fe78408-411a-47b7-88f6-5aa089f81845","subtype":"Chart","type":"Plot"},"ticker":{"id":"1163b39e-4bf7-4d6e-b4b8-cad3ee39be4c","type":"BasicTicker"}},"id":"ac2ed5db-4fe0-4807-a4eb-7d1ff42b10c6","type":"LinearAxis"},{"attributes":{"plot":{"id":"63c69011-843e-4333-93a9-057dc108194d","subtype":"Chart","type":"Plot"}},"id":"ddf414ae-0cce-44de-a7cc-39e44c2403c8","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"5fe78408-411a-47b7-88f6-5aa089f81845","subtype":"Chart","type":"Plot"}},"id":"0c27a037-2dbb-4812-876f-741957b6061a","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8135cfff-f764-478a-af25-75331c5e9fee","type":"BoxAnnotation"},{"attributes":{},"id":"c02a5695-a44e-4085-8a65-cde4f58050c6","type":"CategoricalTickFormatter"},{"attributes":{},"id":"2204275f-b8d0-464f-8707-5b139cc72704","type":"CategoricalTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(2.2, 3.3]","(2.2, 3.3]","(2.2, 3.3]","(2.2, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"(2.2, 3.3]"},{"POS_ARR_DELAY":"(2.2, 3.3]"},{"POS_ARR_DELAY":"(2.2, 3.3]"},{"POS_ARR_DELAY":"(2.2, 3.3]"}],"values":[3.2222222222222223,3.1578947368421053,2.5714285714285716,2.2564102564102564],"x":[7,6,11,6],"y":["Monday","Thursday","Friday","Sunday"]}},"id":"4a98ac33-6efd-4e0e-97e8-c806d886483c","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"a5c334a4-18d2-4da1-9fcd-5ed0c2bd72cc","type":"Rect"},{"attributes":{},"id":"f8814034-7781-4331-be1a-0e096b3bb7ab","type":"BasicTicker"},{"attributes":{"plot":{"id":"63c69011-843e-4333-93a9-057dc108194d","subtype":"Chart","type":"Plot"}},"id":"c488dd96-0114-4a0e-83fa-ef4eef1c0930","type":"PanTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"0cfaeabb-f6a2-4a2e-a4a1-b186534898bf","type":"Rect"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"6942893f-803b-4a3c-9b4e-3e1ae2bf7710","type":"LinearAxis"}],"left":[{"id":"29b532ec-36c5-4e10-9881-f817a8cb833d","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"418b1733-4bb5-4330-9434-bb9995674da6","type":"BoxAnnotation"},{"id":"0960e9da-d7c7-42ca-9534-104a67b1742d","type":"GlyphRenderer"},{"id":"d899e1b5-2008-450e-91f5-2320204eec96","type":"GlyphRenderer"},{"id":"d3a3728b-1819-442b-a309-e51519d69676","type":"GlyphRenderer"},{"id":"aa83e315-ba11-4336-8aad-8efeaab3910a","type":"GlyphRenderer"},{"id":"52525735-6760-423f-8d0c-9f614040b61d","type":"GlyphRenderer"},{"id":"d0687694-b67c-4d8d-9b9e-b7204b155080","type":"GlyphRenderer"},{"id":"f4476102-76e9-4deb-82f8-2bc16fab006d","type":"GlyphRenderer"},{"id":"d47b6c73-3b6d-4b9c-9f19-71d97dd11868","type":"GlyphRenderer"},{"id":"6942893f-803b-4a3c-9b4e-3e1ae2bf7710","type":"LinearAxis"},{"id":"29b532ec-36c5-4e10-9881-f817a8cb833d","type":"CategoricalAxis"},{"id":"81c7d32d-226f-4451-a622-4726aab627a8","type":"ColorBar"}],"right":[{"id":"81c7d32d-226f-4451-a622-4726aab627a8","type":"ColorBar"}],"title":{"id":"20053a26-83b5-4ece-ba45-c47c909b5222","type":"Title"},"tool_events":{"id":"762bc8d5-9c98-4d23-9fd3-a29ae2ad3a30","type":"ToolEvents"},"toolbar":{"id":"a0dd4a8c-c706-416f-92a3-b6225af265fe","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"db45e413-e154-449d-805f-90a5de9ef986","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"a22817a6-cb31-47a4-8b14-3db6cd312ca2","type":"FactorRange"}},"id":"63c69011-843e-4333-93a9-057dc108194d","subtype":"Chart","type":"Plot"},{"attributes":{"color_mapper":{"id":"e0ec94c1-05a0-4e60-a849-37da9bdc009c","type":"LinearColorMapper"},"formatter":{"id":"67deb4d8-5d21-4e44-8d46-fb759e79c48c","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"5fe78408-411a-47b7-88f6-5aa089f81845","subtype":"Chart","type":"Plot"},"ticker":{"id":"2d43602f-f8d8-438c-81c3-db2b1df6f4d3","type":"BasicTicker"}},"id":"dc368f4f-3597-43ae-adaf-8c6c8a1eeef1","type":"ColorBar"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"000fe933-e71e-42cd-bda1-695eb7d869ff","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"63c69011-843e-4333-93a9-057dc108194d","subtype":"Chart","type":"Plot"},"ticker":{"id":"2204275f-b8d0-464f-8707-5b139cc72704","type":"CategoricalTicker"}},"id":"29b532ec-36c5-4e10-9881-f817a8cb833d","type":"CategoricalAxis"},{"attributes":{},"id":"1163b39e-4bf7-4d6e-b4b8-cad3ee39be4c","type":"BasicTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#fee8c8"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fee8c8"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"b12dcafd-8320-4fbe-b9e5-b1b02e180be2","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"3771aa5b-ba8b-4a4a-9291-cbb9d0202859","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 7.8]","(6.7, 7.8]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 7.8]"},{"POS_ARR_DELAY":"(6.7, 7.8]"}],"values":[7.0,7.125],"x":[7,11],"y":["Tuesday","Wednesday"]}},"id":"d2d1fe6a-0bc4-402b-96be-0c06c938a2e3","type":"ColumnDataSource"},{"attributes":{},"id":"ec2bc4ce-40ec-4406-a5de-1b0699b4a3ec","type":"BasicTicker"},{"attributes":{"data_source":{"id":"8cd64796-400e-4c56-b86a-532b314a55d1","type":"ColumnDataSource"},"glyph":{"id":"3771aa5b-ba8b-4a4a-9291-cbb9d0202859","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"aa83e315-ba11-4336-8aad-8efeaab3910a","type":"GlyphRenderer"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"c02a5695-a44e-4085-8a65-cde4f58050c6","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"5fe78408-411a-47b7-88f6-5aa089f81845","subtype":"Chart","type":"Plot"},"ticker":{"id":"8699a7b8-801a-4689-9198-f07598993a2f","type":"CategoricalTicker"}},"id":"2073c505-42f0-48d7-aef0-fbbdf2c685b2","type":"CategoricalAxis"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(8.9, 10]"],"chart_index":[{"POS_ARR_DELAY":"(8.9, 10]"}],"values":[10.0],"x":[7],"y":["Friday"]}},"id":"6bd80a9f-7742-40f2-8822-4bc98a52b073","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"94b609cd-e3cf-4154-a9fa-3cc77b39767a","type":"Rect"},{"attributes":{"plot":{"id":"63c69011-843e-4333-93a9-057dc108194d","subtype":"Chart","type":"Plot"}},"id":"1295216a-e89b-4f31-a4b9-21eeafc82af6","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(2.2, 3.3]","(2.2, 3.3]","(2.2, 3.3]","(2.2, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"(2.2, 3.3]"},{"POS_ARR_DELAY":"(2.2, 3.3]"},{"POS_ARR_DELAY":"(2.2, 3.3]"},{"POS_ARR_DELAY":"(2.2, 3.3]"}],"values":[3.2222222222222223,3.1578947368421053,2.5714285714285716,2.2564102564102564],"x":[7,6,11,6],"y":["Monday","Thursday","Friday","Sunday"]}},"id":"4f337ae0-2617-4bd8-a5c1-ed3cfb2bdf89","type":"ColumnDataSource"},{"attributes":{},"id":"4f007aaa-186d-4338-8764-8b06e52cf16b","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"911a99c6-8419-4561-8312-1527325e6734","type":"ColumnDataSource"},"glyph":{"id":"65c093af-b5ca-4231-a530-71d127204d66","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"0960e9da-d7c7-42ca-9534-104a67b1742d","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"f760bc76-77e4-4c3c-9c3d-32de0f450e18","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"82bf0906-307b-413f-98fc-b6a39e3d67dd","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"65c093af-b5ca-4231-a530-71d127204d66","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"81218e7b-c7b2-43f4-a4d2-81945189e3bd","type":"Rect"},{"attributes":{"plot":{"id":"63c69011-843e-4333-93a9-057dc108194d","subtype":"Chart","type":"Plot"}},"id":"b55c20f6-21ee-4700-bea2-95a1f12ebd2a","type":"HelpTool"},{"attributes":{},"id":"67deb4d8-5d21-4e44-8d46-fb759e79c48c","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"5fe78408-411a-47b7-88f6-5aa089f81845","subtype":"Chart","type":"Plot"}},"id":"56b2043e-f0a3-41d7-9445-c0177f56b7f6","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(1.1, 2.2]","(1.1, 2.2]","(1.1, 2.2]","(1.1, 2.2]","(1.1, 2.2]"],"chart_index":[{"POS_ARR_DELAY":"(1.1, 2.2]"},{"POS_ARR_DELAY":"(1.1, 2.2]"},{"POS_ARR_DELAY":"(1.1, 2.2]"},{"POS_ARR_DELAY":"(1.1, 2.2]"},{"POS_ARR_DELAY":"(1.1, 2.2]"}],"values":[1.7142857142857142,1.8205128205128205,2.2222222222222223,2.0,1.8888888888888888],"x":[11,6,7,11,6],"y":["Monday","Wednesday","Wednesday","Thursday","Saturday"]}},"id":"233c6fd2-0cbb-4da9-9217-751f42b8084b","type":"ColumnDataSource"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"2a22826c-af71-44d1-bf75-44754bef4156","type":"BasicTickFormatter"},"plot":{"id":"63c69011-843e-4333-93a9-057dc108194d","subtype":"Chart","type":"Plot"},"ticker":{"id":"ec2bc4ce-40ec-4406-a5de-1b0699b4a3ec","type":"BasicTicker"}},"id":"6942893f-803b-4a3c-9b4e-3e1ae2bf7710","type":"LinearAxis"},{"attributes":{"data_source":{"id":"b4169ce0-6140-4060-b71c-066d21ca92f5","type":"ColumnDataSource"},"glyph":{"id":"82bf0906-307b-413f-98fc-b6a39e3d67dd","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d899e1b5-2008-450e-91f5-2320204eec96","type":"GlyphRenderer"},{"attributes":{"color_mapper":{"id":"bfe11ba7-a845-4ce2-a766-7464be0af76c","type":"LinearColorMapper"},"formatter":{"id":"4f007aaa-186d-4338-8764-8b06e52cf16b","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"63c69011-843e-4333-93a9-057dc108194d","subtype":"Chart","type":"Plot"},"ticker":{"id":"f8814034-7781-4331-be1a-0e096b3bb7ab","type":"BasicTicker"}},"id":"81c7d32d-226f-4451-a622-4726aab627a8","type":"ColorBar"},{"attributes":{"plot":null,"text":"Southwest Airlines "},"id":"20053a26-83b5-4ece-ba45-c47c909b5222","type":"Title"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"47349b84-24ce-4097-8323-12556aa8a022","type":"FactorRange"},{"attributes":{"child":{"id":"5fe78408-411a-47b7-88f6-5aa089f81845","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"d8418e15-bf1b-4aba-9896-2cda78548cbd","type":"Panel"},{"attributes":{"data_source":{"id":"f6ffc960-3220-4184-bbf3-886315384dec","type":"ColumnDataSource"},"glyph":{"id":"0cfaeabb-f6a2-4a2e-a4a1-b186534898bf","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"8a4f0e5e-7e3e-4da9-bb43-eff67d663fb0","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"8135cfff-f764-478a-af25-75331c5e9fee","type":"BoxAnnotation"},"plot":{"id":"5fe78408-411a-47b7-88f6-5aa089f81845","subtype":"Chart","type":"Plot"}},"id":"177cdf8a-de76-435e-85f4-9c6eedfb6bc3","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"7f39e133-f31b-4983-9824-51628e369e95","type":"ColumnDataSource"},"glyph":{"id":"f760bc76-77e4-4c3c-9c3d-32de0f450e18","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a811fc35-b7f7-4305-b69a-6a9292e7fa89","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"a1c94268-1c07-4201-996d-afe55d520c4e","type":"ColumnDataSource"},"glyph":{"id":"59961d43-d2b6-4031-8f71-479433d4de95","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d3a3728b-1819-442b-a309-e51519d69676","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"233c6fd2-0cbb-4da9-9217-751f42b8084b","type":"ColumnDataSource"},"glyph":{"id":"d915087c-9f6a-4d70-9e3e-f4450c02e10c","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f4476102-76e9-4deb-82f8-2bc16fab006d","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"a9fc8b76-eb4c-4c0a-89c4-e6698a8333e2","type":"ColumnDataSource"},"glyph":{"id":"d3e898fd-e140-4607-9507-e4a3bd4d9f6a","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"8c5d73b7-fbdb-469a-ac0e-fcb1d8339a38","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.01, 1.1]","[-0.01, 1.1]","[-0.01, 1.1]","[-0.01, 1.1]","[-0.01, 1.1]","[-0.01, 1.1]","[-0.01, 1.1]"],"chart_index":[{"POS_ARR_DELAY":"[-0.01, 1.1]"},{"POS_ARR_DELAY":"[-0.01, 1.1]"},{"POS_ARR_DELAY":"[-0.01, 1.1]"},{"POS_ARR_DELAY":"[-0.01, 1.1]"},{"POS_ARR_DELAY":"[-0.01, 1.1]"},{"POS_ARR_DELAY":"[-0.01, 1.1]"},{"POS_ARR_DELAY":"[-0.01, 1.1]"}],"values":[0.0,0.0,0.0,0.125,0.0,0.625,0.0],"x":[11,5,7,10,15,7,9],"y":["Tuesday","Saturday","Saturday","Saturday","Saturday","Sunday","Sunday"]}},"id":"aa898587-160d-44e4-920f-dbd31b61aeee","type":"ColumnDataSource"},{"attributes":{},"id":"2a22826c-af71-44d1-bf75-44754bef4156","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"418b1733-4bb5-4330-9434-bb9995674da6","type":"BoxAnnotation"},"plot":{"id":"63c69011-843e-4333-93a9-057dc108194d","subtype":"Chart","type":"Plot"}},"id":"d29a8bab-25ec-4e06-96d1-48a3adaebda4","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(5.6, 6.7]","(5.6, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(5.6, 6.7]"},{"POS_ARR_DELAY":"(5.6, 6.7]"}],"values":[5.666666666666667,5.666666666666667],"x":[6,7],"y":["Tuesday","Thursday"]}},"id":"a1c94268-1c07-4201-996d-afe55d520c4e","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"d2d1fe6a-0bc4-402b-96be-0c06c938a2e3","type":"ColumnDataSource"},"glyph":{"id":"a5c334a4-18d2-4da1-9fcd-5ed0c2bd72cc","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"842bbb74-5b5a-4c9b-9cbd-49920ac12a38","type":"GlyphRenderer"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"bfe11ba7-a845-4ce2-a766-7464be0af76c","type":"LinearColorMapper"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(5.6, 6.7]","(5.6, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(5.6, 6.7]"},{"POS_ARR_DELAY":"(5.6, 6.7]"}],"values":[5.666666666666667,5.666666666666667],"x":[6,7],"y":["Tuesday","Thursday"]}},"id":"f6ffc960-3220-4184-bbf3-886315384dec","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"59961d43-d2b6-4031-8f71-479433d4de95","type":"Rect"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"418b1733-4bb5-4330-9434-bb9995674da6","type":"BoxAnnotation"},{"attributes":{"callback":null,"tabs":[{"id":"d8418e15-bf1b-4aba-9896-2cda78548cbd","type":"Panel"},{"id":"03fc4505-9b8a-4c32-b213-69878bb87352","type":"Panel"}]},"id":"fca4f312-491b-49cf-9522-0c206c21a5ba","type":"Tabs"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"79992079-1f6e-4497-a702-0cd38f1e47b1","type":"Rect"},{"attributes":{},"id":"762bc8d5-9c98-4d23-9fd3-a29ae2ad3a30","type":"ToolEvents"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c488dd96-0114-4a0e-83fa-ef4eef1c0930","type":"PanTool"},{"id":"ddf414ae-0cce-44de-a7cc-39e44c2403c8","type":"WheelZoomTool"},{"id":"d29a8bab-25ec-4e06-96d1-48a3adaebda4","type":"BoxZoomTool"},{"id":"1295216a-e89b-4f31-a4b9-21eeafc82af6","type":"SaveTool"},{"id":"fc9cf62d-795e-482d-af77-b33f7ee60c1e","type":"ResetTool"},{"id":"b55c20f6-21ee-4700-bea2-95a1f12ebd2a","type":"HelpTool"}]},"id":"a0dd4a8c-c706-416f-92a3-b6225af265fe","type":"Toolbar"},{"attributes":{"callback":null,"end":23},"id":"db45e413-e154-449d-805f-90a5de9ef986","type":"Range1d"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"d3e898fd-e140-4607-9507-e4a3bd4d9f6a","type":"Rect"}],"root_ids":["fca4f312-491b-49cf-9522-0c206c21a5ba"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"a75b9ed0-8053-496a-bcff-fe4cb9081d01","elementid":"0bd69a85-aa9b-4af8-af48-27c74917724f","modelid":"fca4f312-491b-49cf-9522-0c206c21a5ba"}];
                  
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