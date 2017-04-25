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
      };var element = document.getElementById("c9093fa0-3797-4588-bd0d-6a1e9e031d23");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c9093fa0-3797-4588-bd0d-6a1e9e031d23' but no matching script tag was found. ")
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
                  var docs_json = {"ed60f5b2-ad8b-4a6a-8bf3-42f4ae67dea6":{"roots":{"references":[{"attributes":{},"id":"bd976048-7a81-4942-9b2d-96970ab861f3","type":"CategoricalTicker"},{"attributes":{"callback":null,"end":23},"id":"1676411b-a732-4b67-91d1-fc1d93fe0cf3","type":"Range1d"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"d6b206a2-bf44-4980-b73d-c7aa3c7fd8c8","type":"Rect"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"184812d8-2aa3-472a-8582-f7a775cbb4a2","type":"BoxAnnotation"},{"attributes":{},"id":"8737d30c-0aa9-4636-936b-22e68542fc69","type":"CategoricalTicker"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"77ec81ec-1bee-496f-820e-033108de7123","type":"LinearColorMapper"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(27.04, 30]"],"chart_index":[{"POS_ARR_DELAY":"(27.04, 30]"}],"values":[30.0],"x":[17],"y":["Tuesday"]}},"id":"6c3b0963-e89e-4014-88be-929e20c27d11","type":"ColumnDataSource"},{"attributes":{"child":{"id":"4da01de7-33bc-4470-b417-63eddc75b95e","subtype":"Chart","type":"Plot"},"title":"B6"},"id":"5a0d0bbc-41c1-4bab-a205-36ec4f5783b2","type":"Panel"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"d00843bf-a282-4911-82bb-275b0da1093a","type":"Rect"},{"attributes":{"data_source":{"id":"9ad6431b-407e-4a28-8e8f-441d7f49ae1c","type":"ColumnDataSource"},"glyph":{"id":"05e4f54d-8c9e-4ac4-83f6-5e8147c3c978","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"184f6948-7228-4476-8eb2-bbdbeb3b8f8d","type":"GlyphRenderer"},{"attributes":{"color_mapper":{"id":"07c77cad-01e3-4a6a-920a-67a260a77276","type":"LinearColorMapper"},"formatter":{"id":"e34914d6-b1aa-4998-a132-fd79a44240fe","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"fd870539-bccc-46f4-968b-c9d49f41cdc9","subtype":"Chart","type":"Plot"},"ticker":{"id":"fca27ca4-a677-4c82-b3ab-11e5d21b3208","type":"BasicTicker"}},"id":"52b5f0a8-c023-4831-b99e-b76fe0cf40ab","type":"ColorBar"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"bdfd3066-d684-457f-a595-d76b4cff6da0","type":"BasicTickFormatter"},"plot":{"id":"4da01de7-33bc-4470-b417-63eddc75b95e","subtype":"Chart","type":"Plot"},"ticker":{"id":"46b41d78-562c-48f7-83c7-5279d23676eb","type":"BasicTicker"}},"id":"8dd1da93-c7a9-4805-9dff-2578155c079a","type":"LinearAxis"},{"attributes":{"data_source":{"id":"4dc0890e-6566-4389-b4bf-8cd8d1211117","type":"ColumnDataSource"},"glyph":{"id":"d6009151-e0f5-41a9-93f3-9f4f30a306b5","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f68bd918-0b27-4a05-8932-f1eea48b0812","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"dca29c9f-4031-4f8a-bf86-5abff56f7533","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"1b31d8ee-71b5-402a-8eb1-00ddf6933ed4","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[3.3, 6.3]","[3.3, 6.3]"],"chart_index":[{"POS_ARR_DELAY":"[3.3, 6.3]"},{"POS_ARR_DELAY":"[3.3, 6.3]"}],"values":[3.3636363636363638,6.2727272727272725],"x":[17,17],"y":["Thursday","Friday"]}},"id":"fdcf01dd-13a6-439d-8899-46d8186cd64f","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"3addb15e-d963-4d63-a508-1480dcf661b7","type":"ColumnDataSource"},"glyph":{"id":"d00843bf-a282-4911-82bb-275b0da1093a","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ec63010e-43bf-4917-b7a2-b189481f8b80","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"184812d8-2aa3-472a-8582-f7a775cbb4a2","type":"BoxAnnotation"},"plot":{"id":"4da01de7-33bc-4470-b417-63eddc75b95e","subtype":"Chart","type":"Plot"}},"id":"90ad56d0-3dfe-48e4-98f3-134d80488e56","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(9.3, 12.2]"],"chart_index":[{"POS_ARR_DELAY":"(9.3, 12.2]"}],"values":[10.636363636363637],"x":[17],"y":["Wednesday"]}},"id":"3addb15e-d963-4d63-a508-1480dcf661b7","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"5c176867-b377-4c8e-8355-68640f7638b2","type":"Rect"},{"attributes":{"callback":null,"end":23},"id":"cedacd7a-193f-4f46-95d6-9332539599e4","type":"Range1d"},{"attributes":{"plot":{"id":"4da01de7-33bc-4470-b417-63eddc75b95e","subtype":"Chart","type":"Plot"}},"id":"cfc8d1d8-54fb-4735-b619-e9a8f77c75a9","type":"HelpTool"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"f14555af-9a1a-41e3-8353-3f4c5ae27e5b","type":"BasicTickFormatter"},"plot":{"id":"fd870539-bccc-46f4-968b-c9d49f41cdc9","subtype":"Chart","type":"Plot"},"ticker":{"id":"b650eebe-d4f9-440d-be1e-d391712f30b4","type":"BasicTicker"}},"id":"17e11fe7-cad2-4f12-89ab-fca02868ccf5","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(27.04, 30]"],"chart_index":[{"POS_ARR_DELAY":"(27.04, 30]"}],"values":[30.0],"x":[17],"y":["Tuesday"]}},"id":"5a08fd3c-9a67-4c16-bc4e-1100cf5ee203","type":"ColumnDataSource"},{"attributes":{},"id":"baee0752-727a-4197-8024-783c95ce4734","type":"CategoricalTickFormatter"},{"attributes":{"data_source":{"id":"fdcf01dd-13a6-439d-8899-46d8186cd64f","type":"ColumnDataSource"},"glyph":{"id":"c2eb97fe-c783-48ac-8a08-6b037a8c050e","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"97d76c5f-4f24-4bdc-81f3-a2ef1d054dfd","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(9.3, 12.2]"],"chart_index":[{"POS_ARR_DELAY":"(9.3, 12.2]"}],"values":[10.636363636363637],"x":[17],"y":["Wednesday"]}},"id":"9ad6431b-407e-4a28-8e8f-441d7f49ae1c","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"bdacc0b7-4483-40e8-aa0d-7f4d28cb9190","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(21.1, 24.08]"],"chart_index":[{"POS_ARR_DELAY":"(21.1, 24.08]"}],"values":[23.90909090909091],"x":[17],"y":["Sunday"]}},"id":"1089e4f4-cac9-4ea4-8408-5d81493e50aa","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"c2eb97fe-c783-48ac-8a08-6b037a8c050e","type":"Rect"},{"attributes":{"plot":{"id":"4da01de7-33bc-4470-b417-63eddc75b95e","subtype":"Chart","type":"Plot"}},"id":"bb636788-9555-4698-945d-a0c30cc385e4","type":"PanTool"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"07c77cad-01e3-4a6a-920a-67a260a77276","type":"LinearColorMapper"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(15.2, 18.2]"],"chart_index":[{"POS_ARR_DELAY":"(15.2, 18.2]"}],"values":[17.181818181818183],"x":[17],"y":["Monday"]}},"id":"645b59a8-aa37-4307-8ebd-e1754dee27cd","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"fd870539-bccc-46f4-968b-c9d49f41cdc9","subtype":"Chart","type":"Plot"}},"id":"30961132-77bd-4211-8c72-0ba2233ac70a","type":"WheelZoomTool"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"baee0752-727a-4197-8024-783c95ce4734","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"fd870539-bccc-46f4-968b-c9d49f41cdc9","subtype":"Chart","type":"Plot"},"ticker":{"id":"bd976048-7a81-4942-9b2d-96970ab861f3","type":"CategoricalTicker"}},"id":"801c842a-5910-4b36-a750-c12e285f0d36","type":"CategoricalAxis"},{"attributes":{"data_source":{"id":"1f6d2c76-5a37-415e-96d3-2c9398c0dcc4","type":"ColumnDataSource"},"glyph":{"id":"bdacc0b7-4483-40e8-aa0d-7f4d28cb9190","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"12c87ad0-0a12-4cd5-a49d-5c758eeb7496","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"d6009151-e0f5-41a9-93f3-9f4f30a306b5","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"461ccca9-ab22-49a1-a68d-06dcb6265551","type":"Rect"},{"attributes":{"plot":{"id":"4da01de7-33bc-4470-b417-63eddc75b95e","subtype":"Chart","type":"Plot"}},"id":"6317a07c-a86d-4580-ac2e-6853b7bc2953","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"bb636788-9555-4698-945d-a0c30cc385e4","type":"PanTool"},{"id":"263e5d77-c41d-4fb2-aeee-b3195bdfa3f1","type":"WheelZoomTool"},{"id":"90ad56d0-3dfe-48e4-98f3-134d80488e56","type":"BoxZoomTool"},{"id":"570b0d96-c40f-45ea-acdd-a2f9b8793fdc","type":"SaveTool"},{"id":"6317a07c-a86d-4580-ac2e-6853b7bc2953","type":"ResetTool"},{"id":"cfc8d1d8-54fb-4735-b619-e9a8f77c75a9","type":"HelpTool"}]},"id":"dada0f82-d3c1-4b44-ac6b-0072560ed87c","type":"Toolbar"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"05e4f54d-8c9e-4ac4-83f6-5e8147c3c978","type":"Rect"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"1de0c131-bf11-4758-9306-5c23e6274ce3","type":"FactorRange"},{"attributes":{"plot":{"id":"fd870539-bccc-46f4-968b-c9d49f41cdc9","subtype":"Chart","type":"Plot"}},"id":"d594533e-e0a2-4eef-ae2a-8e8a4b111d24","type":"SaveTool"},{"attributes":{"plot":{"id":"4da01de7-33bc-4470-b417-63eddc75b95e","subtype":"Chart","type":"Plot"}},"id":"570b0d96-c40f-45ea-acdd-a2f9b8793fdc","type":"SaveTool"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"94d7f839-8468-4011-9648-30470aa6d8c2","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"4da01de7-33bc-4470-b417-63eddc75b95e","subtype":"Chart","type":"Plot"},"ticker":{"id":"8737d30c-0aa9-4636-936b-22e68542fc69","type":"CategoricalTicker"}},"id":"831f7b7c-25e0-40de-8aa7-37774a8e380c","type":"CategoricalAxis"},{"attributes":{},"id":"1b8146b8-8a80-4681-a3ea-02a3f99d1a8e","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"149d6ecb-8b02-406b-93f1-b5ceb0cff29c","type":"Title"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"63c88a9c-b35c-4bde-8693-e033b9b8d81e","type":"Rect"},{"attributes":{"data_source":{"id":"5a08fd3c-9a67-4c16-bc4e-1100cf5ee203","type":"ColumnDataSource"},"glyph":{"id":"5c176867-b377-4c8e-8355-68640f7638b2","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"449b1397-f471-45f8-804c-65bc929e73cf","type":"GlyphRenderer"},{"attributes":{},"id":"e78895a5-eb3f-4e07-a79f-a4143d6f3a69","type":"BasicTicker"},{"attributes":{"plot":null,"text":"JetBlue Airways"},"id":"63feec9a-c978-42ea-a3fd-79bccc959434","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8b0b4ab9-e4cf-4ccd-8028-7666cb2b7c46","type":"BoxAnnotation"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"eea3ade6-9061-485b-ac2c-58bf62e7a5e0","type":"Rect"},{"attributes":{},"id":"f14555af-9a1a-41e3-8353-3f4c5ae27e5b","type":"BasicTickFormatter"},{"attributes":{},"id":"aa40fe89-f2a7-4f0f-9500-d7c0b4a90b02","type":"ToolEvents"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"db65c0f3-6f86-4da1-8628-9d6f199af6a6","type":"FactorRange"},{"attributes":{},"id":"46b41d78-562c-48f7-83c7-5279d23676eb","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(15.2, 18.2]"],"chart_index":[{"POS_ARR_DELAY":"(15.2, 18.2]"}],"values":[17.181818181818183],"x":[17],"y":["Monday"]}},"id":"30514808-fb0f-479d-b8f3-ca27c5e74468","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(12.2, 15.2]"],"chart_index":[{"POS_ARR_DELAY":"(12.2, 15.2]"}],"values":[14.090909090909092],"x":[17],"y":["Saturday"]}},"id":"60d8c1bb-98d5-4abe-b77d-2b888bb56b53","type":"ColumnDataSource"},{"attributes":{},"id":"b650eebe-d4f9-440d-be1e-d391712f30b4","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(12.2, 15.2]"],"chart_index":[{"POS_ARR_DELAY":"(12.2, 15.2]"}],"values":[14.090909090909092],"x":[17],"y":["Saturday"]}},"id":"4dc0890e-6566-4389-b4bf-8cd8d1211117","type":"ColumnDataSource"},{"attributes":{"child":{"id":"fd870539-bccc-46f4-968b-c9d49f41cdc9","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"5a59152b-cc70-4319-9dd2-73d7c59a7c04","type":"Panel"},{"attributes":{"plot":{"id":"fd870539-bccc-46f4-968b-c9d49f41cdc9","subtype":"Chart","type":"Plot"}},"id":"7f846267-0922-4b85-8e3e-83876ea83eeb","type":"PanTool"},{"attributes":{"callback":null,"tabs":[{"id":"5a59152b-cc70-4319-9dd2-73d7c59a7c04","type":"Panel"},{"id":"5a0d0bbc-41c1-4bab-a205-36ec4f5783b2","type":"Panel"}]},"id":"8c948c98-f5e7-4e75-bfe7-2a96d5923d63","type":"Tabs"},{"attributes":{"data_source":{"id":"645b59a8-aa37-4307-8ebd-e1754dee27cd","type":"ColumnDataSource"},"glyph":{"id":"dca29c9f-4031-4f8a-bf86-5abff56f7533","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"bf1bc9b4-b717-4140-aebd-0521362b5cf9","type":"GlyphRenderer"},{"attributes":{},"id":"94d7f839-8468-4011-9648-30470aa6d8c2","type":"CategoricalTickFormatter"},{"attributes":{"plot":{"id":"fd870539-bccc-46f4-968b-c9d49f41cdc9","subtype":"Chart","type":"Plot"}},"id":"16bb75f3-f159-4efe-8a8c-ab3b14d62247","type":"ResetTool"},{"attributes":{"data_source":{"id":"30514808-fb0f-479d-b8f3-ca27c5e74468","type":"ColumnDataSource"},"glyph":{"id":"d6b206a2-bf44-4980-b73d-c7aa3c7fd8c8","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2df3c5b3-beb6-49bf-8211-79f66360b748","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"fd870539-bccc-46f4-968b-c9d49f41cdc9","subtype":"Chart","type":"Plot"}},"id":"285a3915-9979-43da-a536-735e875e46fa","type":"HelpTool"},{"attributes":{},"id":"df3e1654-c99a-48be-bc77-ac08d80a0cb0","type":"ToolEvents"},{"attributes":{},"id":"e34914d6-b1aa-4998-a132-fd79a44240fe","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"6c3b0963-e89e-4014-88be-929e20c27d11","type":"ColumnDataSource"},"glyph":{"id":"eea3ade6-9061-485b-ac2c-58bf62e7a5e0","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2a2579b0-6e4f-4d68-af34-8644a9ef675c","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(21.1, 24.08]"],"chart_index":[{"POS_ARR_DELAY":"(21.1, 24.08]"}],"values":[23.90909090909091],"x":[17],"y":["Sunday"]}},"id":"c71e803f-327f-40b5-aa3c-8b1d88960adf","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"1089e4f4-cac9-4ea4-8408-5d81493e50aa","type":"ColumnDataSource"},"glyph":{"id":"1b31d8ee-71b5-402a-8eb1-00ddf6933ed4","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2e41ef8c-b1ca-4562-b10e-e35929af1b03","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"4da01de7-33bc-4470-b417-63eddc75b95e","subtype":"Chart","type":"Plot"}},"id":"263e5d77-c41d-4fb2-aeee-b3195bdfa3f1","type":"WheelZoomTool"},{"attributes":{"color_mapper":{"id":"77ec81ec-1bee-496f-820e-033108de7123","type":"LinearColorMapper"},"formatter":{"id":"1b8146b8-8a80-4681-a3ea-02a3f99d1a8e","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"4da01de7-33bc-4470-b417-63eddc75b95e","subtype":"Chart","type":"Plot"},"ticker":{"id":"e78895a5-eb3f-4e07-a79f-a4143d6f3a69","type":"BasicTicker"}},"id":"a57253ba-ca0c-4018-ad1b-dee2718ab4fe","type":"ColorBar"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"8dd1da93-c7a9-4805-9dff-2578155c079a","type":"LinearAxis"}],"left":[{"id":"831f7b7c-25e0-40de-8aa7-37774a8e380c","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"184812d8-2aa3-472a-8582-f7a775cbb4a2","type":"BoxAnnotation"},{"id":"2a2579b0-6e4f-4d68-af34-8644a9ef675c","type":"GlyphRenderer"},{"id":"2e41ef8c-b1ca-4562-b10e-e35929af1b03","type":"GlyphRenderer"},{"id":"2df3c5b3-beb6-49bf-8211-79f66360b748","type":"GlyphRenderer"},{"id":"66b7db8c-598c-455a-b42f-874e1f335aae","type":"GlyphRenderer"},{"id":"184f6948-7228-4476-8eb2-bbdbeb3b8f8d","type":"GlyphRenderer"},{"id":"12c87ad0-0a12-4cd5-a49d-5c758eeb7496","type":"GlyphRenderer"},{"id":"8dd1da93-c7a9-4805-9dff-2578155c079a","type":"LinearAxis"},{"id":"831f7b7c-25e0-40de-8aa7-37774a8e380c","type":"CategoricalAxis"},{"id":"a57253ba-ca0c-4018-ad1b-dee2718ab4fe","type":"ColorBar"}],"right":[{"id":"a57253ba-ca0c-4018-ad1b-dee2718ab4fe","type":"ColorBar"}],"title":{"id":"63feec9a-c978-42ea-a3fd-79bccc959434","type":"Title"},"tool_events":{"id":"aa40fe89-f2a7-4f0f-9500-d7c0b4a90b02","type":"ToolEvents"},"toolbar":{"id":"dada0f82-d3c1-4b44-ac6b-0072560ed87c","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"cedacd7a-193f-4f46-95d6-9332539599e4","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"1de0c131-bf11-4758-9306-5c23e6274ce3","type":"FactorRange"}},"id":"4da01de7-33bc-4470-b417-63eddc75b95e","subtype":"Chart","type":"Plot"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"7f846267-0922-4b85-8e3e-83876ea83eeb","type":"PanTool"},{"id":"30961132-77bd-4211-8c72-0ba2233ac70a","type":"WheelZoomTool"},{"id":"707fcab4-52e1-4e15-ac61-1d3dd4b53e7d","type":"BoxZoomTool"},{"id":"d594533e-e0a2-4eef-ae2a-8e8a4b111d24","type":"SaveTool"},{"id":"16bb75f3-f159-4efe-8a8c-ab3b14d62247","type":"ResetTool"},{"id":"285a3915-9979-43da-a536-735e875e46fa","type":"HelpTool"}]},"id":"439506e1-ac43-4456-8af2-49c002a3857a","type":"Toolbar"},{"attributes":{"data_source":{"id":"c71e803f-327f-40b5-aa3c-8b1d88960adf","type":"ColumnDataSource"},"glyph":{"id":"461ccca9-ab22-49a1-a68d-06dcb6265551","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"52beadc2-23e8-42f8-8666-72d937dfb3e7","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"60d8c1bb-98d5-4abe-b77d-2b888bb56b53","type":"ColumnDataSource"},"glyph":{"id":"63c88a9c-b35c-4bde-8693-e033b9b8d81e","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"66b7db8c-598c-455a-b42f-874e1f335aae","type":"GlyphRenderer"},{"attributes":{},"id":"fca27ca4-a677-4c82-b3ab-11e5d21b3208","type":"BasicTicker"},{"attributes":{},"id":"bdfd3066-d684-457f-a595-d76b4cff6da0","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[3.3, 6.3]","[3.3, 6.3]"],"chart_index":[{"POS_ARR_DELAY":"[3.3, 6.3]"},{"POS_ARR_DELAY":"[3.3, 6.3]"}],"values":[3.3636363636363638,6.2727272727272725],"x":[17,17],"y":["Thursday","Friday"]}},"id":"1f6d2c76-5a37-415e-96d3-2c9398c0dcc4","type":"ColumnDataSource"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"17e11fe7-cad2-4f12-89ab-fca02868ccf5","type":"LinearAxis"}],"left":[{"id":"801c842a-5910-4b36-a750-c12e285f0d36","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"8b0b4ab9-e4cf-4ccd-8028-7666cb2b7c46","type":"BoxAnnotation"},{"id":"449b1397-f471-45f8-804c-65bc929e73cf","type":"GlyphRenderer"},{"id":"52beadc2-23e8-42f8-8666-72d937dfb3e7","type":"GlyphRenderer"},{"id":"bf1bc9b4-b717-4140-aebd-0521362b5cf9","type":"GlyphRenderer"},{"id":"f68bd918-0b27-4a05-8932-f1eea48b0812","type":"GlyphRenderer"},{"id":"ec63010e-43bf-4917-b7a2-b189481f8b80","type":"GlyphRenderer"},{"id":"97d76c5f-4f24-4bdc-81f3-a2ef1d054dfd","type":"GlyphRenderer"},{"id":"17e11fe7-cad2-4f12-89ab-fca02868ccf5","type":"LinearAxis"},{"id":"801c842a-5910-4b36-a750-c12e285f0d36","type":"CategoricalAxis"},{"id":"52b5f0a8-c023-4831-b99e-b76fe0cf40ab","type":"ColorBar"}],"right":[{"id":"52b5f0a8-c023-4831-b99e-b76fe0cf40ab","type":"ColorBar"}],"title":{"id":"149d6ecb-8b02-406b-93f1-b5ceb0cff29c","type":"Title"},"tool_events":{"id":"df3e1654-c99a-48be-bc77-ac08d80a0cb0","type":"ToolEvents"},"toolbar":{"id":"439506e1-ac43-4456-8af2-49c002a3857a","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"1676411b-a732-4b67-91d1-fc1d93fe0cf3","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"db65c0f3-6f86-4da1-8628-9d6f199af6a6","type":"FactorRange"}},"id":"fd870539-bccc-46f4-968b-c9d49f41cdc9","subtype":"Chart","type":"Plot"},{"attributes":{"overlay":{"id":"8b0b4ab9-e4cf-4ccd-8028-7666cb2b7c46","type":"BoxAnnotation"},"plot":{"id":"fd870539-bccc-46f4-968b-c9d49f41cdc9","subtype":"Chart","type":"Plot"}},"id":"707fcab4-52e1-4e15-ac61-1d3dd4b53e7d","type":"BoxZoomTool"}],"root_ids":["8c948c98-f5e7-4e75-bfe7-2a96d5923d63"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"ed60f5b2-ad8b-4a6a-8bf3-42f4ae67dea6","elementid":"c9093fa0-3797-4588-bd0d-6a1e9e031d23","modelid":"8c948c98-f5e7-4e75-bfe7-2a96d5923d63"}];
                  
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