import { ProjectType } from "./Types"



export const ProjectsList:ProjectType[] = [ 
    {
        socialMedia:{
        en : {
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
        fr:{
            title: 'I-Social:  réseau social application web',
            image:'/socialmedia-project.webp',
            technologies:[
                'Python','JavaScript','TypeScript','HTML','CSS','django','django-rest-framework','REST API','PostgreSQL','Redis','WebSockets','JWT','NextJS','React','TailwindCSS','framer-motion','Git','Vercel',
            ],
            description:"Une application réseau sociale complète, offrant une interface utilisateur réactive, authentification sécurisée, chat en temps réel, des notifications instantanées, gestion des relations entre utilisateurs, fil d'actualités dynamique et personnalisable profil." ,
            links:{
                live:'https://social-media-frontend-woad.vercel.app/',
                repos:{
                    frontend:'https://github.com/assoly-lab/social-media-frontend',
                    backend:'https://github.com/assoly-lab/social-media-backend',
            }
        }
        }
        
        },
        
},
{
    eCommerce:{
    en:{
        title:"E-store: Electronics E-commerce store",
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
    },
    fr:{
        title:"E-store: Boutique E-commerce d'électroniques",
        image:'/ecommerce-project.webp',
        technologies:['Python','JavaScript','TypeScript','HTML','CSS','django','django-rest-framework','REST API','PostgreSQL','JWT','NextJS','React','TailwindCSS','framer-motion','Git','Vercel'],
        description:"Une plateforme e-commerce dynamique offrant une interface utilisateur réactive, filtrage des produits, un panier d'achat, un paiement en tant qu'invité et un tableau de bord administrateur pour la gestion des produits.",
        links:{
        live:'https://e-commerce-frontend-three-mu.vercel.app/',
        repos:{
            frontend:'https://github.com/assoly-lab/E-commerce-Frontend',
            backend:'https://github.com/assoly-lab/E-commerce-Backend',
        }
    }
    }
},
    },
{
    palette:{
        en:{
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
        },
        fr:{
            title:'Générateur de palette de couleurs',
            image:'/palette-project.webp',
            technologies:['HTML','CSS','JavaScript','Chroma.JS'],
            description:"Générateur de palette de couleurs simple qui permet aux utilisateurs de générer et d'enregistrer des palettes de couleurs, de personnaliser la teinte, la luminosité et la saturation pour créer une palette de couleurs unique.",
            links:{
                live:'https://reverent-shirley-8b19ba.netlify.app/',
                repos:{
                    frontend:'https://github.com/assoly-lab/Color-Picker/',
                }
            }
        }
    }
    },

]


export const skillSet:string[] = ['Python','JavaScript','TypeScript','HTML','CSS','django','django-rest-framework','REST API','PostgreSQL','JWT','NextJS','React','TailwindCSS','framer-motion','Git','Vercel',]