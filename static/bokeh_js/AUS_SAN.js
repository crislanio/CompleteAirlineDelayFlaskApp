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
      };var element = document.getElementById("ebbcea5d-53c8-4f66-b1e6-96459cf78610");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ebbcea5d-53c8-4f66-b1e6-96459cf78610' but no matching script tag was found. ")
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
                  var docs_json = {"660001ec-6b8f-4a3c-8ff3-fe24ac99da01":{"roots":{"references":[{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"b593de1c-f1e9-4b62-ab07-3f48194091a4","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"a9186a95-dbd8-4139-86b8-b0c4c0e69a38","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"5f3a40bd-fc89-4804-a500-60b4da92573c","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[27.0,28.0,30.0,30.0,30.0],"x":[14,14,19,6,14],"y":["Monday","Tuesday","Wednesday","Sunday","Sunday"]}},"id":"22d788fc-a9c8-4794-b9aa-c526b46d6bf0","type":"ColumnDataSource"},{"attributes":{},"id":"a0b8d214-7870-4d1b-abf3-a9164a9887ec","type":"BasicTicker"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"ae10e751-9f26-4c34-af6c-39a9876e6a7c","type":"FactorRange"},{"attributes":{},"id":"566bcb7f-98c4-4bb0-9bda-0ea6c974a194","type":"CategoricalTickFormatter"},{"attributes":{"overlay":{"id":"c84f6848-7b7b-4c16-ab55-b99624202914","type":"BoxAnnotation"},"plot":{"id":"3ba03851-2285-475c-9d33-69b82c58b1ec","subtype":"Chart","type":"Plot"}},"id":"e84102ff-7574-4e11-8255-2078c48dfaa8","type":"BoxZoomTool"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"6e88d685-0283-4414-acfe-1b1ec9599c10","type":"BasicTickFormatter"},"plot":{"id":"8feb3209-893e-4176-98e9-82aac02782a7","subtype":"Chart","type":"Plot"},"ticker":{"id":"dcffbfbc-2ff0-415b-b872-ff69c727822b","type":"BasicTicker"}},"id":"3388a313-b437-4dc5-90d0-68b51550753c","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20, 23.3]","(20, 23.3]"],"chart_index":[{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"}],"values":[23.261904761904763,21.047619047619047],"x":[9,9],"y":["Monday","Tuesday"]}},"id":"dcbfe19a-694b-4c12-a5d0-2d79ffafa9dc","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[16.86021505376344],"x":[20],"y":["Monday"]}},"id":"2f194ed9-718a-489d-a292-f1d52a9b2ad4","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[13.301587301587302,12.307692307692308,10.545454545454545,13.048780487804878,12.021505376344086,11.316666666666666,12.536585365853659,10.090909090909092,12.444444444444445,12.417582417582418],"x":[21,10,11,9,20,21,11,12,18,20],"y":["Monday","Tuesday","Tuesday","Wednesday","Wednesday","Thursday","Saturday","Saturday","Saturday","Sunday"]}},"id":"e44d1231-5218-4870-916a-5637b114bde0","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"8feb3209-893e-4176-98e9-82aac02782a7","subtype":"Chart","type":"Plot"}},"id":"0a23cd5e-55ba-4de4-a987-e3c9344d7297","type":"ResetTool"},{"attributes":{"data_source":{"id":"b8263044-849c-4299-8183-b325ffab5986","type":"ColumnDataSource"},"glyph":{"id":"acd99d59-ded3-44b5-b555-29500ec1e90a","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"7166b1b3-4621-4474-9cd1-687ba247d40e","type":"GlyphRenderer"},{"attributes":{},"id":"dcffbfbc-2ff0-415b-b872-ff69c727822b","type":"BasicTicker"},{"attributes":{"color_mapper":{"id":"32533bfd-9173-45ae-ac02-8189bbe0681d","type":"LinearColorMapper"},"formatter":{"id":"356d99da-f061-4c53-9e03-b1bada50ee08","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"3ba03851-2285-475c-9d33-69b82c58b1ec","subtype":"Chart","type":"Plot"},"ticker":{"id":"0cce6088-fc23-4563-b2cb-3a8a2b83ca9e","type":"BasicTicker"}},"id":"3348fb5c-9212-4cb0-8d99-49cc98cb43d9","type":"ColorBar"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"d606376a-e02d-4f2a-81d1-6830285b6d16","type":"LinearColorMapper"},{"attributes":{"data_source":{"id":"241ebd56-65cc-4163-875c-3b80ab1b3324","type":"ColumnDataSource"},"glyph":{"id":"3842d479-8017-4e7e-b79d-bbdc013f20d2","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"7afdc246-8f68-49dd-98fd-d9c6a9b27f3b","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"8feb3209-893e-4176-98e9-82aac02782a7","subtype":"Chart","type":"Plot"}},"id":"d6c05001-ae9f-45df-93be-4c280f54b0ee","type":"SaveTool"},{"attributes":{"child":{"id":"3ba03851-2285-475c-9d33-69b82c58b1ec","subtype":"Chart","type":"Plot"},"title":"WN"},"id":"0a62cc9a-695b-413d-bdf8-4b5073f082fb","type":"Panel"},{"attributes":{"data_source":{"id":"d6a551ee-106d-4108-b300-90d7517aabc8","type":"ColumnDataSource"},"glyph":{"id":"2b1ae524-bcdc-432e-a812-dc249663060c","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2c8de2b2-6b6a-4bf4-a4ac-ebf00597f41f","type":"GlyphRenderer"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"b6f2f305-1683-4410-a3f2-c3aa83ba8709","type":"BasicTickFormatter"},"plot":{"id":"3ba03851-2285-475c-9d33-69b82c58b1ec","subtype":"Chart","type":"Plot"},"ticker":{"id":"a0b8d214-7870-4d1b-abf3-a9164a9887ec","type":"BasicTicker"}},"id":"a3edaedb-ca5e-45e9-a5df-3508a458645c","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[13.301587301587302,12.307692307692308,10.545454545454545,13.048780487804878,12.021505376344086,11.316666666666666,12.536585365853659,10.090909090909092,12.444444444444445,12.417582417582418],"x":[21,10,11,9,20,21,11,12,18,20],"y":["Monday","Tuesday","Tuesday","Wednesday","Wednesday","Thursday","Saturday","Saturday","Saturday","Sunday"]}},"id":"72f2d9b8-cac7-48e2-b1fc-bc1fc2fb7864","type":"ColumnDataSource"},{"attributes":{},"id":"356d99da-f061-4c53-9e03-b1bada50ee08","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"3ba03851-2285-475c-9d33-69b82c58b1ec","subtype":"Chart","type":"Plot"}},"id":"0f97ad7e-28e7-45ae-87ce-6f11a425dd07","type":"PanTool"},{"attributes":{"data_source":{"id":"f3349aa1-05f6-4565-90bf-766e968e762f","type":"ColumnDataSource"},"glyph":{"id":"9b2fe39f-f717-46c4-acb3-402e618f66ad","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"5fbbbbc0-97e4-4412-88e6-c63337c49aca","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"Southwest Airlines "},"id":"f00cca7b-3543-4af9-b598-19484bbf98bb","type":"Title"},{"attributes":{},"id":"6e88d685-0283-4414-acfe-1b1ec9599c10","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b5e4bfe0-d862-444c-aafa-b678f05cd3b1","type":"BoxAnnotation"},{"attributes":{"color_mapper":{"id":"d606376a-e02d-4f2a-81d1-6830285b6d16","type":"LinearColorMapper"},"formatter":{"id":"6b737a3e-da0e-4dab-a031-d6c422493b28","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"8feb3209-893e-4176-98e9-82aac02782a7","subtype":"Chart","type":"Plot"},"ticker":{"id":"53e439b6-905f-423a-865c-c1ac92c8ca4e","type":"BasicTicker"}},"id":"192b15b8-e5cb-46c2-b4f5-2665afb04899","type":"ColorBar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"c84f6848-7b7b-4c16-ab55-b99624202914","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[27.0,28.0,30.0,30.0,30.0],"x":[14,14,19,6,14],"y":["Monday","Tuesday","Wednesday","Sunday","Sunday"]}},"id":"58bbe755-a69b-4ac7-be4a-c059936fc18c","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0f97ad7e-28e7-45ae-87ce-6f11a425dd07","type":"PanTool"},{"id":"936ab039-ba75-4897-8843-06157290b12f","type":"WheelZoomTool"},{"id":"e84102ff-7574-4e11-8255-2078c48dfaa8","type":"BoxZoomTool"},{"id":"7df6ef60-f117-428e-b02b-83250e562c03","type":"SaveTool"},{"id":"8be7a1f1-9904-4094-90a7-855389ec4876","type":"ResetTool"},{"id":"790c056c-e961-4e6a-859b-d470a3a3c31a","type":"HelpTool"}]},"id":"4b2dde54-2d90-4678-8d34-dd0704d39154","type":"Toolbar"},{"attributes":{"plot":{"id":"3ba03851-2285-475c-9d33-69b82c58b1ec","subtype":"Chart","type":"Plot"}},"id":"936ab039-ba75-4897-8843-06157290b12f","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"}],"values":[16.384615384615383,16.32608695652174,16.57777777777778,14.53763440860215,13.73076923076923],"x":[10,20,20,20,10],"y":["Monday","Tuesday","Thursday","Friday","Saturday"]}},"id":"f3349aa1-05f6-4565-90bf-766e968e762f","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"3ba03851-2285-475c-9d33-69b82c58b1ec","subtype":"Chart","type":"Plot"}},"id":"7df6ef60-f117-428e-b02b-83250e562c03","type":"SaveTool"},{"attributes":{"plot":{"id":"8feb3209-893e-4176-98e9-82aac02782a7","subtype":"Chart","type":"Plot"}},"id":"4c41d611-9cbc-4645-a591-552ac738d798","type":"PanTool"},{"attributes":{"data_source":{"id":"72f2d9b8-cac7-48e2-b1fc-bc1fc2fb7864","type":"ColumnDataSource"},"glyph":{"id":"335abf9f-f1a9-4225-b6bd-1e79e5356c61","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e67935bf-2616-49d0-8f67-3ca3c38f6fcc","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"8feb3209-893e-4176-98e9-82aac02782a7","subtype":"Chart","type":"Plot"}},"id":"03fc6ef1-de27-4f75-9e58-5d026526236d","type":"WheelZoomTool"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"a3edaedb-ca5e-45e9-a5df-3508a458645c","type":"LinearAxis"}],"left":[{"id":"aa96415b-c8f9-4ea0-b23f-5ad234ddccf3","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"c84f6848-7b7b-4c16-ab55-b99624202914","type":"BoxAnnotation"},{"id":"3eb9063c-e1d2-4247-8c31-3fce9c5af819","type":"GlyphRenderer"},{"id":"7e13480c-e1dc-4191-8446-f135e6c9f912","type":"GlyphRenderer"},{"id":"d6d4753b-c6c4-4ca9-904b-c5ad3c5b38ae","type":"GlyphRenderer"},{"id":"5fbbbbc0-97e4-4412-88e6-c63337c49aca","type":"GlyphRenderer"},{"id":"e67935bf-2616-49d0-8f67-3ca3c38f6fcc","type":"GlyphRenderer"},{"id":"7afdc246-8f68-49dd-98fd-d9c6a9b27f3b","type":"GlyphRenderer"},{"id":"e0e3d6c4-6c07-49a5-ab52-f7cb997d3577","type":"GlyphRenderer"},{"id":"18fac7b0-7d67-4226-86aa-ae1d3683e5ac","type":"GlyphRenderer"},{"id":"a3edaedb-ca5e-45e9-a5df-3508a458645c","type":"LinearAxis"},{"id":"aa96415b-c8f9-4ea0-b23f-5ad234ddccf3","type":"CategoricalAxis"},{"id":"3348fb5c-9212-4cb0-8d99-49cc98cb43d9","type":"ColorBar"}],"right":[{"id":"3348fb5c-9212-4cb0-8d99-49cc98cb43d9","type":"ColorBar"}],"title":{"id":"f00cca7b-3543-4af9-b598-19484bbf98bb","type":"Title"},"tool_events":{"id":"c7349f84-0b62-4694-826a-264869ae68fb","type":"ToolEvents"},"toolbar":{"id":"4b2dde54-2d90-4678-8d34-dd0704d39154","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"8ffb6653-cbff-441d-8869-9ca575167c3b","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"53e5a78e-71bd-4698-9e87-0a64a06241e0","type":"FactorRange"}},"id":"3ba03851-2285-475c-9d33-69b82c58b1ec","subtype":"Chart","type":"Plot"},{"attributes":{"data_source":{"id":"30d9f42e-8f1a-465c-9cb3-f253582e3cf7","type":"ColumnDataSource"},"glyph":{"id":"92cad72f-4c8c-4efe-bbc0-f8f5f6b51af6","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"08d47f5e-579c-4089-b1a8-be3854742574","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,1.8,1.5,3.3333333333333335,2.6,0.0,3.227272727272727,0.0],"x":[6,6,19,7,14,7,7,13,13,14,15,16,7,12,19],"y":["Monday","Tuesday","Tuesday","Wednesday","Wednesday","Thursday","Friday","Friday","Saturday","Saturday","Saturday","Saturday","Sunday","Sunday","Sunday"]}},"id":"30d9f42e-8f1a-465c-9cb3-f253582e3cf7","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"335abf9f-f1a9-4225-b6bd-1e79e5356c61","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,1.8,1.5,3.3333333333333335,2.6,0.0,3.227272727272727,0.0],"x":[6,6,19,7,14,7,7,13,13,14,15,16,7,12,19],"y":["Monday","Tuesday","Tuesday","Wednesday","Wednesday","Thursday","Friday","Friday","Saturday","Saturday","Saturday","Saturday","Sunday","Sunday","Sunday"]}},"id":"8be0d185-de1b-47b7-a998-1cf52d9a3d7d","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"ca56cf50-5b3c-4a21-8c2c-995046c96f9c","type":"ColumnDataSource"},"glyph":{"id":"8ed54177-c186-4cd4-8c1f-f547713afa7c","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"10da2ec7-a901-41bd-8e2d-928c0817957a","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"4a4e14ac-d1ad-431f-a063-8718661ba9dd","type":"Rect"},{"attributes":{"plot":{"id":"3ba03851-2285-475c-9d33-69b82c58b1ec","subtype":"Chart","type":"Plot"}},"id":"790c056c-e961-4e6a-859b-d470a3a3c31a","type":"HelpTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#fee8c8"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fee8c8"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"92cad72f-4c8c-4efe-bbc0-f8f5f6b51af6","type":"Rect"},{"attributes":{},"id":"b6f2f305-1683-4410-a3f2-c3aa83ba8709","type":"BasicTickFormatter"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"53e5a78e-71bd-4698-9e87-0a64a06241e0","type":"FactorRange"},{"attributes":{"data_source":{"id":"4707ff49-395c-4841-b283-d9f28b756633","type":"ColumnDataSource"},"glyph":{"id":"9330b352-ac89-49b7-ae8b-a88380f60851","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"26d71167-a81e-4ac1-b066-1f90e96a4124","type":"GlyphRenderer"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"32533bfd-9173-45ae-ac02-8189bbe0681d","type":"LinearColorMapper"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"4c41d611-9cbc-4645-a591-552ac738d798","type":"PanTool"},{"id":"03fc6ef1-de27-4f75-9e58-5d026526236d","type":"WheelZoomTool"},{"id":"2baa7656-055a-45ec-ab03-f4a167699574","type":"BoxZoomTool"},{"id":"d6c05001-ae9f-45df-93be-4c280f54b0ee","type":"SaveTool"},{"id":"0a23cd5e-55ba-4de4-a987-e3c9344d7297","type":"ResetTool"},{"id":"65922390-1603-4e01-8b02-6b66b98de38a","type":"HelpTool"}]},"id":"4c4d118c-898d-4753-b48e-9a9f89976da5","type":"Toolbar"},{"attributes":{"data_source":{"id":"2f194ed9-718a-489d-a292-f1d52a9b2ad4","type":"ColumnDataSource"},"glyph":{"id":"b593de1c-f1e9-4b62-ab07-3f48194091a4","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d6d4753b-c6c4-4ca9-904b-c5ad3c5b38ae","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"e44d1231-5218-4870-916a-5637b114bde0","type":"ColumnDataSource"},"glyph":{"id":"4a4e14ac-d1ad-431f-a063-8718661ba9dd","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"bffad453-4c86-442a-8c6b-f1621b43431c","type":"GlyphRenderer"},{"attributes":{"callback":null,"tabs":[{"id":"a2a13c53-7257-4f82-b25a-0367ca0f80e5","type":"Panel"},{"id":"0a62cc9a-695b-413d-bdf8-4b5073f082fb","type":"Panel"}]},"id":"7512ea2f-e71b-45d4-95db-1ae3a175c6ab","type":"Tabs"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[7.5625,8.631578947368421,9.682539682539682,8.191176470588236,7.507936507936508,8.878787878787879,9.820512820512821,8.23076923076923,8.26086956521739,7.3559322033898304,8.647058823529411,8.166666666666666,7.071428571428571,8.125,9.714285714285714],"x":[11,12,21,11,21,11,9,10,11,21,20,21,9,11,21],"y":["Monday","Monday","Tuesday","Wednesday","Wednesday","Thursday","Friday","Friday","Friday","Friday","Saturday","Saturday","Sunday","Sunday","Sunday"]}},"id":"241ebd56-65cc-4163-875c-3b80ab1b3324","type":"ColumnDataSource"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"3388a313-b437-4dc5-90d0-68b51550753c","type":"LinearAxis"}],"left":[{"id":"80ede227-f213-4560-abb1-d4465eb7247e","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"b5e4bfe0-d862-444c-aafa-b678f05cd3b1","type":"BoxAnnotation"},{"id":"4ae8a95f-5e54-4748-8a20-c7756511cec5","type":"GlyphRenderer"},{"id":"1dad43b4-0a65-43d6-8fe9-052fa522b9e7","type":"GlyphRenderer"},{"id":"7166b1b3-4621-4474-9cd1-687ba247d40e","type":"GlyphRenderer"},{"id":"10da2ec7-a901-41bd-8e2d-928c0817957a","type":"GlyphRenderer"},{"id":"bffad453-4c86-442a-8c6b-f1621b43431c","type":"GlyphRenderer"},{"id":"26d71167-a81e-4ac1-b066-1f90e96a4124","type":"GlyphRenderer"},{"id":"2c8de2b2-6b6a-4bf4-a4ac-ebf00597f41f","type":"GlyphRenderer"},{"id":"08d47f5e-579c-4089-b1a8-be3854742574","type":"GlyphRenderer"},{"id":"3388a313-b437-4dc5-90d0-68b51550753c","type":"LinearAxis"},{"id":"80ede227-f213-4560-abb1-d4465eb7247e","type":"CategoricalAxis"},{"id":"192b15b8-e5cb-46c2-b4f5-2665afb04899","type":"ColorBar"}],"right":[{"id":"192b15b8-e5cb-46c2-b4f5-2665afb04899","type":"ColorBar"}],"title":{"id":"9a285a24-c710-498d-a34c-bfdf6f33a03f","type":"Title"},"tool_events":{"id":"91f35d11-3bf3-45f4-84ff-cb1aa67c69a2","type":"ToolEvents"},"toolbar":{"id":"4c4d118c-898d-4753-b48e-9a9f89976da5","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"1443461d-e389-47d4-9cc3-fd8785e0aefa","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"ae10e751-9f26-4c34-af6c-39a9876e6a7c","type":"FactorRange"}},"id":"8feb3209-893e-4176-98e9-82aac02782a7","subtype":"Chart","type":"Plot"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[7.5625,8.631578947368421,9.682539682539682,8.191176470588236,7.507936507936508,8.878787878787879,9.820512820512821,8.23076923076923,8.26086956521739,7.3559322033898304,8.647058823529411,8.166666666666666,7.071428571428571,8.125,9.714285714285714],"x":[11,12,21,11,21,11,9,10,11,21,20,21,9,11,21],"y":["Monday","Monday","Tuesday","Wednesday","Wednesday","Thursday","Friday","Friday","Friday","Friday","Saturday","Saturday","Sunday","Sunday","Sunday"]}},"id":"4707ff49-395c-4841-b283-d9f28b756633","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"9b2fe39f-f717-46c4-acb3-402e618f66ad","type":"Rect"},{"attributes":{"data_source":{"id":"47940c91-06f1-48f7-9a0f-8e4f17072724","type":"ColumnDataSource"},"glyph":{"id":"a5ad4df1-2dbf-41e9-86a1-85828176e632","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"7e13480c-e1dc-4191-8446-f135e6c9f912","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":23},"id":"1443461d-e389-47d4-9cc3-fd8785e0aefa","type":"Range1d"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"3dfcb0f3-e8f8-4865-8a07-6e62ead7ad88","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"2b1ae524-bcdc-432e-a812-dc249663060c","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"9330b352-ac89-49b7-ae8b-a88380f60851","type":"Rect"},{"attributes":{},"id":"0cce6088-fc23-4563-b2cb-3a8a2b83ca9e","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[4.75,6.5,4.222222222222222,3.5,6.608695652173913,6.166666666666667,4.571428571428571,3.75,5.882352941176471,5.6875,4.866666666666666],"x":[7,7,12,6,10,12,9,10,12,12,10],"y":["Monday","Tuesday","Tuesday","Wednesday","Wednesday","Wednesday","Thursday","Thursday","Thursday","Friday","Sunday"]}},"id":"cf97bbe6-e728-4cb2-8c2d-47055899575b","type":"ColumnDataSource"},{"attributes":{},"id":"c7349f84-0b62-4694-826a-264869ae68fb","type":"ToolEvents"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"a5ad4df1-2dbf-41e9-86a1-85828176e632","type":"Rect"},{"attributes":{},"id":"91f35d11-3bf3-45f4-84ff-cb1aa67c69a2","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"}],"values":[16.384615384615383,16.32608695652174,16.57777777777778,14.53763440860215,13.73076923076923],"x":[10,20,20,20,10],"y":["Monday","Tuesday","Thursday","Friday","Saturday"]}},"id":"ca56cf50-5b3c-4a21-8c2c-995046c96f9c","type":"ColumnDataSource"},{"attributes":{},"id":"dd337139-c0b1-44c0-98c1-e3dd418c8673","type":"CategoricalTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[4.75,6.5,4.222222222222222,3.5,6.608695652173913,6.166666666666667,4.571428571428571,3.75,5.882352941176471,5.6875,4.866666666666666],"x":[7,7,12,6,10,12,9,10,12,12,10],"y":["Monday","Tuesday","Tuesday","Wednesday","Wednesday","Wednesday","Thursday","Thursday","Thursday","Friday","Sunday"]}},"id":"d6a551ee-106d-4108-b300-90d7517aabc8","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"8be0d185-de1b-47b7-a998-1cf52d9a3d7d","type":"ColumnDataSource"},"glyph":{"id":"90ee82d9-1548-4a9e-9829-e46de7f2a0af","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"18fac7b0-7d67-4226-86aa-ae1d3683e5ac","type":"GlyphRenderer"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"566bcb7f-98c4-4bb0-9bda-0ea6c974a194","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"8feb3209-893e-4176-98e9-82aac02782a7","subtype":"Chart","type":"Plot"},"ticker":{"id":"e2627623-8669-417a-ba02-21dfd4c67a70","type":"CategoricalTicker"}},"id":"80ede227-f213-4560-abb1-d4465eb7247e","type":"CategoricalAxis"},{"attributes":{},"id":"e2627623-8669-417a-ba02-21dfd4c67a70","type":"CategoricalTicker"},{"attributes":{"data_source":{"id":"58bbe755-a69b-4ac7-be4a-c059936fc18c","type":"ColumnDataSource"},"glyph":{"id":"5f3a40bd-fc89-4804-a500-60b4da92573c","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"4ae8a95f-5e54-4748-8a20-c7756511cec5","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"cf97bbe6-e728-4cb2-8c2d-47055899575b","type":"ColumnDataSource"},"glyph":{"id":"45dcaaa6-2ff8-4db2-8fc9-1974656cf348","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e0e3d6c4-6c07-49a5-ab52-f7cb997d3577","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"b5e4bfe0-d862-444c-aafa-b678f05cd3b1","type":"BoxAnnotation"},"plot":{"id":"8feb3209-893e-4176-98e9-82aac02782a7","subtype":"Chart","type":"Plot"}},"id":"2baa7656-055a-45ec-ab03-f4a167699574","type":"BoxZoomTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"3842d479-8017-4e7e-b79d-bbdc013f20d2","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fee8c8"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fee8c8"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"90ee82d9-1548-4a9e-9829-e46de7f2a0af","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"acd99d59-ded3-44b5-b555-29500ec1e90a","type":"Rect"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"9a285a24-c710-498d-a34c-bfdf6f33a03f","type":"Title"},{"attributes":{},"id":"6b737a3e-da0e-4dab-a031-d6c422493b28","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"749e85fe-0370-43ae-af9f-c26fb6471a15","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"3ba03851-2285-475c-9d33-69b82c58b1ec","subtype":"Chart","type":"Plot"},"ticker":{"id":"dd337139-c0b1-44c0-98c1-e3dd418c8673","type":"CategoricalTicker"}},"id":"aa96415b-c8f9-4ea0-b23f-5ad234ddccf3","type":"CategoricalAxis"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"45dcaaa6-2ff8-4db2-8fc9-1974656cf348","type":"Rect"},{"attributes":{"plot":{"id":"3ba03851-2285-475c-9d33-69b82c58b1ec","subtype":"Chart","type":"Plot"}},"id":"8be7a1f1-9904-4094-90a7-855389ec4876","type":"ResetTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"8ed54177-c186-4cd4-8c1f-f547713afa7c","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20, 23.3]","(20, 23.3]"],"chart_index":[{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"}],"values":[23.261904761904763,21.047619047619047],"x":[9,9],"y":["Monday","Tuesday"]}},"id":"47940c91-06f1-48f7-9a0f-8e4f17072724","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[16.86021505376344],"x":[20],"y":["Monday"]}},"id":"b8263044-849c-4299-8183-b325ffab5986","type":"ColumnDataSource"},{"attributes":{},"id":"53e439b6-905f-423a-865c-c1ac92c8ca4e","type":"BasicTicker"},{"attributes":{"plot":{"id":"8feb3209-893e-4176-98e9-82aac02782a7","subtype":"Chart","type":"Plot"}},"id":"65922390-1603-4e01-8b02-6b66b98de38a","type":"HelpTool"},{"attributes":{"data_source":{"id":"22d788fc-a9c8-4794-b9aa-c526b46d6bf0","type":"ColumnDataSource"},"glyph":{"id":"3dfcb0f3-e8f8-4865-8a07-6e62ead7ad88","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"3eb9063c-e1d2-4247-8c31-3fce9c5af819","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"dcbfe19a-694b-4c12-a5d0-2d79ffafa9dc","type":"ColumnDataSource"},"glyph":{"id":"a9186a95-dbd8-4139-86b8-b0c4c0e69a38","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"1dad43b4-0a65-43d6-8fe9-052fa522b9e7","type":"GlyphRenderer"},{"attributes":{},"id":"749e85fe-0370-43ae-af9f-c26fb6471a15","type":"CategoricalTickFormatter"},{"attributes":{"child":{"id":"8feb3209-893e-4176-98e9-82aac02782a7","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"a2a13c53-7257-4f82-b25a-0367ca0f80e5","type":"Panel"},{"attributes":{"callback":null,"end":23},"id":"8ffb6653-cbff-441d-8869-9ca575167c3b","type":"Range1d"}],"root_ids":["7512ea2f-e71b-45d4-95db-1ae3a175c6ab"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"660001ec-6b8f-4a3c-8ff3-fe24ac99da01","elementid":"ebbcea5d-53c8-4f66-b1e6-96459cf78610","modelid":"7512ea2f-e71b-45d4-95db-1ae3a175c6ab"}];
                  
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