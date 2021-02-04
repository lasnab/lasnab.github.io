// Social Icon
import githubIcon from './global-styles/icons/github.svg'
import linkedinIcon from './global-styles/icons/linkedin.svg'
import behanceIcon from './global-styles/icons/behance.svg'
import vimeoIcon from './global-styles/icons/vimeo.svg'
import youtubeIcon from './global-styles/icons/youtube.svg'

const navbar = {
    'home': '/',
    'name':'Hrithik Bansal',
    'title':'Coder. Maker. Entreprenuer.',
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

const business = {
    'title':'Entreprenuership',
    'description':'I ❤️ Sales!',
    'ventures':[
        {
            'name':'All Time Protection',
            'logo':'https://img1.wsimg.com/isteam/ip/bd12721d-9919-476a-8b14-383c84f1e5a2/ALL%20TIME%20PROTECTION-0001.png/:/rs=h:400/qt=q:95',
            'description':'Empowering Women Tailors through Outsourced Diversification of Mask Manufacturing',
            'website':'https://alltimeprotection.com/',
            'status':'Active'
        },
        {
            'name':'Quiz Buzzers for Rent',
            'logo':'https://raw.githubusercontent.com/lasnab/website-legacy/master/qbz.png',
            'description':'Providing Affordable Buzzer Systems on Rent to Facilitate Competitive Quizzes',
            'website':'#',
            'status':'Terminated'
        },
        {
            'name':'',
            'logo':'',
            'description':'',
            'website':'',
            'status':''
        }
    ]
}

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

const home = {
    'header': {
        // 'candid':'https://i.pinimg.com/originals/bd/c0/4a/bdc04aa22b605a4faac51d2fcb7b9122.jpg',
        'candid':'https://raw.githubusercontent.com/lasnab/lasnab.github.io/master/me.png',
        'name':'Hi, I\'m Hrithik',
        'title':'\"I believe in creative problem solving and hands-on learning\"',
        'text':
                'I am a coder, a maker, an entrepreneur and a chef (sometimes :p). I enjoy solving problems creatively, whether its traversing a binary tree, debugging a 3D print, dealing with clients or just balancing out the spice in my food. In my (limited) free time, I’m usually reading a book, or trying to learn something new.'
    },
    'sections':[
        {
            'title':'Design Philosophy 🔗 ',
            'id':'design',
            'text':'',
            'url':'#design',
            'link':'',
            'iframe':'https://docs.google.com/presentation/d/e/2PACX-1vTX5NLSHDE-qXtwD8EPtA9cHF6DWiqLkm2-thBGlpeWdPc9MgPBw_VS15urn8k99g/embed?start=true&loop=false&delayms=3000'
        },
        {
            'title':'Network with me 🤝',
            'id':'network',
            'text':'I love to network with other entreprenuers, industry professsionals, students, and people! Connect with me on linkedin here, but don’t be shy, send me a message so I know you are an actual person and not a bot :p',
            'url':'#network',
            'link':'linkedin.hrithikbansal.com',
            'iframe':''
        },
        {
            'title':'Book Recommendations 🔗 ',
            'id':'',
            'text':'',
            'url':'',
            'link':'',
            'iframe':''
        },
        {
            'title':'Favorite Quotes 🔗 ',
            'id':'',
            'text':'',
            'url':'',
            'link':'',
            'iframe':''    
        },
        {
            'title':'Collaborate with Me 🔥',
            'id':'collaborate',
            'text':'Send me a message if you think I can help you out on your next project. If not, I have a bunch of ideas but not so much time to work on them. If you want to collaborate, hit me up and we can work on it!',
            'url':'#collaborate',
            'link':'mailto: hrithik [at] umd [dot] edu',
            'iframe':''       
        },
    ],
    'hireme':{
        'text':'Do you like how I think? Think maybe I can be a good fit at your company? Here is my resume, reach out to me! I always welcome exciting challenges!    ',
        'resume':'https://raw.githubusercontent.com/lasnab/lasnab.github.io/master/resume.pdf'
    },
}

export {
    navbar,
    softwares,
    footer,
    wakatime,
    home,
    business
}