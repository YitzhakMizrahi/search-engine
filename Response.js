export default {
  kind: 'customsearch#search',
  url: {
    type: 'application/json',
    template:
      'https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json',
  },
  queries: {
    request: [
      {
        title: 'Google Custom Search - Test',
        totalResults: '5360000000',
        searchTerms: 'Test',
        count: 10,
        startIndex: 1,
        inputEncoding: 'utf8',
        outputEncoding: 'utf8',
        safe: 'off',
        cx: '2d21e130339db02b2',
      },
    ],
    nextPage: [
      {
        title: 'Google Custom Search - Test',
        totalResults: '5360000000',
        searchTerms: 'Test',
        count: 10,
        startIndex: 11,
        inputEncoding: 'utf8',
        outputEncoding: 'utf8',
        safe: 'off',
        cx: '2d21e130339db02b2',
      },
    ],
  },
  context: {
    title: 'Google',
  },
  searchInformation: {
    searchTime: 0.461021,
    formattedSearchTime: '0.46',
    totalResults: '5360000000',
    formattedTotalResults: '5,360,000,000',
  },
  items: [
    {
      kind: 'customsearch#result',
      title: 'Speedtest by Ookla - The Global Broadband Speed Test',
      htmlTitle: 'Speedtest by Ookla - The Global Broadband Speed <b>Test</b>',
      link: 'https://www.speedtest.net/',
      displayLink: 'www.speedtest.net',
      snippet:
        'Test your Internet connection bandwidth to locations around the world with this \ninteractive broadband speed test from Ookla.',
      htmlSnippet:
        '<b>Test</b> your Internet connection bandwidth to locations around the world with this <br>\ninteractive broadband speed <b>test</b> from Ookla.',
      cacheId: '5RD1THTfC6wJ',
      formattedUrl: 'https://www.speedtest.net/',
      htmlFormattedUrl: 'https://www.speed<b>test</b>.net/',
      pagemap: {
        cse_thumbnail: [
          {
            src:
              'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTspTDHKn5XIGdkj9cL8E_ZSX-1elwycZhdg9sZwHiLA5Gu62GglNiZwq66',
            width: '225',
            height: '225',
          },
        ],
        metatags: [
          {
            'og:image': '//b.cdnst.net/images/share-logo.png',
            'twitter:app:id:googleplay': 'org.zwanoo.android.speedtest',
            'og:type': 'website',
            'og:image:width': '382',
            'twitter:card': 'app',
            'twitter:title':
              'Speedtest by Ookla - The Global Broadband Speed Test',
            'og:site_name': 'Speedtest.net',
            'og:title': 'Speedtest by Ookla - The Global Broadband Speed Test',
            'og:image:height': '200',
            'twitter:app:id:ipad': '300704847',
            'og:image:type': 'image/png',
            'twitter:app:id:iphone': '300704847',
            'og:description':
              'Test your Internet connection bandwidth to locations around the world with this interactive broadband speed test from Ookla',
            'twitter:image': '//b.cdnst.net/images/share-logo.png',
            'fb:app_id': '581657151866321',
            'twitter:site': '@speedtest',
            viewport: 'width=device-width, initial-scale=1.0',
            'twitter:description':
              'Test your Internet connection bandwidth to locations around the world with this interactive broadband speed test from Ookla',
            'og:url': 'https://www.speedtest.net/',
          },
        ],
        cse_image: [
          {
            src: 'https://b.cdnst.net/images/gauge-gradient-ul-single-web.png',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title:
        'Find online tests, practice test, and test creation software | Test.com',
      htmlTitle:
        'Find online <b>tests</b>, practice <b>test</b>, and <b>test</b> creation software | <b>Test</b>.com',
      link: 'https://www.test.com/',
      displayLink: 'www.test.com',
      snippet:
        'Online tests and testing for certification, practice tests, test making tools, medical \ntesting and more.',
      htmlSnippet:
        'Online <b>tests</b> and <b>testing</b> for certification, practice <b>tests</b>, <b>test</b> making tools, medical <br>\n<b>testing</b> and more.',
      cacheId: 'S92tylTr1V8J',
      formattedUrl: 'https://www.test.com/',
      htmlFormattedUrl: 'https://www.<b>test</b>.com/',
      pagemap: {
        cse_thumbnail: [
          {
            src:
              'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQtJj90UIT0M-cvDaJ30f0yIYZzqjQmi1QDEBzW0YL1BefP9dHTcJBeWtJd',
            width: '250',
            height: '201',
          },
        ],
        metatags: [
          {
            viewport: 'width=device-width, initial-scale=1.0',
          },
        ],
        cse_image: [
          {
            src: 'https://www.test.com/img/Gauge-computer.png',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Take a Test',
      htmlTitle: 'Take a <b>Test</b>',
      link: 'https://implicit.harvard.edu/',
      displayLink: 'implicit.harvard.edu',
      snippet:
        "On the next page you'll be asked to select an Implicit Association Test (IAT) from \na list of possible topics . We will also ask you (optionally) to report your attitudes ...",
      htmlSnippet:
        'On the next page you&#39;ll be asked to select an Implicit Association <b>Test</b> (IAT) from <br>\na list of possible topics . We will also ask you (optionally) to report your attitudes&nbsp;...',
      cacheId: 'D9S-lVHah4kJ',
      formattedUrl: 'https://implicit.harvard.edu/',
      htmlFormattedUrl: 'https://implicit.harvard.edu/',
      pagemap: {
        metatags: [
          {
            viewport: 'width=device-width, initial-scale=1',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Mobile-Friendly Test - Google Search Console',
      htmlTitle: 'Mobile-Friendly <b>Test</b> - Google Search Console',
      link: 'https://search.google.com/test/mobile-friendly',
      displayLink: 'search.google.com',
      snippet:
        'About this tool. Test how easily a visitor can use your page on a mobile device. · \nWhy mobile? The web is being accessed more and more on mobile devices.',
      htmlSnippet:
        'About this tool. <b>Test</b> how easily a visitor can use your page on a mobile device. &middot; <br>\nWhy mobile? The web is being accessed more and more on mobile devices.',
      cacheId: 'J_vGwOd2geIJ',
      formattedUrl: 'https://search.google.com/test/mobile-friendly',
      htmlFormattedUrl: 'https://search.google.com/<b>test</b>/mobile-friendly',
      pagemap: {
        metatags: [
          {
            'application-name': 'Search Test Tool',
            referrer: 'origin',
            'apple-mobile-web-app-status-bar-style': 'black',
            'msapplication-tap-highlight': 'no',
            viewport:
              'initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no',
            'apple-mobile-web-app-capable': 'yes',
            'apple-mobile-web-app-title': 'Search Test Tool',
            'mobile-web-app-capable': 'yes',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Ariana Grande - test drive (official audio) - YouTube',
      htmlTitle: 'Ariana Grande - <b>test</b> drive (official audio) - YouTube',
      link: 'https://www.youtube.com/watch?v=1zNYZd94ui8',
      displayLink: 'www.youtube.com',
      snippet:
        'Feb 18, 2021 ... "test drive” from Positions (Deluxe). Listen & download here: http://arianagrande.\nlnk.to/positionsdlx ▻Subscribe to Ariana Grande: ...',
      htmlSnippet:
        'Feb 18, 2021 <b>...</b> &quot;<b>test</b> drive” from Positions (Deluxe). Listen &amp; download here: http://arianagrande.<br>\nlnk.to/positionsdlx ▻Subscribe to Ariana Grande:&nbsp;...',
      formattedUrl: 'https://www.youtube.com/watch?v=1zNYZd94ui8',
      htmlFormattedUrl: 'https://www.youtube.com/watch?v=1zNYZd94ui8',
      pagemap: {
        cse_thumbnail: [
          {
            src:
              'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRv1HuyEdLX0fig1syHQKkL54jWt-LTcEiJyUmznih1oxZIZAGKGo5xQRY',
            width: '300',
            height: '168',
          },
        ],
        imageobject: [
          {
            width: '1280',
            url: 'https://i.ytimg.com/vi/1zNYZd94ui8/maxresdefault.jpg',
            height: '720',
          },
        ],
        person: [
          {
            name: 'ArianaGrandeVevo',
            url: 'http://www.youtube.com/user/ArianaGrandeVevo',
          },
        ],
        metatags: [
          {
            'og:image': 'https://i.ytimg.com/vi/1zNYZd94ui8/maxresdefault.jpg',
            'theme-color': 'rgba(255,255,255,0.98)',
            'og:image:width': '1280',
            'twitter:card': 'player',
            'og:site_name': 'YouTube',
            'twitter:url': 'https://www.youtube.com/watch?v=1zNYZd94ui8',
            'al:android:package': 'com.google.android.youtube',
            title: 'Ariana Grande - test drive (official audio)',
            'al:ios:url':
              'vnd.youtube://www.youtube.com/watch?v=1zNYZd94ui8&feature=applinks',
            'og:description':
              '"test drive” from Positions (Deluxe). Listen & download here: http://arianagrande.lnk.to/positionsdlx ►Subscribe to Ariana Grande: https://arianagrande.lnk.t...',
            'al:ios:app_store_id': '544007664',
            'twitter:image':
              'https://i.ytimg.com/vi/1zNYZd94ui8/maxresdefault.jpg',
            'twitter:site': '@youtube',
            'og:video:type': 'text/html',
            'og:video:height': '720',
            'og:video:url': 'https://www.youtube.com/embed/1zNYZd94ui8',
            'og:type': 'video.other',
            'twitter:title': 'Ariana Grande - test drive (official audio)',
            'al:ios:app_name': 'YouTube',
            'og:title': 'Ariana Grande - test drive (official audio)',
            'og:image:height': '720',
            'al:web:url':
              'http://www.youtube.com/watch?v=1zNYZd94ui8&feature=applinks',
            'og:video:secure_url': 'https://www.youtube.com/embed/1zNYZd94ui8',
            'og:video:tag': 'positions deluxe',
            'og:video:width': '1280',
            'al:android:url':
              'vnd.youtube://www.youtube.com/watch?v=1zNYZd94ui8&feature=applinks',
            'fb:app_id': '87741124305',
            'twitter:description':
              '"test drive” from Positions (Deluxe). Listen & download here: http://arianagrande.lnk.to/positionsdlx ►Subscribe to Ariana Grande: https://arianagrande.lnk.t...',
            'og:url': 'https://www.youtube.com/watch?v=1zNYZd94ui8',
            'al:android:app_name': 'YouTube',
          },
        ],
        videoobject: [
          {
            embedurl: 'https://www.youtube.com/embed/1zNYZd94ui8',
            playertype: 'HTML5 Flash',
            isfamilyfriendly: 'true',
            uploaddate: '2021-02-18',
            description:
              '"test drive” from Positions (Deluxe). Listen & download here: http://arianagrande.lnk.to/positionsdlx ►Subscribe to Ariana Grande: https://arianagrande.lnk.t...',
            videoid: '1zNYZd94ui8',
            url: 'https://www.youtube.com/watch?v=1zNYZd94ui8',
            duration: 'PT2M3S',
            unlisted: 'False',
            name: 'Ariana Grande - test drive (official audio)',
            paid: 'False',
            width: '1280',
            regionsallowed:
              'AD,AE,AF,AG,AI,AL,AM,AO,AQ,AR,AS,AT,AU,AW,AX,AZ,BA,BB,BD,BE,BF,BG,BH,BI,BJ,BL,BM,BN,BO,BQ,BR,BS,BT,BV,BW,BY,BZ,CA,CC,CD,CF,CG,CH,CI,CK,CL,CM,CN,CO,CR,CU,CV,CW,CX,CY,CZ,DE,DJ,DK,DM,DO,DZ,EC,EE,EG,EH...',
            genre: 'Music',
            interactioncount: '5744860',
            channelid: 'UC0VOyT2OCBKdQhF3BAbZ-1g',
            datepublished: '2021-02-18',
            thumbnailurl:
              'https://i.ytimg.com/vi/1zNYZd94ui8/maxresdefault.jpg',
            height: '720',
          },
        ],
        cse_image: [
          {
            src: 'https://i.ytimg.com/vi/1zNYZd94ui8/maxresdefault.jpg',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: "America's Test Kitchen | Episodes, Recipes & Reviews",
      htmlTitle:
        'America&#39;s <b>Test</b> Kitchen | Episodes, Recipes &amp; Reviews',
      link: 'https://www.americastestkitchen.com/',
      displayLink: 'www.americastestkitchen.com',
      snippet:
        'Watch every episode from every season and find the best recipes, equipment \nreviews, taste tests, and cooking videos for home cooks.',
      htmlSnippet:
        'Watch every episode from every season and find the best recipes, equipment <br>\nreviews, taste <b>tests</b>, and cooking videos for home cooks.',
      cacheId: 'dSOkzGI8vY8J',
      formattedUrl: 'https://www.americastestkitchen.com/',
      htmlFormattedUrl: 'https://www.americas<b>test</b>kitchen.com/',
      pagemap: {
        thumbnail: [
          {
            src:
              'https://www.americastestkitchen.com/assets/atk_v2/img/ATK_Logo_Red_Square_Cut.jpg',
          },
        ],
        metatags: [
          {
            'og:image':
              'https://www.americastestkitchen.com/assets/atk_v2/img/ATK_Logo_Red_Square_Cut.jpg',
            thumbnail:
              'https://www.americastestkitchen.com/assets/atk_v2/img/ATK_Logo_Red_Square_Cut.jpg',
            'twitter:card': 'summary',
            'twitter:title':
              "America's Test Kitchen | Episodes, Recipes & Reviews",
            'og:type': 'website',
            'og:title': "America's Test Kitchen | Episodes, Recipes & Reviews",
            'fb:pages': '137227518307',
            'twitter:creator': '@TestKitchen',
            'og:description':
              'Watch every episode from every season and find the best recipes, equipment reviews, taste tests, and cooking videos for home cooks.',
            'twitter:image':
              'https://www.americastestkitchen.com/assets/atk_v2/img/ATK_Logo_Red_Square_Cut.jpg',
            'pinterest-rich-pin': 'false',
            'twitter:site': '@TestKitchen',
            viewport:
              'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0',
            'twitter:description':
              'Watch every episode from every season and find the best recipes, equipment reviews, taste tests, and cooking videos for home cooks.',
            'og:url': 'https://www.americastestkitchen.com',
          },
        ],
        cse_image: [
          {
            src:
              'https://www.americastestkitchen.com/assets/atk_v2/img/ATK_Logo_Red_Square_Cut.jpg',
            width: '200',
            type: '1',
            height: '200',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Join a Test Meeting - Zoom',
      htmlTitle: 'Join a <b>Test</b> Meeting - Zoom',
      link: 'https://zoom.us/test',
      displayLink: 'zoom.us',
      snippet:
        'Zoom is the leader in modern enterprise video communications, with an easy, \nreliable cloud platform for video and audio conferencing, chat, and webinars ...',
      htmlSnippet:
        'Zoom is the leader in modern enterprise video communications, with an easy, <br>\nreliable cloud platform for video and audio conferencing, chat, and webinars&nbsp;...',
      cacheId: 'Jsk355JURfkJ',
      formattedUrl: 'https://zoom.us/test',
      htmlFormattedUrl: 'https://zoom.us/<b>test</b>',
      pagemap: {
        cse_thumbnail: [
          {
            src:
              'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTxPe-XNFU8g5Ly_FONFfHMMphJnZATnjHVUEucFvchzk0GSlBv91xbQSr3',
            width: '225',
            height: '225',
          },
        ],
        metatags: [
          {
            'p:domain_verify': '2bec2c9f9a864e14528964bf24c404b3',
            referrer: 'origin-when-cross-origin',
            'og:image': 'https://st3.zoom.us/static/94172/image/thumb.png',
            'og:type': 'website',
            'fb:app_id': '113289095462482',
            'og:site_name': 'Zoom Video',
            viewport: 'width=device-width, initial-scale=1, minimum-scale=1.0',
            'og:title':
              'Video Conferencing, Web Conferencing, Webinars, Screen Sharing',
            'og:url': 'https://zoom.us/',
            'og:description':
              'Zoom is the leader in modern enterprise video communications, with an easy, reliable cloud platform for video and audio conferencing, chat, and webinars across mobile, desktop, and room systems. Zoom Rooms is the original software-based conference room solution used around the world in board, conference, huddle, and training rooms, as well as executive offices and classrooms. Founded in 2011, Zoom helps businesses and organizations bring their teams together in a frictionless environment to get more done. Zoom is a publicly traded company headquartered in San Jose, CA.',
            'twitter:account_id': '522701657',
          },
        ],
        cse_image: [
          {
            src: 'https://st3.zoom.us/static/94172/image/thumb.png',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Test - Wikipedia',
      htmlTitle: '<b>Test</b> - Wikipedia',
      link: 'https://en.wikipedia.org/wiki/Test',
      displayLink: 'en.wikipedia.org',
      snippet:
        "Test(s), testing, or TEST may refer to: Test (assessment), an educational \nassessment intended to measure the respondents' knowledge or other abilities ...",
      htmlSnippet:
        '<b>Test</b>(s), <b>testing</b>, or <b>TEST</b> may refer to: <b>Test</b> (assessment), an educational <br>\nassessment intended to measure the respondents&#39; knowledge or other abilities&nbsp;...',
      cacheId: 'R94CAo00wOYJ',
      formattedUrl: 'https://en.wikipedia.org/wiki/Test',
      htmlFormattedUrl: 'https://en.wikipedia.org/wiki/<b>Test</b>',
      pagemap: {
        metatags: [
          {
            referrer: 'origin',
            'og:type': 'website',
            'og:title': 'Test - Wikipedia',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Free Personality Test | 16Personalities',
      htmlTitle: 'Free Personality <b>Test</b> | 16Personalities',
      link: 'https://www.16personalities.com/free-personality-test',
      displayLink: 'www.16personalities.com',
      snippet:
        "Free personality test - take it to find out why our readers say that this personality \ntest is so accurate, “it's a little bit creepy.” No registration required!",
      htmlSnippet:
        'Free personality <b>test</b> - take it to find out why our readers say that this personality <br>\n<b>test</b> is so accurate, “it&#39;s a little bit creepy.” No registration required!',
      cacheId: 'SQzntHUEffkJ',
      formattedUrl: 'https://www.16personalities.com/free-personality-test',
      htmlFormattedUrl:
        'https://www.16personalities.com/free-personality-<b>test</b>',
      pagemap: {
        cse_thumbnail: [
          {
            src:
              'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRGhMauHoJDGGEDVHBeqeXT3UenT3NglBp2bRJgqOftOFyloGoNhC9oZQNf',
            width: '224',
            height: '223',
          },
        ],
        metatags: [
          {
            'msapplication-tilecolor': '#ffffff',
            'og:image':
              'https://static.neris-assets.com/images/personality-types/headers/fb/logo.png',
            'theme-color': '#ffffff',
            'og:site_name': '16Personalities',
            'app-bs-uid': '0',
            'og:title': 'Free personality test | 16Personalities',
            'msapplication-tileimage':
              'https://static.neris-assets.com/images/favicons/mstile-144x144.png',
            'app-version': 'v1.1.56',
            'app-locale': 'en',
            'fb:app_id': '326516237427150',
            viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
            'csrf-token': 'GX2n7GFTMvazsa8ak21wZ82fVGrKgaEjr7CJyykB',
            'app-jscdn': 'https://static.neris-assets.com/',
            'og:url': 'http://www.16personalities.com/free-personality-test',
          },
        ],
        cse_image: [
          {
            src:
              'https://static.neris-assets.com/images/personality-types/headers/fb/logo.png',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Fast.com: Internet Speed Test',
      htmlTitle: 'Fast.com: Internet Speed <b>Test</b>',
      link: 'https://fast.com/',
      displayLink: 'fast.com',
      snippet:
        "How fast is your download speed? In seconds, FAST.com's simple Internet speed \ntest will estimate your ISP speed.",
      htmlSnippet:
        'How fast is your download speed? In seconds, FAST.com&#39;s simple Internet speed <br>\n<b>test</b> will estimate your ISP speed.',
      cacheId: 'C4odSFX1SA4J',
      formattedUrl: 'https://fast.com/',
      htmlFormattedUrl: 'https://fast.com/',
      pagemap: {
        metatags: [
          {
            'msapplication-tilecolor': '#ffffff',
            'og:image':
              'https://fast.com/assets/share/fb_en_____share_shot___.png',
            'theme-color': '#ffffff',
            'og:type': 'website',
            'twitter:card': 'summary_large_image',
            'twitter:title': 'Internet Speed Test',
            'twitter:description':
              "How fast is your download speed? In seconds, FAST.com's simple Internet speed test will estimate your ISP speed.",
            'og:title': 'Internet Speed Test',
            'msapplication-tileimage': '/assets/favicons/ms-icon-144x144.png',
            'og:url': 'https://fast.com/share/____share_shot___.html',
            'og:description':
              "How fast is your download speed? In seconds, FAST.com's simple Internet speed test will estimate your ISP speed.",
            'twitter:image':
              'https://fast.com/assets/share/tw_en_____share_shot___.png',
          },
        ],
        cse_image: [
          {
            src: 'https://fast.com/assets/share/fb_en_____share_shot___.png',
          },
        ],
      },
    },
  ],
};
