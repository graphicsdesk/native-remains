import scrollama from "scrollama";
import { selection, transition } from "d3";
require("d3");

  function setup() {        
  d3.selectAll("[data-name='other'] path").classed('hidden', true) //hide everything but Columbia
  d3.selectAll("#Columbia_text").classed('hidden', true)
  d3.selectAll("#Harvard_text").classed('hidden', true)
      //d3.selectAll(".g-artboard").classed('scoot_left', true)          //scoot artboard left to center the Columbia circle
  d3.selectAll("#bubble_chart").classed('scoot_left', true)
      d3.selectAll("#step-seven").classed('transparent', true).classed('spacer_margin', true)        //these steps are for formatting, set to transparent
  d3.selectAll("#step-eight").classed('transparent', true).classed('spacer_margin', true)
    }

  function reveal() {
  d3.selectAll("[data-name='other'] path").classed('hidden', false) //show all circles
      //d3.selectAll("[data-name='other'] path").classed('fade_in', true)
      d3.selectAll("#bubble_chart").classed('zoomed_out', true)
  d3.selectAll("#bubble_chart").classed('scoot_right', true)
  }

    function col_bold() {
  d3.selectAll("#Oglala_Sioux_Tribe-2").style('stroke', 'black')      
      d3.selectAll("#Oglala_Sioux_Tribe-4").style('stroke', 'black')
      d3.selectAll("#Oglala_Sioux_Tribe-6").style('stroke', 'black')
    }

  function col_unbold() {
  d3.selectAll("#Oglala_Sioux_Tribe-2").style('stroke', 'none')
      d3.selectAll("#Oglala_Sioux_Tribe-4").style('stroke', 'none')
      d3.selectAll("#Oglala_Sioux_Tribe-6").style('stroke', 'none')
    }

  function h_bold() {
      d3.selectAll("#Columbia").classed('half_opacity', true)
  d3.selectAll("#Brown").classed('half_opacity', true)
  d3.selectAll("#Cornell").classed('half_opacity', true)
  d3.selectAll("#Penn").classed('half_opacity', true)
  d3.selectAll("#Yale").classed('half_opacity', true)
  d3.selectAll("#Princeton").classed('half_opacity', true)
  d3.selectAll("#Dartmouth").classed('half_opacity', true)
  d3.selectAll("#columbia_label").classed('half_opacity', true)
  d3.selectAll("#Columbia_text").classed('half_opacity', true)
    }

  function h_unbold() {
      d3.selectAll("#Columbia").classed('full_opacity', true)
  d3.selectAll("#Brown").classed('full_opacity', true)
  d3.selectAll("#Cornell").classed('full_opacity', true)
  d3.selectAll("#Penn").classed('full_opacity', true)
  d3.selectAll("#Yale").classed('full_opacity', true)
  d3.selectAll("#Princeton").classed('full_opacity', true)
  d3.selectAll("#Dartmouth").classed('full_opacity', true)
  d3.selectAll("#columbia_label").classed('full_opacity', true)
  d3.selectAll("#Columbia_text").classed('full_opacity', true)
    }

  function iso_pueblo() {
  d3.selectAll("[data-name='Pueblo_of_Jemez,_New_Mexico'] path").classed("lighten_red", true)
  }

  function uniso_pueblo() {
  d3.selectAll("[data-name='Pueblo_of_Jemez,_New_Mexico'] path").classed("darken_red", true)
  }
    
    /* Scrollytelling code goes under here */
    setup()
  
  d3.select("#step-one").on('stepin', function(e) {
  col_unbold()
  d3.selectAll("#Columbia_text").classed('fade_in', true)
    }) 
  
  d3.select("#step-two").on('stepin', function(e) {
  col_bold()
    })

  d3.select("#step-three").on('stepin', function(e) {
  col_unbold()
  reveal()
    })

    d3.select("#step-four").on('stepin', function(e) {
  h_bold()
    })

  d3.select("#step-five").on('stepin', function(e) {
  iso_pueblo()
    })

  d3.select("#step-six").on('stepin', function(e) {
  uniso_pueblo()
  h_unbold()
  d3.selectAll("#Harvard_text").classed('fade_in', true)
    })

  d3.select("#step-seven").on('stepin', function(e) {})
  d3.select("#step-eight").on('stepin', function(e) {})

  const scroller = scrollama();

scroller
  .setup({
    step: "#scrolly .scrolly-overlay .step",
    offset: 0.5,
    debug: false
  })
  .onStepEnter(function({ element, index, direction}) {
    const event = new CustomEvent('stepin', { detail: { direction: direction } })
    element.dispatchEvent(event);
  })
  .onStepExit(function({ element, index, direction }) {
    const event = new CustomEvent('stepout', { detail: { direction: direction } })
    element.dispatchEvent(event);
  });

window.addEventListener("resize", scroller.resize);
(function() {
    // only want one resizer on the page
    if (document.documentElement.className.indexOf("g-resizer-v3-init") > -1) return;
    document.documentElement.className += " g-resizer-v3-init";
    // require IE9+
    if (!("querySelector" in document)) return;
    function resizer() {
        var elements = Array.prototype.slice.call(document.querySelectorAll(".g-artboard[data-min-width]")),
            widthById = {};
        elements.forEach(function(el) {
            var parent = el.parentNode,
                width = widthById[parent.id] || parent.getBoundingClientRect().width,
                minwidth = el.getAttribute("data-min-width"),
                maxwidth = el.getAttribute("data-max-width");
          
            widthById[parent.id] = width;
            console.log(minwidth);
            console.log(maxwidth);
            if (+minwidth <= width && (+maxwidth >= width || maxwidth === null)) {
                el.style.display = "block";
            } else {
                el.style.display = "none";
            }
        });
        try {
            if (window.parent && window.parent.$) {
                window.parent.$("body").trigger("resizedcontent", [window]);
            }
            if (window.require) {
                require(['foundation/main'], function() {
                    require(['shared/interactive/instances/app-communicator'], function(AppCommunicator) {
                        AppCommunicator.triggerResize();
                    });
                });
            }
        } catch(e) { console.log(e); }
    }

    document.addEventListener('DOMContentLoaded', resizer);
    // feel free to replace throttle with _.throttle, if available
    window.addEventListener('resize', throttle(resizer, 200));        

    function throttle(func, wait) {
        // from underscore.js
        var _now = Date.now || function() { return new Date().getTime(); },
            context, args, result, timeout = null, previous = 0;
        var later = function() {
            previous = _now();
            timeout = null;
            result = func.apply(context, args);
            if (!timeout) context = args = null;
        };
        return function() {
            var now = _now(), remaining = wait - (now - previous);
            context = this;
            args = arguments;
            if (remaining <= 0 || remaining > wait) {
                if (timeout) {
                    clearTimeout(timeout);
                    timeout = null;
                }
                previous = now;
                result = func.apply(context, args);
                if (!timeout) context = args = null;
            } else if (!timeout && options.trailing !== false) {
                timeout = setTimeout(later, remaining);
            }
            return result;
        };
    }

    
})();