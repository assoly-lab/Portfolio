import { ProjectType } from "./Types"



export const ProjectsList:{ [key: string]: ProjectType }[] = [ 
    {
        socialMedia:{
        title: 'I-Social: Fullstack social media app',
        image:'/socialmedia-project.webp',
        technologies:[
            'Python','JavaScript','TypeScript','HTML','CSS','django','django-rest-framework','REST API','PostgreSQL','Redis','WebSockets','JWT','NextJS','React','TailwindCSS','framer-motion','Git','Vercel',
        ],
        description:'a feature-rich social media app, including authentication,live chat, live notifications,users relationship management, dynamic feed and a customizable profile.',
        links:{
            live:'https://social-media-frontend-woad.vercel.app/',
            repos:{
                frontend:'https://github.com/assoly-lab/social-media-frontend',
                backend:'https://github.com/assoly-lab/social-media-backend',
            }
        }
        
        },
        
},
{
    eCommerce:{
    title:'E-store: Electronics E-commerce store',
    image:'/ecommerce-project.webp',
    technologies:['Python','JavaScript','TypeScript','HTML','CSS','django','django-rest-framework','REST API','PostgreSQL','JWT','NextJS','React','TailwindCSS','framer-motion','Git','Vercel'],
    description:"A dynamic e-commerce platform featuring a responsive UI, product filtering, shopping cart, guest checkout, and an admin dashboard for product management",
    links:{
        live:'https://e-commerce-frontend-three-mu.vercel.app/',
        repos:{
            frontend:'https://github.com/assoly-lab/E-commerce-Frontend',
            backend:'https://github.com/assoly-lab/E-commerce-Backend',
        }
    }
}
    },
{
    palette:{
    title:'Color palette generator',
    image:'/palette-project.webp',
    technologies:['HTML','CSS','JavaScript','Chroma.JS'],
    description:'Simple color palette generator that allows users to generate and save color palettes, customize hue, brightness, and saturation to create a unique color palette.',
    links:{
        live:'https://reverent-shirley-8b19ba.netlify.app/',
        repos:{
            frontend:'https://github.com/assoly-lab/Color-Picker/',
        }
    }
}
    },

]


export const skillSet:string[] = ['Python','JavaScript','TypeScript','HTML','CSS','django','django-rest-framework','REST API','PostgreSQL','JWT','NextJS','React','TailwindCSS','framer-motion','Git','Vercel',]