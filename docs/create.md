# CSSCSS
#### Utility-first CSS framework.

# Create

## Location
Classes for controlling the positioning of elements on the page

* Position: "pos-rel" sets the position of an element to relative
  * variations:
    * ["rel","abs","fix","fixed"]
* Edge Alignment: "top-0" and "top-25p" sets the top position of an element to 0 and 25% respectively.
  * types: ("top-","left-","right-","bottom-")
  * variations:
    * ["0","25p","50p","75p"]
* Z Index: "z-300" sets the z-index of an element to 300
  * types: ("z-300" or "z--300") for positive 300 or negative 300 z index
  * variations ("z-300" or "z--999"):
    * [1,2,3,5,10,50,100,200,300,400,500,600,700,800,999,1000,1001]
* Translate: <"z-300" sets the z-index of an element to 300>
  * types: ("z-300" or "z--300") for positive 300 or negative 300 z index
  * variations ("z-300" or "z--999"):
    * [1,2,3,5,10,50,100,200,300,400,500,600,700,800,999,1000,1001]


## Size
Classes for controlling scale of elements

* Size: "w-50" and "w-10" sets the width of an element to 50% and 10% respectively
  * types: ("w-","h-") for width and height
  * percentage variations ("w-50" or "w-10"):
    * [10,20,25,30,33,40,50, ... ,90,100]
  * viewport percentage variations ("w-100vw" or "h-100vh"):
    * [100]
  * maximum viewport percentage variations (has "max" in the middle, ie "w-max-80vw" or "h-max-100vh"):
    * subtypes (ends with "vw" or "vh"):
    * [80,100]
  * pixel variations (ends in "px", ie "h-50px" or "w-100px"):
    * [50,80,100,120,150,200,250,220,300,400,450,500,600,650,700,1080]
  * maximum pixel variations (has "max" in the middle, ie "w-max-250px" or "w-max-200px"):
    * [50,80,100,120,150,200,250,220,300,400,450,500,600,650,700,1080]


## Spacing
Classes for controlling the spaces around and inside of elements

* Padding: "pa-5" and "pa-0" sets all paddings of an element to 25px 0 respectively.
  * types: ("pa-","pt-","pb-","pl-","pr-","px-","py-")
  * variations:
    * ["0","1","2","3","4","5","6","7","8","9","100","150","200"]
* Margin: "ma-5" and "ma-0" sets all paddings of an element to 25px 0 respectively.
  * types: ("ma-","mt-","mb-","ml-","mr-","mx-","my-")
  * variations:
    * ["0","1","2","3","4","5","6","7","8","9","100","150","200"]