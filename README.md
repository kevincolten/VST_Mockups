# VST_Mockups

##API
`GET http://.../api/routes`
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
        "duration": 24,
        "route_id": 1
      },
      {
        "id": 2,
        "location": "Charleston, South Carolina, US",
        "environment": "Seatainer (land)",
        "level_of_aggregation": "Pallet",
        "status": "Stationary",
        "duration": 168,
        "route_id": 1
      },
      {
        "id": 3,
        "location": "Ocean",
        "environment": "Seatainer (ocean)",
        "level_of_aggregation": "Pallet",
        "status": "Stationary",
        "duration": 288,
        "route_id": 1
      },
      {
        "id": 4,
        "location": "Rio de Janiero, Rio de Janeiro, BR",
        "environment": "Warehouse/DC",
        "level_of_aggregation": "Pallet",
        "status": "Stationary",
        "duration": 720,
        "route_id": 1
      },
      {
        "id": 5,
        "location": "Rio de Janiero, Rio de Janeiro, BR",
        "environment": "Warehouse/DC",
        "level_of_aggregation": "Store storage",
        "status": "Stationary",
        "duration": 336,
        "route_id": 1
      },
      {
        "id": 6
        "location": "Rio de Janiero, Rio de Janeiro, BR",
        "environment": "Home",
        "level_of_aggregation": "Product",
        "status": "Stationary",
        "duration": 1440,
        "route_id": 1
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
`GET http://.../api/routes/1`
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
      "route_id": 1,
      "descriptors": [
        {
          "id": 1,
          "label": "corner",
          "cases": 4,
          "time_constant": 2,
          "card_id": 1
        },
        {
          "id": 2,
          "label": "face2",
          "cases": 12,
          "time_constant": 4,
          "card_id": 1
        },
        ...
      ]
    },
    {
      "id": 2,
      "location": "Charleston, South Carolina, US",
      ...
  ]
}
```
***
`GET http://.../api/cards/1`
```
{
  "id": 1,
  "location": "Cincinnati, Ohio, US",
  "environment": "Truck (land)",
  "level_of_aggregation": "Pallet",
  "status": "Stationary",
  "duration": 24,
  "model_type": "Simple",
  "route_id": 1,
  "descriptors": [
    {
      "id": 1,
      "label": "corner",
      "cases": 4,
      "time_constant": 2,
      "card_id": 1
    },
    {
      "id": 2,
      "label": "face2",
      "cases": 12,
      "time_constant": 4,
      "card_id": 1
    },
    ...
  ]
}
```
***
`POST/PUT/DELETE http://.../api/cards/{1}`
```
{
  "id": 1, //if PUT/DELETE
  "location": "Cincinnati, Ohio, US",
  "environment": "Truck (land)",
  "level_of_aggregation": "Pallet",
  "status": "Stationary",
  "duration": 24,
  "model_type": "Simple",
  "route_id": 1
}
```
***
`POST/PUT/DELETE http://.../api/descriptors/{1}`
```
{
  "id": 1, //if PUT/DELETE
  "label": "corner",
  "cases": 4,
  "time_constant": 2,
  "card_id": 1
}
```
