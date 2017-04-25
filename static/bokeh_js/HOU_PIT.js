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
      };var element = document.getElementById("ad6e7f20-ceb7-4c91-b85a-e969d14d5116");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ad6e7f20-ceb7-4c91-b85a-e969d14d5116' but no matching script tag was found. ")
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
                  var docs_json = {"2ed4bdb5-3c9c-440f-ae6f-344b7cb8775e":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[8.415094339622641,8.055555555555555,9.714285714285714,7.0,7.888888888888889,7.2745098039215685,8.76923076923077,9.333333333333334,6.823529411764706],"x":[10,13,9,12,10,10,11,13,21],"y":["Monday","Monday","Tuesday","Tuesday","Wednesday","Friday","Saturday","Saturday","Sunday"]}},"id":"5acbc106-fc54-426d-a793-c832ddcb86fe","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fee8c8"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fee8c8"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"423cb23f-8b27-4748-b338-0b14f363be1e","type":"Rect"},{"attributes":{},"id":"7fa6158f-0e89-4234-842a-75923d867ff5","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[6.0,5.612903225806452,3.6666666666666665,6.6,5.634615384615385,5.628571428571429,3.5,5.714285714285714,3.75,6.35],"x":[8,11,14,8,10,13,9,13,14,10],"y":["Wednesday","Wednesday","Wednesday","Thursday","Thursday","Thursday","Friday","Friday","Friday","Saturday"]}},"id":"f2aa792a-dd93-45ed-9bbf-b205b6a9e108","type":"ColumnDataSource"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"c529ea7d-aa83-496f-8e68-84bef835354e","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"05918ea5-a1b3-4f5c-99f5-1badd903d4b7","subtype":"Chart","type":"Plot"},"ticker":{"id":"2ff96ee6-a67c-4399-9821-640f3db73a74","type":"CategoricalTicker"}},"id":"e49a72f6-64c3-4c9d-b1d5-f3dea6d21ec6","type":"CategoricalAxis"},{"attributes":{},"id":"cc9d7cb8-9f7f-432f-9466-13c6c15b8155","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[2.0,1.1320754716981132,2.3333333333333335,2.7142857142857144,0.0,0.0,1.4,0.2,2.5384615384615383],"x":[9,10,14,9,14,8,9,8,10],"y":["Monday","Tuesday","Tuesday","Wednesday","Thursday","Saturday","Saturday","Sunday","Sunday"]}},"id":"9310f0ec-066f-4c3e-a25c-1775e3681457","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"b1d84b4c-6771-44a1-b52e-a311963d22d0","type":"ColumnDataSource"},"glyph":{"id":"d2991d70-393a-4e44-ae29-24e960c2273e","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"be2953e0-ee63-4f76-97ab-a1aa0c2926e7","type":"GlyphRenderer"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"3d78b7cb-60b4-4638-b35a-c8a5c8323b5a","type":"BasicTickFormatter"},"plot":{"id":"ac2e9511-5ad1-498b-b30f-3a8c64281268","subtype":"Chart","type":"Plot"},"ticker":{"id":"55438651-5792-41ca-943d-689c7f3bc5c6","type":"BasicTicker"}},"id":"54d4315b-da07-421b-8483-827bd273e60a","type":"LinearAxis"},{"attributes":{"data_source":{"id":"ad114c90-140b-4ade-a7a5-122587223973","type":"ColumnDataSource"},"glyph":{"id":"5285ba2c-d081-4287-ae05-8a8358b021c8","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d129ba91-e71b-491a-b898-b9adc5c7c9be","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"cd768199-0ba8-4ed2-aaf0-fa4142449349","type":"ColumnDataSource"},"glyph":{"id":"0e8ffad7-e39a-4106-bb3e-880562f6c7e4","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d5ac9c8a-8790-462b-93c9-8d49787539e1","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"05918ea5-a1b3-4f5c-99f5-1badd903d4b7","subtype":"Chart","type":"Plot"}},"id":"49ebda28-6634-472a-a982-49c6dd8800fe","type":"HelpTool"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"7dfedff0-824c-4bcf-8453-fd7cae020e25","type":"LinearColorMapper"},{"attributes":{"plot":{"id":"05918ea5-a1b3-4f5c-99f5-1badd903d4b7","subtype":"Chart","type":"Plot"}},"id":"44c83a5f-819d-4c31-bda1-c123fe8bb11b","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":"Southwest Airlines "},"id":"0dbb628b-ea85-4fcc-9a94-73ae0ab76acf","type":"Title"},{"attributes":{"data_source":{"id":"bb24ed6b-8636-41b7-a04c-7a80f8334e2d","type":"ColumnDataSource"},"glyph":{"id":"6e6c7dcd-68ce-442c-92d7-16fa16af2d07","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"77918d9c-6254-4aaa-82a8-4bdae72b34c7","type":"GlyphRenderer"},{"attributes":{"callback":null,"tabs":[{"id":"991e343b-6537-4da7-967d-7aa0c9a8609b","type":"Panel"},{"id":"d6450604-7f0c-4876-a737-ef061d389332","type":"Panel"}]},"id":"a57c17a0-61ac-4de0-90fc-ced8c2e7ba3a","type":"Tabs"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"5d527ffb-f39f-4583-96ea-c6e8ce9e40da","type":"LinearAxis"}],"left":[{"id":"e49a72f6-64c3-4c9d-b1d5-f3dea6d21ec6","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"585f34c6-8272-463d-b133-a27d407eafb5","type":"BoxAnnotation"},{"id":"16acbf77-7ece-4b2c-84dc-872564fc8427","type":"GlyphRenderer"},{"id":"8a68c1ac-1f79-498e-a59f-d74e1775b4cc","type":"GlyphRenderer"},{"id":"4f99fd7f-eb6e-42ae-a809-c4dcecd54828","type":"GlyphRenderer"},{"id":"d129ba91-e71b-491a-b898-b9adc5c7c9be","type":"GlyphRenderer"},{"id":"e2c81d29-8df8-4189-941f-5d870421e87f","type":"GlyphRenderer"},{"id":"d5ac9c8a-8790-462b-93c9-8d49787539e1","type":"GlyphRenderer"},{"id":"be2953e0-ee63-4f76-97ab-a1aa0c2926e7","type":"GlyphRenderer"},{"id":"29beb7f7-9edb-4192-83ad-83188afde0c2","type":"GlyphRenderer"},{"id":"5d527ffb-f39f-4583-96ea-c6e8ce9e40da","type":"LinearAxis"},{"id":"e49a72f6-64c3-4c9d-b1d5-f3dea6d21ec6","type":"CategoricalAxis"},{"id":"e58a5824-8176-4e7d-ab63-0f6066fa4fe7","type":"ColorBar"}],"right":[{"id":"e58a5824-8176-4e7d-ab63-0f6066fa4fe7","type":"ColorBar"}],"title":{"id":"0dbb628b-ea85-4fcc-9a94-73ae0ab76acf","type":"Title"},"tool_events":{"id":"7fa6158f-0e89-4234-842a-75923d867ff5","type":"ToolEvents"},"toolbar":{"id":"3ae1059c-1955-465a-a769-1a069d5bd843","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"dd47d3bd-9584-45a4-ad63-584d0635a42f","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"5b79603c-3199-40df-ab49-bdd0cb2366bd","type":"FactorRange"}},"id":"05918ea5-a1b3-4f5c-99f5-1badd903d4b7","subtype":"Chart","type":"Plot"},{"attributes":{},"id":"72592f04-71c0-4d25-8547-ff8c05268b5d","type":"BasicTicker"},{"attributes":{"data_source":{"id":"75b248fe-47f3-45ee-88de-966e53dff5c8","type":"ColumnDataSource"},"glyph":{"id":"bb6cef4c-99ec-4420-ac86-e3ca5cb5edf2","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"7d62e3cc-0591-42af-be61-157e403ac80e","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"05918ea5-a1b3-4f5c-99f5-1badd903d4b7","subtype":"Chart","type":"Plot"}},"id":"8fb1c38b-2e62-4a26-9e92-2ed20b5af75b","type":"PanTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"bb6cef4c-99ec-4420-ac86-e3ca5cb5edf2","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"be9d100a-7bf4-4fce-9187-82627fd44262","type":"Rect"},{"attributes":{},"id":"2ff96ee6-a67c-4399-9821-640f3db73a74","type":"CategoricalTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"}],"values":[15.6,14.8,15.742857142857142,13.5,16.5,16.153846153846153,16.0,14.617647058823529],"x":[8,12,13,9,12,21,12,13],"y":["Monday","Wednesday","Wednesday","Thursday","Friday","Friday","Sunday","Sunday"]}},"id":"ad114c90-140b-4ade-a7a5-122587223973","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[8.415094339622641,8.055555555555555,9.714285714285714,7.0,7.888888888888889,7.2745098039215685,8.76923076923077,9.333333333333334,6.823529411764706],"x":[10,13,9,12,10,10,11,13,21],"y":["Monday","Monday","Tuesday","Tuesday","Wednesday","Friday","Saturday","Saturday","Sunday"]}},"id":"cd768199-0ba8-4ed2-aaf0-fa4142449349","type":"ColumnDataSource"},{"attributes":{},"id":"ca798a47-ac83-4da8-b290-fd8dc50d1028","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"}],"values":[15.6,14.8,15.742857142857142,13.5,16.5,16.153846153846153,16.0,14.617647058823529],"x":[8,12,13,9,12,21,12,13],"y":["Monday","Wednesday","Wednesday","Thursday","Friday","Friday","Sunday","Sunday"]}},"id":"bb24ed6b-8636-41b7-a04c-7a80f8334e2d","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"20f0d809-75ff-41d4-8e45-3d9a7f8c63df","type":"ColumnDataSource"},"glyph":{"id":"ea8bbf62-cf40-4388-9865-fbb67c4fee5e","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e2c81d29-8df8-4189-941f-5d870421e87f","type":"GlyphRenderer"},{"attributes":{},"id":"5cfbe8ed-c213-42a1-9b1e-fdfe3fdff7da","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20, 23.3]","(20, 23.3]","(20, 23.3]"],"chart_index":[{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"}],"values":[23.2,22.866666666666667,21.615384615384617],"x":[12,21,12],"y":["Monday","Monday","Saturday"]}},"id":"5d717a7a-e0a1-4b4a-ad66-aa552bca519e","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"db50e3ba-0c7e-42be-97ae-fe0aa846dd6f","type":"ColumnDataSource"},"glyph":{"id":"7a257cfc-8f18-4029-a24e-3726ee5e54b3","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"93c54eb1-9e88-472e-8e5b-68eeda94e5b8","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"735cd5e7-af0b-4a23-85ca-2b56f3f74570","type":"Rect"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9243a1ea-e030-4fe7-a474-5be45171054f","type":"BoxAnnotation"},{"attributes":{},"id":"350e11d6-2db7-4ae3-bebe-314b823d8fec","type":"BasicTicker"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"cc9d7cb8-9f7f-432f-9466-13c6c15b8155","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"ac2e9511-5ad1-498b-b30f-3a8c64281268","subtype":"Chart","type":"Plot"},"ticker":{"id":"4be6d609-4f3e-4ece-9bce-dfe6fe0258f9","type":"CategoricalTicker"}},"id":"bec74c5a-3ae2-4566-9ae2-7aefbf3a437d","type":"CategoricalAxis"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[2.0,1.1320754716981132,2.3333333333333335,2.7142857142857144,0.0,0.0,1.4,0.2,2.5384615384615383],"x":[9,10,14,9,14,8,9,8,10],"y":["Monday","Tuesday","Tuesday","Wednesday","Thursday","Saturday","Saturday","Sunday","Sunday"]}},"id":"be38e590-bea1-4f39-b8bb-ab9cad2d5ca4","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0,30.0,30.0,30.0,30.0,30.0,30.0],"x":[18,11,13,18,18,12,14],"y":["Monday","Tuesday","Tuesday","Tuesday","Wednesday","Thursday","Saturday"]}},"id":"db50e3ba-0c7e-42be-97ae-fe0aa846dd6f","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"ea8bbf62-cf40-4388-9865-fbb67c4fee5e","type":"Rect"},{"attributes":{},"id":"c529ea7d-aa83-496f-8e68-84bef835354e","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"b63fdeba-7fe3-42f7-878b-df0d6178ea10","type":"FactorRange"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[12.571428571428571,11.666666666666666,11.892857142857142,10.23076923076923,11.8,10.518518518518519,11.375,11.5],"x":[11,14,11,21,8,11,9,14],"y":["Monday","Monday","Thursday","Thursday","Friday","Friday","Sunday","Sunday"]}},"id":"20f0d809-75ff-41d4-8e45-3d9a7f8c63df","type":"ColumnDataSource"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"9e960255-82cc-48b5-8802-a8e2b0b35a4a","type":"LinearColorMapper"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[17.75,17.142857142857142,18.533333333333335,18.166666666666668,20.0],"x":[8,21,21,11,18],"y":["Tuesday","Tuesday","Wednesday","Sunday","Sunday"]}},"id":"92846420-daba-498a-acab-ffd70793fb08","type":"ColumnDataSource"},{"attributes":{},"id":"3d78b7cb-60b4-4638-b35a-c8a5c8323b5a","type":"BasicTickFormatter"},{"attributes":{},"id":"0f88137a-7abc-4f58-b724-8af5cf341c7f","type":"ToolEvents"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"0e8ffad7-e39a-4106-bb3e-880562f6c7e4","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fee8c8"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fee8c8"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"159042da-f092-4e5d-91c3-fdeb1cbdd296","type":"Rect"},{"attributes":{"plot":{"id":"ac2e9511-5ad1-498b-b30f-3a8c64281268","subtype":"Chart","type":"Plot"}},"id":"8cf3b61a-8c72-4ffa-96db-6e31370e246c","type":"HelpTool"},{"attributes":{"child":{"id":"ac2e9511-5ad1-498b-b30f-3a8c64281268","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"991e343b-6537-4da7-967d-7aa0c9a8609b","type":"Panel"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"5cfbe8ed-c213-42a1-9b1e-fdfe3fdff7da","type":"BasicTickFormatter"},"plot":{"id":"05918ea5-a1b3-4f5c-99f5-1badd903d4b7","subtype":"Chart","type":"Plot"},"ticker":{"id":"72592f04-71c0-4d25-8547-ff8c05268b5d","type":"BasicTicker"}},"id":"5d527ffb-f39f-4583-96ea-c6e8ce9e40da","type":"LinearAxis"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"c9ced559-54e6-4c65-be2d-f43d194d8abd","type":"Rect"},{"attributes":{"data_source":{"id":"5acbc106-fc54-426d-a793-c832ddcb86fe","type":"ColumnDataSource"},"glyph":{"id":"c9ced559-54e6-4c65-be2d-f43d194d8abd","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"47c2590c-933b-49d3-90b0-b737a30f8851","type":"GlyphRenderer"},{"attributes":{},"id":"28f5a36d-b21a-4e8b-8e35-29e4f18c96dd","type":"BasicTicker"},{"attributes":{},"id":"4be6d609-4f3e-4ece-9bce-dfe6fe0258f9","type":"CategoricalTicker"},{"attributes":{"plot":{"id":"ac2e9511-5ad1-498b-b30f-3a8c64281268","subtype":"Chart","type":"Plot"}},"id":"e9741200-b7bb-435c-9f3b-3f3fb4a8b4a6","type":"ResetTool"},{"attributes":{"overlay":{"id":"585f34c6-8272-463d-b133-a27d407eafb5","type":"BoxAnnotation"},"plot":{"id":"05918ea5-a1b3-4f5c-99f5-1badd903d4b7","subtype":"Chart","type":"Plot"}},"id":"03e16978-47b1-4a8c-bc65-e567639a20a7","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"be38e590-bea1-4f39-b8bb-ab9cad2d5ca4","type":"ColumnDataSource"},"glyph":{"id":"159042da-f092-4e5d-91c3-fdeb1cbdd296","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2e129f89-70e5-4757-92e9-dd613afb20f1","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"0f790766-9b5d-4c23-bb45-985b8c85f1a3","type":"Title"},{"attributes":{},"id":"55438651-5792-41ca-943d-689c7f3bc5c6","type":"BasicTicker"},{"attributes":{"plot":{"id":"05918ea5-a1b3-4f5c-99f5-1badd903d4b7","subtype":"Chart","type":"Plot"}},"id":"9b545239-41da-40a0-aa30-75bf784f3254","type":"SaveTool"},{"attributes":{"data_source":{"id":"5d717a7a-e0a1-4b4a-ad66-aa552bca519e","type":"ColumnDataSource"},"glyph":{"id":"be9d100a-7bf4-4fce-9187-82627fd44262","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"8a68c1ac-1f79-498e-a59f-d74e1775b4cc","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"9243a1ea-e030-4fe7-a474-5be45171054f","type":"BoxAnnotation"},"plot":{"id":"ac2e9511-5ad1-498b-b30f-3a8c64281268","subtype":"Chart","type":"Plot"}},"id":"5e9b2a2f-cffc-41d9-ad31-9834303a67e4","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"05918ea5-a1b3-4f5c-99f5-1badd903d4b7","subtype":"Chart","type":"Plot"}},"id":"df72abb6-1238-42d0-95e0-1bf94661fadc","type":"ResetTool"},{"attributes":{"plot":{"id":"ac2e9511-5ad1-498b-b30f-3a8c64281268","subtype":"Chart","type":"Plot"}},"id":"9f425f42-6820-4ab5-a5d2-9ff9c15d7193","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"f2aa792a-dd93-45ed-9bbf-b205b6a9e108","type":"ColumnDataSource"},"glyph":{"id":"4bb6b2b9-df51-47a6-a404-ee334265cafb","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ee8423ae-d883-4bff-8d7a-641ca3e49b46","type":"GlyphRenderer"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"5b79603c-3199-40df-ab49-bdd0cb2366bd","type":"FactorRange"},{"attributes":{"data_source":{"id":"92846420-daba-498a-acab-ffd70793fb08","type":"ColumnDataSource"},"glyph":{"id":"bd52d218-f77e-44c7-a49e-39b8dc66428f","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"4f99fd7f-eb6e-42ae-a809-c4dcecd54828","type":"GlyphRenderer"},{"attributes":{"child":{"id":"05918ea5-a1b3-4f5c-99f5-1badd903d4b7","subtype":"Chart","type":"Plot"},"title":"WN"},"id":"d6450604-7f0c-4876-a737-ef061d389332","type":"Panel"},{"attributes":{"data_source":{"id":"37f3458d-8416-4f3c-82f6-f491d35957d3","type":"ColumnDataSource"},"glyph":{"id":"735cd5e7-af0b-4a23-85ca-2b56f3f74570","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"16acbf77-7ece-4b2c-84dc-872564fc8427","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0,30.0,30.0,30.0,30.0,30.0,30.0],"x":[18,11,13,18,18,12,14],"y":["Monday","Tuesday","Tuesday","Tuesday","Wednesday","Thursday","Saturday"]}},"id":"37f3458d-8416-4f3c-82f6-f491d35957d3","type":"ColumnDataSource"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"54d4315b-da07-421b-8483-827bd273e60a","type":"LinearAxis"}],"left":[{"id":"bec74c5a-3ae2-4566-9ae2-7aefbf3a437d","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"9243a1ea-e030-4fe7-a474-5be45171054f","type":"BoxAnnotation"},{"id":"93c54eb1-9e88-472e-8e5b-68eeda94e5b8","type":"GlyphRenderer"},{"id":"7d62e3cc-0591-42af-be61-157e403ac80e","type":"GlyphRenderer"},{"id":"479af581-5aed-463e-a868-f9daff2d0eb0","type":"GlyphRenderer"},{"id":"77918d9c-6254-4aaa-82a8-4bdae72b34c7","type":"GlyphRenderer"},{"id":"f76c3d69-67b7-4f9d-9ddc-f85d9a4a695a","type":"GlyphRenderer"},{"id":"47c2590c-933b-49d3-90b0-b737a30f8851","type":"GlyphRenderer"},{"id":"ee8423ae-d883-4bff-8d7a-641ca3e49b46","type":"GlyphRenderer"},{"id":"2e129f89-70e5-4757-92e9-dd613afb20f1","type":"GlyphRenderer"},{"id":"54d4315b-da07-421b-8483-827bd273e60a","type":"LinearAxis"},{"id":"bec74c5a-3ae2-4566-9ae2-7aefbf3a437d","type":"CategoricalAxis"},{"id":"2ce831c0-6b62-411c-a96c-16b83edf65cd","type":"ColorBar"}],"right":[{"id":"2ce831c0-6b62-411c-a96c-16b83edf65cd","type":"ColorBar"}],"title":{"id":"0f790766-9b5d-4c23-bb45-985b8c85f1a3","type":"Title"},"tool_events":{"id":"0f88137a-7abc-4f58-b724-8af5cf341c7f","type":"ToolEvents"},"toolbar":{"id":"7ae3ee80-6156-4a71-a068-b551078fbd37","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"a2be0643-c769-4ad1-b9c0-a3db4b8f7487","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"b63fdeba-7fe3-42f7-878b-df0d6178ea10","type":"FactorRange"}},"id":"ac2e9511-5ad1-498b-b30f-3a8c64281268","subtype":"Chart","type":"Plot"},{"attributes":{"color_mapper":{"id":"9e960255-82cc-48b5-8802-a8e2b0b35a4a","type":"LinearColorMapper"},"formatter":{"id":"ca798a47-ac83-4da8-b290-fd8dc50d1028","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"ac2e9511-5ad1-498b-b30f-3a8c64281268","subtype":"Chart","type":"Plot"},"ticker":{"id":"350e11d6-2db7-4ae3-bebe-314b823d8fec","type":"BasicTicker"}},"id":"2ce831c0-6b62-411c-a96c-16b83edf65cd","type":"ColorBar"},{"attributes":{"plot":{"id":"ac2e9511-5ad1-498b-b30f-3a8c64281268","subtype":"Chart","type":"Plot"}},"id":"1df84243-eea4-4a46-afdb-af8b797d5853","type":"SaveTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"7a257cfc-8f18-4029-a24e-3726ee5e54b3","type":"Rect"},{"attributes":{"data_source":{"id":"b73a8276-8e42-4e98-ae4c-f4d5d9b43ff7","type":"ColumnDataSource"},"glyph":{"id":"d24e3e26-18ec-4a32-afa4-a57df094c94c","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"479af581-5aed-463e-a868-f9daff2d0eb0","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[17.75,17.142857142857142,18.533333333333335,18.166666666666668,20.0],"x":[8,21,21,11,18],"y":["Tuesday","Tuesday","Wednesday","Sunday","Sunday"]}},"id":"b73a8276-8e42-4e98-ae4c-f4d5d9b43ff7","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"8fb1c38b-2e62-4a26-9e92-2ed20b5af75b","type":"PanTool"},{"id":"44c83a5f-819d-4c31-bda1-c123fe8bb11b","type":"WheelZoomTool"},{"id":"03e16978-47b1-4a8c-bc65-e567639a20a7","type":"BoxZoomTool"},{"id":"9b545239-41da-40a0-aa30-75bf784f3254","type":"SaveTool"},{"id":"df72abb6-1238-42d0-95e0-1bf94661fadc","type":"ResetTool"},{"id":"49ebda28-6634-472a-a982-49c6dd8800fe","type":"HelpTool"}]},"id":"3ae1059c-1955-465a-a769-1a069d5bd843","type":"Toolbar"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"d2991d70-393a-4e44-ae29-24e960c2273e","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[12.571428571428571,11.666666666666666,11.892857142857142,10.23076923076923,11.8,10.518518518518519,11.375,11.5],"x":[11,14,11,21,8,11,9,14],"y":["Monday","Monday","Thursday","Thursday","Friday","Friday","Sunday","Sunday"]}},"id":"746a8875-50a1-43bc-8aed-613a29a40b60","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"585f34c6-8272-463d-b133-a27d407eafb5","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"9310f0ec-066f-4c3e-a25c-1775e3681457","type":"ColumnDataSource"},"glyph":{"id":"423cb23f-8b27-4748-b338-0b14f363be1e","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"29beb7f7-9edb-4192-83ad-83188afde0c2","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":23},"id":"a2be0643-c769-4ad1-b9c0-a3db4b8f7487","type":"Range1d"},{"attributes":{"callback":null,"end":23},"id":"dd47d3bd-9584-45a4-ad63-584d0635a42f","type":"Range1d"},{"attributes":{"data_source":{"id":"746a8875-50a1-43bc-8aed-613a29a40b60","type":"ColumnDataSource"},"glyph":{"id":"b67d0971-8c55-4199-aba3-8517ef12b169","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f76c3d69-67b7-4f9d-9ddc-f85d9a4a695a","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"d24e3e26-18ec-4a32-afa4-a57df094c94c","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"4bb6b2b9-df51-47a6-a404-ee334265cafb","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20, 23.3]","(20, 23.3]","(20, 23.3]"],"chart_index":[{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"}],"values":[23.2,22.866666666666667,21.615384615384617],"x":[12,21,12],"y":["Monday","Monday","Saturday"]}},"id":"75b248fe-47f3-45ee-88de-966e53dff5c8","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"ac2e9511-5ad1-498b-b30f-3a8c64281268","subtype":"Chart","type":"Plot"}},"id":"b4ba922a-1a5b-4fa0-b72f-a5a6e0ead936","type":"PanTool"},{"attributes":{"color_mapper":{"id":"7dfedff0-824c-4bcf-8453-fd7cae020e25","type":"LinearColorMapper"},"formatter":{"id":"771fcfec-65fc-4f1d-97a1-997587e0356c","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"05918ea5-a1b3-4f5c-99f5-1badd903d4b7","subtype":"Chart","type":"Plot"},"ticker":{"id":"28f5a36d-b21a-4e8b-8e35-29e4f18c96dd","type":"BasicTicker"}},"id":"e58a5824-8176-4e7d-ab63-0f6066fa4fe7","type":"ColorBar"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"6e6c7dcd-68ce-442c-92d7-16fa16af2d07","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[6.0,5.612903225806452,3.6666666666666665,6.6,5.634615384615385,5.628571428571429,3.5,5.714285714285714,3.75,6.35],"x":[8,11,14,8,10,13,9,13,14,10],"y":["Wednesday","Wednesday","Wednesday","Thursday","Thursday","Thursday","Friday","Friday","Friday","Saturday"]}},"id":"b1d84b4c-6771-44a1-b52e-a311963d22d0","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"bd52d218-f77e-44c7-a49e-39b8dc66428f","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"b67d0971-8c55-4199-aba3-8517ef12b169","type":"Rect"},{"attributes":{},"id":"771fcfec-65fc-4f1d-97a1-997587e0356c","type":"BasicTickFormatter"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"5285ba2c-d081-4287-ae05-8a8358b021c8","type":"Rect"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b4ba922a-1a5b-4fa0-b72f-a5a6e0ead936","type":"PanTool"},{"id":"9f425f42-6820-4ab5-a5d2-9ff9c15d7193","type":"WheelZoomTool"},{"id":"5e9b2a2f-cffc-41d9-ad31-9834303a67e4","type":"BoxZoomTool"},{"id":"1df84243-eea4-4a46-afdb-af8b797d5853","type":"SaveTool"},{"id":"e9741200-b7bb-435c-9f3b-3f3fb4a8b4a6","type":"ResetTool"},{"id":"8cf3b61a-8c72-4ffa-96db-6e31370e246c","type":"HelpTool"}]},"id":"7ae3ee80-6156-4a71-a068-b551078fbd37","type":"Toolbar"}],"root_ids":["a57c17a0-61ac-4de0-90fc-ced8c2e7ba3a"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"2ed4bdb5-3c9c-440f-ae6f-344b7cb8775e","elementid":"ad6e7f20-ceb7-4c91-b85a-e969d14d5116","modelid":"a57c17a0-61ac-4de0-90fc-ced8c2e7ba3a"}];
                  
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