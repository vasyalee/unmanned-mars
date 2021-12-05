let titles = ['Acidalia Planitia', 'Gale Crater', 'Olympus Mons', 'Valles Marineris']
let infos = ['Acidalia Planitia is a plain on Mars, between the Tharsis volcanic province and Arabia Terra to the north of Valles Marineris, centered at 49.8°N 339.3°E. Most of this region is found in the Mare Acidalium quadrangle,but a small part is in the Ismenius Lacus quadrangle.', 'Gale is a crater, and probable dry lake, in the northwestern part of the Aeolis quadrangle on Mars. It is 154 km (96 mi) in diameter and estimated to be about 3.5-3.8 billion years old.', 'Olympus Mons (Latin for Mount Olympus) is an enormous shield volcano on the planet Mars. The volcano has a height of over 21.9 km (13.6 mi or 72,000 ft) as measured by the Mars Orbiter Laser Altimeter.', 'Valles Marineris (Latin for Mariner Valleys), named after the Mariner 9 Mars orbiter of 1971–72 which discovered it) is a system of canyons that runs along the Martian surface east of the Tharsis region. At more than 4,000 km (2,500 mi) long, 200 km (120 mi) wide and up to 7 km (23,000 ft) deep ']
let links = ['https://en.wikipedia.org/wiki/Acidalia_Planitia', 'https://en.wikipedia.org/wiki/Gale_(crater)', 'https://en.wikipedia.org/wiki/Olympus_Mons', 'https://en.wikipedia.org/wiki/Valles_Marineris']
let app = new Vue({
    el: '#app',
    data: {
      title: 'Acidalia Planitia',
      sectionText: 'Acidalia Planitia is a plain on Mars, between the Tharsis volcanic province and Arabia Terra to the north of Valles Marineris, centered at 49.8°N 339.3°E. Most of this region is found in the Mare Acidalium quadrangle,but a small part is in the Ismenius Lacus quadrangle.',
      link: 'https://en.wikipedia.org/wiki/Acidalia_Planitia'
    },
    methods: {
      showInfo: function (object) {
        if (object === 'Acidalia') {
            this.title = titles[0]
            this.sectionText = infos[0]
            this.link = links[0]
        }
        else if (object === 'Gale') {
            this.title = titles[1]
            this.sectionText = infos[1]
            this.link = links[1]
        }
        else if (object === 'Olympus') {
          this.title = titles[2]
          this.sectionText = infos[2]
          this.link = links[2]
        }
        else if (object === 'Valles') {
          this.title = titles[3]
          this.sectionText = infos[3]
          this.link = links[3]
        }
      }
    }
  })

