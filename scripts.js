Bokeh.$(function() {
    var modelid = "1d71adbc-d802-4cda-9ad6-1551dbdb9c38";
    var modeltype = "PlotContext";
    var elementid = "1e92839b-8699-4877-9abf-e4983930a14a";
    Bokeh.logger.info("Realizing plot:")
    Bokeh.logger.info(" - modeltype: PlotContext");
    Bokeh.logger.info(" - modelid: 1d71adbc-d802-4cda-9ad6-1551dbdb9c38");
    Bokeh.logger.info(" - elementid: 1e92839b-8699-4877-9abf-e4983930a14a");
    var all_models = [{"id": "950d6a13-edf6-495c-9c32-722337c003c4", "attributes": {"plot": {"id": "0cbf6f58-989e-45dc-838d-b25a567eb08f", "type": "GMapPlot"}, "tags": [], "id": "950d6a13-edf6-495c-9c32-722337c003c4", "dimensions": ["width", "height"], "doc": "90ad85b6-1b13-4254-8f81-213408283da8"}, "type": "WheelZoomTool"}, {"id": "f1a6b96c-cd94-418a-b9fc-59007d1d6051", "attributes": {"id": "f1a6b96c-cd94-418a-b9fc-59007d1d6051", "tags": [], "doc": "90ad85b6-1b13-4254-8f81-213408283da8"}, "type": "Range1d"}, {"id": "f06979ef-a8fd-403d-af9b-76ab32d12f1f", "attributes": {"formatter": {"id": "2db7b36d-d27c-46a4-8f1a-74c2b05cf097", "type": "PrintfTickFormatter"}, "plot": {"id": "0cbf6f58-989e-45dc-838d-b25a567eb08f", "type": "GMapPlot"}, "tags": [], "id": "f06979ef-a8fd-403d-af9b-76ab32d12f1f", "ticker": {"id": "f75a41f1-d773-4cca-904f-ad488e16ce78", "type": "BasicTicker"}, "major_tick_in": 0, "doc": "90ad85b6-1b13-4254-8f81-213408283da8", "axis_label": "lon"}, "type": "LinearAxis"}, {"id": "c3f293af-fc1f-4762-9747-be43b1d02550", "attributes": {"doc": "90ad85b6-1b13-4254-8f81-213408283da8", "tags": [], "id": "c3f293af-fc1f-4762-9747-be43b1d02550", "selected": [], "column_names": ["lon", "lat", "fill"], "data": {"lon": [-84.516667, -79.933333, -43.196389], "lat": [39.1, 32.783333, -22.908333], "fill": ["orange", "blue", "green"]}}, "type": "ColumnDataSource"}, {"id": "92c240f6-3c5d-4d2b-a8d4-3413c277bfdf", "attributes": {"plot": {"id": "0cbf6f58-989e-45dc-838d-b25a567eb08f", "type": "GMapPlot"}, "names": [], "dimensions": ["width", "height"], "id": "92c240f6-3c5d-4d2b-a8d4-3413c277bfdf", "tags": [], "doc": "90ad85b6-1b13-4254-8f81-213408283da8", "renderers": []}, "type": "BoxSelectTool"}, {"id": "833ea2d0-86cf-436b-85e4-98ca0a2554e3", "attributes": {"format": "0.000", "id": "833ea2d0-86cf-436b-85e4-98ca0a2554e3", "tags": [], "doc": "90ad85b6-1b13-4254-8f81-213408283da8"}, "type": "NumeralTickFormatter"}, {"id": "98e750c8-8f43-4e83-8672-d345f1f8fa33", "attributes": {"id": "98e750c8-8f43-4e83-8672-d345f1f8fa33", "tags": [], "doc": "90ad85b6-1b13-4254-8f81-213408283da8"}, "type": "Range1d"}, {"id": "f75a41f1-d773-4cca-904f-ad488e16ce78", "attributes": {"id": "f75a41f1-d773-4cca-904f-ad488e16ce78", "tags": [], "doc": "90ad85b6-1b13-4254-8f81-213408283da8", "mantissas": [2, 5, 10]}, "type": "BasicTicker"}, {"id": "26f05d0c-4ad4-4c23-bac3-1c35fe345b76", "attributes": {"id": "26f05d0c-4ad4-4c23-bac3-1c35fe345b76", "tags": [], "tool": {"id": "92c240f6-3c5d-4d2b-a8d4-3413c277bfdf", "type": "BoxSelectTool"}, "doc": "90ad85b6-1b13-4254-8f81-213408283da8"}, "type": "BoxSelection"}, {"id": "757d88ce-dd39-4118-85ec-f1250d25b7de", "attributes": {"plot": {"id": "0cbf6f58-989e-45dc-838d-b25a567eb08f", "type": "GMapPlot"}, "tags": [], "id": "757d88ce-dd39-4118-85ec-f1250d25b7de", "dimensions": ["width", "height"], "doc": "90ad85b6-1b13-4254-8f81-213408283da8"}, "type": "PanTool"}, {"id": "ef3d13c0-08a5-45ad-aab8-249655435e0a", "attributes": {"id": "ef3d13c0-08a5-45ad-aab8-249655435e0a", "x": {"units": "data", "field": "lon"}, "doc": "90ad85b6-1b13-4254-8f81-213408283da8", "y": {"units": "data", "field": "lat"}, "tags": [], "size": {"value": 15, "units": "screen"}, "line_color": {"value": "black"}, "fill_color": {"field": "fill"}}, "type": "Circle"}, {"id": "e1fcafc9-80b9-42fc-a3bd-a4e6d6b4a2b3", "attributes": {"id": "e1fcafc9-80b9-42fc-a3bd-a4e6d6b4a2b3", "tags": [], "doc": "90ad85b6-1b13-4254-8f81-213408283da8", "mantissas": [2, 5, 10]}, "type": "BasicTicker"}, {"id": "2db7b36d-d27c-46a4-8f1a-74c2b05cf097", "attributes": {"format": "%.3f", "id": "2db7b36d-d27c-46a4-8f1a-74c2b05cf097", "tags": [], "doc": "90ad85b6-1b13-4254-8f81-213408283da8"}, "type": "PrintfTickFormatter"}, {"id": "4661341e-5f8a-43c2-9594-6de4ebfd8518", "attributes": {"geometries": [], "id": "4661341e-5f8a-43c2-9594-6de4ebfd8518", "tags": [], "doc": "90ad85b6-1b13-4254-8f81-213408283da8"}, "type": "ToolEvents"}, {"id": "1d71adbc-d802-4cda-9ad6-1551dbdb9c38", "attributes": {"tags": [], "id": "1d71adbc-d802-4cda-9ad6-1551dbdb9c38", "children": [{"id": "0cbf6f58-989e-45dc-838d-b25a567eb08f", "type": "GMapPlot"}], "doc": "90ad85b6-1b13-4254-8f81-213408283da8"}, "type": "PlotContext"}, {"id": "0cbf6f58-989e-45dc-838d-b25a567eb08f", "attributes": {"map_options": {"zoom": 3, "map_type": "roadmap", "lat": 18.533333, "lng": -72.333333}, "above": [], "tool_events": {"id": "4661341e-5f8a-43c2-9594-6de4ebfd8518", "type": "ToolEvents"}, "left": [{"id": "f06979ef-a8fd-403d-af9b-76ab32d12f1f", "type": "LinearAxis"}], "extra_x_ranges": {}, "doc": "90ad85b6-1b13-4254-8f81-213408283da8", "title": "Cincinnati to Rio de Janiero", "y_range": {"id": "f1a6b96c-cd94-418a-b9fc-59007d1d6051", "type": "Range1d"}, "id": "0cbf6f58-989e-45dc-838d-b25a567eb08f", "right": [], "tools": [{"id": "757d88ce-dd39-4118-85ec-f1250d25b7de", "type": "PanTool"}, {"id": "950d6a13-edf6-495c-9c32-722337c003c4", "type": "WheelZoomTool"}, {"id": "92c240f6-3c5d-4d2b-a8d4-3413c277bfdf", "type": "BoxSelectTool"}], "x_range": {"id": "98e750c8-8f43-4e83-8672-d345f1f8fa33", "type": "Range1d"}, "tags": [], "renderers": [{"id": "1c306003-1277-4cb4-9122-4dc606eb53eb", "type": "GlyphRenderer"}, {"id": "f320a336-d75c-4f48-a5ad-352996003fa6", "type": "LinearAxis"}, {"id": "f06979ef-a8fd-403d-af9b-76ab32d12f1f", "type": "LinearAxis"}, {"id": "26f05d0c-4ad4-4c23-bac3-1c35fe345b76", "type": "BoxSelection"}], "below": [{"id": "f320a336-d75c-4f48-a5ad-352996003fa6", "type": "LinearAxis"}], "extra_y_ranges": {}}, "type": "GMapPlot"}, {"id": "f320a336-d75c-4f48-a5ad-352996003fa6", "attributes": {"formatter": {"id": "833ea2d0-86cf-436b-85e4-98ca0a2554e3", "type": "NumeralTickFormatter"}, "plot": {"id": "0cbf6f58-989e-45dc-838d-b25a567eb08f", "type": "GMapPlot"}, "tags": [], "id": "f320a336-d75c-4f48-a5ad-352996003fa6", "ticker": {"id": "e1fcafc9-80b9-42fc-a3bd-a4e6d6b4a2b3", "type": "BasicTicker"}, "major_tick_in": 0, "doc": "90ad85b6-1b13-4254-8f81-213408283da8", "axis_label": "lat"}, "type": "LinearAxis"}, {"id": "1c306003-1277-4cb4-9122-4dc606eb53eb", "attributes": {"nonselection_glyph": null, "glyph": {"id": "ef3d13c0-08a5-45ad-aab8-249655435e0a", "type": "Circle"}, "selection_glyph": null, "id": "1c306003-1277-4cb4-9122-4dc606eb53eb", "tags": [], "doc": "90ad85b6-1b13-4254-8f81-213408283da8", "data_source": {"id": "c3f293af-fc1f-4762-9747-be43b1d02550", "type": "ColumnDataSource"}}, "type": "GlyphRenderer"}];
    Bokeh.load_models(all_models);
    var model = Bokeh.Collections(modeltype).get(modelid);
    var view = new model.default_view({model: model, el: '#1e92839b-8699-4877-9abf-e4983930a14a'});
    Bokeh.index[modelid] = view
});

