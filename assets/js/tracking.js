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
   * Tracks a page view, along with article details.
   *
   * @method
   */
  function initialize() {
    var articleTitle = document.querySelector('.article-title').textContent
    var articlePath = location.pathname

    if (articleTitle && articlePath) {
      mixpanel.track('Page view', { title: articleTitle, path: articlePath })
    } else {
      mixpanel.track('Page view', { title: 'Home page', path: '/' })
    }
  }

  if (document.readyState === 'complete') {
    initialize();
  } else {
    document.addEventListener('DOMContentLoaded', initialize, false);
  }
}(window));
