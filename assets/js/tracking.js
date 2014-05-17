/**
 * Tracking of page views.
 *
 * @author  L. Daniel Nordstrom <d@mrnordstrom.com>
 * @license MPL 2.0
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

;(function (window, undefined) {
  'use strict'

  /**
   * Performs the actual initialization. Should run when DOM is ready.
   *
   * @method
   */
  function initialize() {
    runMixpanelInitialization()
    trackPageview()
  }

  /**
   * Simply runs the Mixpanel code given for initialization.
   *
   * @method
   */
  runMixpanelInitialization() {
    (function(e,b) {
      if (!b.__SV) {
        var a,f,i,g;
        window.mixpanel = b;
        b._i = [];
        b.init = function(a,e,d) {
          function f(b,h) {
            var a=h.split(".");
            2 == a.length && (b=b[a[0]],h=a[1]);
            b[h] = function() {
              b.push([h].concat(Array.prototype.slice.call(arguments,0)))
            }
          }
          var c = b;
          "undefined" !== typeof d ? c = b[d] = [] : d = "mixpanel";
          c.people = c.people || [];
          c.toString = function(b) {
            var a = "mixpanel";
            "mixpanel" !== d && (a += "." + d);
            b || (a += " (stub)");
            return a
          };
          c.people.toString = function() {
            return c.toString(1) + ".people (stub)"
          };
          i = "disable track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config people.set people.set_once people.increment people.append people.track_charge people.clear_charges people.delete_user".split(" ");
          for (g=0; g < i.length; g++) f(c, i[g]);
          b._i.push([a,e,d])
        };
        b.__SV = 1.2;
        a = e.createElement("script");
        a.type = "text/javascript";
        a.async = !0;
        a.src = ("https:" === e.location.protocol ? "https:" : "http:") + '//cdn.mxpnl.com/libs/mixpanel-2.2.min.js';
        f = e.getElementsByTagName("script")[0];
        f.parentNode.insertBefore(a,f)
      }
    })(document,window.mixpanel||[]);

    mixpanel.init("c213110a76ba2fc74c7268ff00df144a");
  }

  /**
   * Tracks a page view, along with article details.
   *
   * @method
   */
  function trackPageview() {
    var articleTitle = document.querySelector('.article-title').textContent
    var articlePath = location.pathname

    if (articleTitle && articlePath) {
      mixpanel.track('Page view', { title: 'Home page', path: '/' })
    } else {
      mixpanel.track('Page view', { title: articleTitle, path: articlePath })
    }
  }

  if (document.readyState === 'complete') {
    initialize();
  } else {
    document.addEventListener('DOMContentLoaded', initialize, false);
  }
}(window));
