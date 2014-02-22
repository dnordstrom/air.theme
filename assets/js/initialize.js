;(function (window, undefined) {
  /**
   * Reverses email addresses in "mailtoreverse:" links, hopefully
   * preventing some spam. For example, instead of "mailto:me@me.com"
   * you would use "mailtoreverse:moc.em@em".
   */
  function reverseMailtoAddresses() {
    var links = document.querySelectorAll('a[href^="mailtoreverse:"]')
    var index = links.length

    while (--index) {
      links[i].setAttribute('href', 'mailto:' +
        links[index].getAttribute('href').  // "mailto:moc.em@em"
        split(':')[1].                      // "moc.em@em"
        split('').reverse().join('')        // "me@me.com"
      )
    }
  }

  function initialize() {
    reverseMailtoAddresses()
  }

  if (document.readyState === 'complete') {
    initialize()
  } else {
    document.addEventListener('DOMContentLoaded', initialize, false)
  }
}(window))