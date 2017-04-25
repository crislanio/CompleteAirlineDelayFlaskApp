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
      };var element = document.getElementById("2ddcff6c-b535-4c67-bc87-33f4796e5c8b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2ddcff6c-b535-4c67-bc87-33f4796e5c8b' but no matching script tag was found. ")
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
                  var docs_json = {"e94c5899-d0ed-4426-b65c-e98de7216f60":{"roots":{"references":[{"attributes":{},"id":"59fa6ddc-90df-4e24-9e72-25b4d804fee9","type":"ToolEvents"},{"attributes":{"data_source":{"id":"e815b4c8-9348-4cf1-b6d7-2e7e3331e16c","type":"ColumnDataSource"},"glyph":{"id":"164d0930-7c21-4af9-98e2-4813ddb0e7fc","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"41a172ef-c597-46ce-90eb-8c09ec2bf69a","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"16a86eb8-2bb1-4da7-bd45-4b6562d9e068","type":"ColumnDataSource"},"glyph":{"id":"d94a37c5-cbe7-4690-8caf-abafbfc6460b","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"1bb2dd38-ad63-4675-9ab8-b53ab578d3d5","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"6de26ae1-9b29-4ed7-b048-e59fb735a1d0","subtype":"Chart","type":"Plot"}},"id":"5a6de149-c360-4cd4-a0e3-22fa92200355","type":"HelpTool"},{"attributes":{"data_source":{"id":"ef1f0a66-4dc4-4307-a6f0-dcb811616893","type":"ColumnDataSource"},"glyph":{"id":"89f2a4bd-235e-4181-90d9-7b6debdf3cd0","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"aae6da50-6332-46cc-a5f7-da1bccdb8586","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"6de26ae1-9b29-4ed7-b048-e59fb735a1d0","subtype":"Chart","type":"Plot"}},"id":"17c82118-1410-4f73-8187-94dbd80219fb","type":"PanTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"d94a37c5-cbe7-4690-8caf-abafbfc6460b","type":"Rect"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"22ec5b87-7670-4cf3-afce-dd3640db947d","type":"PanTool"},{"id":"6e26353f-e8d5-49a4-ab4a-11e1ff7fa652","type":"WheelZoomTool"},{"id":"b69c3ecb-831a-4f2b-b883-5e093e6347e5","type":"BoxZoomTool"},{"id":"b0f29466-07e4-4e26-af4f-1d1fd453ca5c","type":"SaveTool"},{"id":"9b45284d-c7d3-4e65-b8dc-6579027d2eb1","type":"ResetTool"},{"id":"c7c53a4d-1953-4a03-ab4a-afd8bdbc6b38","type":"HelpTool"}]},"id":"0b23ba5f-44a1-45fe-ad79-c0667e16f658","type":"Toolbar"},{"attributes":{"callback":null,"end":23},"id":"f54c6a90-8853-4603-bdd8-f727a673a46e","type":"Range1d"},{"attributes":{"child":{"id":"6caf3b85-9ed9-4f64-876e-f6c4f268118b","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"83b60683-ed3a-45f3-992a-c34b73933470","type":"Panel"},{"attributes":{"data_source":{"id":"7cf5e5b1-4e30-4a82-8122-e7a82f2bb71b","type":"ColumnDataSource"},"glyph":{"id":"eb04451f-e0ca-4203-b043-ceff6744963b","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"1f9d604d-4b7d-40d0-8fb3-21d6e63624d7","type":"GlyphRenderer"},{"attributes":{"color_mapper":{"id":"4a3226ea-3b12-4bb6-8a60-fce74f4b7cc4","type":"LinearColorMapper"},"formatter":{"id":"b87d3ded-29a1-4e1a-aecb-99e9dd874370","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"6caf3b85-9ed9-4f64-876e-f6c4f268118b","subtype":"Chart","type":"Plot"},"ticker":{"id":"f0913292-08e1-4e23-8dce-8a6ced365dcf","type":"BasicTicker"}},"id":"85aeaddb-be1f-4640-b73b-1109c021cda3","type":"ColorBar"},{"attributes":{"child":{"id":"6de26ae1-9b29-4ed7-b048-e59fb735a1d0","subtype":"Chart","type":"Plot"},"title":"F9"},"id":"cab99d79-b9c5-4470-988c-1af8916f7992","type":"Panel"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"17c82118-1410-4f73-8187-94dbd80219fb","type":"PanTool"},{"id":"8041c741-d72e-48c2-8f8a-943fc5f01325","type":"WheelZoomTool"},{"id":"d1c12519-c233-4580-b6b0-d0d2ed23e237","type":"BoxZoomTool"},{"id":"2930a537-c900-4454-8b0a-3540958b0ffc","type":"SaveTool"},{"id":"24117dd7-87fe-40d1-baad-cb153f806aef","type":"ResetTool"},{"id":"5a6de149-c360-4cd4-a0e3-22fa92200355","type":"HelpTool"}]},"id":"ee8ebee7-9eb6-4ff8-a85b-2d63fda2e547","type":"Toolbar"},{"attributes":{"plot":{"id":"6de26ae1-9b29-4ed7-b048-e59fb735a1d0","subtype":"Chart","type":"Plot"}},"id":"24117dd7-87fe-40d1-baad-cb153f806aef","type":"ResetTool"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"2794db55-1d3a-4dcc-bbcf-1c12f8aa6fb4","type":"Title"},{"attributes":{"plot":{"id":"6de26ae1-9b29-4ed7-b048-e59fb735a1d0","subtype":"Chart","type":"Plot"}},"id":"2930a537-c900-4454-8b0a-3540958b0ffc","type":"SaveTool"},{"attributes":{"plot":{"id":"6caf3b85-9ed9-4f64-876e-f6c4f268118b","subtype":"Chart","type":"Plot"}},"id":"9b45284d-c7d3-4e65-b8dc-6579027d2eb1","type":"ResetTool"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"2017ccaa-ddce-4f6c-ae57-73c9d3a4bcf6","type":"LinearAxis"}],"left":[{"id":"afd2bd9f-313d-4368-b7d3-0feb473c455f","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"830afb24-4032-4d0b-abb1-71df6125401a","type":"BoxAnnotation"},{"id":"1f9d604d-4b7d-40d0-8fb3-21d6e63624d7","type":"GlyphRenderer"},{"id":"41a172ef-c597-46ce-90eb-8c09ec2bf69a","type":"GlyphRenderer"},{"id":"aae6da50-6332-46cc-a5f7-da1bccdb8586","type":"GlyphRenderer"},{"id":"2017ccaa-ddce-4f6c-ae57-73c9d3a4bcf6","type":"LinearAxis"},{"id":"afd2bd9f-313d-4368-b7d3-0feb473c455f","type":"CategoricalAxis"},{"id":"5093846d-a614-42b2-b47a-c67f3939ef18","type":"ColorBar"}],"right":[{"id":"5093846d-a614-42b2-b47a-c67f3939ef18","type":"ColorBar"}],"title":{"id":"373f0898-4e80-4c15-8d54-b800be97e0ea","type":"Title"},"tool_events":{"id":"59fa6ddc-90df-4e24-9e72-25b4d804fee9","type":"ToolEvents"},"toolbar":{"id":"ee8ebee7-9eb6-4ff8-a85b-2d63fda2e547","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"61295ab4-2cdc-4456-96fe-b479b841bf7b","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"8a1043d6-64a5-4f85-8b79-e948e064ee8e","type":"FactorRange"}},"id":"6de26ae1-9b29-4ed7-b048-e59fb735a1d0","subtype":"Chart","type":"Plot"},{"attributes":{},"id":"ca6137f3-b7bb-4b3a-b436-54e4da621ef0","type":"CategoricalTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"830afb24-4032-4d0b-abb1-71df6125401a","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"6caf3b85-9ed9-4f64-876e-f6c4f268118b","subtype":"Chart","type":"Plot"}},"id":"b0f29466-07e4-4e26-af4f-1d1fd453ca5c","type":"SaveTool"},{"attributes":{"data_source":{"id":"bb039f1b-fb5e-4d58-b0ab-058966cfc62d","type":"ColumnDataSource"},"glyph":{"id":"6fc41e19-9d3d-425f-a8f8-19153f50bf08","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"9208be76-ba9a-4ab7-97ee-20b2411b69a3","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[2.3333333333333335,0.0],"x":[13,13],"y":["Tuesday","Thursday"]}},"id":"1ea535cf-4d54-44cb-be1e-e1f97efde8c1","type":"ColumnDataSource"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"4aed939c-50bc-4cc2-ad13-c4792d5b246d","type":"LinearColorMapper"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"4a3226ea-3b12-4bb6-8a60-fce74f4b7cc4","type":"LinearColorMapper"},{"attributes":{},"id":"0d296047-9941-4018-8c98-b768a399b2df","type":"CategoricalTickFormatter"},{"attributes":{},"id":"fe45a3ed-8a98-4b5f-9a3f-871bebc0d075","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Frontier Airlines "},"id":"373f0898-4e80-4c15-8d54-b800be97e0ea","type":"Title"},{"attributes":{},"id":"c2e70e53-5b61-4951-93a3-b803a4fdfb4c","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[2.3333333333333335,0.0],"x":[13,13],"y":["Tuesday","Thursday"]}},"id":"ef1f0a66-4dc4-4307-a6f0-dcb811616893","type":"ColumnDataSource"},{"attributes":{"color_mapper":{"id":"4aed939c-50bc-4cc2-ad13-c4792d5b246d","type":"LinearColorMapper"},"formatter":{"id":"db76dcf5-e504-4f9b-94ad-a6796a333d4e","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"6de26ae1-9b29-4ed7-b048-e59fb735a1d0","subtype":"Chart","type":"Plot"},"ticker":{"id":"cef7cb59-4422-4bbd-8264-a10cabd0c009","type":"BasicTicker"}},"id":"5093846d-a614-42b2-b47a-c67f3939ef18","type":"ColorBar"},{"attributes":{"callback":null,"factors":["Tuesday","Thursday","Sunday","Monday","Wednesday","Friday","Saturday"]},"id":"8a1043d6-64a5-4f85-8b79-e948e064ee8e","type":"FactorRange"},{"attributes":{},"id":"2dbfca15-b850-4639-a58d-14a0075aa08b","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[4.0,4.545454545454546],"x":[12,12],"y":["Tuesday","Thursday"]}},"id":"16a86eb8-2bb1-4da7-bd45-4b6562d9e068","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0,30.0],"x":[12,13],"y":["Sunday","Sunday"]}},"id":"7cf5e5b1-4e30-4a82-8122-e7a82f2bb71b","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0,30.0],"x":[12,13],"y":["Sunday","Sunday"]}},"id":"bb039f1b-fb5e-4d58-b0ab-058966cfc62d","type":"ColumnDataSource"},{"attributes":{},"id":"34be33a1-bc56-4b2b-b337-6d7cbd01e8b4","type":"BasicTicker"},{"attributes":{"plot":{"id":"6caf3b85-9ed9-4f64-876e-f6c4f268118b","subtype":"Chart","type":"Plot"}},"id":"c7c53a4d-1953-4a03-ab4a-afd8bdbc6b38","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b0e11802-abdb-409a-9e65-344892fa2c46","type":"BoxAnnotation"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"f21f50d8-0196-4443-8850-29f70bf17dd9","type":"BasicTickFormatter"},"plot":{"id":"6caf3b85-9ed9-4f64-876e-f6c4f268118b","subtype":"Chart","type":"Plot"},"ticker":{"id":"c2e70e53-5b61-4951-93a3-b803a4fdfb4c","type":"BasicTicker"}},"id":"dc3d920d-69a5-45b4-bc62-77a188bd4969","type":"LinearAxis"},{"attributes":{"plot":{"id":"6de26ae1-9b29-4ed7-b048-e59fb735a1d0","subtype":"Chart","type":"Plot"}},"id":"8041c741-d72e-48c2-8f8a-943fc5f01325","type":"WheelZoomTool"},{"attributes":{},"id":"ee90c9d7-ceaf-43c1-9851-e3980bb601cd","type":"CategoricalTicker"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"ca6137f3-b7bb-4b3a-b436-54e4da621ef0","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"6caf3b85-9ed9-4f64-876e-f6c4f268118b","subtype":"Chart","type":"Plot"},"ticker":{"id":"c3b55379-c83a-4049-b4be-5f734e14a23b","type":"CategoricalTicker"}},"id":"306ce75a-9b0a-44ca-96a8-b817a861d00d","type":"CategoricalAxis"},{"attributes":{},"id":"db76dcf5-e504-4f9b-94ad-a6796a333d4e","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"fe45a3ed-8a98-4b5f-9a3f-871bebc0d075","type":"BasicTickFormatter"},"plot":{"id":"6de26ae1-9b29-4ed7-b048-e59fb735a1d0","subtype":"Chart","type":"Plot"},"ticker":{"id":"34be33a1-bc56-4b2b-b337-6d7cbd01e8b4","type":"BasicTicker"}},"id":"2017ccaa-ddce-4f6c-ae57-73c9d3a4bcf6","type":"LinearAxis"},{"attributes":{"callback":null,"end":23},"id":"61295ab4-2cdc-4456-96fe-b479b841bf7b","type":"Range1d"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"164d0930-7c21-4af9-98e2-4813ddb0e7fc","type":"Rect"},{"attributes":{},"id":"f0913292-08e1-4e23-8dce-8a6ced365dcf","type":"BasicTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"89f2a4bd-235e-4181-90d9-7b6debdf3cd0","type":"Rect"},{"attributes":{},"id":"c3b55379-c83a-4049-b4be-5f734e14a23b","type":"CategoricalTicker"},{"attributes":{"plot":{"id":"6caf3b85-9ed9-4f64-876e-f6c4f268118b","subtype":"Chart","type":"Plot"}},"id":"6e26353f-e8d5-49a4-ab4a-11e1ff7fa652","type":"WheelZoomTool"},{"attributes":{"callback":null,"tabs":[{"id":"83b60683-ed3a-45f3-992a-c34b73933470","type":"Panel"},{"id":"cab99d79-b9c5-4470-988c-1af8916f7992","type":"Panel"}]},"id":"41214fb4-f9f2-46c3-8b50-7f6ea3cae8da","type":"Tabs"},{"attributes":{"overlay":{"id":"830afb24-4032-4d0b-abb1-71df6125401a","type":"BoxAnnotation"},"plot":{"id":"6de26ae1-9b29-4ed7-b048-e59fb735a1d0","subtype":"Chart","type":"Plot"}},"id":"d1c12519-c233-4580-b6b0-d0d2ed23e237","type":"BoxZoomTool"},{"attributes":{},"id":"f21f50d8-0196-4443-8850-29f70bf17dd9","type":"BasicTickFormatter"},{"attributes":{},"id":"cef7cb59-4422-4bbd-8264-a10cabd0c009","type":"BasicTicker"},{"attributes":{"callback":null,"factors":["Tuesday","Thursday","Sunday","Monday","Wednesday","Friday","Saturday"]},"id":"dd74764d-0a92-48c3-bbeb-cacd82579fc5","type":"FactorRange"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"6fc41e19-9d3d-425f-a8f8-19153f50bf08","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"eb04451f-e0ca-4203-b043-ceff6744963b","type":"Rect"},{"attributes":{"overlay":{"id":"b0e11802-abdb-409a-9e65-344892fa2c46","type":"BoxAnnotation"},"plot":{"id":"6caf3b85-9ed9-4f64-876e-f6c4f268118b","subtype":"Chart","type":"Plot"}},"id":"b69c3ecb-831a-4f2b-b883-5e093e6347e5","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"6caf3b85-9ed9-4f64-876e-f6c4f268118b","subtype":"Chart","type":"Plot"}},"id":"22ec5b87-7670-4cf3-afce-dd3640db947d","type":"PanTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"c028d632-7486-47ae-9d33-882dabedfe48","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[4.0,4.545454545454546],"x":[12,12],"y":["Tuesday","Thursday"]}},"id":"e815b4c8-9348-4cf1-b6d7-2e7e3331e16c","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"1ea535cf-4d54-44cb-be1e-e1f97efde8c1","type":"ColumnDataSource"},"glyph":{"id":"c028d632-7486-47ae-9d33-882dabedfe48","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e01397bb-a532-4ef3-9e15-849360c2c90d","type":"GlyphRenderer"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"0d296047-9941-4018-8c98-b768a399b2df","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"6de26ae1-9b29-4ed7-b048-e59fb735a1d0","subtype":"Chart","type":"Plot"},"ticker":{"id":"ee90c9d7-ceaf-43c1-9851-e3980bb601cd","type":"CategoricalTicker"}},"id":"afd2bd9f-313d-4368-b7d3-0feb473c455f","type":"CategoricalAxis"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"dc3d920d-69a5-45b4-bc62-77a188bd4969","type":"LinearAxis"}],"left":[{"id":"306ce75a-9b0a-44ca-96a8-b817a861d00d","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"b0e11802-abdb-409a-9e65-344892fa2c46","type":"BoxAnnotation"},{"id":"9208be76-ba9a-4ab7-97ee-20b2411b69a3","type":"GlyphRenderer"},{"id":"1bb2dd38-ad63-4675-9ab8-b53ab578d3d5","type":"GlyphRenderer"},{"id":"e01397bb-a532-4ef3-9e15-849360c2c90d","type":"GlyphRenderer"},{"id":"dc3d920d-69a5-45b4-bc62-77a188bd4969","type":"LinearAxis"},{"id":"306ce75a-9b0a-44ca-96a8-b817a861d00d","type":"CategoricalAxis"},{"id":"85aeaddb-be1f-4640-b73b-1109c021cda3","type":"ColorBar"}],"right":[{"id":"85aeaddb-be1f-4640-b73b-1109c021cda3","type":"ColorBar"}],"title":{"id":"2794db55-1d3a-4dcc-bbcf-1c12f8aa6fb4","type":"Title"},"tool_events":{"id":"2dbfca15-b850-4639-a58d-14a0075aa08b","type":"ToolEvents"},"toolbar":{"id":"0b23ba5f-44a1-45fe-ad79-c0667e16f658","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"f54c6a90-8853-4603-bdd8-f727a673a46e","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"dd74764d-0a92-48c3-bbeb-cacd82579fc5","type":"FactorRange"}},"id":"6caf3b85-9ed9-4f64-876e-f6c4f268118b","subtype":"Chart","type":"Plot"},{"attributes":{},"id":"b87d3ded-29a1-4e1a-aecb-99e9dd874370","type":"BasicTickFormatter"}],"root_ids":["41214fb4-f9f2-46c3-8b50-7f6ea3cae8da"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"e94c5899-d0ed-4426-b65c-e98de7216f60","elementid":"2ddcff6c-b535-4c67-bc87-33f4796e5c8b","modelid":"41214fb4-f9f2-46c3-8b50-7f6ea3cae8da"}];
                  
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