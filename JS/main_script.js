/*Animate On Scroll (library)*/
AOS.init({
  disable: "mobile",
  startEvent: "load",
  duration: 1200
});



Highcharts.chart('area-negative-demo', {
    chart: {
        type: 'area'
    },
    title: {
        text: 'Area chart with negative values'
    },
    xAxis: {
        categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'John',
        data: [5, 3, 4, 7, 2]
    }, {
        name: 'Jane',
        data: [2, -2, -3, 2, 1]
    }, {
        name: 'Joe',
        data: [3, 4, 4, -2, 5]
    }]
});





/*NAVBAR*/
!(function(o) {
  "use strict";
  o(".page-scroll a").bind("click", function(t) {
    var l = o(this);
    o("html, body")
      .stop()
      .animate(
        { scrollTop: o(l.attr("href")).offset().top - 50 },
        1250,
        "easeInOutExpo"
      ), t.preventDefault();
  }), o("body").scrollspy({ target: ".navbar-fixed-top", offset: 51 }), o(
    ".navbar-collapse ul li a"
  ).click(function() {
    o(".navbar-toggle:visible").click();
  }), o("#mainNav").affix({ offset: { top: 100 } }), o(function() {
    o("body")
      .on("input propertychange", ".floating-label-form-group", function(t) {
        o(this).toggleClass(
          "floating-label-form-group-with-value",
          !!o(t.target).val()
        );
      })
      .on("focus", ".floating-label-form-group", function() {
        o(this).addClass("floating-label-form-group-with-focus");
      })
      .on("blur", ".floating-label-form-group", function() {
        o(this).removeClass("floating-label-form-group-with-focus");
      });
  });
})(jQuery);

/*USER JOURNEY CHART: Area chart with negative values*/
Highcharts.chart("myChart1", {
  chart: {
    type: "areaspline"
  },
  title: {
    text: "Rachel's User Journey: Sushi Fuze app",
    align: "center",
  },
  subtitle: {
    text: '<b>Goal:</b> Order dinner online and have it delivered to her apartment. <br/><b>Scenario:</b> Busy finishing up work she brought home from the office. <br/><b>Constraint:</b> With her working memory preoccupied, Rachel wants to use as little mental energy as possible.',
     align: "left",
     useHTML: true,
     align: "center",
    },
  yAxis: {
    title: { text: "" },
    endOnTick: false,
    labels: {
      formatter: function() {
          // custom formatter
          if (this.value == 0) {
            return "Mood";
           } 
          if (this.value == 2) {
            return '<img src="https://res.cloudinary.com/dgoasjucg/image/upload/v1502899110/portfolio/Mood-positive.svg" alt="" style="vertical-align: middle; width: 32px; height: 32px"/>';
           } 
          if (this.value == -2) {
            return '<img src="https://res.cloudinary.com/dgoasjucg/image/upload/v1502899099/portfolio/Mood-negative.svg" alt="" style="vertical-align: middle; width: 32px; height: 32px"/>';
           } else {
            return "";
          } 
        },
       useHTML: true,
      },
  },
  xAxis: {
    title: { text: "" },
    tickInterval: 6,
    categories: [
      "Order Phase",
      "l",
      "l",
      "l",
      "l",
      "l",
      "Checkout Phase",
      "l",
      "l",
      "l",
      "l",
      "l",
      "Recieve Phase"
    ],
    gridLineWidth: 0
  },
  credits: {
    enabled: false
  },

  tooltip: {
    backgroundColor: null,
    borderWidth: 0,
    shadow: false,
    crosshairs: true,
    useHTML: true,
    formatter: function() {
      return (
        "<b>Thought: </b>" +
        this.point.myData +
        "<br/><b>User Action: </b>" +
        this.point.myData2 +
        " "
      );
    },
  },

  legend: {
     align: "center",
          },
  
   plotOptions: {
        series: {
            events: {
                legendItemClick: function () {                
                        return false;
                    }
                }
            }
        },  
  
  series: [
    {
      name: "Rachel",
      data: [
        {
          y: 0,
          myData:
            "<i>I'll order out, since I need something quick and easy for dinner.</i>",
          myData2: "Open Sushi Fuze website"
        },
        {
          y: -1,
          myData:
            "<i>Yet I seem to be blanking on what my login credentials were.</i>",
          myData2: "Exit Sushi Fuze website"
        },
        {
          y: 2,
          myData:
            "<i>Oh yeah, I'm still logged into the Sushi Fuze app on my phone, I’ll just order from there.</i>",
          myData2: "Open Sushi Fuze app"
        },
        {
          y: 2.5,
          myData:
            "<i>My mind's already set on salmon, let me just find it.</i>",
          myData2: "Search entree menu"
        },
        {
          y: 3.5,
          myData:
            "<i>What was that side dish I liked to get with the salmon?</i>",
          myData2: "Head to profile, click ‘favorite dishes', select dish"
        },
        {
          y: -2,
          myData:
            "<i>I want the salmon dish prepared without any spices, but the <br/>app does not provide a comment option for placing special orders.</i>",
          myData2: "Unable to request alternative meal preparations"
        },
        {
          y: 1,
          myData: "<i>I believe that's everything, let me double-check.</i>",
          myData2: "Head to cart"
        },
        {
          y: 2,
          myData: "<i>Yep, that's everything.</i>",
          myData2: "Head to checkout"
        },
        {
          y: 3,
          myData:
            "<i>Thankfully, the address and credit card fields autofill with <br/>info pulled from my profile, saving me a few steps during checkout.</i>",
          myData2: "Approve order"
        },
        {
          y: 3.9,
          myData:
            "<i>Ok, I have confirmation my order went through and should arrive in about 40 minutes, <br/>that gives me enough time to complete an important business call.</i>",
          myData2:
            "Arrive at confirmation screen, click link to tracking screen, <br/>return and exit from confirmation screen"
        },
        {
          y: 3.5,
          myData:
            "<i>I finished my call. The delivery person seems to be taking longer than normal. Was there a delay?</i>",
          myData2: "Open Sushi Fuze app"
        },
        {
          y: 1,
          myData:
            "<i>Wait, I can't seem to find the tracking tool again. Shouldn't <br/>this feature still be accessible after exiting the confirmation screen?</i>",
          myData2: "Search for tracking feature"
        },
        {
          y: 2,
          myData:
            "<i>Oh, it's also located in the widget screen. The delivery should arrive in 5 minutes or so.</i>",
          myData2: "Find tracking feature in widget"
        },
        {
          y: 3.5,
          myData:
            "<i>I received a notification that my food has arrived, along with info <br/>on the delivery person’s name and picture, helpful for when I buzz them in.</i>",
          myData2: "Recieve digital notification that order has arrived"
        },
        {
          y: 3.9,
          myData: "<i>Get in my belly!</i>",
          myData2: "Buzz in delivery person, receive food, provide tip"
        }
      ]
    }
  ]
});
