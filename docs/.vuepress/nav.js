const nav = [
  { text: 'Home', link: '/' },
  { text: 'Guide', link: '/guide/', target: "_self" },
  { text: 'External', link: 'https://google.com', target: '_self', rel: "noopener noreferrer" },
  {
    text: 'Languages',
    ariaLabel: 'Language Menu',
    items: [
      { text: 'Chinese', link: '/language/chinese/' },
      { text: 'Japanese', link: '/language/japanese/' }
    ]
  },
  {
    text: 'Languages',
    items: [
      {
        text: 'Group1', items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      },
      {
        text: 'Group2', items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      }
    ]
  }
]

module.exports = nav;