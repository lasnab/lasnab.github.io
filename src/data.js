// Social Icon
import githubIcon from './global-styles/icons/github.svg'
import linkedinIcon from './global-styles/icons/linkedin.svg'
import behanceIcon from './global-styles/icons/behance.svg'
import vimeoIcon from './global-styles/icons/vimeo.svg'
import youtubeIcon from './global-styles/icons/youtube.svg'

const navbar = {
    'home': '/',
    'name':'Hrithik Bansal',
    'title':'Coder in the Day. Entreprenuer by Night.',
    'links': [
        { 
            'link_name': 'Software',
            'link_path': 'software',
        },
        {
            'link_name': 'Hardware',
            'link_path': 'hardware'
        },
        {
            'link_name': 'Entreprenuership',
            'link_path': 'entreprenuer'
        },
    ]
}

const softwares = [
    {
        'name':'Spotify Clone',
        'image':'https://raw.githubusercontent.com/lasnab/spotify-clone/master/logo.png',
        'links':[
            {
                'name':'GitHub',
                'url':'https://github.com/lasnab/spotify-clone'
            },
            {
                'name':'Video',
                'url':'https://youtu.be/G-6_7ZPfT08'
            },
            {
                'name':'Live',
                'url':'https://hrithikbansal.com/spotify-clone/'
            }
        ],
        'description':''
    },
    {
        'name':'Helping Hand',
        'image':'https://raw.githubusercontent.com/lasnab/helping-hand/master/logo.png',
        'links':[
            {
                'name':'GitHub',
                'url':'https://github.com/lasnab/helping-hand'
            },
            {
                'name':'Video',
                'url':'https://vimeo.com/314112126'
            },
            {
                'name':'Live',
                'url':''
            }
        ]
    },
    {
        'name':'Robofriends',
        'image':'https://raw.githubusercontent.com/lasnab/robofriends/main/logo.png',
        'links':[
            {
                'name':'GitHub',
                'url':'https://github.com/lasnab/robofriends'
            },
            {
                'name':'Video',
                'url':''
            },
            {
                'name':'Live',
                'url':'https://hrithikbansal.com/robofriends/'
            },
        ],
        'description':''
    },
    {
        'name':'Blinky!',
        'image':'https://raw.githubusercontent.com/lasnab/blinky/main/logo.png',
        'links':[
            {
                'name':'GitHub',
                'url':'https://github.com/lasnab/blinky'
            },
            {
                'name':'Video',
                'url':'https://youtu.be/AuCAjjtdEhw'
            },
            {
                'name':'Live',
                'url':''
            },
        ],
        'description':''
    },
    {
        'name':'Zhulong',
        'image':'https://raw.githubusercontent.com/lasnab/zhulong/main/logo.png',
        'links':[
            {
                'name':'GitHub',
                'url':'https://github.com/lasnab/zhulong'
            },
            {
                'name':'Video',
                'url':'https://vimeo.com/312457508'
            },
            {
                'name':'Live',
                'url':''
            },
        ],
        'description':''
    },
    {
        'name':'Email Lister',
        'image':'https://raw.githubusercontent.com/lasnab/email-lister/master/logo.png',
        'links':[
            {
                'name':'GitHub',
                'url':'https://github.com/lasnab/email-lister'
            },
            {
                'name':'Video',
                'url':''
            },
            {
                'name':'Live',
                'url':''
            },
        ],
        'description':''
    },
    // {
    // 'name':'',
    // 'image':'',
    // 'links':[
    //     {
    //         'name':'GitHub',
    //         'url':''
    //     },
    //     {
    //         'name':'Video',
    //         'url':''
    //     },
    //     {
    //         'name':'Live',
    //         'url':''
    //     },
    // ],
    // 'description':''
    // }
]

const footer = {
    'title':'built with 💙 by Hrithik',
    'links':[
        { icon: githubIcon, url: 'https://github.com/lasnab' },
        { icon: linkedinIcon, url: 'http://linkedin.hrithikbansal.com/' },
        { icon: youtubeIcon, url: 'https://www.youtube.com/user/MrHrithik7' },
        { icon: vimeoIcon, url: 'https://vimeo.com/bansalhrithik' },
        { icon: behanceIcon, url: 'https://www.behance.net/hrithikbansal' },
    ]
}

const wakatime = 'https://wakatime.com/share/@29aea669-cbee-443c-8bd3-2fc3f761f79c/a7bb28b7-f3ab-4bae-807d-ff9be0b7e5be.png'

const header = {
    // 'candid':'https://i.pinimg.com/originals/bd/c0/4a/bdc04aa22b605a4faac51d2fcb7b9122.jpg',
    'candid':'https://raw.githubusercontent.com/lasnab/lasnab.github.io/master/me.png',
    'name':'Hi, I\'m Hrithik',
    'title':'Coder in the day, Chef by night. Full Time Entreprenuer and Innovator',
    'text':
            'I am a coder, a maker, an entrepreneur and a chef (sometimes: p). I enjoy solving problems creatively, whether its traversing a binary tree, debugging a 3D print, dealing with clients or just balancing out the spice in my food.In my free time, I’m usually reading a book, or trying to learn something new.'
}

export {
    navbar,
    softwares,
    footer,
    wakatime,
    header,
}