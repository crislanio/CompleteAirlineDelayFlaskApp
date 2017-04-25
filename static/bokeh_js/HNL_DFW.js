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
      };var element = document.getElementById("87dc4659-4672-4b08-8500-0abf715976ac");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '87dc4659-4672-4b08-8500-0abf715976ac' but no matching script tag was found. ")
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
                  var docs_json = {"f9b1123c-904f-465d-84ac-ca1c3115f314":{"roots":{"references":[{"attributes":{"plot":{"id":"97cc7326-5bb9-4078-ba37-6d244dd5c2d4","subtype":"Chart","type":"Plot"}},"id":"6e9b5853-4e63-4043-882f-a351eb33f828","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9130de1c-80bb-4257-9b09-a71aa9820e86","type":"BoxAnnotation"},{"attributes":{"callback":null,"end":23},"id":"946ad2df-bb0e-4ef9-990b-94bb21a5816a","type":"Range1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1306f7cf-ce07-4583-b6fe-e9c1ba2ad324","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[0.08, 3.4]","[0.08, 3.4]","[0.08, 3.4]"],"chart_index":[{"POS_ARR_DELAY":"[0.08, 3.4]"},{"POS_ARR_DELAY":"[0.08, 3.4]"},{"POS_ARR_DELAY":"[0.08, 3.4]"}],"values":[3.2777777777777777,0.1111111111111111,1.5789473684210527],"x":[16,21,21],"y":["Monday","Wednesday","Friday"]}},"id":"f33757a0-707e-4357-9992-55517625867a","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"7b98349a-cd2f-4dc2-8740-948e207edb00","type":"Title"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[0.08, 3.4]","[0.08, 3.4]","[0.08, 3.4]"],"chart_index":[{"POS_ARR_DELAY":"[0.08, 3.4]"},{"POS_ARR_DELAY":"[0.08, 3.4]"},{"POS_ARR_DELAY":"[0.08, 3.4]"}],"values":[3.2777777777777777,0.1111111111111111,1.5789473684210527],"x":[16,21,21],"y":["Monday","Wednesday","Friday"]}},"id":"04acd071-6f2a-4cf8-9e8a-2de53b14ebcf","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"6c7176df-bdbc-4fa7-b2ce-af6351d167a3","type":"Rect"},{"attributes":{"overlay":{"id":"1306f7cf-ce07-4583-b6fe-e9c1ba2ad324","type":"BoxAnnotation"},"plot":{"id":"97cc7326-5bb9-4078-ba37-6d244dd5c2d4","subtype":"Chart","type":"Plot"}},"id":"267f76dc-edf5-403e-aad9-557cf2c50b2d","type":"BoxZoomTool"},{"attributes":{"child":{"id":"db48eb54-cd83-4d02-8250-54e47d59e28a","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"a927e4f1-ffba-46bd-bab9-b26e1016ea59","type":"Panel"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.4, 16.7]","(13.4, 16.7]","(13.4, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.4, 16.7]"},{"POS_ARR_DELAY":"(13.4, 16.7]"},{"POS_ARR_DELAY":"(13.4, 16.7]"}],"values":[14.88679245283019,14.35135135135135,15.804878048780488],"x":[20,16,18],"y":["Monday","Wednesday","Wednesday"]}},"id":"13e2a79a-70c8-4b4c-8291-565b1e4e166d","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"d70064d0-4574-48d0-ba3f-6d0526cab236","type":"ColumnDataSource"},"glyph":{"id":"55c18a12-b940-4917-9dbc-14cab7dea8a9","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c6898034-9f6c-44fa-acd5-b55209c0ba97","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"04c1bf2a-5496-40b0-809d-c06835f41c38","type":"ColumnDataSource"},"glyph":{"id":"abdbee79-22ce-4790-b90e-329ba3b1e5c0","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c22aae4c-2469-42b6-a095-91fce7a2c1dd","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"04acd071-6f2a-4cf8-9e8a-2de53b14ebcf","type":"ColumnDataSource"},"glyph":{"id":"36de173f-a844-45ac-b696-3d6c3e8aa3b8","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e26dce73-685b-4112-87c8-8388b7863f74","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fff7ec"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fff7ec"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"5846e7e5-0b2f-4049-8354-f1276778b2d9","type":"Rect"},{"attributes":{"color_mapper":{"id":"f789af90-8f15-492e-8380-9babd6d766a4","type":"LinearColorMapper"},"formatter":{"id":"d2edfcf7-618a-43df-b324-73a22e53baec","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"db48eb54-cd83-4d02-8250-54e47d59e28a","subtype":"Chart","type":"Plot"},"ticker":{"id":"a40a76a8-1063-446f-9291-6208791c0cbf","type":"BasicTicker"}},"id":"536343f0-2de7-4153-94e9-c3bf2c5354af","type":"ColorBar"},{"attributes":{},"id":"07247cd7-4c5d-4ee4-87bb-729620be8b15","type":"ToolEvents"},{"attributes":{"plot":{"id":"db48eb54-cd83-4d02-8250-54e47d59e28a","subtype":"Chart","type":"Plot"}},"id":"6c56a5d0-8639-4612-9761-db5c7a5c7003","type":"SaveTool"},{"attributes":{"plot":{"id":"97cc7326-5bb9-4078-ba37-6d244dd5c2d4","subtype":"Chart","type":"Plot"}},"id":"3c3327bc-7c52-4103-8c9e-5199565f6c76","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.4, 6.8]","(3.4, 6.8]","(3.4, 6.8]","(3.4, 6.8]","(3.4, 6.8]","(3.4, 6.8]","(3.4, 6.8]","(3.4, 6.8]","(3.4, 6.8]","(3.4, 6.8]","(3.4, 6.8]"],"chart_index":[{"POS_ARR_DELAY":"(3.4, 6.8]"},{"POS_ARR_DELAY":"(3.4, 6.8]"},{"POS_ARR_DELAY":"(3.4, 6.8]"},{"POS_ARR_DELAY":"(3.4, 6.8]"},{"POS_ARR_DELAY":"(3.4, 6.8]"},{"POS_ARR_DELAY":"(3.4, 6.8]"},{"POS_ARR_DELAY":"(3.4, 6.8]"},{"POS_ARR_DELAY":"(3.4, 6.8]"},{"POS_ARR_DELAY":"(3.4, 6.8]"},{"POS_ARR_DELAY":"(3.4, 6.8]"},{"POS_ARR_DELAY":"(3.4, 6.8]"}],"values":[4.397590361445783,5.166666666666667,4.211538461538462,6.102564102564102,6.648648648648648,4.240963855421687,3.736842105263158,4.054054054054054,6.25,5.513513513513513,4.166666666666667],"x":[17,21,20,19,16,17,21,16,16,16,21],"y":["Monday","Monday","Tuesday","Wednesday","Thursday","Thursday","Thursday","Friday","Saturday","Sunday","Sunday"]}},"id":"04c1bf2a-5496-40b0-809d-c06835f41c38","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"f33757a0-707e-4357-9992-55517625867a","type":"ColumnDataSource"},"glyph":{"id":"5846e7e5-0b2f-4049-8354-f1276778b2d9","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2d799d2d-cc2d-4556-ba78-d420fdc0a1c1","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20.04]","(16.7, 20.04]","(16.7, 20.04]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20.04]"},{"POS_ARR_DELAY":"(16.7, 20.04]"},{"POS_ARR_DELAY":"(16.7, 20.04]"}],"values":[18.072289156626507,18.42105263157895,18.72222222222222],"x":[18,22,20],"y":["Saturday","Saturday","Sunday"]}},"id":"a034299b-9c89-4b37-ab3c-8c34271b7cd6","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"65e2abaf-1f9a-4bbd-a9a2-d98415659216","type":"Rect"},{"attributes":{},"id":"c28460cd-e1ef-4ac4-8a39-5ad4713cba49","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10.07, 13.4]","(10.07, 13.4]","(10.07, 13.4]","(10.07, 13.4]","(10.07, 13.4]"],"chart_index":[{"POS_ARR_DELAY":"(10.07, 13.4]"},{"POS_ARR_DELAY":"(10.07, 13.4]"},{"POS_ARR_DELAY":"(10.07, 13.4]"},{"POS_ARR_DELAY":"(10.07, 13.4]"},{"POS_ARR_DELAY":"(10.07, 13.4]"}],"values":[11.804878048780488,12.444444444444445,12.705882352941176,12.058823529411764,13.153846153846153],"x":[18,21,20,20,17],"y":["Monday","Tuesday","Thursday","Friday","Saturday"]}},"id":"7c5404f1-43cc-47e3-96d3-abffe5191fb5","type":"ColumnDataSource"},{"attributes":{},"id":"2987b72c-3337-4fac-b956-5c5ff82061f5","type":"CategoricalTicker"},{"attributes":{"plot":{"id":"97cc7326-5bb9-4078-ba37-6d244dd5c2d4","subtype":"Chart","type":"Plot"}},"id":"7a8b8b50-0ec6-45de-9df1-f96f7c1d96bf","type":"HelpTool"},{"attributes":{"color_mapper":{"id":"243f4703-e20f-43ad-bd0d-9944c1aa9201","type":"LinearColorMapper"},"formatter":{"id":"bc077f9a-42f7-4c33-87ae-9fc7873b54c6","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"97cc7326-5bb9-4078-ba37-6d244dd5c2d4","subtype":"Chart","type":"Plot"},"ticker":{"id":"88efc0f1-616b-4841-86b4-0bdfbd0c9889","type":"BasicTicker"}},"id":"9c53207b-61fd-4ee4-9430-a9115f5ddbeb","type":"ColorBar"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"1bb07b57-2162-4c4d-9392-5914f8c5e2bd","type":"PanTool"},{"id":"3c3327bc-7c52-4103-8c9e-5199565f6c76","type":"WheelZoomTool"},{"id":"267f76dc-edf5-403e-aad9-557cf2c50b2d","type":"BoxZoomTool"},{"id":"6e9b5853-4e63-4043-882f-a351eb33f828","type":"SaveTool"},{"id":"2fd28096-10b1-4e8b-82ca-190c5ff00e66","type":"ResetTool"},{"id":"7a8b8b50-0ec6-45de-9df1-f96f7c1d96bf","type":"HelpTool"}]},"id":"194246cf-7afc-4cf9-b0db-c67f9045ffbd","type":"Toolbar"},{"attributes":{},"id":"67ef516f-b6ac-421f-9ef5-328275861387","type":"CategoricalTicker"},{"attributes":{"data_source":{"id":"0dc1ab28-b056-4c5a-9a89-1b3f486591a1","type":"ColumnDataSource"},"glyph":{"id":"8a9877a2-1bfc-4465-8c13-87cdf4bca7ca","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"7271fdf5-e5f5-4be2-91af-93c56d3e6de9","type":"GlyphRenderer"},{"attributes":{},"id":"88efc0f1-616b-4841-86b4-0bdfbd0c9889","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[29.923076923076923,30.0,28.794871794871796,30.0,30.0,30.0,28.285714285714285,27.195121951219512,30.0],"x":[19,20,19,18,19,20,21,18,19],"y":["Monday","Wednesday","Thursday","Friday","Friday","Saturday","Saturday","Sunday","Sunday"]}},"id":"203787c6-635a-48aa-82bd-607943a6ac94","type":"ColumnDataSource"},{"attributes":{},"id":"bc077f9a-42f7-4c33-87ae-9fc7873b54c6","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"4e655505-ee79-4a78-8991-234ce891e04b","type":"ColumnDataSource"},"glyph":{"id":"cac14312-7574-474d-9301-07f3a2aff16f","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"060020d3-493e-42bd-9e5d-aeb61834c6f6","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"8a9877a2-1bfc-4465-8c13-87cdf4bca7ca","type":"Rect"},{"attributes":{"callback":null,"tabs":[{"id":"a927e4f1-ffba-46bd-bab9-b26e1016ea59","type":"Panel"},{"id":"5b1b42ef-f0dc-4843-9e49-127a81cd0d34","type":"Panel"}]},"id":"20957376-a1c9-4ad3-9bc3-931c1f98a8df","type":"Tabs"},{"attributes":{"data_source":{"id":"a034299b-9c89-4b37-ab3c-8c34271b7cd6","type":"ColumnDataSource"},"glyph":{"id":"97890734-a335-4620-bb28-7fa1c46feabe","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"b8b18cc9-daf0-4e9b-b64a-7bb22adf556b","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"d592f38b-5dc2-4bc3-aa7f-beb22d397228","type":"ColumnDataSource"},"glyph":{"id":"47b3dd6c-d82e-4d90-bc73-dc3ea1b4caa8","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ed872a6a-47bd-4241-8ef6-c123036ffe88","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"97cc7326-5bb9-4078-ba37-6d244dd5c2d4","subtype":"Chart","type":"Plot"}},"id":"2fd28096-10b1-4e8b-82ca-190c5ff00e66","type":"ResetTool"},{"attributes":{"data_source":{"id":"d8cc9366-bb74-4630-96f2-12cd45eedcfb","type":"ColumnDataSource"},"glyph":{"id":"a38a3f59-ad37-4fc6-9d7c-a92e923ca298","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"df1c21e5-fffb-4f75-9a91-be7dfcc973ee","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"706962c5-b867-48e9-a643-17013c0c7284","type":"Rect"},{"attributes":{"plot":{"id":"db48eb54-cd83-4d02-8250-54e47d59e28a","subtype":"Chart","type":"Plot"}},"id":"7b48d383-b189-40b3-93cc-d522cd73b365","type":"HelpTool"},{"attributes":{"callback":null,"end":23},"id":"bdf8dd4b-6c7d-488e-8951-fc05f6b16bc4","type":"Range1d"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10.07, 13.4]","(10.07, 13.4]","(10.07, 13.4]","(10.07, 13.4]","(10.07, 13.4]"],"chart_index":[{"POS_ARR_DELAY":"(10.07, 13.4]"},{"POS_ARR_DELAY":"(10.07, 13.4]"},{"POS_ARR_DELAY":"(10.07, 13.4]"},{"POS_ARR_DELAY":"(10.07, 13.4]"},{"POS_ARR_DELAY":"(10.07, 13.4]"}],"values":[11.804878048780488,12.444444444444445,12.705882352941176,12.058823529411764,13.153846153846153],"x":[18,21,20,20,17],"y":["Monday","Tuesday","Thursday","Friday","Saturday"]}},"id":"4e655505-ee79-4a78-8991-234ce891e04b","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"d7c401c8-097e-4350-9509-d8d361b1322e","type":"ColumnDataSource"},"glyph":{"id":"d666d4b1-75bc-4408-81a9-45a92d86a605","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"24a804e6-b4dd-4214-a9d9-b66800e204ea","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.4, 16.7]","(13.4, 16.7]","(13.4, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.4, 16.7]"},{"POS_ARR_DELAY":"(13.4, 16.7]"},{"POS_ARR_DELAY":"(13.4, 16.7]"}],"values":[14.88679245283019,14.35135135135135,15.804878048780488],"x":[20,16,18],"y":["Monday","Wednesday","Wednesday"]}},"id":"c293624b-7824-4d14-b973-aa8c9f646819","type":"ColumnDataSource"},{"attributes":{},"id":"3c36473e-aed2-4ed1-ba33-5d8c2b96cd8f","type":"BasicTicker"},{"attributes":{"data_source":{"id":"58ad376d-24e6-4e02-9a95-1ee202331be9","type":"ColumnDataSource"},"glyph":{"id":"6c7176df-bdbc-4fa7-b2ce-af6351d167a3","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f27b05fa-be63-4d63-8545-cc52a891643a","type":"GlyphRenderer"},{"attributes":{},"id":"b18906b0-f988-422f-9f32-2f02ca4da5a1","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20.04, 23.4]","(20.04, 23.4]","(20.04, 23.4]"],"chart_index":[{"POS_ARR_DELAY":"(20.04, 23.4]"},{"POS_ARR_DELAY":"(20.04, 23.4]"},{"POS_ARR_DELAY":"(20.04, 23.4]"}],"values":[21.662650602409638,20.5609756097561,22.21153846153846],"x":[17,18,19],"y":["Tuesday","Thursday","Saturday"]}},"id":"3a160685-2c85-4790-8802-6be74d7f216c","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"7c5404f1-43cc-47e3-96d3-abffe5191fb5","type":"ColumnDataSource"},"glyph":{"id":"054e6f08-8668-44d2-b335-b524de01c2dd","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"aaa7925d-8ed4-4da8-bd87-2f37113fa3cf","type":"GlyphRenderer"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"94dff139-db4e-4f36-ac0c-f9fad22e0c15","type":"BasicTickFormatter"},"plot":{"id":"97cc7326-5bb9-4078-ba37-6d244dd5c2d4","subtype":"Chart","type":"Plot"},"ticker":{"id":"3c36473e-aed2-4ed1-ba33-5d8c2b96cd8f","type":"BasicTicker"}},"id":"0f868ce8-dae9-4f4d-b6b3-3ace7f708c6c","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.4, 6.8]","(3.4, 6.8]","(3.4, 6.8]","(3.4, 6.8]","(3.4, 6.8]","(3.4, 6.8]","(3.4, 6.8]","(3.4, 6.8]","(3.4, 6.8]","(3.4, 6.8]","(3.4, 6.8]"],"chart_index":[{"POS_ARR_DELAY":"(3.4, 6.8]"},{"POS_ARR_DELAY":"(3.4, 6.8]"},{"POS_ARR_DELAY":"(3.4, 6.8]"},{"POS_ARR_DELAY":"(3.4, 6.8]"},{"POS_ARR_DELAY":"(3.4, 6.8]"},{"POS_ARR_DELAY":"(3.4, 6.8]"},{"POS_ARR_DELAY":"(3.4, 6.8]"},{"POS_ARR_DELAY":"(3.4, 6.8]"},{"POS_ARR_DELAY":"(3.4, 6.8]"},{"POS_ARR_DELAY":"(3.4, 6.8]"},{"POS_ARR_DELAY":"(3.4, 6.8]"}],"values":[4.397590361445783,5.166666666666667,4.211538461538462,6.102564102564102,6.648648648648648,4.240963855421687,3.736842105263158,4.054054054054054,6.25,5.513513513513513,4.166666666666667],"x":[17,21,20,19,16,17,21,16,16,16,21],"y":["Monday","Monday","Tuesday","Wednesday","Thursday","Thursday","Thursday","Friday","Saturday","Sunday","Sunday"]}},"id":"9e8507e8-76cf-47e8-b888-9d8dc4385bca","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"db48eb54-cd83-4d02-8250-54e47d59e28a","subtype":"Chart","type":"Plot"}},"id":"3fbb1727-3231-400a-bbc2-d46982ffbb12","type":"WheelZoomTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#fff7ec"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fff7ec"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"36de173f-a844-45ac-b696-3d6c3e8aa3b8","type":"Rect"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"c28460cd-e1ef-4ac4-8a39-5ad4713cba49","type":"BasicTickFormatter"},"plot":{"id":"db48eb54-cd83-4d02-8250-54e47d59e28a","subtype":"Chart","type":"Plot"},"ticker":{"id":"2a3ee7ba-e512-4837-a265-ac5123490b89","type":"BasicTicker"}},"id":"81e574c2-1ed2-4207-a536-273eb7492a3f","type":"LinearAxis"},{"attributes":{},"id":"94dff139-db4e-4f36-ac0c-f9fad22e0c15","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"9e8507e8-76cf-47e8-b888-9d8dc4385bca","type":"ColumnDataSource"},"glyph":{"id":"89c02111-c2a6-4042-bc48-48056f0de546","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"82d01dfa-9276-48d9-9574-f3deb4af723b","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(23.4, 26.7]"],"chart_index":[{"POS_ARR_DELAY":"(23.4, 26.7]"}],"values":[23.80246913580247],"x":[17],"y":["Sunday"]}},"id":"24540e0d-c2d3-4040-b564-d5d0b4bf87eb","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"cac14312-7574-474d-9301-07f3a2aff16f","type":"Rect"},{"attributes":{},"id":"c2d54c9d-3552-4ded-b98e-08ddc103b74d","type":"ToolEvents"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"d666d4b1-75bc-4408-81a9-45a92d86a605","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"054e6f08-8668-44d2-b335-b524de01c2dd","type":"Rect"},{"attributes":{"plot":{"id":"db48eb54-cd83-4d02-8250-54e47d59e28a","subtype":"Chart","type":"Plot"}},"id":"75dade76-f80d-42ad-ac1e-7c0a6f9daba6","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.8, 10.07]","(6.8, 10.07]","(6.8, 10.07]","(6.8, 10.07]","(6.8, 10.07]"],"chart_index":[{"POS_ARR_DELAY":"(6.8, 10.07]"},{"POS_ARR_DELAY":"(6.8, 10.07]"},{"POS_ARR_DELAY":"(6.8, 10.07]"},{"POS_ARR_DELAY":"(6.8, 10.07]"},{"POS_ARR_DELAY":"(6.8, 10.07]"}],"values":[8.783783783783784,9.78048780487805,9.512820512820513,9.444444444444445,9.0],"x":[16,18,19,17,17],"y":["Tuesday","Tuesday","Tuesday","Wednesday","Friday"]}},"id":"d70064d0-4574-48d0-ba3f-6d0526cab236","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"13e2a79a-70c8-4b4c-8291-565b1e4e166d","type":"ColumnDataSource"},"glyph":{"id":"a38eddbc-f56f-438f-a8ac-df6e4b2d5dde","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e80b67d6-e3a5-44ec-a3ef-5944e76037b6","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20.04]","(16.7, 20.04]","(16.7, 20.04]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20.04]"},{"POS_ARR_DELAY":"(16.7, 20.04]"},{"POS_ARR_DELAY":"(16.7, 20.04]"}],"values":[18.072289156626507,18.42105263157895,18.72222222222222],"x":[18,22,20],"y":["Saturday","Saturday","Sunday"]}},"id":"d8cc9366-bb74-4630-96f2-12cd45eedcfb","type":"ColumnDataSource"},{"attributes":{"child":{"id":"97cc7326-5bb9-4078-ba37-6d244dd5c2d4","subtype":"Chart","type":"Plot"},"title":"AA"},"id":"5b1b42ef-f0dc-4843-9e49-127a81cd0d34","type":"Panel"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20.04, 23.4]","(20.04, 23.4]","(20.04, 23.4]"],"chart_index":[{"POS_ARR_DELAY":"(20.04, 23.4]"},{"POS_ARR_DELAY":"(20.04, 23.4]"},{"POS_ARR_DELAY":"(20.04, 23.4]"}],"values":[21.662650602409638,20.5609756097561,22.21153846153846],"x":[17,18,19],"y":["Tuesday","Thursday","Saturday"]}},"id":"58ad376d-24e6-4e02-9a95-1ee202331be9","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"83693270-5074-4d08-82f5-368d2a3043a4","type":"PanTool"},{"id":"3fbb1727-3231-400a-bbc2-d46982ffbb12","type":"WheelZoomTool"},{"id":"9d2b0b41-3a34-476e-a2df-f91accb2413e","type":"BoxZoomTool"},{"id":"6c56a5d0-8639-4612-9761-db5c7a5c7003","type":"SaveTool"},{"id":"75dade76-f80d-42ad-ac1e-7c0a6f9daba6","type":"ResetTool"},{"id":"7b48d383-b189-40b3-93cc-d522cd73b365","type":"HelpTool"}]},"id":"87617a16-31ba-44bb-b9d1-a0cbfbfc2463","type":"Toolbar"},{"attributes":{"data_source":{"id":"3a160685-2c85-4790-8802-6be74d7f216c","type":"ColumnDataSource"},"glyph":{"id":"65e2abaf-1f9a-4bbd-a9a2-d98415659216","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"876c07c7-9cd3-454a-ab61-349fdde5c8f3","type":"GlyphRenderer"},{"attributes":{},"id":"d2edfcf7-618a-43df-b324-73a22e53baec","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"American Airlines "},"id":"f9a7d3c5-5953-4789-8de7-efb176ae1875","type":"Title"},{"attributes":{"plot":{"id":"db48eb54-cd83-4d02-8250-54e47d59e28a","subtype":"Chart","type":"Plot"}},"id":"83693270-5074-4d08-82f5-368d2a3043a4","type":"PanTool"},{"attributes":{"data_source":{"id":"c293624b-7824-4d14-b973-aa8c9f646819","type":"ColumnDataSource"},"glyph":{"id":"45594f6d-d121-4509-a73f-32c0d4cd2bed","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"9f95b60f-596f-484f-a4e7-22ac14a433d6","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"a38eddbc-f56f-438f-a8ac-df6e4b2d5dde","type":"Rect"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"243f4703-e20f-43ad-bd0d-9944c1aa9201","type":"LinearColorMapper"},{"attributes":{},"id":"2a3ee7ba-e512-4837-a265-ac5123490b89","type":"BasicTicker"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"0f868ce8-dae9-4f4d-b6b3-3ace7f708c6c","type":"LinearAxis"}],"left":[{"id":"580a4153-c166-441e-97b8-43777d5cf486","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"1306f7cf-ce07-4583-b6fe-e9c1ba2ad324","type":"BoxAnnotation"},{"id":"7271fdf5-e5f5-4be2-91af-93c56d3e6de9","type":"GlyphRenderer"},{"id":"ed872a6a-47bd-4241-8ef6-c123036ffe88","type":"GlyphRenderer"},{"id":"876c07c7-9cd3-454a-ab61-349fdde5c8f3","type":"GlyphRenderer"},{"id":"b8b18cc9-daf0-4e9b-b64a-7bb22adf556b","type":"GlyphRenderer"},{"id":"e80b67d6-e3a5-44ec-a3ef-5944e76037b6","type":"GlyphRenderer"},{"id":"aaa7925d-8ed4-4da8-bd87-2f37113fa3cf","type":"GlyphRenderer"},{"id":"c6898034-9f6c-44fa-acd5-b55209c0ba97","type":"GlyphRenderer"},{"id":"c22aae4c-2469-42b6-a095-91fce7a2c1dd","type":"GlyphRenderer"},{"id":"2d799d2d-cc2d-4556-ba78-d420fdc0a1c1","type":"GlyphRenderer"},{"id":"0f868ce8-dae9-4f4d-b6b3-3ace7f708c6c","type":"LinearAxis"},{"id":"580a4153-c166-441e-97b8-43777d5cf486","type":"CategoricalAxis"},{"id":"9c53207b-61fd-4ee4-9430-a9115f5ddbeb","type":"ColorBar"}],"right":[{"id":"9c53207b-61fd-4ee4-9430-a9115f5ddbeb","type":"ColorBar"}],"title":{"id":"f9a7d3c5-5953-4789-8de7-efb176ae1875","type":"Title"},"tool_events":{"id":"07247cd7-4c5d-4ee4-87bb-729620be8b15","type":"ToolEvents"},"toolbar":{"id":"194246cf-7afc-4cf9-b0db-c67f9045ffbd","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"946ad2df-bb0e-4ef9-990b-94bb21a5816a","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"3dc46898-c0bb-4dd5-98c7-e941333af527","type":"FactorRange"}},"id":"97cc7326-5bb9-4078-ba37-6d244dd5c2d4","subtype":"Chart","type":"Plot"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"654f1dc0-5088-4f83-a1bd-774cdd833681","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"a38a3f59-ad37-4fc6-9d7c-a92e923ca298","type":"Rect"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"f15b0459-b00f-4fbd-bf9a-7aac9812656d","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"db48eb54-cd83-4d02-8250-54e47d59e28a","subtype":"Chart","type":"Plot"},"ticker":{"id":"67ef516f-b6ac-421f-9ef5-328275861387","type":"CategoricalTicker"}},"id":"d94a8315-043c-41e2-8ce6-04de0ad74d9f","type":"CategoricalAxis"},{"attributes":{"data_source":{"id":"24540e0d-c2d3-4040-b564-d5d0b4bf87eb","type":"ColumnDataSource"},"glyph":{"id":"654f1dc0-5088-4f83-a1bd-774cdd833681","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d5c4a059-4ac4-44f1-92d7-c53df3aa8c03","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(23.4, 26.7]"],"chart_index":[{"POS_ARR_DELAY":"(23.4, 26.7]"}],"values":[23.80246913580247],"x":[17],"y":["Sunday"]}},"id":"d592f38b-5dc2-4bc3-aa7f-beb22d397228","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"47b3dd6c-d82e-4d90-bc73-dc3ea1b4caa8","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fee8c8"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fee8c8"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"89c02111-c2a6-4042-bc48-48056f0de546","type":"Rect"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"22a26767-b002-4ace-acb8-37e5ca85851d","type":"FactorRange"},{"attributes":{"data_source":{"id":"203787c6-635a-48aa-82bd-607943a6ac94","type":"ColumnDataSource"},"glyph":{"id":"706962c5-b867-48e9-a643-17013c0c7284","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"af73a74b-30f3-4c5f-9132-d1dda4ceda0e","type":"GlyphRenderer"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"b18906b0-f988-422f-9f32-2f02ca4da5a1","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"97cc7326-5bb9-4078-ba37-6d244dd5c2d4","subtype":"Chart","type":"Plot"},"ticker":{"id":"2987b72c-3337-4fac-b956-5c5ff82061f5","type":"CategoricalTicker"}},"id":"580a4153-c166-441e-97b8-43777d5cf486","type":"CategoricalAxis"},{"attributes":{"dilate":true,"fill_color":{"value":"#fee8c8"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fee8c8"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"abdbee79-22ce-4790-b90e-329ba3b1e5c0","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"97890734-a335-4620-bb28-7fa1c46feabe","type":"Rect"},{"attributes":{},"id":"f15b0459-b00f-4fbd-bf9a-7aac9812656d","type":"CategoricalTickFormatter"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"81e574c2-1ed2-4207-a536-273eb7492a3f","type":"LinearAxis"}],"left":[{"id":"d94a8315-043c-41e2-8ce6-04de0ad74d9f","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"9130de1c-80bb-4257-9b09-a71aa9820e86","type":"BoxAnnotation"},{"id":"af73a74b-30f3-4c5f-9132-d1dda4ceda0e","type":"GlyphRenderer"},{"id":"d5c4a059-4ac4-44f1-92d7-c53df3aa8c03","type":"GlyphRenderer"},{"id":"f27b05fa-be63-4d63-8545-cc52a891643a","type":"GlyphRenderer"},{"id":"df1c21e5-fffb-4f75-9a91-be7dfcc973ee","type":"GlyphRenderer"},{"id":"9f95b60f-596f-484f-a4e7-22ac14a433d6","type":"GlyphRenderer"},{"id":"060020d3-493e-42bd-9e5d-aeb61834c6f6","type":"GlyphRenderer"},{"id":"24a804e6-b4dd-4214-a9d9-b66800e204ea","type":"GlyphRenderer"},{"id":"82d01dfa-9276-48d9-9574-f3deb4af723b","type":"GlyphRenderer"},{"id":"e26dce73-685b-4112-87c8-8388b7863f74","type":"GlyphRenderer"},{"id":"81e574c2-1ed2-4207-a536-273eb7492a3f","type":"LinearAxis"},{"id":"d94a8315-043c-41e2-8ce6-04de0ad74d9f","type":"CategoricalAxis"},{"id":"536343f0-2de7-4153-94e9-c3bf2c5354af","type":"ColorBar"}],"right":[{"id":"536343f0-2de7-4153-94e9-c3bf2c5354af","type":"ColorBar"}],"title":{"id":"7b98349a-cd2f-4dc2-8740-948e207edb00","type":"Title"},"tool_events":{"id":"c2d54c9d-3552-4ded-b98e-08ddc103b74d","type":"ToolEvents"},"toolbar":{"id":"87617a16-31ba-44bb-b9d1-a0cbfbfc2463","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"bdf8dd4b-6c7d-488e-8951-fc05f6b16bc4","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"22a26767-b002-4ace-acb8-37e5ca85851d","type":"FactorRange"}},"id":"db48eb54-cd83-4d02-8250-54e47d59e28a","subtype":"Chart","type":"Plot"},{"attributes":{"overlay":{"id":"9130de1c-80bb-4257-9b09-a71aa9820e86","type":"BoxAnnotation"},"plot":{"id":"db48eb54-cd83-4d02-8250-54e47d59e28a","subtype":"Chart","type":"Plot"}},"id":"9d2b0b41-3a34-476e-a2df-f91accb2413e","type":"BoxZoomTool"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"3dc46898-c0bb-4dd5-98c7-e941333af527","type":"FactorRange"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.8, 10.07]","(6.8, 10.07]","(6.8, 10.07]","(6.8, 10.07]","(6.8, 10.07]"],"chart_index":[{"POS_ARR_DELAY":"(6.8, 10.07]"},{"POS_ARR_DELAY":"(6.8, 10.07]"},{"POS_ARR_DELAY":"(6.8, 10.07]"},{"POS_ARR_DELAY":"(6.8, 10.07]"},{"POS_ARR_DELAY":"(6.8, 10.07]"}],"values":[8.783783783783784,9.78048780487805,9.512820512820513,9.444444444444445,9.0],"x":[16,18,19,17,17],"y":["Tuesday","Tuesday","Tuesday","Wednesday","Friday"]}},"id":"d7c401c8-097e-4350-9509-d8d361b1322e","type":"ColumnDataSource"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"f789af90-8f15-492e-8380-9babd6d766a4","type":"LinearColorMapper"},{"attributes":{},"id":"a40a76a8-1063-446f-9291-6208791c0cbf","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[29.923076923076923,30.0,28.794871794871796,30.0,30.0,30.0,28.285714285714285,27.195121951219512,30.0],"x":[19,20,19,18,19,20,21,18,19],"y":["Monday","Wednesday","Thursday","Friday","Friday","Saturday","Saturday","Sunday","Sunday"]}},"id":"0dc1ab28-b056-4c5a-9a89-1b3f486591a1","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"55c18a12-b940-4917-9dbc-14cab7dea8a9","type":"Rect"},{"attributes":{"plot":{"id":"97cc7326-5bb9-4078-ba37-6d244dd5c2d4","subtype":"Chart","type":"Plot"}},"id":"1bb07b57-2162-4c4d-9392-5914f8c5e2bd","type":"PanTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"45594f6d-d121-4509-a73f-32c0d4cd2bed","type":"Rect"}],"root_ids":["20957376-a1c9-4ad3-9bc3-931c1f98a8df"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"f9b1123c-904f-465d-84ac-ca1c3115f314","elementid":"87dc4659-4672-4b08-8500-0abf715976ac","modelid":"20957376-a1c9-4ad3-9bc3-931c1f98a8df"}];
                  
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