$(".button-collapse").sideNav();

Bokeh.$(function() {
    var modelid = "f681dd1b-500b-4039-8dfe-371ed70636af";
    var modeltype = "PlotContext";
    var elementid = "5f779b9e-2494-468c-8c2a-1269e03f5e88";
    Bokeh.logger.info("Realizing plot:")
    Bokeh.logger.info(" - modeltype: PlotContext");
    Bokeh.logger.info(" - modelid: f681dd1b-500b-4039-8dfe-371ed70636af");
    Bokeh.logger.info(" - elementid: 5f779b9e-2494-468c-8c2a-1269e03f5e88");
    var all_models = [{"attributes": {"tags": [], "doc": "6731529c-3542-4cc5-951f-71c518b147b6", "plot": {"type": "GMapPlot", "id": "155420e4-a553-4715-b974-fb88f0b4b267"}, "id": "31aeb170-b300-4067-9213-d6200b331255", "dimensions": ["width", "height"]}, "type": "PanTool", "id": "31aeb170-b300-4067-9213-d6200b331255"}, {"attributes": {"selected": [], "column_names": ["lat", "lon", "fill"], "tags": [], "data": {"lat": [30.25, 21.3, 19.4333333], "lon": [-97.75, -157.8166667, -99.1333333], "fill": ["orange", "blue", "green"]}, "id": "760586c9-08ed-44ca-8445-7480d0bc5d1e", "doc": "6731529c-3542-4cc5-951f-71c518b147b6"}, "type": "ColumnDataSource", "id": "760586c9-08ed-44ca-8445-7480d0bc5d1e"}, {"attributes": {"title": "Austin to Mexico City", "left": [{"type": "LinearAxis", "id": "e1734af9-6df1-4c07-acd7-ab89cb2ac8b0"}], "extra_x_ranges": {}, "right": [], "tool_events": {"type": "ToolEvents", "id": "7e3c23cd-876c-4fda-9c3f-0100a91cf7df"}, "id": "155420e4-a553-4715-b974-fb88f0b4b267", "above": [], "tags": [], "below": [{"type": "LinearAxis", "id": "641702a6-bd56-4943-acd2-6f78fce2a962"}], "map_options": {"lat": 30, "map_type": "roadmap", "lng": -130, "zoom": 3}, "tools": [{"type": "PanTool", "id": "31aeb170-b300-4067-9213-d6200b331255"}, {"type": "WheelZoomTool", "id": "dbdc469c-8c74-4b75-9382-fd918b232c07"}, {"type": "BoxSelectTool", "id": "16ba865b-0bcf-4025-bb1c-55c02e787171"}], "x_range": {"type": "Range1d", "id": "72cedfe9-920c-4c11-be32-5189f63b5787"}, "doc": "6731529c-3542-4cc5-951f-71c518b147b6", "extra_y_ranges": {}, "renderers": [{"type": "GlyphRenderer", "id": "d0e3b150-0b99-4184-82b8-8b80ebd623e5"}, {"type": "LinearAxis", "id": "641702a6-bd56-4943-acd2-6f78fce2a962"}, {"type": "LinearAxis", "id": "e1734af9-6df1-4c07-acd7-ab89cb2ac8b0"}, {"type": "BoxSelection", "id": "ababdab1-9653-41fc-90c1-f7674975bc0c"}], "y_range": {"type": "Range1d", "id": "cce459bb-e72e-4548-b7bb-7bac0c03973f"}}, "type": "GMapPlot", "id": "155420e4-a553-4715-b974-fb88f0b4b267"}, {"attributes": {"tags": [], "doc": "6731529c-3542-4cc5-951f-71c518b147b6", "id": "cce459bb-e72e-4548-b7bb-7bac0c03973f"}, "type": "Range1d", "id": "cce459bb-e72e-4548-b7bb-7bac0c03973f"}, {"attributes": {"ticker": {"type": "BasicTicker", "id": "cb02f8fb-b62b-426e-8ad4-a6f898914d2e"}, "tags": [], "formatter": {"type": "PrintfTickFormatter", "id": "e980e21a-f720-479c-9530-b563f5e4af6e"}, "plot": {"type": "GMapPlot", "id": "155420e4-a553-4715-b974-fb88f0b4b267"}, "id": "e1734af9-6df1-4c07-acd7-ab89cb2ac8b0", "major_tick_in": 0, "axis_label": "lon", "doc": "6731529c-3542-4cc5-951f-71c518b147b6"}, "type": "LinearAxis", "id": "e1734af9-6df1-4c07-acd7-ab89cb2ac8b0"}, {"attributes": {"line_color": {"value": "black"}, "doc": "6731529c-3542-4cc5-951f-71c518b147b6", "id": "e0b9a64c-a6a6-4b0c-abda-a5ad8059aea9", "fill_color": {"field": "fill"}, "size": {"units": "screen", "value": 15}, "x": {"units": "data", "field": "lon"}, "tags": [], "y": {"units": "data", "field": "lat"}}, "type": "Circle", "id": "e0b9a64c-a6a6-4b0c-abda-a5ad8059aea9"}, {"attributes": {"tags": [], "format": "0.000", "doc": "6731529c-3542-4cc5-951f-71c518b147b6", "id": "ebc85af5-c4a6-48ab-803f-80c807ea7db1"}, "type": "NumeralTickFormatter", "id": "ebc85af5-c4a6-48ab-803f-80c807ea7db1"}, {"attributes": {"mantissas": [2, 5, 10], "doc": "6731529c-3542-4cc5-951f-71c518b147b6", "tags": [], "id": "88ccadcb-090b-46f7-8d36-8a7b2e504bdd"}, "type": "BasicTicker", "id": "88ccadcb-090b-46f7-8d36-8a7b2e504bdd"}, {"attributes": {"nonselection_glyph": null, "tags": [], "selection_glyph": null, "id": "d0e3b150-0b99-4184-82b8-8b80ebd623e5", "data_source": {"type": "ColumnDataSource", "id": "760586c9-08ed-44ca-8445-7480d0bc5d1e"}, "glyph": {"type": "Circle", "id": "e0b9a64c-a6a6-4b0c-abda-a5ad8059aea9"}, "doc": "6731529c-3542-4cc5-951f-71c518b147b6"}, "type": "GlyphRenderer", "id": "d0e3b150-0b99-4184-82b8-8b80ebd623e5"}, {"attributes": {"tags": [], "format": "%.3f", "doc": "6731529c-3542-4cc5-951f-71c518b147b6", "id": "e980e21a-f720-479c-9530-b563f5e4af6e"}, "type": "PrintfTickFormatter", "id": "e980e21a-f720-479c-9530-b563f5e4af6e"}, {"attributes": {"geometries": [], "tags": [], "doc": "6731529c-3542-4cc5-951f-71c518b147b6", "id": "7e3c23cd-876c-4fda-9c3f-0100a91cf7df"}, "type": "ToolEvents", "id": "7e3c23cd-876c-4fda-9c3f-0100a91cf7df"}, {"attributes": {"tags": [], "doc": "6731529c-3542-4cc5-951f-71c518b147b6", "plot": {"type": "GMapPlot", "id": "155420e4-a553-4715-b974-fb88f0b4b267"}, "id": "dbdc469c-8c74-4b75-9382-fd918b232c07", "dimensions": ["width", "height"]}, "type": "WheelZoomTool", "id": "dbdc469c-8c74-4b75-9382-fd918b232c07"}, {"attributes": {"tags": [], "tool": {"type": "BoxSelectTool", "id": "16ba865b-0bcf-4025-bb1c-55c02e787171"}, "doc": "6731529c-3542-4cc5-951f-71c518b147b6", "id": "ababdab1-9653-41fc-90c1-f7674975bc0c"}, "type": "BoxSelection", "id": "ababdab1-9653-41fc-90c1-f7674975bc0c"}, {"attributes": {"ticker": {"type": "BasicTicker", "id": "88ccadcb-090b-46f7-8d36-8a7b2e504bdd"}, "tags": [], "formatter": {"type": "NumeralTickFormatter", "id": "ebc85af5-c4a6-48ab-803f-80c807ea7db1"}, "plot": {"type": "GMapPlot", "id": "155420e4-a553-4715-b974-fb88f0b4b267"}, "id": "641702a6-bd56-4943-acd2-6f78fce2a962", "major_tick_in": 0, "axis_label": "lat", "doc": "6731529c-3542-4cc5-951f-71c518b147b6"}, "type": "LinearAxis", "id": "641702a6-bd56-4943-acd2-6f78fce2a962"}, {"attributes": {"tags": [], "names": [], "plot": {"type": "GMapPlot", "id": "155420e4-a553-4715-b974-fb88f0b4b267"}, "id": "16ba865b-0bcf-4025-bb1c-55c02e787171", "renderers": [], "doc": "6731529c-3542-4cc5-951f-71c518b147b6", "dimensions": ["width", "height"]}, "type": "BoxSelectTool", "id": "16ba865b-0bcf-4025-bb1c-55c02e787171"}, {"attributes": {"tags": [], "doc": "6731529c-3542-4cc5-951f-71c518b147b6", "id": "72cedfe9-920c-4c11-be32-5189f63b5787"}, "type": "Range1d", "id": "72cedfe9-920c-4c11-be32-5189f63b5787"}, {"attributes": {"mantissas": [2, 5, 10], "doc": "6731529c-3542-4cc5-951f-71c518b147b6", "tags": [], "id": "cb02f8fb-b62b-426e-8ad4-a6f898914d2e"}, "type": "BasicTicker", "id": "cb02f8fb-b62b-426e-8ad4-a6f898914d2e"}, {"attributes": {"children": [{"type": "GMapPlot", "id": "155420e4-a553-4715-b974-fb88f0b4b267"}], "tags": [], "doc": "6731529c-3542-4cc5-951f-71c518b147b6", "id": "f681dd1b-500b-4039-8dfe-371ed70636af"}, "type": "PlotContext", "id": "f681dd1b-500b-4039-8dfe-371ed70636af"}];
    Bokeh.load_models(all_models);
    var model = Bokeh.Collections(modeltype).get(modelid);
    var view = new model.default_view({model: model, el: '#5f779b9e-2494-468c-8c2a-1269e03f5e88'});
    Bokeh.index[modelid] = view
});