import self from "../assets/img/me.jpg"
// import mock1 from "../img/mock1.png"
// import mock2 from "../img/mock2.png"1
// import mock3 from "../img/mock3.png"
// import mock4 from "../img/mock4.png"
// import mock5 from "../img/mock5.png"

export let colors = ["rgb(0,255,104)", "rgb(166,104,255)"];

export const info = {
    firstName: "Abhishek",
    // lastName: "jha",
    position: "Student",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[1],
    miniBio: [ //mini boi for myself
        {
            emoji: '☕',
            text: 'fueled by Chai'
        },
        {
            emoji: '🌎',
            text: 'based in the India'
        },
        {
            emoji: "💼",
            text: "Intern at ornate TechnoServices Pvt Ltd."
        },
        {
            emoji: "📧",
            text: "jhaabhishek8076@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://facebook.com",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com/itsabhishekjhaa",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/abhishek8076",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com/jhaabhishek8076",
            icon: "fa fa-twitter",
            label: 'twitter'
        },
        {
            link: "https://gmail.com/jhaabhishek8076@gmail.com",
            icon: "fa fa-envelope ",
            label: 'email'
        }

    ],

    //=========================boi======================================


    bio: "Hello! I'm John. I'm a systems engineer for Google. I studied CompSci at Harvard, I enjoy long walks on the beach, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma'],
            exposedTo: ['nodejs', 'python', 'adobe illustrator']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
        //=====================================projects=========================
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project 1",
            live: "https://paytonpierce.dev", 
            source: "https://github.com/paytonjewell", 
            // image: mock1
        },
        {
            title: "Project 2",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            // image: mock2
        },
        {
            title: "Project 3",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            // image: mock3
        },
        {
            title: "Project 4",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            // image: mock4
        },
        {
            title: "Project 5",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            // image: mock5
        }
    ],
   
}
export const education={
   name:"sdfsadf"
}