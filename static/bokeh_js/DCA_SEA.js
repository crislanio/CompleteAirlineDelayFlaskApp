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
      };var element = document.getElementById("dfb3e3ea-b5f4-47c4-ba14-f74f4794996c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'dfb3e3ea-b5f4-47c4-ba14-f74f4794996c' but no matching script tag was found. ")
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
                  var docs_json = {"aea22365-5dff-4bab-8b70-eb0f49a69585":{"roots":{"references":[{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"dfb5aaa2-300b-44e2-97b7-dabc1e891084","type":"BasicTickFormatter"},"plot":{"id":"020d2470-93bc-43ba-9e77-71232a7c1590","subtype":"Chart","type":"Plot"},"ticker":{"id":"81112890-f9ae-4582-a0a3-d572e33e8247","type":"BasicTicker"}},"id":"5c19e1d0-df18-4ce2-8eea-db45f217aa0c","type":"LinearAxis"},{"attributes":{},"id":"1710a81a-c3d9-47df-a081-619e1bb68857","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(9.1, 11.5]","(9.1, 11.5]","(9.1, 11.5]"],"chart_index":[{"POS_ARR_DELAY":"(9.1, 11.5]"},{"POS_ARR_DELAY":"(9.1, 11.5]"},{"POS_ARR_DELAY":"(9.1, 11.5]"}],"values":[9.794871794871796,9.687898089171975,9.61437908496732],"x":[18,18,18],"y":["Tuesday","Wednesday","Thursday"]}},"id":"34fb133e-fb61-43ac-9557-470b1cd66ac2","type":"ColumnDataSource"},{"attributes":{},"id":"911aee52-f022-400c-893e-8c6ada24bf94","type":"BasicTicker"},{"attributes":{"color_mapper":{"id":"f31be232-3fa0-4e48-9517-1c534b962d3b","type":"LinearColorMapper"},"formatter":{"id":"7f22a4a9-8bf3-452b-ade6-9288759c2e64","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"020d2470-93bc-43ba-9e77-71232a7c1590","subtype":"Chart","type":"Plot"},"ticker":{"id":"79703f0c-d39d-4ee2-9394-0bd55f39c102","type":"BasicTicker"}},"id":"8116908a-36df-491a-adf5-d0e1fa3e92ec","type":"ColorBar"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"0b786d48-8249-4a01-8dd5-2585e6d160ce","type":"Rect"},{"attributes":{"plot":{"id":"020d2470-93bc-43ba-9e77-71232a7c1590","subtype":"Chart","type":"Plot"}},"id":"df396337-54e4-469f-8895-fceb5e469809","type":"ResetTool"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"0fe6382d-e6f5-441c-b2c9-53ac22871448","type":"LinearAxis"}],"left":[{"id":"081b1ec0-650b-4252-bfe0-30aac9a4577b","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"5e21b649-7010-43ea-bed8-5c967fcf5136","type":"BoxAnnotation"},{"id":"b8c88803-a9a2-4a7b-b1cf-c61c77eb548e","type":"GlyphRenderer"},{"id":"7dec12f6-8bc1-4823-a750-47784242785d","type":"GlyphRenderer"},{"id":"6c5e3de0-6e6a-48c8-be98-50aff620dd14","type":"GlyphRenderer"},{"id":"9ff09350-0fb2-462b-8b2d-19158bf7ea64","type":"GlyphRenderer"},{"id":"dac7eecc-35c9-4652-845b-2db09b0d9f23","type":"GlyphRenderer"},{"id":"0fe6382d-e6f5-441c-b2c9-53ac22871448","type":"LinearAxis"},{"id":"081b1ec0-650b-4252-bfe0-30aac9a4577b","type":"CategoricalAxis"},{"id":"f9a02e45-fb14-4b71-8fb7-0d0aae23f2db","type":"ColorBar"}],"right":[{"id":"f9a02e45-fb14-4b71-8fb7-0d0aae23f2db","type":"ColorBar"}],"title":{"id":"919b0c37-0497-45b0-93db-a32377f23099","type":"Title"},"tool_events":{"id":"814dd1c8-65c5-40a0-99c6-78d72826b92c","type":"ToolEvents"},"toolbar":{"id":"df12b81d-c06a-4cec-b597-ad11cd3224f6","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"93699fb7-3639-47e3-9a3b-b221309da7e0","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"43440368-6b24-4816-92fc-0f4323fba149","type":"FactorRange"}},"id":"ffa49b82-9725-4617-a061-636689df2c6a","subtype":"Chart","type":"Plot"},{"attributes":{},"id":"d1ecaf68-9688-4b4a-a1d0-dce8e7af2df4","type":"ToolEvents"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"f00bf1c2-34c6-45da-b610-c9e9bb374e22","type":"Rect"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"4ff63398-e47b-4ed8-9aae-cfed8d153b43","type":"BasicTickFormatter"},"plot":{"id":"ffa49b82-9725-4617-a061-636689df2c6a","subtype":"Chart","type":"Plot"},"ticker":{"id":"1710a81a-c3d9-47df-a081-619e1bb68857","type":"BasicTicker"}},"id":"0fe6382d-e6f5-441c-b2c9-53ac22871448","type":"LinearAxis"},{"attributes":{"plot":{"id":"ffa49b82-9725-4617-a061-636689df2c6a","subtype":"Chart","type":"Plot"}},"id":"d5b2b89d-0cbd-43c1-92bb-13cda6ee3d31","type":"HelpTool"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"43440368-6b24-4816-92fc-0f4323fba149","type":"FactorRange"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 9.1]","(6.7, 9.1]","(6.7, 9.1]","(6.7, 9.1]","(6.7, 9.1]","(6.7, 9.1]","(6.7, 9.1]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 9.1]"},{"POS_ARR_DELAY":"(6.7, 9.1]"},{"POS_ARR_DELAY":"(6.7, 9.1]"},{"POS_ARR_DELAY":"(6.7, 9.1]"},{"POS_ARR_DELAY":"(6.7, 9.1]"},{"POS_ARR_DELAY":"(6.7, 9.1]"},{"POS_ARR_DELAY":"(6.7, 9.1]"}],"values":[8.647435897435898,8.379310344827585,7.607142857142857,8.173228346456693,7.296296296296297,8.560283687943262,7.846153846153846],"x":[18,7,7,8,7,18,18],"y":["Monday","Tuesday","Wednesday","Wednesday","Friday","Saturday","Sunday"]}},"id":"159e15cc-eeec-48c8-ac4a-41fa6c42a3cf","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9872d790-35f9-45eb-a279-d5b6ac18a4d2","type":"PanTool"},{"id":"b9873483-b315-48c9-b1aa-52232f6c6884","type":"WheelZoomTool"},{"id":"8c2806c2-e809-418e-a0d2-d86e49f8a467","type":"BoxZoomTool"},{"id":"54efb1e0-ef7f-4b2d-8fda-2a0f2b5b66f5","type":"SaveTool"},{"id":"df396337-54e4-469f-8895-fceb5e469809","type":"ResetTool"},{"id":"c09e38af-8305-4914-a2af-a5aef55654a5","type":"HelpTool"}]},"id":"319cb85a-2eb9-4d9f-8919-3635ebdc5e91","type":"Toolbar"},{"attributes":{"plot":{"id":"ffa49b82-9725-4617-a061-636689df2c6a","subtype":"Chart","type":"Plot"}},"id":"d06e72bd-9426-4c3d-96f6-7f4e11189952","type":"PanTool"},{"attributes":{},"id":"4ff63398-e47b-4ed8-9aae-cfed8d153b43","type":"BasicTickFormatter"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"4b4a11bb-f78b-4fe0-b5ed-1566acb6632b","type":"Rect"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"edaa87ca-f411-4ebb-b316-7296b27a76fb","type":"Title"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"4f936239-ace8-45f0-b716-e3672f18878d","type":"Rect"},{"attributes":{"callback":null,"tabs":[{"id":"865285a4-dc9f-47fd-8844-95839bffb2e7","type":"Panel"},{"id":"7c61e612-04b1-4f0f-a415-0bcd80eaf601","type":"Panel"}]},"id":"cfbed9ad-3ab4-4154-8dc0-83d356f5ee0f","type":"Tabs"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d06e72bd-9426-4c3d-96f6-7f4e11189952","type":"PanTool"},{"id":"72d54b05-6b07-49fa-90f3-6281be86ced5","type":"WheelZoomTool"},{"id":"45c2ea4b-fed3-4e1c-8360-7f33f553f9d9","type":"BoxZoomTool"},{"id":"275b56a2-b434-49e3-b567-feab5a38bf92","type":"SaveTool"},{"id":"2b3e2b33-7d3d-4dec-98cb-51741cda212a","type":"ResetTool"},{"id":"d5b2b89d-0cbd-43c1-92bb-13cda6ee3d31","type":"HelpTool"}]},"id":"df12b81d-c06a-4cec-b597-ad11cd3224f6","type":"Toolbar"},{"attributes":{},"id":"bae7964e-4093-43fd-b443-6f1ace2537f6","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"ffa49b82-9725-4617-a061-636689df2c6a","subtype":"Chart","type":"Plot"}},"id":"275b56a2-b434-49e3-b567-feab5a38bf92","type":"SaveTool"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"7f6cbfc6-585c-4cf7-b82b-a3e094e887ee","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"ffa49b82-9725-4617-a061-636689df2c6a","subtype":"Chart","type":"Plot"},"ticker":{"id":"9024bc24-5635-48e5-8eb0-bb70cf7a40ac","type":"CategoricalTicker"}},"id":"081b1ec0-650b-4252-bfe0-30aac9a4577b","type":"CategoricalAxis"},{"attributes":{"color_mapper":{"id":"18e8a3b5-8e7d-4dd8-83f7-2530dd370704","type":"LinearColorMapper"},"formatter":{"id":"bae7964e-4093-43fd-b443-6f1ace2537f6","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"ffa49b82-9725-4617-a061-636689df2c6a","subtype":"Chart","type":"Plot"},"ticker":{"id":"911aee52-f022-400c-893e-8c6ada24bf94","type":"BasicTicker"}},"id":"f9a02e45-fb14-4b71-8fb7-0d0aae23f2db","type":"ColorBar"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"a6b16d2c-ec5c-4123-b6af-a8ceeb2a96cb","type":"Rect"},{"attributes":{},"id":"814dd1c8-65c5-40a0-99c6-78d72826b92c","type":"ToolEvents"},{"attributes":{"plot":null,"text":"Alaska Airlines "},"id":"919b0c37-0497-45b0-93db-a32377f23099","type":"Title"},{"attributes":{"data_source":{"id":"c3a2ca63-5f49-4dfc-a4f0-e7d15e96a4c9","type":"ColumnDataSource"},"glyph":{"id":"4b4a11bb-f78b-4fe0-b5ed-1566acb6632b","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"dac7eecc-35c9-4652-845b-2db09b0d9f23","type":"GlyphRenderer"},{"attributes":{},"id":"dfb5aaa2-300b-44e2-97b7-dabc1e891084","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"020d2470-93bc-43ba-9e77-71232a7c1590","subtype":"Chart","type":"Plot"}},"id":"54efb1e0-ef7f-4b2d-8fda-2a0f2b5b66f5","type":"SaveTool"},{"attributes":{},"id":"79703f0c-d39d-4ee2-9394-0bd55f39c102","type":"BasicTicker"},{"attributes":{},"id":"7f22a4a9-8bf3-452b-ade6-9288759c2e64","type":"BasicTickFormatter"},{"attributes":{},"id":"81112890-f9ae-4582-a0a3-d572e33e8247","type":"BasicTicker"},{"attributes":{"data_source":{"id":"a2218f32-594b-45ea-bebd-72a3b6497041","type":"ColumnDataSource"},"glyph":{"id":"4f936239-ace8-45f0-b716-e3672f18878d","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ff460bcb-b9be-466e-b5d2-639f727cba01","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"ea81f5f9-96ec-47e6-80c1-b3124ed37814","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(4.3, 6.7]","(4.3, 6.7]","(4.3, 6.7]","(4.3, 6.7]","(4.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(4.3, 6.7]"},{"POS_ARR_DELAY":"(4.3, 6.7]"},{"POS_ARR_DELAY":"(4.3, 6.7]"},{"POS_ARR_DELAY":"(4.3, 6.7]"},{"POS_ARR_DELAY":"(4.3, 6.7]"}],"values":[5.222222222222222,4.650406504065041,5.987012987012987,5.648,4.285714285714286],"x":[8,8,18,8,7],"y":["Tuesday","Thursday","Friday","Saturday","Sunday"]}},"id":"aa70f0d7-33b6-48a3-b162-d033f8c5a079","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3ee1f26c-1ac1-4bc6-afb1-6bc84313df0a","type":"BoxAnnotation"},{"attributes":{"child":{"id":"ffa49b82-9725-4617-a061-636689df2c6a","subtype":"Chart","type":"Plot"},"title":"AS"},"id":"7c61e612-04b1-4f0f-a415-0bcd80eaf601","type":"Panel"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"18e8a3b5-8e7d-4dd8-83f7-2530dd370704","type":"LinearColorMapper"},{"attributes":{"callback":null,"end":23},"id":"4a266fe5-de71-4926-9682-2ca983df7994","type":"Range1d"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"5c19e1d0-df18-4ce2-8eea-db45f217aa0c","type":"LinearAxis"}],"left":[{"id":"e37f0fb8-8529-422d-91ef-9245e36e4b25","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"3ee1f26c-1ac1-4bc6-afb1-6bc84313df0a","type":"BoxAnnotation"},{"id":"e7ece0cd-4c14-48f4-8ec3-2a16371e6636","type":"GlyphRenderer"},{"id":"2c927e65-a72a-47ed-8299-ca16355990b3","type":"GlyphRenderer"},{"id":"a2f9e07d-6f9c-49fe-9a8b-be75003d6a91","type":"GlyphRenderer"},{"id":"9f2b1ca3-1a83-4cc0-8a3b-f287931047b1","type":"GlyphRenderer"},{"id":"ff460bcb-b9be-466e-b5d2-639f727cba01","type":"GlyphRenderer"},{"id":"5c19e1d0-df18-4ce2-8eea-db45f217aa0c","type":"LinearAxis"},{"id":"e37f0fb8-8529-422d-91ef-9245e36e4b25","type":"CategoricalAxis"},{"id":"8116908a-36df-491a-adf5-d0e1fa3e92ec","type":"ColorBar"}],"right":[{"id":"8116908a-36df-491a-adf5-d0e1fa3e92ec","type":"ColorBar"}],"title":{"id":"edaa87ca-f411-4ebb-b316-7296b27a76fb","type":"Title"},"tool_events":{"id":"d1ecaf68-9688-4b4a-a1d0-dce8e7af2df4","type":"ToolEvents"},"toolbar":{"id":"319cb85a-2eb9-4d9f-8919-3635ebdc5e91","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"4a266fe5-de71-4926-9682-2ca983df7994","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"d2c01110-92eb-47a5-ad64-036044163f8f","type":"FactorRange"}},"id":"020d2470-93bc-43ba-9e77-71232a7c1590","subtype":"Chart","type":"Plot"},{"attributes":{"callback":null,"end":23},"id":"93699fb7-3639-47e3-9a3b-b221309da7e0","type":"Range1d"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(4.3, 6.7]","(4.3, 6.7]","(4.3, 6.7]","(4.3, 6.7]","(4.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(4.3, 6.7]"},{"POS_ARR_DELAY":"(4.3, 6.7]"},{"POS_ARR_DELAY":"(4.3, 6.7]"},{"POS_ARR_DELAY":"(4.3, 6.7]"},{"POS_ARR_DELAY":"(4.3, 6.7]"}],"values":[5.222222222222222,4.650406504065041,5.987012987012987,5.648,4.285714285714286],"x":[8,8,18,8,7],"y":["Tuesday","Thursday","Friday","Saturday","Sunday"]}},"id":"99a381de-a0e7-49f6-8db7-be205a138e20","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"e7a54d9c-ef98-48dc-bc51-7cef3c13d745","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(21.2, 23.6]"],"chart_index":[{"POS_ARR_DELAY":"(21.2, 23.6]"}],"values":[23.607142857142858],"x":[7],"y":["Monday"]}},"id":"80b9350d-a4f1-4bed-8db3-bffc92f36c2a","type":"ColumnDataSource"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"d2c01110-92eb-47a5-ad64-036044163f8f","type":"FactorRange"},{"attributes":{"overlay":{"id":"5e21b649-7010-43ea-bed8-5c967fcf5136","type":"BoxAnnotation"},"plot":{"id":"ffa49b82-9725-4617-a061-636689df2c6a","subtype":"Chart","type":"Plot"}},"id":"45c2ea4b-fed3-4e1c-8360-7f33f553f9d9","type":"BoxZoomTool"},{"attributes":{"overlay":{"id":"3ee1f26c-1ac1-4bc6-afb1-6bc84313df0a","type":"BoxAnnotation"},"plot":{"id":"020d2470-93bc-43ba-9e77-71232a7c1590","subtype":"Chart","type":"Plot"}},"id":"8c2806c2-e809-418e-a0d2-d86e49f8a467","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"5e21b649-7010-43ea-bed8-5c967fcf5136","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"ffa49b82-9725-4617-a061-636689df2c6a","subtype":"Chart","type":"Plot"}},"id":"72d54b05-6b07-49fa-90f3-6281be86ced5","type":"WheelZoomTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"3be58028-059b-4cf5-9eff-eb9cef80b3e0","type":"Rect"},{"attributes":{},"id":"edd2081d-bc9a-4fc8-8819-3f714a041ffa","type":"CategoricalTicker"},{"attributes":{"plot":{"id":"020d2470-93bc-43ba-9e77-71232a7c1590","subtype":"Chart","type":"Plot"}},"id":"b9873483-b315-48c9-b1aa-52232f6c6884","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(9.1, 11.5]","(9.1, 11.5]","(9.1, 11.5]"],"chart_index":[{"POS_ARR_DELAY":"(9.1, 11.5]"},{"POS_ARR_DELAY":"(9.1, 11.5]"},{"POS_ARR_DELAY":"(9.1, 11.5]"}],"values":[9.794871794871796,9.687898089171975,9.61437908496732],"x":[18,18,18],"y":["Tuesday","Wednesday","Thursday"]}},"id":"5875d18b-19c8-46b5-a989-9e6e23186573","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"a0ef99f3-8698-4eb1-92e8-19f464197294","type":"Rect"},{"attributes":{"data_source":{"id":"159e15cc-eeec-48c8-ac4a-41fa6c42a3cf","type":"ColumnDataSource"},"glyph":{"id":"a6b16d2c-ec5c-4123-b6af-a8ceeb2a96cb","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a2f9e07d-6f9c-49fe-9a8b-be75003d6a91","type":"GlyphRenderer"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"f31be232-3fa0-4e48-9517-1c534b962d3b","type":"LinearColorMapper"},{"attributes":{"data_source":{"id":"80b9350d-a4f1-4bed-8db3-bffc92f36c2a","type":"ColumnDataSource"},"glyph":{"id":"ea81f5f9-96ec-47e6-80c1-b3124ed37814","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"b8c88803-a9a2-4a7b-b1cf-c61c77eb548e","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[1.8, 4.3]","[1.8, 4.3]","[1.8, 4.3]","[1.8, 4.3]","[1.8, 4.3]"],"chart_index":[{"POS_ARR_DELAY":"[1.8, 4.3]"},{"POS_ARR_DELAY":"[1.8, 4.3]"},{"POS_ARR_DELAY":"[1.8, 4.3]"},{"POS_ARR_DELAY":"[1.8, 4.3]"},{"POS_ARR_DELAY":"[1.8, 4.3]"}],"values":[3.888,2.8214285714285716,2.104,1.8666666666666667,3.384],"x":[8,7,8,7,8],"y":["Monday","Thursday","Friday","Saturday","Sunday"]}},"id":"a2218f32-594b-45ea-bebd-72a3b6497041","type":"ColumnDataSource"},{"attributes":{},"id":"35213733-92b2-48ff-8c54-bb8a78786c38","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 9.1]","(6.7, 9.1]","(6.7, 9.1]","(6.7, 9.1]","(6.7, 9.1]","(6.7, 9.1]","(6.7, 9.1]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 9.1]"},{"POS_ARR_DELAY":"(6.7, 9.1]"},{"POS_ARR_DELAY":"(6.7, 9.1]"},{"POS_ARR_DELAY":"(6.7, 9.1]"},{"POS_ARR_DELAY":"(6.7, 9.1]"},{"POS_ARR_DELAY":"(6.7, 9.1]"},{"POS_ARR_DELAY":"(6.7, 9.1]"}],"values":[8.647435897435898,8.379310344827585,7.607142857142857,8.173228346456693,7.296296296296297,8.560283687943262,7.846153846153846],"x":[18,7,7,8,7,18,18],"y":["Monday","Tuesday","Wednesday","Wednesday","Friday","Saturday","Sunday"]}},"id":"fb087abd-3c67-4346-8970-d1733126cce2","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[1.8, 4.3]","[1.8, 4.3]","[1.8, 4.3]","[1.8, 4.3]","[1.8, 4.3]"],"chart_index":[{"POS_ARR_DELAY":"[1.8, 4.3]"},{"POS_ARR_DELAY":"[1.8, 4.3]"},{"POS_ARR_DELAY":"[1.8, 4.3]"},{"POS_ARR_DELAY":"[1.8, 4.3]"},{"POS_ARR_DELAY":"[1.8, 4.3]"}],"values":[3.888,2.8214285714285716,2.104,1.8666666666666667,3.384],"x":[8,7,8,7,8],"y":["Monday","Thursday","Friday","Saturday","Sunday"]}},"id":"c3a2ca63-5f49-4dfc-a4f0-e7d15e96a4c9","type":"ColumnDataSource"},{"attributes":{},"id":"9024bc24-5635-48e5-8eb0-bb70cf7a40ac","type":"CategoricalTicker"},{"attributes":{"data_source":{"id":"34fb133e-fb61-43ac-9557-470b1cd66ac2","type":"ColumnDataSource"},"glyph":{"id":"0b786d48-8249-4a01-8dd5-2585e6d160ce","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2c927e65-a72a-47ed-8299-ca16355990b3","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"2814f1d2-6648-4880-887c-69fec3136955","type":"ColumnDataSource"},"glyph":{"id":"e7a54d9c-ef98-48dc-bc51-7cef3c13d745","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e7ece0cd-4c14-48f4-8ec3-2a16371e6636","type":"GlyphRenderer"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"35213733-92b2-48ff-8c54-bb8a78786c38","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"020d2470-93bc-43ba-9e77-71232a7c1590","subtype":"Chart","type":"Plot"},"ticker":{"id":"edd2081d-bc9a-4fc8-8819-3f714a041ffa","type":"CategoricalTicker"}},"id":"e37f0fb8-8529-422d-91ef-9245e36e4b25","type":"CategoricalAxis"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"935f0564-99c4-436e-aa19-d80bcf74a7ac","type":"Rect"},{"attributes":{"data_source":{"id":"5875d18b-19c8-46b5-a989-9e6e23186573","type":"ColumnDataSource"},"glyph":{"id":"a0ef99f3-8698-4eb1-92e8-19f464197294","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"7dec12f6-8bc1-4823-a750-47784242785d","type":"GlyphRenderer"},{"attributes":{},"id":"7f6cbfc6-585c-4cf7-b82b-a3e094e887ee","type":"CategoricalTickFormatter"},{"attributes":{"plot":{"id":"020d2470-93bc-43ba-9e77-71232a7c1590","subtype":"Chart","type":"Plot"}},"id":"9872d790-35f9-45eb-a279-d5b6ac18a4d2","type":"PanTool"},{"attributes":{"plot":{"id":"ffa49b82-9725-4617-a061-636689df2c6a","subtype":"Chart","type":"Plot"}},"id":"2b3e2b33-7d3d-4dec-98cb-51741cda212a","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(21.2, 23.6]"],"chart_index":[{"POS_ARR_DELAY":"(21.2, 23.6]"}],"values":[23.607142857142858],"x":[7],"y":["Monday"]}},"id":"2814f1d2-6648-4880-887c-69fec3136955","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"020d2470-93bc-43ba-9e77-71232a7c1590","subtype":"Chart","type":"Plot"}},"id":"c09e38af-8305-4914-a2af-a5aef55654a5","type":"HelpTool"},{"attributes":{"child":{"id":"020d2470-93bc-43ba-9e77-71232a7c1590","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"865285a4-dc9f-47fd-8844-95839bffb2e7","type":"Panel"},{"attributes":{"data_source":{"id":"aa70f0d7-33b6-48a3-b162-d033f8c5a079","type":"ColumnDataSource"},"glyph":{"id":"3be58028-059b-4cf5-9eff-eb9cef80b3e0","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"9ff09350-0fb2-462b-8b2d-19158bf7ea64","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"fb087abd-3c67-4346-8970-d1733126cce2","type":"ColumnDataSource"},"glyph":{"id":"935f0564-99c4-436e-aa19-d80bcf74a7ac","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"6c5e3de0-6e6a-48c8-be98-50aff620dd14","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"99a381de-a0e7-49f6-8db7-be205a138e20","type":"ColumnDataSource"},"glyph":{"id":"f00bf1c2-34c6-45da-b610-c9e9bb374e22","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"9f2b1ca3-1a83-4cc0-8a3b-f287931047b1","type":"GlyphRenderer"}],"root_ids":["cfbed9ad-3ab4-4154-8dc0-83d356f5ee0f"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"aea22365-5dff-4bab-8b70-eb0f49a69585","elementid":"dfb3e3ea-b5f4-47c4-ba14-f74f4794996c","modelid":"cfbed9ad-3ab4-4154-8dc0-83d356f5ee0f"}];
                  
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