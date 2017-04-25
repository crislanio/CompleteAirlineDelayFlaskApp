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
      };var element = document.getElementById("d1d0cdce-1a9f-4207-9d92-638833e1740f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd1d0cdce-1a9f-4207-9d92-638833e1740f' but no matching script tag was found. ")
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
                  var docs_json = {"143241e8-47be-4466-acc5-5e0b4030c4a0":{"roots":{"references":[{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"28b32dfd-77c2-4cd0-ade4-1b715e150b40","type":"Rect"},{"attributes":{"callback":null,"tabs":[{"id":"3ec03b0c-4608-4211-be18-055c56b8a9d3","type":"Panel"},{"id":"d3ec2582-e15d-4a90-a034-83a044c2fde8","type":"Panel"}]},"id":"505307fd-de5f-4ce4-a5e9-a3fcad5c896a","type":"Tabs"},{"attributes":{"data_source":{"id":"e4d9ab80-debb-4137-b63c-1c4fe7196429","type":"ColumnDataSource"},"glyph":{"id":"1ae9e49b-134d-4906-8f92-1f1c7be7040e","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"3152468c-8d22-4352-b9d5-47a59e8388da","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"eaa898a1-1e62-4a27-8265-3f82148327db","type":"Rect"},{"attributes":{"plot":null,"text":"United Air Lines "},"id":"055872a7-c83d-492e-8881-ee9759b5877a","type":"Title"},{"attributes":{"color_mapper":{"id":"42766cf9-c3b9-4017-9188-86888c692066","type":"LinearColorMapper"},"formatter":{"id":"d653064b-35e5-4fc7-99d7-6c2b3582fa7f","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"882a0f19-5d84-4443-bd4a-99135e7c55b0","subtype":"Chart","type":"Plot"},"ticker":{"id":"39ab1bf3-dcf0-4aa6-a66a-f90176db7b1e","type":"BasicTicker"}},"id":"92533817-ee2f-4737-bf96-9c9f085f3f3f","type":"ColorBar"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"d8719410-c54f-4552-83e1-c5e87d7695de","type":"FactorRange"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"42766cf9-c3b9-4017-9188-86888c692066","type":"LinearColorMapper"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"6c059f7a-5675-4e24-b130-cfe8fa025a28","type":"Rect"},{"attributes":{},"id":"22f8203a-f133-4e57-b92d-2ab1480d3f3e","type":"ToolEvents"},{"attributes":{},"id":"21b661eb-ec5c-425d-9e05-58853d499342","type":"BasicTickFormatter"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"b5a45836-9d5c-45d8-a250-69461905bff8","type":"LinearAxis"}],"left":[{"id":"086f4df7-7c5d-4a86-8a05-2bd5f817eb29","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"368ace75-8f97-44d5-81bc-7f0c53e2ab17","type":"BoxAnnotation"},{"id":"15e4c7f5-6fa5-4af0-b915-296688cf1be4","type":"GlyphRenderer"},{"id":"454f98df-c5d5-41da-a021-c80673758e24","type":"GlyphRenderer"},{"id":"d3e02483-5545-4806-9df6-fd414482b7f7","type":"GlyphRenderer"},{"id":"1cbdcd0c-8982-40af-9432-34427c2bb8e7","type":"GlyphRenderer"},{"id":"cab612d9-01f6-4dfe-a9b1-9f84465896e6","type":"GlyphRenderer"},{"id":"870daf4c-bd4c-46ac-8f3a-b190767cd182","type":"GlyphRenderer"},{"id":"b5a45836-9d5c-45d8-a250-69461905bff8","type":"LinearAxis"},{"id":"086f4df7-7c5d-4a86-8a05-2bd5f817eb29","type":"CategoricalAxis"},{"id":"92533817-ee2f-4737-bf96-9c9f085f3f3f","type":"ColorBar"}],"right":[{"id":"92533817-ee2f-4737-bf96-9c9f085f3f3f","type":"ColorBar"}],"title":{"id":"055872a7-c83d-492e-8881-ee9759b5877a","type":"Title"},"tool_events":{"id":"22f8203a-f133-4e57-b92d-2ab1480d3f3e","type":"ToolEvents"},"toolbar":{"id":"a754c0a3-21af-46eb-9d44-d501ad56a777","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"9a7a7473-7769-464e-aa1d-f80735c4f3f1","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"2bcd6676-ea8f-4c43-b1ee-40a129f9ba3b","type":"FactorRange"}},"id":"882a0f19-5d84-4443-bd4a-99135e7c55b0","subtype":"Chart","type":"Plot"},{"attributes":{},"id":"a8cedd94-7598-46ee-96bb-e3d8b7fba099","type":"BasicTicker"},{"attributes":{"plot":{"id":"882a0f19-5d84-4443-bd4a-99135e7c55b0","subtype":"Chart","type":"Plot"}},"id":"7b258730-d38c-4f62-8ab5-ffe01b6fa6b0","type":"HelpTool"},{"attributes":{},"id":"892f43e0-afba-466f-9daf-060bc33ed8f5","type":"CategoricalTickFormatter"},{"attributes":{"data_source":{"id":"ce4c61f9-9b70-4716-a0df-28196ed916b8","type":"ColumnDataSource"},"glyph":{"id":"6c059f7a-5675-4e24-b130-cfe8fa025a28","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"1e2c74c7-b48f-47b9-9aa0-d6a0d51b5eb8","type":"GlyphRenderer"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"21b661eb-ec5c-425d-9e05-58853d499342","type":"BasicTickFormatter"},"plot":{"id":"882a0f19-5d84-4443-bd4a-99135e7c55b0","subtype":"Chart","type":"Plot"},"ticker":{"id":"23c85a91-2e94-42c0-9c07-aaceb5fd84e6","type":"BasicTicker"}},"id":"b5a45836-9d5c-45d8-a250-69461905bff8","type":"LinearAxis"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"e6fc6036-1ed4-4ef7-99b1-157a99091481","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"882a0f19-5d84-4443-bd4a-99135e7c55b0","subtype":"Chart","type":"Plot"},"ticker":{"id":"0db80053-2454-437a-bc9d-4bf77b2f9906","type":"CategoricalTicker"}},"id":"086f4df7-7c5d-4a86-8a05-2bd5f817eb29","type":"CategoricalAxis"},{"attributes":{"plot":{"id":"882a0f19-5d84-4443-bd4a-99135e7c55b0","subtype":"Chart","type":"Plot"}},"id":"212d7345-b958-4ef0-a913-8351ecf83751","type":"PanTool"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"b217e418-04ee-4f5a-aaa4-199deb197eac","type":"LinearAxis"}],"left":[{"id":"2344feed-16dc-416b-adbf-fed0aa4d50a3","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"8ab4357a-5ac4-494b-9d1f-dc3185d450aa","type":"BoxAnnotation"},{"id":"0fa1a144-ea92-4c3f-9b72-be4686b18eeb","type":"GlyphRenderer"},{"id":"3152468c-8d22-4352-b9d5-47a59e8388da","type":"GlyphRenderer"},{"id":"642713a9-2c01-4bc9-8a2e-eea14aafafda","type":"GlyphRenderer"},{"id":"d1a7bc7d-5262-4127-abc1-366b53f4d028","type":"GlyphRenderer"},{"id":"20cfe204-a6d6-4599-816e-8a56f1970968","type":"GlyphRenderer"},{"id":"1e2c74c7-b48f-47b9-9aa0-d6a0d51b5eb8","type":"GlyphRenderer"},{"id":"b217e418-04ee-4f5a-aaa4-199deb197eac","type":"LinearAxis"},{"id":"2344feed-16dc-416b-adbf-fed0aa4d50a3","type":"CategoricalAxis"},{"id":"1557ed66-3de7-4b73-93de-271b3c979621","type":"ColorBar"}],"right":[{"id":"1557ed66-3de7-4b73-93de-271b3c979621","type":"ColorBar"}],"title":{"id":"955734e4-9f3f-4c5f-b0da-984eb5d72a94","type":"Title"},"tool_events":{"id":"22656c75-1e6f-4fb8-bc2f-94d0997cd1bb","type":"ToolEvents"},"toolbar":{"id":"73d72147-eda6-4aaf-9050-a0e2b18cb54d","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"c91a4929-8882-4d30-8156-61d7716dd3b1","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"d8719410-c54f-4552-83e1-c5e87d7695de","type":"FactorRange"}},"id":"1b7a2e33-b333-49b4-9087-e1a7960ce94d","subtype":"Chart","type":"Plot"},{"attributes":{"overlay":{"id":"368ace75-8f97-44d5-81bc-7f0c53e2ab17","type":"BoxAnnotation"},"plot":{"id":"882a0f19-5d84-4443-bd4a-99135e7c55b0","subtype":"Chart","type":"Plot"}},"id":"59fd23ef-f31a-475c-a15f-4d4c9887aa26","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"614d366e-1644-4fca-9eb5-2cbc6fe7a347","type":"ColumnDataSource"},"glyph":{"id":"1bfe48c3-fe03-45d3-aa41-73b0d74add72","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"15e4c7f5-6fa5-4af0-b915-296688cf1be4","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"882a0f19-5d84-4443-bd4a-99135e7c55b0","subtype":"Chart","type":"Plot"}},"id":"2529d059-e899-47bc-b69e-244c742f844a","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"1b7a2e33-b333-49b4-9087-e1a7960ce94d","subtype":"Chart","type":"Plot"}},"id":"fd7e6017-b9e3-4a04-9005-5454cd096e8e","type":"SaveTool"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"2bcd6676-ea8f-4c43-b1ee-40a129f9ba3b","type":"FactorRange"},{"attributes":{"plot":{"id":"1b7a2e33-b333-49b4-9087-e1a7960ce94d","subtype":"Chart","type":"Plot"}},"id":"1fa93b0f-12e1-43da-b8b9-2b714bb8c810","type":"PanTool"},{"attributes":{"data_source":{"id":"258cab60-9ef6-4243-9f79-f2437907ff16","type":"ColumnDataSource"},"glyph":{"id":"76779670-f4fd-4bbb-a754-71ee2fc577ac","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"642713a9-2c01-4bc9-8a2e-eea14aafafda","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"2c990a53-27ca-4787-b8cc-1f159007b76a","type":"ColumnDataSource"},"glyph":{"id":"86773969-042f-48c2-8d02-c86da354636b","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"cab612d9-01f6-4dfe-a9b1-9f84465896e6","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"86773969-042f-48c2-8d02-c86da354636b","type":"Rect"},{"attributes":{"data_source":{"id":"a2afe680-cfce-4a0a-b9dd-f9725ebedcd4","type":"ColumnDataSource"},"glyph":{"id":"56ab957d-43e5-4a99-b8fc-f08e2f3f9cc3","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"20cfe204-a6d6-4599-816e-8a56f1970968","type":"GlyphRenderer"},{"attributes":{},"id":"d653064b-35e5-4fc7-99d7-6c2b3582fa7f","type":"BasicTickFormatter"},{"attributes":{},"id":"4f579443-f118-4c99-87f9-5223333dcf37","type":"CategoricalTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[0.42857142857142855,2.1,0.8571428571428571,0.0,1.625,2.0625,0.8571428571428571,1.6],"x":[16,17,17,17,16,15,16,17],"y":["Monday","Monday","Tuesday","Wednesday","Thursday","Sunday","Sunday","Sunday"]}},"id":"ce4c61f9-9b70-4716-a0df-28196ed916b8","type":"ColumnDataSource"},{"attributes":{},"id":"23c85a91-2e94-42c0-9c07-aaceb5fd84e6","type":"BasicTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"6b2b47f1-bae9-4763-ac4b-25f7657f2a67","type":"Rect"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"892f43e0-afba-466f-9daf-060bc33ed8f5","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"1b7a2e33-b333-49b4-9087-e1a7960ce94d","subtype":"Chart","type":"Plot"},"ticker":{"id":"4f579443-f118-4c99-87f9-5223333dcf37","type":"CategoricalTicker"}},"id":"2344feed-16dc-416b-adbf-fed0aa4d50a3","type":"CategoricalAxis"},{"attributes":{},"id":"39ab1bf3-dcf0-4aa6-a66a-f90176db7b1e","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20, 23.3]"],"chart_index":[{"POS_ARR_DELAY":"(20, 23.3]"}],"values":[20.55263157894737],"x":[15],"y":["Wednesday"]}},"id":"e4d9ab80-debb-4137-b63c-1c4fe7196429","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[4.297297297297297,6.456521739130435,5.9],"x":[15,15,17],"y":["Tuesday","Thursday","Thursday"]}},"id":"a2afe680-cfce-4a0a-b9dd-f9725ebedcd4","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[12.090909090909092,10.94],"x":[16,17],"y":["Saturday","Saturday"]}},"id":"80c81a33-e233-4b08-876f-82eec5dc1427","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"a908167c-800b-48f6-8e89-5a3d54c67d8f","type":"ColumnDataSource"},"glyph":{"id":"94cd7765-fc62-4efd-a869-5088393f3e65","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"0fa1a144-ea92-4c3f-9b72-be4686b18eeb","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0],"x":[16],"y":["Friday"]}},"id":"614d366e-1644-4fca-9eb5-2cbc6fe7a347","type":"ColumnDataSource"},{"attributes":{},"id":"0db80053-2454-437a-bc9d-4bf77b2f9906","type":"CategoricalTicker"},{"attributes":{"data_source":{"id":"c3bbe675-7ca5-4991-8ee5-007c7de41656","type":"ColumnDataSource"},"glyph":{"id":"044b5994-9e3c-40c0-95e8-53008c0d3713","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"454f98df-c5d5-41da-a021-c80673758e24","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"80c81a33-e233-4b08-876f-82eec5dc1427","type":"ColumnDataSource"},"glyph":{"id":"d150e450-8afb-4417-881f-4f6c0df7eed0","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d3e02483-5545-4806-9df6-fd414482b7f7","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"1ae9e49b-134d-4906-8f92-1f1c7be7040e","type":"Rect"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8ab4357a-5ac4-494b-9d1f-dc3185d450aa","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[0.42857142857142855,2.1,0.8571428571428571,0.0,1.625,2.0625,0.8571428571428571,1.6],"x":[16,17,17,17,16,15,16,17],"y":["Monday","Monday","Tuesday","Wednesday","Thursday","Sunday","Sunday","Sunday"]}},"id":"a4485ea7-f8d6-4e3f-aaa8-dd203de572ba","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"b47127af-3542-4814-a481-725f547af019","type":"ColumnDataSource"},"glyph":{"id":"6b2b47f1-bae9-4763-ac4b-25f7657f2a67","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"1cbdcd0c-8982-40af-9432-34427c2bb8e7","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0],"x":[16],"y":["Friday"]}},"id":"a908167c-800b-48f6-8e89-5a3d54c67d8f","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"8ab4357a-5ac4-494b-9d1f-dc3185d450aa","type":"BoxAnnotation"},"plot":{"id":"1b7a2e33-b333-49b4-9087-e1a7960ce94d","subtype":"Chart","type":"Plot"}},"id":"11932ca6-8285-4b59-8191-54f7e3993e36","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"882a0f19-5d84-4443-bd4a-99135e7c55b0","subtype":"Chart","type":"Plot"}},"id":"6fc8a0fd-7fc5-4f50-9009-be0e3ed09b38","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20, 23.3]"],"chart_index":[{"POS_ARR_DELAY":"(20, 23.3]"}],"values":[20.55263157894737],"x":[15],"y":["Wednesday"]}},"id":"c3bbe675-7ca5-4991-8ee5-007c7de41656","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"d150e450-8afb-4417-881f-4f6c0df7eed0","type":"Rect"},{"attributes":{"callback":null,"end":23},"id":"c91a4929-8882-4d30-8156-61d7716dd3b1","type":"Range1d"},{"attributes":{"plot":{"id":"1b7a2e33-b333-49b4-9087-e1a7960ce94d","subtype":"Chart","type":"Plot"}},"id":"03073b82-46f3-496c-90af-8cb530d0c817","type":"ResetTool"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"d69dc51e-1764-46d1-86ba-e0b80e87b232","type":"LinearColorMapper"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[12.090909090909092,10.94],"x":[16,17],"y":["Saturday","Saturday"]}},"id":"258cab60-9ef6-4243-9f79-f2437907ff16","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[7.086956521739131,7.148936170212766,7.090909090909091,7.822222222222222],"x":[15,15,17,15],"y":["Monday","Friday","Friday","Saturday"]}},"id":"b47127af-3542-4814-a481-725f547af019","type":"ColumnDataSource"},{"attributes":{},"id":"9f683133-6c9f-4d37-b85f-b44273c2c05d","type":"BasicTickFormatter"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"56ab957d-43e5-4a99-b8fc-f08e2f3f9cc3","type":"Rect"},{"attributes":{"data_source":{"id":"0c98e4b3-5c6f-4460-9f69-3cf7f064367c","type":"ColumnDataSource"},"glyph":{"id":"28b32dfd-77c2-4cd0-ade4-1b715e150b40","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d1a7bc7d-5262-4127-abc1-366b53f4d028","type":"GlyphRenderer"},{"attributes":{"child":{"id":"1b7a2e33-b333-49b4-9087-e1a7960ce94d","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"3ec03b0c-4608-4211-be18-055c56b8a9d3","type":"Panel"},{"attributes":{"callback":null,"end":23},"id":"9a7a7473-7769-464e-aa1d-f80735c4f3f1","type":"Range1d"},{"attributes":{},"id":"613f1e02-16af-4d95-9149-30e9f40e0602","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"a4485ea7-f8d6-4e3f-aaa8-dd203de572ba","type":"ColumnDataSource"},"glyph":{"id":"eaa898a1-1e62-4a27-8265-3f82148327db","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"870daf4c-bd4c-46ac-8f3a-b190767cd182","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"955734e4-9f3f-4c5f-b0da-984eb5d72a94","type":"Title"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"1bfe48c3-fe03-45d3-aa41-73b0d74add72","type":"Rect"},{"attributes":{},"id":"2182e224-9861-4cbd-9133-45196108697e","type":"BasicTicker"},{"attributes":{},"id":"e6fc6036-1ed4-4ef7-99b1-157a99091481","type":"CategoricalTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"1fa93b0f-12e1-43da-b8b9-2b714bb8c810","type":"PanTool"},{"id":"da5e586d-bc24-4b49-bdbf-34713411ebb6","type":"WheelZoomTool"},{"id":"11932ca6-8285-4b59-8191-54f7e3993e36","type":"BoxZoomTool"},{"id":"fd7e6017-b9e3-4a04-9005-5454cd096e8e","type":"SaveTool"},{"id":"03073b82-46f3-496c-90af-8cb530d0c817","type":"ResetTool"},{"id":"21a2c95d-ee25-48bb-95a2-b549787eeb34","type":"HelpTool"}]},"id":"73d72147-eda6-4aaf-9050-a0e2b18cb54d","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"368ace75-8f97-44d5-81bc-7f0c53e2ab17","type":"BoxAnnotation"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"76779670-f4fd-4bbb-a754-71ee2fc577ac","type":"Rect"},{"attributes":{"plot":{"id":"1b7a2e33-b333-49b4-9087-e1a7960ce94d","subtype":"Chart","type":"Plot"}},"id":"da5e586d-bc24-4b49-bdbf-34713411ebb6","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"212d7345-b958-4ef0-a913-8351ecf83751","type":"PanTool"},{"id":"2529d059-e899-47bc-b69e-244c742f844a","type":"WheelZoomTool"},{"id":"59fd23ef-f31a-475c-a15f-4d4c9887aa26","type":"BoxZoomTool"},{"id":"11871d5f-1722-48c4-b276-8c480e3887d3","type":"SaveTool"},{"id":"6fc8a0fd-7fc5-4f50-9009-be0e3ed09b38","type":"ResetTool"},{"id":"7b258730-d38c-4f62-8ab5-ffe01b6fa6b0","type":"HelpTool"}]},"id":"a754c0a3-21af-46eb-9d44-d501ad56a777","type":"Toolbar"},{"attributes":{"child":{"id":"882a0f19-5d84-4443-bd4a-99135e7c55b0","subtype":"Chart","type":"Plot"},"title":"UA"},"id":"d3ec2582-e15d-4a90-a034-83a044c2fde8","type":"Panel"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"044b5994-9e3c-40c0-95e8-53008c0d3713","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[4.297297297297297,6.456521739130435,5.9],"x":[15,15,17],"y":["Tuesday","Thursday","Thursday"]}},"id":"2c990a53-27ca-4787-b8cc-1f159007b76a","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"94cd7765-fc62-4efd-a869-5088393f3e65","type":"Rect"},{"attributes":{"color_mapper":{"id":"d69dc51e-1764-46d1-86ba-e0b80e87b232","type":"LinearColorMapper"},"formatter":{"id":"9f683133-6c9f-4d37-b85f-b44273c2c05d","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"1b7a2e33-b333-49b4-9087-e1a7960ce94d","subtype":"Chart","type":"Plot"},"ticker":{"id":"a8cedd94-7598-46ee-96bb-e3d8b7fba099","type":"BasicTicker"}},"id":"1557ed66-3de7-4b73-93de-271b3c979621","type":"ColorBar"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"613f1e02-16af-4d95-9149-30e9f40e0602","type":"BasicTickFormatter"},"plot":{"id":"1b7a2e33-b333-49b4-9087-e1a7960ce94d","subtype":"Chart","type":"Plot"},"ticker":{"id":"2182e224-9861-4cbd-9133-45196108697e","type":"BasicTicker"}},"id":"b217e418-04ee-4f5a-aaa4-199deb197eac","type":"LinearAxis"},{"attributes":{},"id":"22656c75-1e6f-4fb8-bc2f-94d0997cd1bb","type":"ToolEvents"},{"attributes":{"plot":{"id":"882a0f19-5d84-4443-bd4a-99135e7c55b0","subtype":"Chart","type":"Plot"}},"id":"11871d5f-1722-48c4-b276-8c480e3887d3","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[7.086956521739131,7.148936170212766,7.090909090909091,7.822222222222222],"x":[15,15,17,15],"y":["Monday","Friday","Friday","Saturday"]}},"id":"0c98e4b3-5c6f-4460-9f69-3cf7f064367c","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"1b7a2e33-b333-49b4-9087-e1a7960ce94d","subtype":"Chart","type":"Plot"}},"id":"21a2c95d-ee25-48bb-95a2-b549787eeb34","type":"HelpTool"}],"root_ids":["505307fd-de5f-4ce4-a5e9-a3fcad5c896a"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"143241e8-47be-4466-acc5-5e0b4030c4a0","elementid":"d1d0cdce-1a9f-4207-9d92-638833e1740f","modelid":"505307fd-de5f-4ce4-a5e9-a3fcad5c896a"}];
                  
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