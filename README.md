# VST_Mockups

##API
`http://.../api/routes`
```
[
  {
    "id": 1,
    "title": "Cincinnati to Rio de Janiero,
    "plot_div": "<div class="plotdiv" id="1e92839b-8699-4877-9abf-e4983930a14a"></div>",
    "plot_script": "Bokeh.$(function() { ... });",
    "cards": [
      {
        "id": 1,
        "location": "Cincinnati, Ohio, US",
        "environment": "Truck (land)",
        "level_of_aggregation": "Pallet",
        "status": "Stationary",
        "duration": 24
      },
      {
        "id": 2,
        "location": "Charleston, South Carolina, US",
        "environment": "Seatainer (land)",
        "level_of_aggregation": "Pallet",
        "status": "Stationary",
        "duration": 168
      },
      {
        "id": 3,
        "location": "Ocean",
        "environment": "Seatainer (ocean)",
        "level_of_aggregation": "Pallet",
        "status": "Stationary",
        "duration": 288
      },
      {
        "id": 4,
        "location": "Rio de Janiero, Rio de Janeiro, BR",
        "environment": "Warehouse/DC",
        "level_of_aggregation": "Pallet",
        "status": "Stationary",
        "duration": 720
      },
      {
        "id": 5,
        "location": "Rio de Janiero, Rio de Janeiro, BR",
        "environment": "Warehouse/DC",
        "level_of_aggregation": "Store storage",
        "status": "Stationary",
        "duration": 336
      },
      {
        "id": 6
        "location": "Rio de Janiero, Rio de Janeiro, BR",
        "environment": "Home",
        "level_of_aggregation": "Product",
        "status": "Stationary",
        "duration": 1440
      }
    ]
  },
  {
    "id": 2,
    "title": "Austin to Mexico City",
    ...
  }
]
```
***
`http://.../api/routes/1`
```
{
  "id": 1,
  "title": "Cincinnati to Rio de Janiero,
  "plot_div": "<div class="plotdiv" id="1e92839b-8699-4877-9abf-e4983930a14a"></div>",
  "plot_script": "Bokeh.$(function() { ... });",
  "cards": [
    {
      "id": 1,
      "location": "Cincinnati, Ohio, US",
      "environment": "Truck (land)",
      "level_of_aggregation": "Pallet",
      "status": "Stationary",
      "duration": 24,
      "model_type": "Simple",
      "descriptors": [
        "id": 1,
        "label": "corner",
        "cases": 4,
        "time_constant": 2
      ]
    },
    {
      "id": 2,
      "location": "Charleston, South Carolina, US",
      ...
  ]
}
```
